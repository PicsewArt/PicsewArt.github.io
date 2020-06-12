---
title: "Xcode: Code Sense"
category: "Xcode"
copy: true
tags: [Xcode, Code Sense]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0037.jpg'
---
聊天的时候有人问了一个平常大家不太注意的问题, 如图, 左侧小图标:

![code sense]({{ site.url }}/assets/images/posts/content/code_sense.png)

以前无聊的时候研究过, 趁这个机会总结一下吧, 其实这些小图标苹果称为 `Code Sense`, 貌似在很早的 Xcode 版本中就已经出现了, 它们位于 `/Applications/Xcode.app/Contents/SharedFrameworks/DVTFoundation.framework/Versions/A/Resources/Assets.car` 中, 解包这个 `.car` 文件就可以看到相关的图片, 根据名称也可以判断出它们的代表的意义, 下面列举一部分常见的:

* 红色的图标表示 Macro 也就是宏
  * `#` 表示宏定义
* 棕色图标表示 `Core Data` 和命名空间/名字空间 (namespace)
  * `C` 表示 `modeled class`
  * `M` 表示 `modeled method`
  * `P` 表示 `modeled property`
  * `N` 表示 `C++` 中的命名空间 (namespace)
* 橙色图标表示别名 (aliased types)
  * `C̲` 表示 `Objective-C` 分类 (category)
  * `E` 表示枚举 `enum`
  * `T` 表示 `typedef`
* 绿色图标表示值 (variables)
  * `B` 表示绑定 `binding`
  * `ƒ` 表示函数 `function`
  * `F` 表示 `field`
  * `K` 表示常量 `constant`
  * `L` 表示局部变量 (local variable)
  * `O` 表示 `IBOutlet`
  * `V` 表示标志变量 `variable`, 例如 `ivar`, 全局变量 (global var), 局部变量 `local var` 等
  * `x` 表示参数 (parameter), 也就是 `f(x)` 中的 `x`
* 蓝色图标表示 (methods)
  * `A` 表示 `IBAction`
  * `M` 表示 `method`
  * `P` 表示 `property`
* 紫色图标表示集合类型 (aggregate types)
  * `C` 表示 `Objective-C`、`C++` 的类 (class)
  * `₠` 表示类扩展 (class extension)
  * `Pr` 表示 `Objective-C` 协议 (protocol)
  * `S` 表示结构体 (struct)
  * `U` 表示联合 (union)
