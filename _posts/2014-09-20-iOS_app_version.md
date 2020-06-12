---
title: "iOS: 获取应用版本"
category: "iOS"
copy: true
tags: [iOS]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0037.jpg'
---
获取 iOS 应用版本信息:

```objc
- (NSString *)applicationVersion {
    return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
}

- (NSString *)buildVersion {
    return [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"];
}
```
