---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
title:  "iOS 小知识: URL 脱义"
tags: [iOS]
---
介绍一些 iOS 小知识。

### URL 脱义

适用于 URL 中包含中文、其他 URL 或 URL 关键字的情况:

```objc
 NSString *newURL = (NSString *)CFBridgingRelease(CFURLCreateStringByAddingPercentEscapes(kCFAllocatorDefault,(CFStringRef)<#original_url#>,NULL,NULL,kCFStringEncodingUTF8));
```




