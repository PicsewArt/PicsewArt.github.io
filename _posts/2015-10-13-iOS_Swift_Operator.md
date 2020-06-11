---
title: "Swift : Operator implementation"
category: "Swift"
tags: [iOS,Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
---
与 C++ 类似，在 Swift 中也支持操作符的重载和定义，本文主要来介绍一下它的用法。

### 原有操作符重载

在 Swift 内部已经定义了一些操作符例如 `+`、`-`、`*`、`/` 等，但他们能计算的内容很有限，在实际应用中我们可能希望通过对某些复杂的值进行计算操作，这种情况下我们可以通过重载原来的操作符来简化我们的代码。

举个栗子，我们要对两个 `CGSize` 进行相加，希望其 `x` 与 `y` 分别相加并以新的值返回一个 `CGSize`，如果没有操作符重载，我们会这样实现:

```swift
let size1 = CGSizeMake(100, 100)
let size2 = CGSizeMake(200, 200)
let size3 = CGSizeMake(size1.width + size2.width, size1.height + size2.height)
```


计算一次还好，计算多次就是在浪费时间了，对此，除了可以定义新方法来实现简化，还有书写更加方便更加易读的方式，那就是操作符重载:

```swift
func +(lhs: CGSize, rhs: CGSize) -> CGSize {
    return CGSizeMake(lhs.width + rhs.width, lhs.height + rhs.height)
}
```


之后，在使用时和普通数值相加没有任何区别:

```swift
let demo = CGSizeMake(1, 1) + CGSizeMake(2, 2)
```


### 定义新的操作符

对于已有的操作符，由于已经定义过，我们可以直接重载实现新的功能，而那些没有定义过的操作符，如果我们要实现其功能，需要额外添加一些定义，这依据操作符的类型来决定，分别有:


<table>
<tr><th>关键字</th><th>说明</th></tr>
<tr><th><code>infix</code></th><th>定义中位操作符，即操作符左右两边都有输入值</th></tr>
<tr><th><code>prefix</code></th><th>定义前位操作符，即操作符只有左侧有输入值</th></tr>
<tr><th><code>postfix</code></th><th>定义后位操作符，即操作符只有右侧有值输入</th></tr>
</table>


在像上一部分那样实现操作符功能之前，我们需要对操作符进行定义:

```swift
操作符类型 operator 操作符名称 {
	associativity 结合律类型
	precedence 优先级取值
}
```


其中，`associativity` 定义了操作符的结合律，可用的值有 `left­`、`right­` 和 `none­` 三种；而 `precedence` 则定义了操作符的计算优先级，使用整数表示即可。

举个栗子，我们要定义 Swift 中没有的中位操作符 `+*`:
```swift
infix operator +* {
    associativity none
    precedence 200
}
```

接下来实现操作符的功能:

```swift
func +*(lhs: CGSize, rhs: CGSize) -> CGSize {
    return CGSizeMake((lhs.width + rhs.width) * (lhs.width + rhs.width), (lhs.height + rhs.height) * (lhs.height + rhs.height))
}
```




