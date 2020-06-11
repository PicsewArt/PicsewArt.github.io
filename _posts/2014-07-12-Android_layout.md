---
title: "Android : Layout 基础"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'post/android.jpg'
tags: [Android]
---
好像一直都没有系统的写过 Android 方面的博客，就先从布局开始吧，介绍一些布局属性。

主要的布局方式有:

* `LinearLayout`

* `RelativeLayout`

* `FrameLayout`: 帧布局，控件会一直叠加在一起

* `AbsoluteLayout`: 很少使用，鉴于安卓设备的屏幕五花八门，并不推荐使用这种布局。

* `TableLayout`: 同样很少用

常见的布局属性有:

* `android:layout_weight`: 值为数字，表示权重

* `android:layout_above`: 在某元素之上

* `android:layout_toLeftOf`: 在某元素左边

* `android:layout_alignLeft`: 依赖于某元素左边，平行对齐

* `android:layout_margin`: 外边距

* `android:padding`: 内边距

* `android:orientation`: 子控件布局方向，可以设置垂直(`vertical`)或水平(`horizontal`)

* `android:visibility`: 可见性，如果要隐藏则可设置为 `gone`、`invisible`，前者完全隐藏不占用空间，后者隐藏后仍占用空间

* `android:layout_width`、`android:layout_height`: 宽和高，一般使用 `wrap_content`、`match_parent`

* `android:background`: 背景

* `android:gravity`: 重力属性，可设置 `center_vertical` 等

* `android:minHeight`: 最小高度

* `android:layout_alignParentRight`: 相对父控件

* `android：layout_toRightOf`: 相对某控件右边

* `android：alighLeft`: 控件左边与某控件左边平行







