---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0050.jpg'
title:  "iOS 小知识: 忽略编译器警告"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 忽略警告

* 废弃

```objc

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

// 调用废弃方法...

#pragma clang diagnostic pop

```


* 未使用的值

```objc

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-variable"

int unused = 0;

#pragma clang diagnostic pop

```


* performSelector Leak

```objc

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Warc-performSelector-leaks"

[self performSelector:aSelector];

#pragma clang diagnostic pop
```




