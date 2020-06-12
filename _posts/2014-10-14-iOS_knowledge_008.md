---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0043.jpg'
title:  "iOS 小知识: 去除 NSString 两端空白与空行"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 去除 NSString 两端空白与空行"

* 去除两端空格

`[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceCharacterSet]];`

* 去除两端换行

`[string stringByTrimmingCharactersInSet:[NSCharacterSet newlineCharacterSet]];`

* 去除两端空格和换行

`[string stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];`





