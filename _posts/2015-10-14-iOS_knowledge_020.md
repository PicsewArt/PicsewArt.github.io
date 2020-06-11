---
title: "iOS 面试题: UIView 和 CALayer"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
最近遇到和看到的一些面试题。

#### UIView 和 CALayer 是啥关系?

UIView是iOS系统中界面元素的基础,所有的界面元素都继承自它。它本身完全是由CoreAnimation来实现的 (Mac下似乎不是这样)。它真正的绘图部分,是由一个叫CALayer(Core Animation Layer)的类来管理。 UIView本身,更像是一个CALayer的管理器,访问它的跟绘图和跟坐标有关的属性,例如frame,bounds等 等,实际上内部都是在访问它所包含的CALayer的相关属性。

UIView有个layer属性,可以返回它的主CALayer实例,UIView有一个layerClass方法,返回主layer所使用的 类,UIView的子类,可以通过重载这个方法,来让UIView使用不同的CALayer来显示,例如通过

```objc
- (class) layerClass {
    return ([CAEAGLLayer class]);
}
```

使某个UIView的子类使用GL来进行绘制。

UIView的CALayer类似UIView的子View树形结构,也可以向它的layer上添加子layer,来完成某些特殊的表 示。例如下面的代码

```objc
grayCover = [[CALayer alloc] init];
grayCover.backgroundColor = [[[UIColor blackColor] colorWithAlphaComponent:0.2] CGColor];
[self.layer addSubLayer: grayCover];
```

会在目标View上敷上一层黑色的透明薄膜。

UIView的layer树形在系统内部,被系统维护着三份copy(这段理解有点吃不准)。

* 逻辑树,就是代码里可以操纵的,例如更改layer的属性等等就在这一份。
* 动画树,这是一个中间层,系统正在这一层上更改属性,进行各种渲染操作。
* 显示树,这棵树的内容是当前正被显示在屏幕上的内容。

这三棵树的逻辑结构都是一样的,区别只有各自的属性。
