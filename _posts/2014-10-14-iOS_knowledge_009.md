---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0062.jpg'
title:  "iOS 小知识: 生成随机浮点数"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 生成随机浮点数

定义宏 `#define ARC4RANDOM_MAX 0x100000000`。

使用 `arc4random()` 来获取 0 ~ 100 的浮点数了: `double val = floorf(((double)arc4random() / ARC4RANDOM_MAX) * 100.0f)`





