---
title: "iOS 面试题: __block"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0031.jpg'
---
最近遇到和看到的一些面试题。

#### `__block` 在 ARC 和非 ARC 下含义一样吗?

在 `MRC` 中 `block variable` 在 `block` 中使用是不會 `retain` 的, 但是 ARC 中 `block` 則是會 `retain` 的,取而代之的是用 `weak` 或是 `unsafe_unretained` 來更精確的描述 `weak reference` 的目的。

其中前者只能在 iOS5 之後可以使用,但是比較好 (該物件 `release` 之後,此 `pointer` 會自動設成 `nil` )

而後者是 `ARC` 的環境下為了相容 4.x 的解決方案。

所以上面的範例中

```objc
__block MyClass* temp = ...;    // MRC環境下使用
__weak MyClass* temp = ...;    // ARC但只支援iOS5.0以上的版本
__unsafe_retained MyClass* temp = ...;  //ARC且可以相容4.x以後的版本
```
