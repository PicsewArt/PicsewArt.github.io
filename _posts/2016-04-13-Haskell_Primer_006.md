---
title: "Haskell Primer 006: 模式匹配"
category: "Haskell"
tags: [Haskell, Haskell Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0047.jpg'
---
模式匹配主要用来定义一些数据必须遵循的规则，根据他们来解析数据。



例如:

```haskell
sevencheck :: Integer -> Bool
sevencheck 7 = True
sevencheck x = False

head' [x] = x
head' [] = "error"
head' (x:_) x
```

你也可以对数据进行引用，可以添加 `引用名称@`:

```haskell
firstletter :: String -> String
firstletter "" = "empty"
firstletter all@(x:_) = "first letter of " ++ all ++ " is " ++ [x]
```

### where

首先要注意，在使用模式匹配时，`where` 只能被当前模式读取，而不能被其它模式所读取。



其次，在 `where` 中也可以使用模式匹配，例如:

```haskell
firstLetterOfName :: String -> String -> String
firstLetterOfName firstname lastname = [f] ++ " " ++ [l]
    where (f:_) = firstname
          (l:_) = lastname
```

更进一步，你还可以定义函数:

```haskell
calcarea :: [(Double, Double)] -> [Double]
calcarea l = [area w h | x > 0, y > 0]
    where area w h = w * h
```




