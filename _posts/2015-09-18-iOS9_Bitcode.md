---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS 9 : Bitcode"
tags: [iOS,iOS 9,Bitcode,App Thinning]
---
相信很多小伙伴即将开始着手 iOS 9 的适配工作了，下面我们就来了解一下 iOS 9 的一项新特性: `Bitcode`。

## 什么是 Bitcode

首先我们需要了解苹果的 [ ***App Thinning*** ](https://developer.apple.com/library/prerelease/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html#//apple_ref/doc/uid/TP40012582-CH35) 计划，该计划对 iOS 和 WatchOS 应用安装进行优化，旨在缩小应用体积使小容量设备的用户受益。

苹果在其官方文档中这样定义:

> Bitcode is an intermediate representation of a compiled program. Apps you upload to iTunes Connect that contain bitcode will be compiled and linked on the App Store. Including bitcode will allow Apple to re-optimize your app binary in the future without the need to submit a new version of your app to the store.

[ ***What’s New in Xcode-New Features in Xcode 7*** ](https://developer.apple.com/library/prerelease/ios/documentation/DeveloperTools/Conceptual/WhatsNewXcode/Articles/xcode_7_0.html)中这样描述:

> Bitcode. When you archive for submission to the App Store, Xcode will compile your app into an intermediate representation. The App Store will then compile the bitcode down into the 64 or 32 bit executables as necessary.

事实上，`App Thinning` 计划是通过将应用切片成`应用变体`(App Variants)，然后根据用户所使用的设备下载仅需的文件版本。而我们所说的 `Bitcode` ，如上文所述，它是被编译程序的一种中间形式的代码，包含 `Bitcode` 配置的程序将会在 App Store 上被编译和链接。当我们提交程序到 App Store 时， Xcode 会将程序编译为一个中间表现形式，也就是 `Bitcode`，然后再编译为可执行的 64 位或 32 位程序。`Bitcode` 允许苹果在我们不提交新版本的情况下也可以重新优化程序的二进制文件。

关于 `Bitcode` 的文件格式可以参考官方文档[ ***LLVM Bitcode File Format*** ](https://llvm.org/docs/BitCodeFormat.html#llvm-bitcode-file-format)

此外还有一项名为 `on-demand resources` 的新功能，它的出现意味着开发者能够省略应用的完整功能直到用户自己打开，当用户点击应用内容时，会动态从 App Store 下载，当存储空间紧张的时候会自动进行删除。

## 我必须使用 Bitcode 特性吗

回答这个问题要分为三种情况:

* 如果你开发的是 Watch 应用，那么苹果要求必须包含 Bitcode 配置  
* 如果你开发的是 iOS 应用，苹果并没有强制要求，你可以根据自己的需求或喜好来决定  
* 如果拟开发的是 OS X 应用，不论你否感到高兴，它暂时还不支持这个特性  

但是，虽然苹果没有强制要求 iOS 应用配置 `Bitcode`，如果你使用最新版的 Xcode 7，其 `Bitcode` 选项是默认开启。

如果要关闭 `Bitcode` 选项，可以前往应用的 `Target`，进入 `Build Settings` 中将 `Enable Bitcode` 设置为 `NO`。

## 我该如何适配

如果你没有关闭 `Bitcode` 选项，而你还没有做过相关适配，你可能会看到类似这样的错误:  

	(null): URGENT: all bitcode will be dropped because '/Users/myname/Library/Mobile Documents/com~apple~CloudDocs/foldername/appname/GoogleMobileAds.framework/GoogleMobileAds(GADSlot+AdEvents.o)' was built without bitcode. You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain an updated library from the vendor, or disable bitcode for this target. Note: This will be an error in the future.
	
或者  

	ld: -undefined and -bitcode_bundle (Xcode setting  `ENABLE_BITCODE` =YES) cannot be used together
	clang: error: linker command failed with exit code 1 (use -v to see invocation)
	
或者  

	ld: ‘/Users/**/Framework/SDKs/PolymerPay/Library/mobStat/lib**SDK.a(**ForSDK.o)’ does not contain bitcode. You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain an updated library from the vendor, or disable bitcode for this target. for architecture arm64

在上面第一个的错误中提到了处理意见:  

> You must rebuild it with bitcode enabled (Xcode setting ENABLE_BITCODE), obtain an updated library from the vendor, or disable bitcode for this target. for architecture arm64

也就是说，有两种处理方式:

* 更新相应 `library` 到支持 `Bitcode` 的版本 
* 关闭相应 `Target` 的 `Bitcode` 选项  

如果我们开启了 `Bitcode`，那么应用打包提交时，也会有 `Include Bitcode` 选项。

## 其他

[***Bitcode 官方文档***](https://developer.apple.com/library/prerelease/watchos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html#//apple_ref/doc/uid/TP40012582-CH35-SW2)

[***WWDC 2015 Session 102: Platforms State of the Union***](https://developer.apple.com/videos/wwdc/2015/?id=102)

