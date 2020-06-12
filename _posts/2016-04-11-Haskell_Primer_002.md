---
title: "Haskell Primer 002: 函数初探"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0048.jpg'
---
通过上一篇我们简单尝试了 `Haskell` 语言，也许你没有察觉，其实我们自始至终都在使用着函数。

前面我们使用的运算符 `+`、`-`、`*`、`/` 其实都是函数，像这样置于两个参数之间调用的函数，称为中缀函数 (`Infix Function`)。类似的还有前缀函数 `(Prefix Function)`，通过函数名后空格并接以参数列表的形式调用，其中参数列表也以空格分隔。

```haskell
Haskell> succ 1
2
Haskell> min 100 200
100
Haskell> max 20 99
99
Haskell>
```

其中 `succ` 表示获取后继，一个整数的后继，就是比它大 1 的下一个数，例如 2 的后继为 3，而 3 的后继为 4。

我们都知道在进行数的运算时会有优先级的问题，函数调用也是这样。在 `Haskell` 中函数调用的优先级最高，举个例子:

```haskell
Haskell> succ 2 + max 10 20
23
Haskell> succ 2 * 5
15
Haskell> succ (2 * 5)
11
Haskell>
```

对于前缀函数，如果其参数有两个，则可以使用一对反引号 ``(`) `` 将其包含后以中缀函数形式调用，例如:

```haskell
Haskell> div 99 3
33
Haskell> 99 `div` 3
33
Haskell>
```

在本例中，中缀形式的调用可以增强可读性。





