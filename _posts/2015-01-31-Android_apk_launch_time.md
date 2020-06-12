---
title: "Android : adb 与应用启动时间"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0017.jpg'
tags: [Android,Launch Time]
---
尽管大家都知道 adb 获取应用启动时间的方法，但似乎很多人并不清楚获取的值代表着什么。

对于应用来说，指令是类似这样的:

```sh

adb shell am start -w packageName/MainActivity
    
```

在 Android 5.0 之前，你会获得两个值 —— `ThisTime`，`TotalTime`，而 5.0 开始增加了一个值，叫做 `WaitTime`。

对于这三个值，简单来说:

* `ThisTime` : 表示连续启动的 `Activity` 中最后一个的启动耗时。

* `TotalTime` : 表示启动耗时，包含了启动新的进程与和 `Activity` 的耗时。换句话说，就是你的应用自身启动的时间，从进程创建(如果需要)到窗口绘制完成。

* `WaitTime` : 相对于 `TotalTime`，它额外包含了前一个应用的 `Activity` 的 `Pause` 耗时。

所以通常来说我们只关注 `TotalTime` 即可。

当然，如果你的应用进程没有被结束，那么下次启动(也即热启动)时这个时间将会有所减少。







