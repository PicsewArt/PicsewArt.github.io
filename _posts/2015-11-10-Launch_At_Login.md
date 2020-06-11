---
title: "OS X: Launch At Login"
category: "OS X"
copy: true
tags: [OS X, Launch]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0001.jpg'
---
To have the app launch start at login you just need to call `SMLoginItemSetEnabled` with your bundle ID and bool value.

```objc
SMLoginItemSetEnabled ((__bridge CFStringRef)@"com.domain.example", YES) // NO to cancel launch at login
```

You need `ServiceManagement` framework to access this API.

This is not a private API so you can use this and submit your apps to App Store.
