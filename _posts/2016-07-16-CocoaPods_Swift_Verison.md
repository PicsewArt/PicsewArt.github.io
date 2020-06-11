---
title: "CocoaPods: Swift Version"
category: "CocoaPods"
tags: [CocoaPods, Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0055.jpg'
---
最近使用 CocoaPods 又出了点问题，在执行 `pod trunk push` 的时候，出现了 `Xcode Build` 错误，提示了一些关于 Swift 版本的错误。

起初尝试了配置 Xcode 项目中 `Use Legacy Swift Language Version` 选项，没有作用。于是更新了 CocoaPods 到最新的测试版本 `1.1.0`，因为新版中允许指定 Swift 版本，有两种方法:

* 通过 `--swift-version VERSION` 来指定
* 通过 `.swift-version` 文件来指定，你可以用 `echo "VERSION" > .swift-version` 创建一个这个文件。

这一操作顺利通过了 `pod lib lint` 指令的验证，但是在 `pod trunk push` 时又出现了新的问题:

> [!] The Pod Specification did not pass validation.
>
> The following validation failed:
>
> - Warnings: Unrecognized `pushed_with_swift_version` key.

看到 `Warnings` 第一反应是忽略😓，于是在 `pod trunk push` 后面加上了 `--allow-warnings` 选项，顺利通过了。
