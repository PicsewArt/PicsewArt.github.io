---
title: "iOS Animation : CADisplayLink"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0047.jpg'
tags: [iOS,CADisplayLink,iOS Animation]
---
我们知道，凡是动画一定会涉及到时间问题，UI 动画也不例外，定时更是一个十分常用的操作。本文主要介绍一种定时器——`CADisplayLink`的基本使用。

### 基本描述

简单来说，`CADisplayLink` 是一个提供了周期性调用 selector 的机制，类似于 `NSTimer`。和其他 `CoreAnimation` 类一样，要使用 `CADisplayLink` 首先也需要引入 `QuartzCore.framework` 库。

### 如何启动

```swift
let displayLink = CADisplayLink(target: self, selector: "handleDisplayLink:")
displayLink.addToRunLoop(NSRunLoop.currentRunLoop(), forMode: NSDefaultRunLoopMode)
```

实例化 `CADisplayLink` 并将其加入运行循环后，定时将自动启动，开始周期性的执行 selector 方法，接下来你只需要实现该方法即可。

```swift
func handleDisplayLink(displayLink: CADisplayLink!) {
	// handle things...
}
```


### 如何停止

学会了启动，还需要停止，只需要调用 `invalidate()` 方法即可。
```swift
displayLink.invalidate()
```


### CADisplayLink 与 NSTimer

那么，你一定想问，CADisplayLink 与 NSTimer 到底有什么不同？

要解释这个问题，首先我们要知道，`CADisplayLink` 是一个能够"和屏幕刷新率同步频率"的定时器，当它的实例注册到运行循环后，一旦屏幕显示内容刷新结束就会向指定的 `target` 发送指定 `selector` 消息。而 `NSTimer` 注册到运行循环后，一旦周期时间到达就会向指定的 `target` 发送指定 `selector` 消息。

基于上述理由，可以知道 `CADisplayLink` 的默认周期应该是每秒 60 次，与设备刷新率保持同步，当然，你可以通过 `frameInterval` 属性进行修改其周期为每秒 `60/ frameInterval` 次。而 `NSTimer` 的在这一点上要灵活和方便很多。同时，相信你已经意识到， `CADisplayLink` 的精确度也是很高的。而相对来说 `NSTimer` 在精确度问题上就显得有些不足，它甚至会被推迟到下一次运行循环才被执行。

在实际应用中，`CADisplayLink` 通常被用在频繁的界面重绘中。`NSTimer` 则被广泛应用在多种情景下。当然，每秒 60 次的频率并不能够 100% 的完全保证，他仍然受制于 CPU 的忙碌程度、执行方法的时间开销等因素。

如果你有兴趣，你可以参考 [***官方文档***](https://developer.apple.com/library/ios/documentation/QuartzCore/Reference/CADisplayLink_ClassRef/Reference/Reference.html#//apple_ref/doc/uid/TP40009031-CH1-DontLinkElementID_1) 获取更多内容。





