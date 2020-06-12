---
category: "OS X"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0022.jpg'
title:  "Mac: 注册全局热键"
tags: [OS X, Cocoa]
---
使用 Cocoa 为应用注册热键, 首先需要引入 `Carbon.framework`, 并包含头文件。

```objc
#import <Carbon/Carbon.h>
```

接下来, 要做两件事, 注册热键、设置回调。

回调设置:

```objc
OSStatus MXHotKeyHandler(EventHandlerCallRef nextHandler,EventRef theEvent, void *userData) {
    // ... callback
    return noErr;
}
```

注册热键:

```objc
- (void)registerKey {
    EventHotKeyRef       gMyHotKeyRef;
    EventHotKeyID        gMyHotKeyID;
    EventTypeSpec        eventType;

    eventType.eventClass = kEventClassKeyboard;
    eventType.eventKind = kEventHotKeyPressed;

    InstallApplicationEventHandler(&MXHotKeyHandler, 1, &eventType, NULL, NULL);

    gMyHotKeyID.signature = 'capk';
    gMyHotKeyID.id = 1;

    // cmd + shift + x
    RegisterEventHotKey(7, cmdKey + shiftKey, gMyHotKeyID, GetApplicationEventTarget(), 0, &gMyHotKeyRef);
}
```

上面的示例中, 我们注册了 `⌘ + ⇧ + X` 为热键。`X` 的代码为 `7`, 其它键码可以在 `Carbon/Frameworks/HlToolbox/Events.h` 中查询。
