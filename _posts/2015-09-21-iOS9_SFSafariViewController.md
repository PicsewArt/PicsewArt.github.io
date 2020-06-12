---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0004.jpg'
title: "iOS 9 : SFSafariViewController"
tags: [iOS,iOS 9,SFSafariViewController]
---
iOS 9 引入了很多实用的新特性，本文主要来介绍其中之一: ***`SFSafariViewController`***。

> 关于其他 iOS 9 的特性与功能，有兴趣的朋友可以参考我博客中的 [***iOS 9 适配系列***]({{ site.url }}/series/#ios9)。

在 iOS 9 出现之前，我们访问 Web 页面有这样几种方式:

* 跳转到 Safari
* `WebKit`(例如 `UIWebView` 及其子类 `WKWebView` 等)

(当然，你也可以从无到有创建自己的控件，这里不做讨论)

从 iOS 9 发布之后我们有了新的选择，那就是`SFSafariViewController`，它继承自 `UIViewController`，使你的用户不再需要离开应用就能使用 Safari 的诸多特性。

来看看苹果的介绍:

> The SFSafariViewController class provides a standard interface for browsing the web. The view controller includes Safari features such as Reader, AutoFill, Fraudulent Website Detection, and content blocking. It shares cookies and other website data with Safari. The user's activity and interaction with SFSafariViewController is not visible to your app, which can not access AutoFill data, browsing history, or website data. You do not need to secure data between your app and Safari.

> UI features include the following:

> * A read-only address field with a security indicator and Reader button.

> * An activity view controller with custom services that your app provides and the system-sharing activities, like messaging.

> * A button to open the page in Safari.

> * Back and forward navigation buttons.

> * A Done button.

> Use `SFSafariViewController` if your app lets users view websites from anywhere on the Internet. Use `WKWebView` if your app customizes, interacts with, or controls the display of web content.

  是的，我们不再需要大量自定控件和方法来实现一个简单地网页浏览功能了，马上来试试吧。

### 初探

首先，在使用 `SFSafariViewController` 之前我们需要引入 `Safari Services`:

```swift
import SafariServices
```

接下来，像使用其他控制器一样简单，它拥有两个初始化方法:

```swift
initWithURL:
initWithURL:entersReaderIfAvailable:Designated Initializer
```

来看一个简单地例子:

```swift
func openWithSafariVC(sender: AnyObject) {
	let svc = SFSafariViewController(URL: NSURL(string: "{{ site.url }}/")!)
	self.presentViewController(svc, animated: true, completion:?nil)
}
```

(在此之前，你可能需要配置 [***URLSchemes***]({{ site.url }}/ios/23-08-00-iOS9_URLScheme.html)、[***Bitcode***]({{ site.url }}/ios/23-07-00-iOS9_Bitcode.html) 和 [***ATS***]({{ site.url }}/ios/23-06-00-iOS9_ATS.html) )

### 协议

此外，你可能遵守
 `SFSafariViewControllerDelegate` 协议才能实现更多功能:

```swift
class ViewController: UIViewController, SFSafariViewControllerDelegate {
	...
}
```

当然，还需要在前面的 `openWithSafariVC(sender:)` 方法中设置代理:

```swift
svc.delegate = self
```

遵守协议之后，当然还需要实现其相关方法，例如我们前面说到的关闭功能:

```swift
func safariViewControllerDidFinish(controller: SFSafariViewController) {
	controller.dismissViewControllerAnimated(true, completion:?nil)
}
```

如果 ***`Done` 按钮被点击***，将会执行上面的 `safariViewControllerDidFinish(controller: SFSafariViewController)` 方法。

类似的，当***页面载入完成***，会执行:

```swift
safariViewController(controller: SFSafariViewController, didCompleteInitialLoad: Bool)
```

此外你还可以用下面的方法***定制 Action 菜单***:

```swift
safariViewController(controller: SFSafariViewController, activityItemsForURL: NSURL, title: String?) -> [UIActivity]
```

如果有兴趣，你还可以参考 [***SFSafariViewController の概要***](https://dev.classmethod.jp/smartphone/iphone/introducing-sfsafariviewcontroller/) 一文。
