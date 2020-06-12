---
title: "iOS 面试题: load 和 initialize 方法"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0062.jpg'
---
最近遇到和看到的一些面试题。

#### `+(void)load;`、`+(void)initialize;` 有什么用处?

在Objective-C中,runtime会自动调用每个类的两个方法。+load会在类初始加载时调用,+initialize会在第一次调用类的类方法或实例方法之前被调用。这两个方法是可选的,且只有在实现了它们时才会被调用。

共同点: 两个方法都只会被调用一次。
