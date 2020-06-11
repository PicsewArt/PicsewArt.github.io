---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS : 关闭 NSLog"
tags: [iOS,NSLog]
summary: "iOS : 关闭 NSLog"
---
在 iOS 开发中经常会用到 `NSLog` 方法输出一些调试日志到控制台，随着开发进程的推进，日志输出变得越来越多，应用发布后因此所产生的不必要的资源浪费也与日俱增，那么怎样解决这个问题呢？

当然，你可以单纯的全局替换 `NSLog` 为 `// NSLog`，但作为一个高傲的研发工程师的你怎么妥协于这种愚蠢的策略呢？

事实上虽然并不推崇大量使用宏定义(众所周知，宏定义的广泛使用可能会带来一些不必要问题，这也是为什么 Java 等语言摒弃了宏)，但某些情景下宏的使用也不失为一种好的策略。

```objc
#ifdef DEBUG
#define NSLog(...)  NSLog(__VA_ARGS__)
#else
#define NSLog(...)
#endif
```


这段代码的原理是，利用宏 `DEBUG` 的定义与否，将 `NSLog` 在非调试状态替换为空白内容，只需要加入 `.pch` 或其他公共头文件即可。





