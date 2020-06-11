---
title: "Haskell Primer 005: 认识元组"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0028.jpg'
---
学习了列表之后，我们再来认识一下元组 (`Tuple`)。



### 什么是元组

学习过 `C++` 的朋友应该对这个词不陌生，元组允许我们将多个不同类型的值组合为一个单一值。元组与列表有些类似，但元组含有的内容可以是多种类型的，此外，元组的长度是固定的，将元素存入元组时就需明确这一点。

```haskell
Haskell> (1,2)
(1,2)
Haskell> (2, 'a', "hello", 3.14)
(2,'a',"hello",3.14)
Haskell>
```

上面这样的数据都是元组，他们是使用圆括号 (`(`、`)`) 包含的一组元素，元素之间使用逗号 (`,`) 分隔。



### 序对

序对，即二元组，使用十分常见，对于序对的操作也有很多内置函数:

```haskell
Haskell> fst (1,2)
1
Haskell> snd (1,2)
2
```

它们分别返回序对的首项和末项，但注意，这些函数并不能作用于三元组、四元组等长度更大的元组:

```haskell
Haskell> snd (1,2,3)

<interactive>:6:5:
    Couldn't match expected type ‘(a0, b)’
                with actual type ‘(Integer, Integer, Integer)’
    Relevant bindings include it :: b (bound at <interactive>:6:1)
    In the first argument of ‘snd’, namely ‘(1, 2, 3)’
    In the expression: snd (1, 2, 3)
    In an equation for ‘it’: it = snd (1, 2, 3)
Haskell>
```

不过，你可以使用 `zip` 函数来生成序对列表:

```haskell
Haskell> zip [1,2,3,4,5] [6,7,8,9,0]
[(1,6),(2,7),(3,8),(4,9),(5,0)]
Haskell> zip [1,2,3,4,5] [1,2,3,4,5,6,7,8,9,0]
[(1,1),(2,2),(3,3),(4,4),(5,5)]
Haskell> zip [1..5] ['a', 'b']
[(1,'a'),(2,'b')]
Haskell>
```




