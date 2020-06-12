---
title: "iOS 面试题: GCD Queue"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0021.jpg'
---
最近遇到和看到的一些面试题。

#### GCD里面有哪几种Queue?你自己建立过串行queue吗?背后的线程模型是什么样的?

* 主队列 `dispatch_main_queue();` 串行 ,更新UI
* 全局队列 `dispatch_global_queue();` 并行,四个优先级: `background`,`low`,`default`,`high`
* 自定义队列 `dispatch_queue_t queue;` 可以自定义是并行: `DISPATCH_QUEUE_CONCURRENT` 或者串行 `DISPATCH_QUEUE_SERIAL`
