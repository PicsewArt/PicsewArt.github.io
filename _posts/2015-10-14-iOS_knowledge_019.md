---
title: "iOS 面试题: Method Swizzling"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
最近遇到和看到的一些面试题。

#### 什么是 Method Swizzling?

Method Swizzling 原理:

在Objective-C中调用一个方法,其实是向一个对象发送消息,查找消息的唯一依据是selector的名字。利用Objective-C的动态特性,可以实现在运行时偷换selector对应的方法实现,达到给方法挂钩的目的。
每个类都有一个方法列表,存放着selector的名字和方法实现的映射关系。IMP有点类似函数指针,指向具体的Method实现。

![swizzling01]({{ site.url }}/assets/images/posts/content/swizzling01.jpg)

我们可以利用 `method_exchangeImplementations` 来交换2个方法中的IMP,我们可以利用 `class_replaceMethod` 来修改类,我们可以利用 `method_setImplementation` 来直接设置某个方法的IMP, ...

归根结底,都是偷换了selector的IMP。

![swizzling02]({{ site.url }}/assets/images/posts/content/swizzling02.jpg)
