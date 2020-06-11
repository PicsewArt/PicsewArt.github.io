---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0050.jpg'
title: "Injection for Xcode : 翻滚吧！开发效率"
tags: [iOS,Xcode,Injection]
---
其实从接触 iOS 以来一直有个期望，就是可以像 HTML 一样可以快速刷新应用实例，而不用一遍一遍的 Build。

如果你不抓紧，总有些人会实现你的梦想，今天要介绍的 [**Injection for Xcode**](https://github.com/johnno1962/injectionforxcode) 就是为这样的快速刷新而生的。事实上 Injection 是一个 Xcode 插件，它会解析应用的 build 日志，然后将重新编译的内容放入一个 bundle 中，而这个 bundle 已经通过 dynamic loader 载入到应用中。原始版本与修改后的版本其实是共存的，Injection 通过 swizzling 来产生我们所看到的效果。

它的使用也十分简单，启动 `InjectionPluginLite/InjectionPlugin.xcodeproj` 项目后直接 Build 然后重启 Xcode即可，Xcode 会提示是否加载插件，选择 Load Bundle。

现在，随便启动一个项目，在某各类例如控制器中，加入下面代码:

```objc

- (void)injected {
	// injected!!
}

```

`⌘` + `R` 运行你的项目，接下来将刚才代码的注释部分替换成随便什么代码，比如一个 UIAlertView。

然后，见证奇迹的时刻！按下 `⌃` + `=` ，再看看应用的变化吧。

上效果图:

![injection](/assets/images/posts/content/Injection.gif)

当然 Injection 也是有局限性的，这一点从它的实现原理上就能看出来了。在这些情况下 Injection 会发生一些问题:

* Swift 结构体的修改

* Swift 中 final 修饰的方法和类的修改

* Swift 中不在类中的全局函数和变量的修改





