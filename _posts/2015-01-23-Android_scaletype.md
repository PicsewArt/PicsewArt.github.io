---
title: "Android: ScaleType"
category: "Android"
copy: true
tags: [Android, ScaleType]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0040.jpg'
---
应该是个很常用的属性, 总结一下。

## 用法

`ImageView.ScaleType.CENTER|android:scaleType="center"` 以原图的几何中心点和 `ImagView` 的几何中心点为基准,按图片的原来 `size` 居中显示, 不缩放, 当图片长/宽超过 `View` 的长/宽, 则截取图片的居中部分显示 `ImageView` 的 `size`。 当图片小于 `View` 的长宽时, 只显示图片的 `size`, 不剪裁。

`ImageView.ScaleType.CENTER_CROP|android:scaleType="centerCrop"` 以原图的几何中心点和 `ImagView` 的几何中心点为基准,按比例扩大(图片小于 `View` 的宽时)图片的 `size` 居中显示, 使得图片长 (宽)等于或大于 `View` 的长(宽),并按View的大小截取图片。当原图的 `size` 大于 `ImageView` 时, 按比例缩小图片, 使得长宽中有一向等于 `ImageView` ,另一向大于 `ImageView` 。实际上, 使得原图的 `size` 大于等于 ImageView

`ImageView.ScaleType.CENTER_INSIDE|android:scaleType="centerInside"` 以原图的几何中心点和 `ImageView` 的几何中心点为基准, 将图片的内容完整居中显示, 通过按比例缩小原来的 `size` 使得图片长(宽)等于或小于 `ImageView` 的长(宽)

`ImageView.ScaleType.FIT_CENTER|android:scaleType="fitCenter"` 把图片按比例扩大(缩小)到 `View` 的宽度, 居中显示

`ImageView.ScaleType.FIT_END|android:scaleType="fitEnd"` 把图片按比例扩大(缩小)到 `View` 的宽度, 显示在 `View` 的下部分位置

`ImageView.ScaleType.FIT_START|android:scaleType="fitStart"` 把图片按比例扩大(缩小)到 `View` 的宽度, 显示在 `View` 的上部分位置

`ImageView.ScaleType.FIT_XY|android:scaleType="fitXY"` 把图片按照指定的大小在 `View` 中显示, 拉伸显示图片, 不保持原比例, 填满 `View`

`ImageView.ScaleType.MATRIX|android:scaleType="matrix"` 用 `matrix` 来绘制

## `scaletype` 的种类

`scaletype` 的种类分为三类 `matrix` (默认) 、`fit-X`、`center`:

#### `matrix`

这个就不多说了。

#### `fit-X`

`fit-X` 类中, `fitStart`、`fitCenter` 和 `fitEnd` 之间的都是根据需要使原图改变对 `ImageView` 进行适应, 不剪裁, 按 `matrix` 进行绘制, 但它们 的区别在于基准不同:

* `fitStart` 的基准为最上角的点 (即 `matrix` 方式开始的点)
* `fitCenter` 的基准点为中间的点 (`matrix` 方式中可以使图片居中的点)
* `fitEnd` 的基准点为右下角的点 (即 `matrix` 方式最后绘制点)

#### `center`

`center` 类中, `center`、`centerCrop`、`centerInside` 都是以原图的几何中心点和 `ImageView` 的几何中心点为基准, 且只绘制 `ImageView` 大小的图像, 不同的是是否保持原图大小和绘图的目标不同、采取的手段不同。
