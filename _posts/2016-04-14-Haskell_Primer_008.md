---
title: "Haskell Primer 008: 类型类"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0030.jpg'
---
在 `Haskell` 中，类型类 (`typeclass`) 是定义类型行为的接口，如果一个类型是某类型类的实例 (`Instance`)，那么它一定实现了该类型类所描述的行为。

> 这里需要注意，不要将 Haskell 中的类型类与一般面向对象语言中的类 (Class) 混淆。



举例说明，前面已经多次用到了相等性判断 `==` 函数，现在我们来看看它的类型:

```haskell
Haskell> :t (==)
(==) :: Eq a => a -> a -> Bool
Haskell>
```

这里出现一个新的事物 —— 符号 `=>`，它被用作类型约束 (`Type Constraint`)，即在 `=>` 左侧约束右侧类型变量的类型。本例中，`Eq a` 部分限制了 `a` 为 `Eq` 类型，则 `==` 函数只能接受两个 `Eq` 类实例做为参数。



使用多个类型约束时，通过逗号 (`,`) 分隔即可。



## 常见类型类

####  Eq

这一类型类提供了相等性判断的接口，要求其实例必须实现 `==` 与 `/=` 函数。



#### Ord

这一类型类提供了大小比较的接口，包含所有标准比较函数，例如 `>`、`<=` 等。

```haskell
Haskell> :t compare
compare :: Ord a => a -> a -> Ordering
Haskell>
```

上面的 `compare` 函数返回 `Ordering` 类型的值。`Ordering` 类型有 `GT`、`LT`、`EQ` 分别表示大于(`Greater Than`)、小于(`Less Than`)、等于(`Equal`)。



#### Show

这一类型类的实例可以表示为字符串。其提供的行为中，最常用的是 `show` 函数:

```haskell
Haskell> show 1
"1"
Haskell> show "hello"
"\"hello\""
Haskell> show [1,2,3]
"[1,2,3]"
Haskell> show False
"False"
Haskell>
```



#### Read

简单来说，`Read` 与 `Show` 刚好相反，常用的行为有 `read` 函数:

```haskell
Haskell> read "1" + 2
3
Haskell> read "True" && False
False
Haskell>
```

但是注意，`read` 读取数据时，需要根据使用情况才能确定其读取后的类型:

```haskell
Haskell> read "True"
*** Exception: Prelude.read: no parse
```

要解决这一问题，你需要显示说明:

```haskell
Haskell> read "True" :: Bool
True
Haskell>
```

某些情况下，我们甚至可以提供更少的信息完成读取。举个例子:

```haskell
Haskell> [read "100", 2, 3]
[100,2,3]
```

这样，就可以让 `Haskell` 通过列表其它元素的类型自动推断。



#### Enum

它的实例类型都是有连续顺序的，可以枚举。例如 `Char`、`Int`、`Integer`、`Float` 等。你可以通过区间来使用这些类型:

```haskell
Haskell> ['a'..'f']
"abcdef"
Haskell> [1..5]
[1,2,3,4,5]
Haskell> [LT .. GT]
[LT,EQ,GT]
Haskell> succ 'B'
'C'
Haskell> pred 'A'
'@'
Haskell> pred 'B'
'A'
Haskell>
```



#### Bounded

其实例类型有用界限，通过 `maxBound` 和 `minBound` 函数获取:

```haskell
Haskell> minBound :: Int
-9223372036854775808
Haskell> maxBound :: Bool
True
Haskell>
```

当元组中元素的类型都属于 `Bounded` 实例，那么这个元组的类型也属于 `Bounded` 实例。



#### Num

表示数值的类型类，包含了实数与整数在内的所有数值类型。

#### Floating

浮点数类型类，实力类型有 `Float` 与 `Double` 两种浮点类型，用于表示浮点数。

#### Integeral

仅包含整数，实力类型有 `Int` 和 `Integer`。




