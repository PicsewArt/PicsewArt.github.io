---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0053.jpg'
title:  "iOS : App Group"
tags: [iOS,App Group]
---
本文主要介绍 App Group 功能。

我们可以使用 `NSUserDefaults` 来访问，当然，这里的 `NSUserDefaults` 并不是使用 `NSUserDefaults.standardUserDefaults()`:

```swift
let sharedUserDefault = NSUserDefaults(suiteName: "group.cn.meniny.AppGroupDemo")
```


此外你也可以使用 `NSFileManager.defaultManager()` 的 `containerURLForSecurityApplicationGroupIdentifier(groupIdentifier: String) -> NSURL?` 方法:

```swift
let containerURL = NSFileManager.defaultManager().containerURLForSecurityApplicationGroupIdentifier("group.cn.meniny.AppGroupDemo")
```




