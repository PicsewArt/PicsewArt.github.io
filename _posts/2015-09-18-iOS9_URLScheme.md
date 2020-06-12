---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0054.jpg'
title:  "iOS 9 : URLScheme"
tags: [iOS,iOS 9,URLScheme,canOpenURL]
---
相信很多小伙伴即将开始着手 iOS 9 的适配工作了，下面我们就来了解一下 iOS 9 的一项新特性: `URLScheme`。

## URLScheme 白名单与 canOpenURL: 方法

在 iOS 9 中，苹果针对 `URLScheme` 又引入了新的白名单概念，在[ ***WWDC 2015 Session 703: Privacy and Your App*** ](https://developer.apple.com/videos/wwdc/2015/?id=703)中提到:

> If you call the "canOpenURL" method on a URL that is not in your whitelist, it will return "NO", even if there is an app installed that has registered to handle this scheme. A "This app is not allowed to query for scheme xxx" syslog entry will appear.

如果在 iOS 9 中调用 `canOpenURL:` 方法，则所涉及的  `URLScheme` 必须在 `Info.plist` 中列入白名单才能使用，否则该方法会返回 `NO`。

加入白名单的方法为:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>urlscheme1</string>
	<string>urlscheme2</string>
	<string>urlscheme3</string>
	<string>urlscheme4</string>
</array>
```

[ ***WWDC 2015 Session 703: Privacy and Your App*** ](https://developer.apple.com/videos/wwdc/2015/?id=703)还有这样一段话:

> So for apps that are linked before iOS 9 and are running on iOS 9, they will be given 50 distinct URL schemes.

也就是说，白名单也是有数量上限的，目前这个限制为50个。

此外在iOS 9 中另外一个方法 `openURL:` 也增加了一个 `UIAlertView` 形式的确认动作。
