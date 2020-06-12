---
title: "怎样验证 Xcode 来源"
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0040.jpg'
tags: [iOS,Xcode,Xcode Ghost]
---
由于 Xcode Ghost 肆虐，苹果提供了验证 Xcode 来源的方法，需要使用终端:
```sh
spctl --assess --verbose /Applications/Xcode.app
```


其中 `/Applications/Xcode.app` 是你系统中 Xcode 的路径，你也可能与这里的不同。

如果你得来源是 App Store:
```sh
/Applications/Xcode.app: accepted
source=Mac App Store
```


开发者网站:
```sh
/Applications/Xcode.app: accepted
source=Apple
```


开发者网站:
```sh
/Applications/Xcode.app: accepted
source=Apple System
```




