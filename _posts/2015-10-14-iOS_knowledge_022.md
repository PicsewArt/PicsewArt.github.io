---
title: "iOS 面试题: 使用 drawRect 有什么影响?"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
最近遇到和看到的一些面试题。

#### 使用drawRect有什么影响?

`drawRect`方法依赖Core Graphics框架来进行自定义的绘制,但这种方法主要的缺点就是它处理touch事件的方式: 每次按钮被点击后,都会用`setNeddsDisplay`进行强制重绘;而且不止一次,每次单点事件触发两次执行。这样的话从性能的角度来说,对CPU和内存来说都是欠佳的。特别是如果在我们的界面上有多个这样的`UIButton`实例。
