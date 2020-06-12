---
title: "iOS: Carthage Useage"
category: "iOS"
copy: true
tags: [iOS, Carthage]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0038.jpg'
---
# Carthage：去中心化的Cocoa依赖管理器

Cocoa的依赖管理器，我们已经有了CocoaPods，非常好用，那么为什么还要创建这样一个项目呢？本文翻译自Carthage的Github的[README.md](https://github.com/Carthage/Carthage#adding-frameworks-to-an-application)，带大家来了解一下这个工具有何不同之处。

Carthage的目标是用最简单的方式来管理Cocoa第三方框架。

基本的工作流如下：

1. 创建一个Cartfile，包含你希望在项目中使用的框架的列表

2. 运行Carthage，将会获取列出的框架并编译它们

3. 将编译完成的`.framework`二进制文件拖拽到你的Xcode项目当中

Carthage编译你的依赖，并提供框架的二进制文件，但你仍然保留对项目的结构和设置的完整控制。Carthage不会自动的修改你的项目文件或编译设置。

## Carthage与CocoaPods的不同

CocoaPods是已存在很长时间的Cocoa依赖管理器，那么为什么要创建Carthage呢？

首先，CocoaPods默认会自动创建并更新你的应用程序和所有依赖的Xcode workspace。Carthage使用`xcodebuild`来编译框架的二进制文件，但如何集成它们将交由用户自己判断。CocoaPods的方法更易于使用，但Carthage更灵活并且是非侵入性的。

CocoaPods的目标在它的[README](https://github.com/CocoaPods/CocoaPods/blob/1703a3464674baecf54bd7e766f4b37ed8fc43f7/README.md)文件描述如下：

> ...为提高第三方开源库的可见性和参与度，创建一个更中心化的生态系统。

与之对照，Carthage创建的是去中心化的依赖管理器。它没有总项目的列表，这能够减少维护工作并且避免任何中心化带来的问题 (如中央服务器宕机) 。不过，这样也有一些缺点，就是项目的发现将更困难，用户将依赖于Github的[趋势](https://github.com/trending?l=swift)页面或者类似的代码库来寻找项目。

CocoaPods项目同时还必须包含一个`podspec`文件，里面是项目的一些元数据，以及确定项目的编译方式。Carthage使用`xcodebuild`来编译依赖，而不是将他们集成进一个workspace，因此无需类似的设定文件。不过依赖需要包含自己的Xcode工程文件来描述如何编译。

最后，我们创建Carthage的原因是想要一种尽可能简单的工具----一个只关心本职工作的依赖管理器，而不是取代部分Xcode的功能，或者需要 让框架作者做一些额外的工作。CocoaPods提供的一些特性很棒，但由于附加的复杂性，它们将不会被包含在Carthage当中。

## 安装Carthage

Carthage提供OS X平台的pkg安装文件，你可以从Github的最新[release](https://github.com/Carthage/Carthage/releases)中找到，按照引导一步步安装即可。

如果你想安装最新的开发版本 (可能存在稳定性和兼容性的问题) ，你只需要clone本仓库的master分支，然后运行`make install`.

## 添加框架到应用程序

安装完Carthage后，你能够使用它来添加框架到你的项目。注意Carthage只支持动态框架，而后者只存在于iOS 8以上 (以及任意版本的OS X) 。

开始使用：

1. 创建一个Cartfile，将你想要使用的框架列在里面

2. 运行`carthage update`，将获取依赖文件到一个`Carthage.checkout`文件夹，然后编译每个依赖

3. 在你的应用程序target的"General"设置标签中的"Embedded Binaries"区域，将框架从`Carthage.build`文件夹拖拽进去。

在这个过程当中，Carthage将创建一些[build artifacts](https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md)，其中最重要的是`Cartfile.lock`文件，里面将列出每个框架的具体版本，确保你提交了这个文件到版本控制工具里面 (如Git、SVN) ，因为每个用到项目的人都需要它来编译相同版本的框架。

完成上面的步骤并提交你的修改，项目的其他用户就只需要获取该仓库并执行`carthage bootstrap`就能使用你所添加的框架。

## 添加框架到单元测试或另一个框架

使用Carthage添加框架到任意目标的方法，和添加到应用程序差不多。主要的不同在于框架是如何设置并链接到Xcode的。

因为非应用程序目标没有"Embedded Binaries"设置区域，你需要将编译完成后的框架拖拽到"Link Binaries With Libraries"的区域里。

在某些稀有案例中，你也许会想要复制每个依赖到已编译的项目中 (比如，在外部框架中嵌入依赖，或确保依赖在测试工具中正常显示) 。想要达到这个目的，你需要创建一个新的"Copy Files"编译选项和"Frameworks"组，然后将框架的引用添加到里面。

## 升级框架

如果你改动了你的Cartfile，或者你想升级到框架的最新版本 (服从于你指定的需求版本) ，执行`carthage update`命令可以达到目的。

## 让你的框架支持Carthage

Carthage只正式支持动态框架，动态框架能够在任何版本的OS X上使用，但只能在iOS 8及以上版本使用。

因为Carthage拥有非中心化的包列表，以及没有项目指定的编译设置，大多数框架应该能自动编译。

## 分享你的Xcode schemes

Carthage将只从你的`.xcodeproj`中标记为已分享的Xcode schemes来编译。如果你想检查编译是否成功，执行`carthage build --no-skip-current`命令，然后检查`Carthage.build`文件夹。

如果当执行命令但有scheme没有被编译，打开Xcode并确定对应scheme被标记为"Shared"，以便Carthage能够发现它。

## 解决编译失败

如果你在执行`carthage build --no-skip-current`时编译失败，尝试执行`xcodebuild -scheme SCHEME -workspace WORKSPACE build` 或`xcodebuild -scheme SCHEME -project PROJECT build` (将其中的大写单词换成你项目的对应名称) ，然后观察是否有相同的失败发生，这应该能生成足够的失败信息来解决问题。

## 稳定版发布的标签

Carthage使用语义化标签来发布稳定版本。如`1.2.0`，如带有字母则是不受支持的版本 (如`1.2-alpha-1`) .

## CarthageKit

大多数carthage命令行工具的功能都封装在一个名为CarthageKit的框架中。

如果你希望将Carthage作为另一个工具的一部分，或者希望扩展Carthage的功能，可以看看CarthageKit的[源码](https://github.com/Carthage/Carthage/blob/master/CarthageKit)，检查API是否符合你的需求。

## 授权协议

Carthage使用MIT开源协议授权发布。
