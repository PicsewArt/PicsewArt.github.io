---
title: "iOS 面试题: viewWillLayoutSubView"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0044.jpg'
---
最近遇到和看到的一些面试题。

#### `viewWillLayoutSubView` 你总是知道的。

横竖屏切换的时候,系统会响应一些函数,其中 `viewWillLayoutSubviews` 和 `viewDidLayoutSubviews。`

```objc
- (void)viewWillLayoutSubviews {
    [self _shouldRotateToOrientation:(UIDeviceOrientation)[UIApplication sharedApplication].statusBarOrientation];
}

- (void)_shouldRotateToOrientation:(UIDeviceOrientation)orientation {
    if (orientation == UIDeviceOrientationPortrait || orientation == UIDeviceOrientationPortraitUpsideDown) {
        // 竖屏
    } else {
       // 横屏
    }
}
```

通过上述一个函数就知道横竖屏切换的接口了。

注意: `viewWillLayoutSubviews` 只能用在ViewController里面,在view里面没有响应。
