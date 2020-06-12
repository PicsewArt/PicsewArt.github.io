---
title: "iOS 面试题: loadView"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0050.jpg'
---
最近遇到和看到的一些面试题。

#### loadView 是干嘛用的?

当你访问一个ViewController的view属性时,如果此时view的值是nil,那么,ViewController就会自动调用loadView这个方法。这个方法就会加载或者创建一个view对象,赋值给view属性。
`loadView` 默认做的事情是: 如果此ViewController存在一个对应的nib文件,那么就加载这个nib。否则,就创建一个UIView对象。

如果你用Interface Builder来创建界面,那么不应该重载这个方法。

如果你想自己创建view对象,那么可以重载这个方法。此时你需要自己给view属性赋值。你自定义的方法不应该调用super。如果你需要对view做一些其他的定制操作,在 `viewDidLoad` 里面去做。

* 如果你用了nib文件,重载这个方法就没有太大意义。因为`loadView`的作用就是加载nib。如果你重载了这个方法不调用super,那么nib文件就不会被加载。如果调用了super,那么view已经加载完了,你需要做的其他事情在`viewDidLoad`里面做更合适。

* 如果你没有用nib,这个方法默认就是创建一个空的view对象。如果你想自己控制view对象的创建,例如创建一个特殊尺寸的view,那么可以重载这个方法,自己创建一个UIView对象,然后指定 `self.view = myView;` 但这种情况也没有必要调用super,因为反正你也不需要在super方法里面创建的view对象。如果调用了super,那么就是浪费了一些资源而已
