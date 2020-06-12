---
title: "Haskell Primer 004: 玩玩列表"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0051.jpg'
---
列表 (`List`)，是一种单类型 (`Homogeneous`) 数据结构，用于存储一个或多个同类型元素，例如一系列的数字。



将一系列的元素使用方括号 (`[]`) 包含，元素间使用逗号 (`,`) 分隔，就形成了列表。列表允许嵌套。

```haskell
Haskell> let aList = [1,2,3,4,5,435,213,546,34,54345]
Haskell> aList
[1,2,3,4,5,435,213,546,34,54345]
Haskell>
```

此处的 `let` 被用于在 `GHCi` 中定义常量，`let a = 0` 与先在 `.hs` 文件中写入 `a = 0` 后通过 `:l` 加载的效果相同。



来看一些常见的列表操作:

```haskell
Haskell> [1,2,3] ++ [8,9,0]
[1,2,3,8,9,0]
Haskell> ['i','l','o','v','e','u']
"iloveu"
Haskell>  "hello" ++ " " ++ "world"
"hello world"
```

上面的代码都是列表的拼接操作，字符串实际上是字符列表的语法糖。

> 需要注意的是，使用 `++` 时左边的参数会被整个遍历，这就意味着列表长度越长，拼接效率越低，耗时越长。

```haskell
Haskell> 'a':"bcdefg"
"abcdefg"
Haskell> 1:[2,3,4,5,6]
[1,2,3,4,5,6]
Haskell> 1:2:3:4:[]
[1,2,3,4]
```

像这样将一个元素拼接到列表开头的操作，成本几乎为零。

```haskell
Haskell> ['a','b','c','d','e'] !! 1
'b'
Haskell> "hello" !! 4
'o'
```

使用 `!!` 可以访问列表中制定下标的元素，下标从 `0` 开始。

此外，部分情况下，列表也是可以进行比较的:

```haskell
Haskell> [1,2,3] == [1,2,3]
True
Haskell> "hi" == ['h','i']
True
Haskell> 1:2:3:[] == [1,2,3]
True
Haskell> [1,1,2] < [2,1,2]
True
Haskell> [2,2,1] < [2,2,2]
True
Haskell>
```

当列表元素可以进行比较时，会从左到右依次对每个下标位置进行比较。非空列表总是大于空列表。

```haskell
Haskell> head [5,4,3,2,1]
5
Haskell> tail [5,4,3,2,1]
[4,3,2,1]
Haskell> last [5,4,3,2,1]
1
Haskell> init [5,4,3,2,1]
[5,4,3,2]
Haskell>
```

* `head` 返回列表第一个元素

* `last` 返回列表最后一个元素

* `tail` 返回除去第一个元素外的剩余元素

* `init` 返回除去最后一个元素外的剩余元素



**注意**，它们都不可作用于空列表。

```haskell
Haskell> length [1,2,3,4,5]
5
Haskell> length "hello"
5
Haskell> null []
True
Haskell> null [1,2,3]
False
Haskell> null ""
True
Haskell> null "a"
False
Haskell> reverse "dlrow"
"world"
Haskell> reverse [1,2,3]
[3,2,1]
Haskell> take 2 [1,2,3]
[1,2]
Haskell> take 2 "hello"
"he"
Haskell> take 0 [2,3,4]
[]
Haskell> drop 2 "hello"
"llo"
Haskell> drop 2 [5,4,3,2]
[3,2]
Haskell> drop 1000 [1,2,3]
[]
Haskell> maximum [1,2,3,56,7,8,56,345]
345
Haskell> minimum [213,345,546,1]
1
Haskell> sum [1,2,3,4,5]
15
Haskell> product [1,2]
2
Haskell> product [2,5]
10
Haskell> product [3,5]
15
Haskell> product [2,3,4]
24
Haskell> elem 1 [2,3,4]
False
Haskell> elem 2 [2,3,4]
True
Haskell> 3 `elem` [2,3,4]
True
Haskell>
```

* `lenght` 返回列表长度

* `null` 检查列表是否为空

* `reverse` 翻转列表

* `take` 从列表中从前向后取指定数量的元素

* `drop` 从列表中从前向后删除指定数量的元素

* `maximum` 和 `minimum` 分别返回列表中最大和最小的元素

* `sum` 返回列表中元素的和

* `product` 返回列表中元素的乘积

* `elem` 判断某个值是否是列表元素之一

```haskell
Haskell> [1..10]
[1,2,3,4,5,6,7,8,9,10]
Haskell> ['a'..'z']
"abcdefghijklmnopqrstuvwxyz"
Haskell> ['F'..'Q']
"FGHIJKLMNOPQ"
Haskell> [1,4..100]
[1,4,7,10,13,16,19,22,25,28,31,34,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85,88,91,94,97,100]
Haskell> [5,10..100]
[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
Haskell> [1,3..3*5]
[1,3,5,7,9,11,13,15]
Haskell> [1,2..]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40.............
Haskell> take 3 [1,2..]
[1,2,3]
Haskell> take 9 (repeat "ABc")
["ABc","ABc","ABc","ABc","ABc","ABc","ABc","ABc","ABc"]
Haskell> replicate 3 10
[10,10,10]
```

区间是很聪明的，但对于浮点数使用区间要格外小心，可能会出现很糟糕的精度问题。

```haskell
Haskell> [x | x <- [1..10]]
[1,2,3,4,5,6,7,8,9,10]
Haskell> [x | x <- [10..20]]
[10,11,12,13,14,15,16,17,18,19,20]
Haskell> [x | x <- [1..10], x `mod` 2 == 0]
[2,4,6,8,10]
Haskell> [x * 2 | x <- [1..10], x `mod` 2 == 0]
[4,8,12,16,20]
Haskell>
```

上面这些代码被称为列表推导式 (`List Comprehension`)，其中，符号 `|` 右边表示推导的依据 (谓词，`Predicate`)，可以有多个，使用逗号分隔，根据这些依据得出的列表会经过 `|` 左侧进行处理后返回。


以最后一句代码 ``[x * 2 | x <- [1..10], x `mod` 2 == 0]`` 为例，求 `[1..10]` 区间所有除以 `2` 余数为 `0` 的数 (即 `[2,4,6,8,10]`)，然后将这些数全部乘以 `2`，得到 `[4,8,12,16,20]`。




