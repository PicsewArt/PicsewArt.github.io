---
title: "iOS 面试题: assign 与 weak 的区别, block 与 weak 的区别"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0011.jpg'
---
最近遇到和看到的一些面试题。

#### 请解释 assign 与 weak 的区别, block 与 weak 的区别

assign适用于基本数据类型,weak是适用于NSObject对象,并且是一个弱引用。

assign其实也可以用来修饰对象,那么我们为什么不用它呢?因为被assign修饰的对象在释放之后,指针的地址还是存在的,也就是说指针并没有被置为nil。如果在后续的内存分配中,刚好分到了这块地址,程序就会崩溃掉。而weak修饰的对象在释放之后,指针地址会被置为nil。所以现在一般弱引用就是用weak。

首先`__block`是用来修饰一个变量,这个变量就可以在block中被修改(参考block实现原理)。

* 使用`__block`修饰的变量在block代码快中会被retain(ARC下,MRC下不会retain)
* 使用weak修饰的变量不会在block代码块中被retain

同时,在ARC下,要避免block出现循环引用 `weak typedof(self)weakSelf = self;`。
