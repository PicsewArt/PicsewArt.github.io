---
title: "OS X: NSMenuItem 快捷键"
category: "OS X"
copy: true
tags: [OS X, NSMenuItem]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0053.jpg'
---
`NSMenu` 是很常用的东西, 除了可以通过点击响应事件外, 还可以设置快捷键:

```objc
NSMenuItem *hasKey = [[NSMenuItem alloc] initWithTitle:@"Hit Command+Shift+X" action:@selector(hitKeys) keyEquivalent:@"X"];
[hasKey setKeyEquivalentModifierMask:NSEventModifierFlagCommand | NSEventModifierFlagShift];
```

> 更新: `NSEventModifierFlags` 已被替换为 `NSCommandKeyMask`、`NSShiftKeyMask`...
