---
title: "Haskell Primer 001: 尝鲜"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0008.jpg'
---
关于什么是 `Haskell` 以及为什么要选择 `Haskell` 的问题就不再讨论了。本文主要介绍学习 `Haskell` 要准备的工作。



请知悉: 这个系列的博客只是 `Haskell` 的基础知识，写给准备了解和学习 `Haskell` 的初学者。对于某些知识点，深入的内容可能会在后续的文章中出现，但太复杂的问题不在这些博客的范围之内。



#### 编辑器

编辑器你可以选择自己喜欢的任何工具，值得推荐的依然是 [Atom](https://atom.io)。

记得在 `Install` 中搜索和安装必要的语言插件。



#### 编译器

本系列教程中将会使用比较流行的 [GHC](https://www.haskell.org/ghc/)(Glasgow Haskell Compiler)，它的安装也很简单，你只需要下载 `Haskell Platform`，其中包含了许多运行时类库。

以 `Homebrew` 为例，请执行 `$ brew install haskell-platform`。

`GHC` 可以解释执行 `Haskell` 脚本，也可以进行编译。这些源文件通常以 `.hs` 为扩展名。

作为初学者，你可以通过 `ghci` 指令进入互动模式来开始你的学习。

```haskell
$ ghci
GHCi, version 7.10.3: https://www.haskell.org/ghc/  :? for help
Haskell>
```

你可以像我一样修改 `GHC` 的提示符，方法是编辑 `~/.ghci` 并输入 `set prompt "提示符文字> "` 即可。

现在，我们在 `GHC` 的互动模式中进行一些简单运算尝尝鲜:

```haskell
Haskell> 2+15
17
Haskell> 4*200
800
Haskell> 213-43
170
Haskell> 10/2
5
Haskell> (100*2)+123
323
Haskell> 5 * 100 - 20
480
Haskell> 5 * (100 - 20)
400
Haskell>
```

有时候也会出现一些问题:

```haskell
Haskell> 5 * -3

<interactive>:8:1:
    Precedence parsing error
        cannot mix ‘*’ [infixl 7] and prefix `-' [infixl 6] in the same infix expression
Haskell> 5 * (-3)
-15
Haskell>
```

也就是说使用负数时最好置于圆括号 `()` 中。

接下来试试布尔代数 (Boolean Algebra) 的演算，与其它语言类似， `&&` 表示且 (`AND`)，`||` 则表示或 (`OR`)，而 `not` 表示取反。

```haskell
Haskell> True && True
True
Haskell> True && False
False
Haskell> True || False
True
Haskell> not False
True
Haskell> not (True && False)
True
Haskell>
```

对于相等性，我们使用 `==` 表示相等，`/=` 表示不等。

```haskell
Haskell> 1 == 1
True
Haskell> 1 + 1 == 3
False
Haskell> 3 /= 3
False
Haskell> "Meniny" == "meniny"
False
Haskell> "Elias" == "Elias"
True
Haskell>
```



