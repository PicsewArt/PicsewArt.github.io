---
title: "Haskell Primer 003: 函数定义"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
---
尝试了一些函数调用之后，紧接着了解一下函数的定义，这与调用的形式类似，只是多了函数行为的定义:

```haskell
函数名 参数1 参数2 参数3 参数4 ... = 函数行为
```

例如:

```haskell
doubleIt x = x * 2
doubleThem x y = (x + y) * 2
```

将这两个函数定义语句保存在一个 `.hs` 文件中，例如 `/Users/Meniny/func.hs`。

然后将终端工作目录切换到 (`cd`) 该目录，进入 `GHCi` 并执行 `:l func` 命令:

```haskell
Haskell> :l func
[1 of 1] Compiling Main             ( func.hs, interpreted )
Ok, modules loaded: Main.
Haskell> doubleIt 9
18
Haskell> doubleThem 2 3
10
Haskell> 2 `doubleThem` 3
10
Haskell> doubleThem 2 3 + doubleIt 9
28
Haskell>
```

与主流语言 (例如 C) 不同的是，在我们的 `func.hs` 中，函数定义的顺序对程序并没有影响。

此外，你当然也可以在你的函数行为定义中调用其它函数，比如我们的 `doubleThem` 还可以这样写:

```haskell
doubleThem x y = doubleIt x + doubleIt y
```

在实际应用中，函数行为并不会总是这么简单，下面我们尝试一些复杂的函数:

```haskell
amIOldEnough x = if x >= 18
                then True
                else False
```

这个函数可以判断你输入的年龄是否大于或等于 18:

```haskell
Haskell> amIOldEnough 18
True
Haskell> amIOldEnough 10
False
Haskell>
```

与多数语言不同的是，`else` 部分是**不可**省略的，因为 `Haskell` 程序事实上是一个函数的集合，这些函数将数据作为参数，处理转换为结果，也就是说，这里的 `if` 事实上是一个必然返回结果的表达式 (`Expression`)，而不是语句 (`Statement`)。



当然，那些换行是不必要的。



伴随着函数定义出现的，通常还有函数类型说明，也叫声明:

```haskell
函数名 :: 参数类型1 -> 参数类型2 ... -> 参数类型n -> 返回类型
```

例如，一个求整数平方的函数:

```haskell
square :: Integer -> Integer
square n = n * n
```

这写代码表明，`square` 函数接受一个整数参数，处理后返回一个整数结果，其处理过程为将输入参数乘以自身，即平方。



类似的，也可以接受更多参数:

```haskell
squaresum :: Integer -> Integer -> Integer
squaresum x y = x * x + y * y
```



对于函数名，在 `Haskell` 中使用单引号 `'` 是合法的，例如:

```haskell
someFunction' x = x + 1
another'function x = x + 2
give'me'a'strng = "This is Elias."
```

使用起来并没有什么不同:

```haskell
Haskell> someFunction' 2
3
Haskell> another'function 3
5
Haskell> give'me'a'string
"This is Elias."
Haskell>
```

但是，通常 `'` 符号被用来区分这是某个函数的严格求值版本 (相对于惰性求值)，或稍有不同的版本。



此外，为了应对更多种情况，我们也会使用守卫 (`guard`) 来进行区分:

```haskell
函数名 参数1, 参数2 ... 参数3
    | 守卫条件1 = 结果1
    | 守卫条件2 = 结果2
    ...
    | otherwise = 结果n
```

例如:

```haskell
max :: Integer -> Integer -> Integer
max x y
      | x >= y   =x
      |otherwisr = y
```

有些情况下，在 `guard` 条件中，可能多次进行重复的计算:

```haskell
arealevel :: Double -> Double -> String
arealevel w h
    | w * h <= 1 = "Tiny"
    | w * H <= 10 = "Small"
    | w * H <= 100 = "Normal"
    | w * h <= 1000 = "Big"
    | otherwise = "Huge"
```

显然，仅仅是本例中简单的 `w * h` 计算，多次书写也已经十分繁琐了，更不方便代码维护。这时候，就要用到 `where`:

```haskell
arealevel :: Double -> Double -> String
arealevel w h
    | a <= 1 = "Tiny"
    | a <= 10 = "Small"
    | a <= 100 = "Normal"
    | a <= 1000 = "Big"
    | otherwise = "Huge"
    where a = w * h
```



最后，你也许已经注意到了，我们的函数定义都以小写字母开头，这是因为 `Haskell` 中 **函数名不能以大写字母开头**。




