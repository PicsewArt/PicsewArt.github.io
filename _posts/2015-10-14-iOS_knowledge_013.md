---
title: "iOS 面试题: 什么是ARC"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0006.jpg'
---
最近遇到和看到的一些面试题。

#### 什么是ARC?(ARC是为了解决什么问题诞生的?)

首先解释ARC: automatic reference counting自动引用计数。

ARC几个要点:

* 在对象被创建时 retain count +1,在对象被release时 retain count -1.当retain count 为0 时,销毁对象。
* 程序中加入autoreleasepool的对象会由系统自动加上autorelease方法,如果该对象引用计数为0,则销毁。

那么ARC是为了解决什么问题诞生的呢?这个得追溯到MRC手动内存管理时代说起。

MRC下内存管理的缺点:

* 当我们要释放一个堆内存时,首先要确定指向这个堆空间的指针都被release了。(避免提前释放)
* 释放指针指向的堆空间,首先要确定哪些指针指向同一个堆,这些指针只能释放一次。(MRC下即谁创建,谁释放,避免重复释放)
* 模块化操作时,对象可能被多个模块创建和使用,不能确定最后由谁去释放。
* 多线程操作时,不确定哪个线程最后使用完毕
