---
title: "iOS Animation : UIBezierPath 基础"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0043.jpg'
tags: [iOS,UIBezierPath,iOS Animation]
---
贝塞尔曲线是计算机图形学的伟大推动者，它在 iOS 中的应用 `UIBezierPath` 也是 UI 动画制作中十分常用的工具，本文主要介绍 `UIBezierPath` 在 iOS 中的基本使用。

### 贝塞尔原理

从数学角度来说，贝塞尔的原理是，给定 `n+1` 个数据点 `p0(x0 , y0) ... pn(xn , yn)` 生成⼀条曲线并使该曲线与给定点所连结的折线相近。
```objc

```


### UIBezierPath

在强大的 `UIKit` 中对 C 语言绘图框架 `Core Graphics` 做了一些封装，而 `UIBezierPath` 就是其中之一。

`UIBezierPath` 的使用非常简单:

* 创建实例

* 添加路径

* 绘制呈现

### 实例创建

苹果针对不同的绘制需求，为实例化 `UIBezierPath` 提供了许多方法。

```objc
+ (instancetype)bezierPath;
+ (instancetype)bezierPathWithRect:(CGRect)rect;
+ (instancetype)bezierPathWithOvalInRect:(CGRect)rect;
+ (instancetype)bezierPathWithRoundedRect:(CGRect)rect cornerRadius:(CGFloat)cornerRadius; // rounds all corners with the same horizontal and vertical radius
+ (instancetype)bezierPathWithRoundedRect:(CGRect)rect byRoundingCorners:(UIRectCorner)corners cornerRadii:(CGSize)cornerRadii;
+ (instancetype)bezierPathWithArcCenter:(CGPoint)center radius:(CGFloat)radius startAngle:(CGFloat)startAngle endAngle:(CGFloat)endAngle clockwise:(BOOL)clockwise;
+ (instancetype)bezierPathWithCGPath:(CGPathRef)CGPath;
```


### bezierPath

利用最基本的构造方法 `bezierPath` 实例化 `UIBezierPath` 后需要配合 `moveToPoint:`、`addLineToPoint:`、`addArcWithCenter:` 等方法来绘制图形，例如绘制一条直线:

```objc
UIBezierPath *path = [UIBezierPath bezierPath];
[path moveToPoint:CGPointMake(100 , 100)];
[path addLineToPoint:CGPointMake(200, 100)];
[path stroke];
```

或者绘制圆形:

```objc
UIBezierPath *path = [UIBezierPath bezierPath];
[path addArcWithCenter:self.center radius:100.0 startAngle:0.0 endAngle:180.0 clockwise:YES];
[path stroke];
```


### bezierPathWithOvalInRect:(CGRect)rect

此方法用来绘制椭圆，其参数指定了椭圆的外接矩形。

```objc
UIBezierPath *path = [UIBezierPath bezierPathWithOvalInRect:CGRectMake(10, 10, 100, 100)];
[path stroke];
```


### bezierPathWithRect:(CGRect)rect

此方法用来直角绘制矩形。

```objc
UIBezierPath *path = [UIBezierPath bezierPathWithRect:CGRectMake(10, 10, 100, 100)];
[path stroke];
```


### bezierPathWithRoundedRect:(CGRect)rect cornerRadius:(CGFloat)cornerRadius

此方法用来绘制圆角(全部角)矩形，其最后一个参数指定了圆角部分所在正圆的半径。

```objc
UIBezierPath *path = [UIBezierPath bezierPathWithRoundedRect:CGRectMake(10, 10, 100, 100) cornerRadius:20];
[path stroke];
```


### bezierPathWithRoundedRect:(CGRect)rect byRoundingCorners:(UIRectCorner)corners cornerRadii:(CGSize)cornerRadii

此方法用来绘制圆角(部分角)矩形。

此方法与上一个方法的不同在于:

* 第二个参数 `byRoundingCorners:(UIRectCorner)corners` 允许指定矩形的部分角为圆角，而其余的角为直角，取值来自枚举:

```objc
typedef NS_OPTIONS(NSUInteger, UIRectCorner) {
    UIRectCornerTopLeft     = 1 << 0,
    UIRectCornerTopRight    = 1 << 1,
    UIRectCornerBottomLeft  = 1 << 2,
    UIRectCornerBottomRight = 1 << 3,
    UIRectCornerAllCorners  = ~0UL
};
```


* 其最后一个参数 `cornerRadii:(CGSize)cornerRadii` 指定了圆角的半径，但这里需要注意，这个参数的取值是 `CGSize` 类型，也就意味着这里需要给出的是椭圆的半径。

### bezierPathWithArcCenter:(CGPoint)center radius:(CGFloat)radius startAngle:(CGFloat)startAngle endAngle:(CGFloat)endAngle clockwise:(BOOL)clockwise

此方法用来绘制圆弧。

第一个参数 `(CGPoint)center` 指定了圆弧所在正圆的圆心点坐标。

第二个参数 `(CGFloat)radius` 指定了圆弧所在正圆的半径。

第三个参数 `(CGFloat)startAngle` 指定了起始弧度位置。

第四个参数 `(CGFloat)endAngle` 指定了结束弧度位置。

最后一个参数 `(BOOL)clockwise` 指定了绘制方向，以时钟方向为判断基准。

### 绘制颜色设定

前面的代码所绘制的图形，不论是直线还是圆，它们的颜色都是一致的，但在实际应用中我们不可能满足于单一的颜色。

```objc
// 设置描边色
[[UIColor blueColor] setStroke];
// 设置填充色
[[UIColor redColor] setFill];
```

当然你也可以直接使用一个方法来进行统一设定:
```objc
[[UIColor greenColor] set];
```


### 绘制线宽设定

此外，我们也可能对绘制的宽度有要求。

```objc
[path setLineWidth:5];
```


### 其他

除了上述的绘制操作以外，如果灵活应用，你还可以用它绘制各种各样复杂的形状，这里不做过多说明。




