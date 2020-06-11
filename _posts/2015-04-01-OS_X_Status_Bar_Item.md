---
title: "OS X: Create Status Bar Item"
category: "OS X"
copy: true
tags: [OS X, NSStatusBarItem]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0026.jpg'
---
直入主题, 为 OS X APP 添加菜单栏图标:

```objc
NSStatusItem *statusItem = [[NSStatusBar systemStatusBar] statusItemWithLength:NSVariableStatusItemLength];
statusItem.image = [NSImage imageNamed:@"normal"];
statusItem.alternateImage = [NSImage imageNamed:@"highlight"];
statusItem.action = @selector(clickStatusItem);
```

如果你使用菜单, 也可以设置:

```objc
NSMenu *menu = [[NSMenu alloc] initWithTitle:@"Menu"];
NSMenuItem *item = [[NSMenuItem alloc] initWithTitle:@"Demo" action:nil keyEquivalent:@""];
NSMenuItem *quit = [[NSMenuItem alloc] initWithTitle:@"Quit" action:@selector(quit) keyEquivalent:@""];
[menu addItem:item];
[menu addItem:[NSMenuItem separatorItem]];
[menu addItem:quit];
statusItem.menu = menu;
```

针对 `NSMenu` 你可以进一步自定义, 比如快捷键等。
