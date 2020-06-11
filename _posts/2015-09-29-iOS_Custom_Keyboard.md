---
title: "iOS : Custom Keyboard"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS]
---
从 iOS 8 开始苹果允许开发者创造自己的第三方输入法，最近有些朋友问我关于第三方输入法开发的问题，所以也就有了这篇博客。

当然，我还是要说，如果你只是希望给自己的应用添加一个自定义的键盘或着给用户已有键盘添加更多功能，你也许只需要参阅 [关于自定义输入视图和输入辅助视图的介绍](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/InputViews/InputViews.html#//apple_ref/doc/uid/TP40009542-CH12)

## 功能实现



### 准备工作



首先在 Xcode 中创建一个工程，然后依次选择菜单 `File` => `New` => `Target...` 来新建一个 `Target`，并在新建面板中选择 `iOS` => `Application Extension` => `Custom Keyboard`。

![流程](https://img.blog.csdn.net/20150930223653228?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

### 输入法间的切换



事实上 Xcode 已经给我们提供了一段与 `nextKeyboardButton` 相关的代码来实现输入法之间的切换，这些代码已经可以运行使用，当然，运行后你需要在 `设置` => `通用` => `键盘` 中添加你的键盘才能使用。如果你不需要这些默认代码，可以将其删除，但需要注意的是，如果你的输入法想要通过审核，那么它必须具有明显的 UI 来帮助用户切换到其他输入法。切换输入法的核心代码是其实只是调用 [advanceToNextInputMode](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIInputViewController_Class/index.html#//apple_ref/occ/instm/UIInputViewController/advanceToNextInputMode) 方法:

```objc
	button.addTarget(self, action: "advanceToNextInputMode", forControlEvents: .TouchUpInside)
```
	
你也可以参阅 [官方文档](https://developer.apple.com/library/ios/documentation/General/Conceptual/ExtensibilityPG/Keyboard.html#//apple_ref/doc/uid/TP40014214-CH16-SW4)。

### 基本的输入与删除



按照你自己的意愿创建控件并布局后，接下来要实现的是基本的输入和删除功能，这需要在 [textDocumentProxy](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIInputViewController_Class/index.html#//apple_ref/occ/instp/UIInputViewController/textDocumentProxy) 中调用 [UIKeyInput](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIKeyInput_Protocol/index.html#//apple_ref/occ/intf/UIKeyInput) 协议中的 [insertText](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIKeyInput_Protocol/index.html#//apple_ref/occ/intfm/UIKeyInput/insertText:) 和 [deleteBackward](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIKeyInput_Protocol/index.html#//apple_ref/occ/intfm/UIKeyInput/deleteBackward) 方法，其中 `textDocumentProxy` 代表了当前文本输入对象，符合 [UITextDocumentProxy 协议](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextDocumentProxy_Protocol/index.html#//apple_ref/occ/intf/UITextDocumentProxy)。

```objc
let proxy = textDocumentProxy as UITextDocumentProxy
```

* 如果需要输入:

```objc
proxy.insertText("Meniny")
```

* 如果需要删除:  

```objc
proxy.deleteBackward()
```

### 删除内容的控制


	
在调用 `deleteBackward` 方法时可以通过使用 `textDocumentProxy` 中的 [documentContextBeforeInput](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextDocumentProxy_Protocol/index.html#//apple_ref/occ/intfp/UITextDocumentProxy/documentContextBeforeInput) 来获得插入点前面的文字内容，它返回一个字符串对象

### 插入点位置的控制



调用 `UITextDocumentProxy` 协议中的 [adjustTextPositionByCharacterOffset:](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextDocumentProxy_Protocol/index.html#//apple_ref/occ/intfm/UITextDocumentProxy/adjustTextPositionByCharacterOffset:) 方法即可实现。

### 换行的实现



你一定见过一些输入法例如百度输入法、搜狗输入法等支持在部分应用中执行换行操作，事实上这个功能的实现也很简单，只需要插入一个回车(此处代码接上文):

```objc
	proxy.insertText("\r")
```

### 输入对象内容变化的响应



实现 [UITextInputDelegate](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextInputDelegate_Protocol/index.html#//apple_ref/occ/intf/UITextInputDelegate) 相应的方法即可。

### 键盘类型的列换



通过响应输入对象的 [UIKeyboardType](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType) 属性来使自身针对不同的情况作出调整。

### 多语言键盘



想要实现多语言键盘，一般有两种方式:

* 针对每一种需要支持的语言创建不同的输入法

* 使用 [UIInputViewController](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIInputViewController_Class/index.html#//apple_ref/occ/cl/UIInputViewController) 类的 [primaryLanguage](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIInputViewController_Class/index.html#//apple_ref/occ/instp/UIInputViewController/primaryLanguage) 属性让用户可以动态切换到合适的语言，你可以参考下文 `Info.plist` 一节。

### 自动校正



通过使用 [UILexicon](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UILexicon_Class/index.html#//apple_ref/occ/cl/UILexicon) 类可以实现对用户输入的建议和矫正，其实例的词汇来源包括:

* 通讯录中的姓、名，不成对

* 用户词典(`设置` => `通用` => `键盘` => `用户词典`)

* 常用字字典

### 输入法显示名称的控制



你可以通过分别修改应用和输入法扩展的 `Target` 的 `Info.plist` 中的 `Bundle display name` 值来定义你的输入法在设置和输入法切换列表中显示的名称。

### Info.plist



在 [Information Property List Key Reference](https://developer.apple.com/library/prerelease/ios/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009247) 中介绍了一些可以在 `Info.plist` 中 `NSExtensionAttributes` 字典中使用的键值，分别是:

* `NSExtension`

* `NSExtensionAttributes`

* `IsASCIICapable`

* `PrefersRightToLeft`

* `PrimaryLanguage`

* `RequestsOpenAccess`

* `NSExtensionPointIdentifier`

* `com.apple.keyboard-service`

* `NSExtensionPrincipalClass`

* `KeyboardViewController`

#### IsASCIICapable



表示第三方输入法是否能够插入 `ASCII` 字符串。默认为 `NO`，如果你的输入法提供 [UIKeyboardTypeASCIICapable](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/econst/UIKeyboardTypeASCIICapable) 特性请设置为 `YES`。

#### PrefersRightToLeft



表示第三方输入法所支持的语言是否是从右到左的书写习惯(例如阿拉伯语什么的)，默认为 `NO`。

#### PrimaryLanguage


表示输入法所使用的语言，默认为 `en-US`，即美国英语，你可能需要参考 [相关文档](https://www.opensource.apple.com/source/CF/CF-476.14/CFLocaleIdentifier.c) 来查找到你需要的字符串值。

#### RequestOpenAccess



表示访问权限提升，如果你将 `RequestOpenAccess` 设置为 `YES`，那么你的输入法将获得这些权限:

* 允许访问位置服务和地址本数据库，在第一次访问时需要用户授权

* 允许与输入法应用共享容器，来实现词汇表等功能

* 允许上传输入字符等输入事件到服务器处理，来实现云输入等功能

* 允许访问 `iCloud`

* 允许通过输入法应用访问 `Game Center` 和 `IAP`。

* 允许协同受控应用以支持 `MDM`

在开启这些权限的同时，在用户隐私保护方面请多加留意。

		
## 什么不可以做



我们都知道 iOS 系统中有很多操作是不允许的，那么第三方输入法有哪些事情不能做呢？

### 功能访问限制



* 不能访问在设置中的大部分通用键盘设置(`设置` => `通用` => `键盘`)
* 不能访问字典重设功能(`设置` => `通用` => `还原` => `还原键盘字典`)

如果你需要使用上述功能，请创建一个标准设置选项，你可以参考[Implementing an iOS Settings Bundle](https://developer.apple.com/library/prerelease/ios/documentation/Cocoa/Conceptual/UserDefaults/Preferences/Preferences.html#//apple_ref/doc/uid/10000059i-CH6)。

### 输入对象限制



第三方输入法对某些文本输入对象不具有输入权限:

* 安全文本输入对象，例如 `secureTextEntry` 属性为 `YES` 的 `TextField` 对象

* 电话号码输入对象
	* `UIKeyboardTypePhonePad`
	* `UIKeyboardTypeNamePhonePad`

### 应用限制



开发者有权选择禁止在其应用中使用第三方第三方输入法，如果你也需要，请在 `AppDelegate` 中的 `application:shouldAllowExtensionPointIdentifier:` 方法中返回 `NO` 即可。

### 文字选择限制



第三方输入法能且只能在其 `UIInputViewController` 对象的主视图中显示，而文本选择由(第三方输入法无权访问的)应用程序来控制，因此第三方输入法不能选择文本。

### 话筒限制



和其他扩展一样，第三方输入法也没有权限访问话筒，也就是说语音输入功能是无法实现的。

### 输入法列表访问限制



并没有 API 可以支持获取输入法列表以及进一步访问上一个或下一个输入法，切换输入的功能请参考上文。
		
## 参考资料



更多详细的介绍可以参阅 [官方文档](https://developer.apple.com/library/ios/documentation/General/Conceptual/ExtensibilityPG/Keyboard.html#//apple_ref/doc/uid/TP40014214-CH16-SW1)。







