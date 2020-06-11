---
title: "iOS 9 : Split View"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,iOS 9,Split View]
---
如果你越过狱，或者玩过苏菲，你一定对有过多个 App 同时运行同时显示同时使用的操作，使用 iOS 的小伙伴们最心痛的莫过于多任务，不过这一切都被 iOS 9 终结于此。

> 关于其他 iOS 9 的特性与功能，有兴趣的朋友可以参考我博客中的 [***iOS 9 适配系列***]({{ site.url }}/series/#ios9)。

在 iOS 9 中，多任务共有三种表现形式:

* Slide Over: 临时出现\交互的滑动覆盖

* Split View: 分屏多任务，目前 Split View 支持的分屏比例有三个，分别为 `1/2`、`1/3` 和 `2/3`

* Picture in Picture: 视频播放画中画

### Slide Over 滑动覆盖

在苹果的[官方文档](https://developer.apple.com/library/prerelease/ios/documentation/WindowsViews/Conceptual/AdoptingMultitaskingOniPad/index.html#//apple_ref/doc/uid/TP40015145)中指出，绝大部分 App 应当适配 Slide Over，且这项功能在系统中也是默认开启的，你可以在设置中的 `通用` => `多任务` 中查看和更改 `允许多个应用` 选项。

![Slide Over](https://img.blog.csdn.net/20151007222617821?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


### Split View 分屏多任务

虽然 Split View 并不是全设备支持，但苹果仍希望绝大部分的 App 都应当适配 Split View。

![Split View](https://img.blog.csdn.net/20151007222636660?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


也正是因此，在 XCode 7 中新建的项目，默认开启多任务支持。当然尽管如此你还是可以出于某些原因(例如懒)勾选 `Requires full screen` 或在 `Info.plist` 中添加 `UIRequiresFullScreen` 并设为 `YES` 来请求全屏体验。

在有了分屏支持的基础上，我们还需要在 `Info.plist` 中做进一步的配置:

* `UILaunchStoryboardName`: 通常使用启动界面 `LaunchScreen.xib` 即可，即填入 `LaunchScreen`

* `UISupportedInterfaceOrientations`: 需要支持上下左右四个方向的选装，可以在 Target 中通过勾选实现，四个方向分别是:

	* `UIInterfaceOrientationPortrait`

	* `UIInterfaceOrientationPortraitUpsideDown`

	* `UIInterfaceOrientationLandscapeLeft`

	* `UIInterfaceOrientationLandscapeRight`

```xml
<key>UILaunchStoryboardName</key>
     <string> LaunchScreen </string>
<key>UISupportedInterfaceOrientations</key>
     <array>
			<string>UIInterfaceOrientationPortrait</string>
			<string>UIInterfaceOrientationPortraitUpsideDown</string>
			<string>UIInterfaceOrientationLandscapeLeft</string>
			<string>UIInterfaceOrientationLandscapeRight</string>
     </array>
```


接下来，对于分屏的适配，最主要的部分就是 UI 的自适应，如果说你的项目完全做到了 UI 的自适应，那么这项适配工作将变得简单许多；否则，请做好加班准备。

对于使用 Size Classes 的项目来说，还有些问题需要注意，在此前 iPad 界面水平与垂直均为 `Regular` 布局，而随着分屏功能的出现，在水平方向上要分为 `Regular` 和 `Compact` 两种布局，也就意味着你需要处理 `w:Regular h: Regular` 和 `w:Compact h:Regular` 两种状态。

![Size Classes](https://img.blog.csdn.net/20151008144748743?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


如果你的项目使用了/准备使用纯代码的模式，建议你通过 `UIView` 的 `traitCollection` 属性获取当前 `SizeClass` 类型再做布局，并通过控制器的 `willTransitionToTraitCollection:withTransitionCoordinator:` 和 `viewWillTransitionToSize:withTransitionCoordinator:` 方法获取新的 `SizeClass` 类型再做调整。如果你不是初学者，我并不建议你使用苹果原生的 API 来构建 UI 布局，因为这样会大量增加代码量，不易于维护，而知名的第三方布局库诸如 [PureLayout](https://github.com/PureLayout/PureLayout) 和 [Masonry](https://github.com/SnapKit/Masonry) 都是不错的选择。

此外需要注意，随着分屏功能的出现，应用中 `UIScreen.mainScreen().bounds` 和 `UIWindow.keyWindow().bounds` 不再相同，请根据需要自行选择。

如果你对 Auto Layout 和 Size Classes 不太了解，可以参考 [喵神的相关博客](https://onevcat.com/2014/07/ios-ui-unique/)。

如果你不清楚应该使用纯代码还是 XIB/Storyboard 搭建 UI，请参考 [唐巧的相关博客](https://blog.devtang.com/blog/2015/03/22/ios-dev-controversy-2/)




