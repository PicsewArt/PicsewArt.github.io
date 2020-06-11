---
title: "iOS Animation : 拖拽气泡的基本算法"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0053.jpg'
tags: [iOS,UIBezierPath,iOS Animation]
---
通过[前面博客]({{ site.blog_perma }}/UIBezierPath_001/)的介绍，你应该已经对 `UIBezierPath` 的基本使用有了了解，接下来，本文主要介绍 `UIBezierPath` 在 UI 动画中的应用——拖拽气泡的基本算法。

### 初步构想

首先来分析拖拽气泡的结构:

![效果](https://img.blog.csdn.net/20151013143513028?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

如上图，气泡初始状态为正圆形，拖拽后，左右两端分别为两个大小不同的正圆，由两条曲线连接，其内部填充为统一的颜色，也就是说我们只需要绘制两个圆弧，两条长曲线，拼接为完整的路径并进行填充即可。

### 计算公式

有了上面的分析，我们初步构想了气泡的原理，接下来就需要对其中的数值进行精确的计算，得到通用的计算公式。

![计算](https://img.blog.csdn.net/20151013150844340?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

如图， `AE ⊥ AB`、`BF ⊥ AB`，`AE = BF = distance / 2`，如果用 `distance` 表示两圆圆心间距离，则:

* `distance = √((x1 - x2)² + (y1 - y2)²)`

* `cosα = (y2 - y1) / distance`

* `sinα = (x2 - x1) / distance`

据此，我们可以进一步得到 ABCD 四个点的坐标:

* A: `(x1 - r1 * cosα, y1 + r1 * sinα)`

* B: `(x1 + r1 * cosα, y1 - r1 * sinα)`

* C: `(x2 + r2 * cosα, y2 - r2 * sinα)`

* D: `(x2 - r2 * cosα, y2 + r2 * sinα)`

如果用 `(xA, yA)` 表示 A 点坐标，同理用用 `(xB, yB)` 表示 B 点坐标，则 EF 两点坐标为:

* E: `(xA + distance / 2 * sinα, yA + distance /  2 * cosα)`

* F: `(xB + distance / 2 * sinα, yB + distance /  2 * cosα)`

### 代码实现

接下来，有了前面的计算公式，我们将用代码去实现，首先创建相关值变量:

```swift
var r1: CGFloat!
var x1: CGFloat!
var y1: CGFloat!

var r2: CGFloat!
var x2: CGFloat!
var y2: CGFloat!

var centresDistance: CGFloat!
var cosAlpha: CGFloat!
var sinAlpha: CGFloat!

var pointA: CGPoint!
var pointB: CGPoint!
var pointD: CGPoint!
var pointC: CGPoint!
var pointE: CGPoint!
var pointF: CGPoint!
```

接下来，实现 ABCDEF 点的坐标计算:

```swift
func calcutePoints() {
	// 圆心距离
	let num = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)
	centresDistance = CGFloat(sqrt(num))

	// sinα 和 cosα
	if centresDistance == 0 {
		cosAlpha = 1;
		sinAlpha = 0;
	} else {
		cosAlpha = (y2 - y1) / centresDistance;
		sinAlpha = (x2 - x1) / centresDistance;
	}

	pointA = CGPointMake(x1 - r1 * cosAlpha, y1 + r1 * sinAlpha);
	pointB = CGPointMake(x1 + r1 * cosAlpha, y1 - r1 * sinAlpha);
	pointC = CGPointMake(x2 + r2 * cosAlpha, y2 - r2 * sinAlpha);
	pointD = CGPointMake(x2 - r2 * cosAlpha, y2 + r2 * sinAlpha);
	pointE = CGPointMake(pointA.x + (centresDistance / 2)*sinAlpha, pointA.y + (centresDistance / 2) * cosAlpha);
	pointF = CGPointMake(pointB.x + (centresDistance / 2)*sinAlpha, pointB.y + (centresDistance / 2) * cosAlpha);
}
```


