---
title: "OS X: Simulating mouse input programmatically"
category: "OS X"
tags: [OS X, macOS, Quartz Event Services]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0056.jpg'
---
玩过远程辅助工具小伙伴应该都对模拟鼠标事件不陌生, 要做到这件事, 可以使用 [Quartz Event Services](https://developer.apple.com/reference/coregraphics/1658572-quartz_event_services)。

先来一个 Demo, 首先要引入 `ApplicationServices`:

```c
#include <ApplicationServices/ApplicationServices.h>
```

接下来, 要模拟事件, 首先需要创建事件:

```c
CGPoint p1 = CGPointMake(500, 500);
CGPoint p2 = CGPointMake(700, 700);

// Move to p1
CGEventRef move1 = CGEventCreateMouseEvent(
    NULL, kCGEventMouseMoved, p1,
    kCGMouseButtonLeft // ignored
);
// Move to p2
CGEventRef move2 = CGEventCreateMouseEvent(
    NULL, kCGEventMouseMoved, p2,
    kCGMouseButtonLeft // ignored
);
// Left button down at p2
CGEventRef click1_down = CGEventCreateMouseEvent(
    NULL, kCGEventLeftMouseDown, p2,
    kCGMouseButtonLeft
);
// Left button up at p2
CGEventRef click1_up = CGEventCreateMouseEvent(
    NULL, kCGEventLeftMouseUp, p2,
    kCGMouseButtonLeft
);
```

上面我们创建了两个坐标点, 并创建了移动鼠标和鼠标左键按下、放开的事件。

现在, 执行它们:

```c
// Execute events
CGEventPost(kCGHIDEventTap, move1);
sleep(1);
CGEventPost(kCGHIDEventTap, move2);
sleep(1);
CGEventPost(kCGHIDEventTap, click1_down);
CGEventPost(kCGHIDEventTap, click1_up);

// Release the events
CFRelease(click1_up);
CFRelease(click1_down);
CFRelease(move2);
CFRelease(move1);
```

我们分别执行了前面创建的四个事件, 为了让显示效果更明显, 我们在执行事件的代码之间加入了 `sleep()`。

事件执行之后, 不要忘记进行释放。
