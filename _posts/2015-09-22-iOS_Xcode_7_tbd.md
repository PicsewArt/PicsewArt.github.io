---
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0013.jpg'
title: "Xcode 7 : 浅析 .tbd 与 .dylib"
tags: [iOS,Xcode 7,tbd,dylib]
summary: "Xcode 7 : 浅析 .tbd 与 .dylib"
---
不少升级 Xcode 7 的小伙伴们都表示在引入动态库时惊呆了，因为熟悉的 `.dylib` 不见了，取而代之的是 `.tbd`。

### .dylib 去哪了

事实上 `.dylib` 还在原来的位置，而且我们也可以通过解析 `.tbd` 来找到他们，要使用原来的 `.dylib` 文件可以这样做:

* 选择 `Target`

* 选择 `BuildPhases`

* 展开 `Link Binary With Libraries`

* 点击 `+`

* 点击 `Add other`

* 按下 `⌘` + `⇧` + `G`

* 输入 `/usr/lib/`

### .tbd 是什么

经过苦苦的搜索之后，还是没有(!!!)任何有价值的文献，只在苹果开发者论坛中有一段来自苹果官方的回答:

> For those who are curious, the .tbd files are new ***"text-based stub libraries"***, that provide a much more compact version of the stub libraries for use in the SDK, and help to significantly reduce its download size.

简单说， `.tbd` 又是和苹果压缩 iOS 系统和应用体积的政策的产物。

### .tbd 出错了

如果你在使用 `.tbd` 时出现类似这样的的错误:

>  warning: skipping file '/Users/me/xcode7/Xcode-beta.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS9.0.sdk/usr/lib/libz.tbd' (unexpected file type 'text' in Frameworks & Libraries build phase)"

请参考下面的解决办法:

> To work around this issue for now, please:
>
* Delete all references to .tbd files from either your linked libraries phase, or from the copied bundle resources phase (where they sometimes will be added).
* Add the library you want to link manually to the "Other Linker Flags" build settings, by adding the argument:
             `-l<library_name>`
          for each library you want to link (for example, add "`-lsqlite3`" (without quotes)).

也就是说:

* 删除所有 `.tbd` 引用，不论 `Link Binary With Libraries` 还是 `Copy Bundle Resources`

* 在 `Build Settings` => `Other Linker Flags` 中手动将每一个你要导入的库以 `-l<library_name>` 的形式添加，例如你要导入 `sqlite3` 则添加 `-lsqlite3`。
