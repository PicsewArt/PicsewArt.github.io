---
title: "iOS : 代码混淆那些事儿"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0011.jpg'
tags: [iOS,confusion,代码混淆,花指令,逆向]
---

和朋友聊天的时候发现大家对代码混淆很感兴趣，但也似乎很多人并不知道该做些什么，怎样做，所以今天趁着项目告一段落的空，分享下我自己对代码混淆的认识。

写过 Java 的朋友应该对 ProGuard 不陌生，它是一个免费的 Java 类文件压缩、优化、混肴工具。ProGuard 的原理是通过移除无用的类和字段、方法、属性使字节码得到优化，并且用简短无意义的标识符来重新命名类、字段以及方法。

那么，iOS 说到底也是一样的，除了可以用 C 语言编写敏感部分的代码外，我们还有其他一些选择:

# Macro

由于 Obj-C 支持 macro ，于是 `#define` 就成了我们着眼的第一个地方。

最简单也是最基本的做法是，通过定义方法名分段的 macro 来降低 dump 结果的可读性。

例如，你的项目中有如下方法:

```objc
- (void)someReadableCode:(BOOL)isReadable WithSomeParameter:(id)param;
```


那么我们可以引入一个 common 形式的头文件(例如`.pch`)，对方法名的每一段进行宏定义:

```objc
#define someReadableCode saODiuasdjklWE
#define WithSomeParameter JsadklJSDasdC
```


当然这种方法是有很大缺陷的:

* 第一个显而易见的问题是，我们的项目中通常都有非常多的方法，也就是说如果进行手动宏定义，这将是一项工作量巨大的任务，所以理智的做法是编写一段 script 进行自动操作，而配合 DB 维护也将为后期开发带来极大的便利。

* 第二个问题正如我在前面提到的那样，这种方法仅仅是在 dump 阶段降低了可读性，这并不能对反编译的结果造成太大影响。

# static

除了 macro 我们还可以利用 C 语言的一个特性是: static 函数。我们可以使用 C 语言的 static 函数进行实际操作，然后补充一个非 static 的伪装版本用来迷惑，最后通过 throw 一个包含函数指针的结构体来达到打破 static 函数局限性的目的。这样，在 Xcode 在打包 release 版本时会将这些 local 符号 strip 掉。

```objc
// 伪装
id doSomething() {
	NSObject *obj = [NSObject new];
	return obj;
}

static id soSomething_static() {
	MXMyClass *importantObj = [[MXMyClass alloc] initWithBankAccount:@"231283243824032948"];
	[importantObj setPassword:@"123456"];
	return importantObj;
}
```


这种方法的好处是可以更大程度提高反编译后解析难度，但是，不可避免的也提高了开发成本。

# 花指令

通过前面的操作之后，我们已经成功阻止了一帮菜鸟黑客的破坏，接下来就该认真起来了。

花指令这个词相信很多人都听说过，但我还是要给不明所以的朋友解释一下，花指令作用是对付静态分析，我们知道反编译的结果通常只能做到汇编层面，而面对代码量巨大的汇编文件，单独的某个指令并没有太多意义，那么这就是我们要利用的一点，也就是说通过加入一些迷惑性的代码，扰乱逆向工作。

花指令的设计，通常有两种方式:

* 随意跳转，加入无意义的指令

* 伪装代码，例如伪装成一段 C++ 代码，或者一段编译器代码

当然，如你所见，这需要一定的汇编基础，否则这样做将会为你的项目增加很多未知风险，例如你向 stack 中压入了错误的字节数，那么程序将无法找到正确的指令位置，后果可想而知。




