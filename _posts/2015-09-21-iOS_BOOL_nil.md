---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0034.jpg'
title: "iOS : 为什么 BOOL 可以赋值为 nil"
tags: [iOS,BOOL,nil]
summary: "iOS : 为什么 BOOL 可以赋值为 nil"
---
有些情况下可能你会发现 `BOOL` 类型可以赋值为 `nil`，但在我们的印象里，`nil` 是 OC 对象的字面空白值，那么为什么可以赋值给 `BOOL` 呢？

首先我们应该查阅苹果的官方文档，先来看看 `BOOL` 的定义:

```objc
typedef signed char BOOL;
```

我们知道 `BOOL` 有两个值，分别是 `YES` 和 `NO`:

```objc
#define YES (BOOL)1
#define NO  (BOOL)0
```

可见， `BOOL` 事实上是有符号字符的别名，使用了 `#define` 分别定义了 `1` 为 `YES`，`0` 为 `NO`。

再看看 `nil` 是如何定义的:

```objc
#define nil __DARWIN_NULL
```

那么这个 `__DARWIN_NULL` 又是什么呢:

```objc
#define __DARWIN_NULL ((void *)0)
```

是不是明白了什么？





