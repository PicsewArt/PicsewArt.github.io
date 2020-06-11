---
title: "iOS : JavaScriptCore"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,JavaScript,JavaScriptCore]
---
最近在个人项目中频繁的使用 JavaScript，于是趁着这个机会介绍一些 iOS 开发中关于 JavaScript 的内容。

JavaScriptCore 是一个存在于 OS X 与 iOS 平台中很长时间的框架，从 iOS 7 开始移动端的开发者已经可以使用这套框架，虽然他并不完美，但依赖于内置的 JavaScript 解释器，还是可以为我们做出大量的贡献，而这篇博客主要介绍的，就是这种 JavaScript Binding 技术。

## 什么是 JavaScript Binding？

那什么是 JavaScript Binding 呢？有的朋友可能接触过类似的东西，比如 Lua Binding 什么的。简单来说，就是绑定，是一种将 JavaScript 与 Native 进行绑定为两者之间建起桥梁的技术。

## 这种技术用在什么场合？

每种语言都有自己无法替代的特性，但也都有自己的硬伤。将这二者绑定，最主要的目的就是为了互相弥补。

举个栗子，我们知道 JavaScript 经常与 HTML 用在一起，而 HTML 5 中的 Canvas 又是很多小游戏开发者的主战场，但是在移动端 Canvas 的性能还有待提高，那么要更好地在移动端展现这些游戏的魅力，难道只能用 Native 的方式全部重新开发？这时候这种 Binding 技术就派上了用场。提一个大概的思路，通过 OpenGL 实现一套与 Canvas 风格类似的 API 并利用 Binding 技术让 JavaScript 使用这些 API。这样做的好处很显然，第一，几乎甚至可能完全不需要改动原有的代码，第二，这套 API 还可以适用于其他项目。

## 如何使用？

说了这么多，是时候来看一下如何使用了。

首先我已经提到，JavaScriptCore 是一套框架，那么我们在 Xcode 中的 Build Phases 标签下将其引入项目。

```objc
#import <JavaScriptCore/JavaScriptCore.h>
```

接下来，我们从简单的部分说起。和绘图类似，我们也需要一个上下文实例。

```objc
JSContext *context = [JSContext new];
```

然后，创建一些变量:

```objc

JSValue *someInt = [JSValue valueWithInt32:12345 inContext:context];
JSValue *someArray = [JSValue valueWithNewArrayInContext:context];
NSLog(@"someInt = %zd", [someInt toInt32]);
NSLog(@"someArray's count = %zd", [someArray toArray].count);

```

类似的方法还有很多，就不一一列举了。除了上面这种方法，我们还可以在上下文中为其命名:

```objc

JSValue *myVar = [JSValue valueWithDouble:3.1415926 inContext:context];
context[@"myVar"] = myVar;
NSLog(@"myVar = %@", context[@"myVar"]);

```

这样做，相当于 JavaScript 中的 `var myVar = 3.1415926;` 语句。

那么我们是否可以直接使用这样的语句吗？答案是可以。

```objc

[context evaluateScript:@"var anotherVar = 100;"];
NSLog(@"anotherVar = %@", context[@"anotherVar"]);

```

是的，这就是 `eval`。但问题又来了，如果 `eval` 语句有错呢？

```objc

[context setExceptionHandler:^(JSContext *ctx, JSValue *exception) {
    NSLog(@"%@", exception);
}];
```

接着，我们来写一些错误的语句产生异常:

```objc

JSValue *err = [context evaluateScript:@"a + b"];
NSLog(@"err = %@", err);

```

看看输入结果，成功捕获了异常。
```sh

ReferenceError: Can't find variable: a
err = undefined

```

现在，让我们来试试 JavaScript 中定义和调用函数吧:

```objc

[context evaluateScript:@"function add(a,b){ return a + b; }"];
JSValue *addFunc = context[@"add"];
JSValue *res = [addFunc callWithArguments:@[@(1), @(2)]];
NSLog(@"res = %@", res);

```

首先通过 `eval` 定义了函数 `add(a, b)`，然后通过 `callWithArguments` 方法调用并传入参数，成功得到返回值。

看起来似乎不错，但我不喜欢这种用字符串的方式定义，这让我觉得十分的不可控。

```objc

context[@"printline"] = ^(id arg) {
    JSContext *ctx = [JSContext currentContext];
    JSValue *str = [JSValue valueWithObject:@"tmp string" inContext:ctx];
    ctx[@"tmp"] = str;
    NSLog(@"%@ -> tmp = %@", arg, ctx[@"tmp"]);
};

```

现在我们改用 block 的方式定义，much better。调用一下试试看:

```objc

[context evaluateScript:@"printline(\"test printline()\");"];
NSLog(@"tmp = %@", context[@"tmp"]);

```

但是处女座的我还是觉得不够完美:

```objc

context[@"variousAdd"] = ^() {
    NSArray *args = [JSContext currentArguments];
    CGFloat sum = 0;
    for (JSValue *arg in args) {
        sum += [arg toDouble];
    }
    return sum;
};
JSValue *sum = [context evaluateScript:@"variousAdd(1, 2, 3, -0.5);"];
NSLog(@"sum = %@", sum);

```

现在我们可以通过 `[JSContext currentArguments]` 语句得到传入的参数列表后再进行操作，这样子好多了。

## MOCK

现在，我们来做一些更高级的事情。

首先新建一个 `test.js` 文件并导入项目(记得要 `Copy Bundle Resource` 哦)，打开这个文件输入一些简单的 JavaScript 代码。

```js

console.log("Hello, world!");

```

现在我们回到之前的代码，将该文件读取为 NSString 对象，并通过 `eval` 方法执行。

```objc

NSString *path = [[NSBundle mainBundle] pathForResource:@"test" ofType:@"js"];
NSError *error;
NSString *js = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:&error];
[context evaluateScript:js];

```

残忍的事情发生了，并没有像我们预期的那样输出 `Hello, world!`。

为什么呢？因为我们现在所处的环境并不是 Web 页面，因此我们无法调用 `console.log` 这样的方法。

那么怎样解决这个问题呢？来认识一下 `JSExport`。

首先我们在 Xcode 中新建一个 `Console` 类:

```objc

#import <Foundation/Foundation.h>

@interface Console : NSObject <ConsoleExport>

@end

```

接着，同样导入 JavaScriptCore，更重要的是，我们需要定义一个基于 JSExport 的协议，并在协议中声明一个 `log` 方法:

```objc
#import <JavaScriptCore/JavaScriptCore.h>

@protocol ConsoleExport <JSExport>

- (void)log;

@end

```

别忘了让 Console 类遵守这个 `ConsoleExport` 协议:

```objc

@interface Console : NSObject <ConsoleExport>

@end

```

然后来实现 `log` 方法，打印所有传入的参数:

```objc

#import "Console.h"

@implementation Console
- (void)log {
    NSLog(@"%@", [[JSContext currentArguments] componentsJoinedByString:@", "]);
}
@end

```

有了这些，我们还需要将它放到 JavaScript 中，回到之前的代码:

```objc

JSValue *console = [JSValue valueWithObject:[Console new] inContext:context];
context[@"console"] = console;

```

再次尝试 `[context evaluateScript:js];`，成功打印。

但你必须 **注意** 的是，即便我们置入了一个 Console 对象，却并不能调用其构造方法，苹果在其文档中也对此作出了说明。也就是说，在这个 JavaScript 环境中并不存在一个可以使用构造方法的 Console 类。

此外，我们知道 `console` 并非只有 `log` 这一个方法，类似的如果我们需要模拟其它的特性，也会有很多方法，我的建议是直接在 JavaScript 中进行模拟。

## 内存管理 与 线程安全

最后，还有两个很重要的东西:

* 内存管理

* 线程安全

### 内存管理

内存管理在这里主要指的是，当 Native 和 JavaScript 中的对象相互引用时，出现的循环引用问题。

为了避免这种情况，当 Native 引用 JavaScript 对象时，我们需要将 `JSValue` 对象包装为 `JSManagedValue` 对象:

```objc

// ....
JSValue *noneManaged = context[@"some_js_object"];
JSManagedValue *managed = [JSManagedValue managedValueWithValue:noneManaged];
NSLog(@"noneManaged = %@ -> managed = %@", noneManaged, managed);

```


### 线程安全

线程安全是开发中非常重要的一部分，在使用本文介绍的内容时，也要注意这些问题。

这里我们还需要介绍另外一个类，叫做 `JSVirtualMachine`。前面我们创建上下文(`JSContext`)时直接使用了 `new` 方法，也就相当于 `[[JSContext alloc] init]`，现在，我们还可以通过 `initWithVirtualMachine:` 方法指定其所在的虚拟机:

```objc

JSVirtualMachine *vmA = [JSVirtualMachine new];
JSContext *ctxA1 = [[JSContext alloc] initWithVirtualMachine:vmA];
JSContext *ctxA2 = [[JSContext alloc] initWithVirtualMachine:vmA];

JSVirtualMachine *vmB = [JSVirtualMachine new];
JSContext *ctxB = [[JSContext alloc] initWithVirtualMachine:vmB];

```

这段代码中先后创建了两个虚拟机对象，并分别为不同的上下文指定了虚拟机。

这里我要说明的是，同一个虚拟机中的多个上下文处于同一线程，所以理所当然的，不同虚拟机中的上下文就处于不同的线程。同一虚拟机中的上下文并不能直接互相访问。在开发过程中如果涉及线程问题，要多加注意。

## 结语

除了本文介绍的内容，事实上这套框架中还支持许多特性，例如 `isEqualToObject`、`isEqualWithTypeCoercionToObject`、`invokeMethod` 等等，有兴趣或者有需要的朋友可以自己查阅。






