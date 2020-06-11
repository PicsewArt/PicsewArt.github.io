---
title: "Xcode 8: Resource fork, Finder information, or similar detritus not allowed"
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
tags: [Xcode]
---
最近 Xcode 8 中遇到这样一个错误:

`.app: resource fork, Finder information, or similar detritus not allowed`

其实解决办法也简单，分别进入项目的目录、`DerivedData` 目录执行 `xattr -rc .` 即可。

参考内容:

* [https://forums.developer.apple.com/thread/48726](https://forums.developer.apple.com/thread/48726)
* [https://forums.developer.apple.com/thread/48905](https://forums.developer.apple.com/thread/48905)
* [com.apple.FinderInfo](https://danielfree.net/archives/10)
