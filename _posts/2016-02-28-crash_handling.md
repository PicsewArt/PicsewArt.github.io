---
title: "iOS: Handling unhandled exceptions and signals"
category: "iOS"
quote: false
tags: [Swift, Objective-C, NSException, Crash, iOS, Signal]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
当一个 iOS 应用崩溃, 往往只是单纯的消失, 用户却不知道发生了什么。然而, 为你的应用添加异常和信号处理的功能并不是一件困难的事情, 有了处理程序我们可以告诉用户发生了什么状况, 甚至还能及时修正或恢复用户的使用场景而不必退出应用。

市面上已然有不少优秀的崩溃和错误手机管理工具, 本文本着方便测试迭代的目的, 对异常与信号的捕获和处理做一些基本的探讨。

## 为什么我的应用会崩溃

首先, 在进一步展开探讨之前, 我们需要明白为什么我们的应用会出现崩溃的问题。

一次崩溃, 或者更准确的说, 一次未捕获的程序中断, 其实由是未处理的信号产生的, 这些信号可能来自很多地方: 内核、其它进程或程序本身, 其中最常见的会导致崩溃的信号是:

* `EXC_BAD_ACCESS`, 一个由内核发出的 `Mach Exception`, 在你尝试访问一个没有映射的内存地址时产生。如果在 `Mach` 层没有处理, 则会转换为 BSD 信号 `SIGBUS`/`SIGSEGV`。
  * `SIGBUS`, 即总线错误 (`Bus Error`), 意味着指针所对应的地址是有效地址，但总线不能正常使用该指针。通常是未对齐的数据访问所致
  * `SIGSEGV`, 即段错误 (`Segment Fault`), 意味着指针所对应的地址是无效地址，没有物理内存对应该地址。
* `SIGABRT` 是一个由程序本身发出的 BSD 信号, 在有 `NSException` 或 `obj_exception_throw` 未被捕获时产生。

在 macOS 开发中, `NSApplication` 总是在主运行循环中捕获所有的 `Objective-C` 异常, 所以在主线程产生一个异常并不会马上终止程序, 不过, 一个非预期的异常依旧会让你的应用处于糟糕的境地并随后崩溃。

> 进一步的, 如果大家有兴趣可以参考阅读 《Mac OS X Internals: A Systems Approach》、《Mac OS X and iOS Internals: To The Apple's Core》

## 怎样捕获异常

正确处理异常的方式应该是尝试修正错误的原因防止再次发生。当然, 如果你的程序运行流畅完美无缺, 那这里的方法并没有必要性了。不过, 有时候程序带着 Bug 发布甚至导致崩溃也是正常的事情, 为了避免这种情况, 你需要从测试人员那里获得更多的信息, 尤其是在已经确认存在某些 Bug 的时候。

这里有两种方法来捕获这些异常:

* 使用 `NSUncaughtExceptionHandler` 函数为未捕获的 `Objective-C` 异常安置一个处理程序。
* 使用 `signal` 函数为 BSD 信号安置一个处理程序。

举个栗子🌰:

```objc
/**
 * @brief installing an Objective-C exception handler and handlers for common signals
 */
void InstallUncaughtExceptionHandler() {
    NSSetUncaughtExceptionHandler(&HandleException);
    signal(SIGABRT, SignalHandler);
    signal(SIGILL, SignalHandler);
    signal(SIGSEGV, SignalHandler);
    signal(SIGFPE, SignalHandler);
    signal(SIGBUS, SignalHandler);
    signal(SIGPIPE, SignalHandler);
}
```

对捕获到的异常和信号的处理将会在 `HandleException` and `SignalHandler` 函数的实现中进行。

> 这个例子中只列举了一些常见的信号, 在实际应用中可能会有更多其它信号产生。
>
> 此外, 有两种信号 **无法捕获**: `SIGKILL` 和 `SIGSTOP`, 用来让你的程序结束或暂停, 并且不会有任何提示。
> 命令行中 `kill -9` 发出的信号就是 `SIGKILL`, 而 `Control+Z` 产生的就是 `SIGSTOP`。


## 异常处理程序的必备条件

#### 未捕获异常的处理程序可能不会返回

程序中未捕获异常和信号的处理程序被调用的情况通常被认为是不可恢复的, 不过有时也可能只是栈帧或当前函数无法恢复, 如果你能组织当前栈帧继续, 那么程序的其它部分可能依然可以继续执行。如果你想对此进行尝试, 那么你的处理程序将不能将控制权交还调用者函数, 产生异常和触发信号的代码也应该不再使用。为了在不交还控制权的前提下继续程序, 我们必须回到主线程 (如果现在不在的话) 并彻底阻塞之前的线程。在主线程中, 我们必须启动自己的运行循环并不再返回原始的运行循环。代价是, 这可能意味着, 被产生异常的线程使用的栈内存将会内存泄露。

#### 尝试恢复

既然我们可以使用一个运行循环来展示对话框, 我们就可以让这个运行循环无限期的运行下去, 并让它扮演程序主运行循环的替代品的角色。为了让这个策略起作用, 这个运行循环需要处理所有主运行循环的模式, 不过由于有些模式是私有的 (处理 `GSEvent` 和跟踪滚动事件), 默认的 `NSDefaultRunLoopMode` 是不足以应付的。

幸运的是, 如果 `UIApplication` 已经为主运行循环创建了所有的模式, 那我们也可以获取这些模式。假设主运行循环创建完毕后在主线程运行, 下面这些代码可以运行一个循环, 包含所有 `UIApplication` 的模式:

```objc
CFRunLoopRef runLoop = CFRunLoopGetCurrent();
CFArrayRef allModes = CFRunLoopCopyAllModes(runLoop);

while (!dismissed) {
    for (NSString *mode in (NSArray *)allModes) {
        CFRunLoopRunInMode((CFStringRef)mode, 0.001, false);
    }
}

CFRelease(allModes);
```

#### 回溯, 获取栈地址

我们可以通过使用 `backtrace` 函数获取回溯并通过 `backtrace_symbols` 尝试进行符号化。

```objc
+ (NSArray *)backtrace {
    void* callstack[128];
    int frames = backtrace(callstack, 128);
    char **strs = backtrace_symbols(callstack, frames);

    NSMutableArray *backtrace = [NSMutableArray arrayWithCapacity:frames];
    for (
        int i = UncaughtExceptionHandlerSkipAddressCount;
        i < UncaughtExceptionHandlerSkipAddressCount + UncaughtExceptionHandlerReportAddressCount;
        i++){
        [backtrace addObject:[NSString stringWithUTF8String:strs[i]]];
    }
    free(strs);

    return backtrace;
}
```

你可能注意到我们在这个方法中跳过了一些地址, 这是因为这些被跳过的地址是信号和异常处理程序的地址, 老实说, 我并不觉得大家会对这部分有太多兴趣, 而且为了在测试过程中进行展示, 我们希望只保留主要的部分。

#### 手动终止程序

如果我们选择了退出程序而不是尝试继续, 生成和保留一份崩溃记录是个不错的主意。

这种情况下, 我们需要移除异常处理程序并重新抛出异常或重新发送信号, 这样程序会像之前一样崩溃, 虽然异常处理程序会出现在栈顶。

## 局限性

* 这篇博客所提供的代码和方法是不可折返的, 这并不可靠, 之所以这样做只是因为适当的折返很难实现, 并且你的程序可能已经遭遇到致命的崩溃, 所以我们可能并不是十分担心这一点。
* 如果捕获了多个信号, 这些代码可能根本不会起一点点帮助作用。不过在多数测试场景中, 你可能仅仅只会收到一个信号。
* 如果程序没有配置主运行循环, 那么这些方法和代码将不会其任何作用。
* 你的程序可能会被置于不稳定的或非法无效的状态。

## 参考

* Objective-C: [MXCrashHandler](https://github.com/Meniny/MXCrashHandler-in-Objective-C)
* Swift: [OhCrap](https://github.com/Meniny/OhCrap)
