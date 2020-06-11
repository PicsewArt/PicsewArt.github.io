---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS Waring: TabBar Item States"
tags: [iOS]
summary: "iOS Waring: TabBar Item States"
---
在设置 `TabBar` 文字属性时，可能会遇到类似这样的警告：

	button text attributes only respected for UIControlStateNormal, UIControlStateHighlighted and UIControlStateDisabled. state = 4 is interpreted as UIControlStateHighlighted.

这可能是因为你写了这样的代码：

```objc
UIBarButtonItem *item = [UIBarButtonItem appearance];
[item setTitleTextAttributes:@{NSForegroundColorAttributeName : [UIColor whiteColor]} forState:UIControlStateSelected];
```

注意上述代码中使用了 `UIControlStateSelected` 这个状态，但警告中已经说明，在该情境中 ***按下状态*** 被认为是 `UIControlStateHighlighted`，因此我们只需要修改这个状态即可。
