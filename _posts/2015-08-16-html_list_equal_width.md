---
title: "HTML: 列表等宽"
category: "HTML"
copy: true
tags: [HTML, CSS, JavaScript, table-cell, box-flex]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
---
虽然我们可以用 `width` 设置百分比甚至固定值的方式使列表项等宽, 但对于未知数量的列表, 可能需要更好的方式来实现。

## table-cell

第一种也是最简单的方法: `display: table-cell`。

除了简单之外, 兼容性也较好。


## box-flex

`box-flex` 属性是 `CSS 3` 的新内容, 可以依据父元素的宽度分配子元素, 类似数学中的分数一样。

假设: 我们有一个容器, 宽度是 `1200px`, 其中包含三个子元素。

如果三个子元素的 `box-flex` 属性均为 `1`, 则每个元素会获得 `400px` 的宽度。

如果其中一个元素的 `box-flex` 属性为 `2`, 其余的元素为 `1`, 那么该元素将有 `600px` 的宽度, 其余元素有 `300px` 的宽度。

这么说起来, `box-flex` 还是蛮好用的, 可惜的是目前兼容性不算好, 不过这么强大的属性还是了解一下比较好。

## JavaScript

最后一种方法就是用 JavaScript 实现, 从兼容性角度来说是最好的, 当然, 会比较麻烦。
