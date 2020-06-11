---
title: "OS X: Menu Bar Extra is invisible in macOS Dark Mode"
category: "OS X"
copy: true
tags: [OS X, Mac, Cocoa, AppKit]
cave: true
hero:
  format: 'jpeg'
  url: 'post/macintosh.jpg'
---
周末提交的 APP 又被秒拒, 理由很简单, “Menu Bar Extra is invisible in macOS Dark Mode”, 菜单栏图标在黑色模式中看不到。

由于是第一次用黑白色的图标, 提交之前完全没有考虑到这个问题, 怎么解决呢? 其实很简单。

首先我想到的第一件事是监听, 先试了 `NSScreenColorSpaceDidChangeNotification` 不起作用, 后来找到了另一个通知:

```objc
[[NSDistributedNotificationCenter defaultCenter] addObserver:self selector:@selector(updateStatusBarItem) name:@"AppleInterfaceThemeChangedNotification" object:nil];
```

有效, 那么下一步更新菜单栏的内容, 可是这是问题又来了, 现在到底是什么模式呢?

这个问题其实也不难, 和我们常用的显示隐藏文件的指令类似, 使用终端是可以通过 `defaults` 来读取的:

```console
defaults read -g AppleInterfaceStyle
```

其实我们知道 defaults 指令就是 `CFPreferences` 的 `wrapper`, 那么我们可以用 `NSUserDefaults` 来做同样的事情:

```objc
- (void)updateStatusBarItem {
    NSString *osxMode = [[NSUserDefaults standardUserDefaults] stringForKey:@"AppleInterfaceStyle"];
    NSImage *dark = [NSImage imageNamed:@"Status"];
    NSImage *light = [NSImage imageNamed:@"StatusHighlighted"];
    if (osxMode != nil && [osxMode length]) { // which is in dark mode
        _statusItem.image = light;
        _statusItem.alternateImage = dark;
    } else {
        _statusItem.image = dark;
        _statusItem.alternateImage = light;
    }
}
```

如果当前模式为正常模式, 则获取的值为 `nil`, 如果是黑色模式, 则为 `Dark`。所以判断其是否为 `nil` 即可。

企图找到更好的解决方案时, 看到一种说法是使用 `NSAppearance`:

```objc
NSString *name = [NSAppearance currentAppearance].name;
if ([name containsString:NSAppearanceNameVibrantDark]) {
  // ... Dark
} else {
  // ... Normal
}
```

不过实际测试并没有起作用。
