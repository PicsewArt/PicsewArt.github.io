---
title: "iOS 9 : Shared Links"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,iOS 9,Shared Links]
---
在 Safari Extensibility 中除了前面提到的 Content Blocker 之外，还有一个新功能叫做 Shared Links，它的作用正如它的名字，共享链接。

> 关于其他 iOS 9 的特性与功能，有兴趣的朋友可以参考我博客中的 [***iOS 9 适配系列***]({{ site.url }}/series/#ios9)。

有的小伙伴可能还要问，共享链接又是个什么鬼？

来设想这样一种情况:

某日，你的小伙伴想你分享一个十分高端大气上档次的链接: [{{ site.url }}/]({{ site.url }}/)，而你兴奋之余忘记将其加入收藏，尽管该链接十分简单好记，可是天真的你还是没有记住。那么你一定在想，如果小伙伴向你发送链接的应用能够自动将其加入收藏到 Safari，生活该有多美好呀。

是的，本文所介绍的 Shared Links，也就是共享链接，就是为了让生活更美好而存在的。

### 准备工作

新建项目之后，要使用 Shared Links 需要新建一个 Target，依次选择菜单 `File` => `New` => `Target...`，然后在新建面板中选择 `iOS`  => `Application Extension` => `Shared Links Extension`(注意不是 `Share Extension`)，然后点击 Next 并填写相关内容即可，本文使用 Swift 做说明。

如果出现 `Activate "Target名称" scheme` 提示，选择 `Activate` 即可，你也可以顺便勾选不再提示(`Do not show this message again`)的选项。

### 共享链接

在自动生成的 `RequestHandler.swift` 中显示这样一段代码:

```swift
import Foundation

class RequestHandler: NSObject, NSExtensionRequestHandling {

    func beginRequestWithExtensionContext(context: NSExtensionContext) {
        let extensionItem = NSExtensionItem()

        // The keys of the user info dictionary match what data Safari is expecting for each Shared Links item.
        // For the date, use the publish date of the content being linked
        extensionItem.userInfo = [ "uniqueIdentifier": "uniqueIdentifierForSampleItem", "urlString": "https://apple.com", "date": NSDate() ]

        extensionItem.attributedTitle = NSAttributedString(string: "Sample title")
        extensionItem.attributedContentText = NSAttributedString(string: "Sample description text")

        // You can supply a custom image to be used with your link as well. Use the NSExtensionItem's attachments property.
        // extensionItem.attachments = [ NSItemProvider(contentsOfURL: NSBundle.mainBundle().URLForResource("customLinkImage", withExtension: "png"))! ]

        context.completeRequestReturningItems([extensionItem], completionHandler: nil)
    }

}
```


是的，苹果就是这么体贴，有了这段代码之后我们一半的工作已经完成了。

观察这些代码可以发现，我们共享的 Link 对应了一个 `NSExtensionItem` 实例，这个类的定义也很简单:

```swift
public class NSExtensionItem : NSObject, NSCopying, NSSecureCoding, NSCoding {

    // (optional) title for the item
    @NSCopying public var attributedTitle: NSAttributedString?

    // (optional) content text
    @NSCopying public var attributedContentText: NSAttributedString?

    // (optional) Contains images, videos, URLs, etc. This is not meant to be an array of alternate data formats/types, but instead a collection to include in a social media post for example. These items are always typed NSItemProvider.
    public var attachments: [AnyObject]?

    // (optional) dictionary of key-value data. The key/value pairs accepted by the service are expected to be specified in the extension's Info.plist. The values of NSExtensionItem's properties will be reflected into the dictionary.
    public var userInfo: [NSObject : AnyObject]?
}

// Keys corresponding to properties exposed on the NSExtensionItem interface
@available(iOS 8.0, *)
public let NSExtensionItemAttributedTitleKey: String
@available(iOS 8.0, *)
public let NSExtensionItemAttributedContentTextKey: String
@available(iOS 8.0, *)
public let NSExtensionItemAttachmentsKey: String
```



也就是说:

* `userInfo` 表示共享的链接的 URL 地址

* `attributedTitle` 表示共享的链接要显示的标题

* `attributedContentText` 表示共享的链接要显示的描述

可见，要共享多个 Link，就需要创建多个不同的 `NSExtensionItem` 实例。

此外，预置代码中已经说明，允许自定义共享链接在 Shared Links 列表中显示的图标:

```swift
extensionItem. = @[[[NSItemProvider alloc] initWithContentsOfURL:[[NSBundle mainBundle] URLForResource:@"icon_image" withExtension:@"png"]]];
```


最后，运行你的应用，打开 Safari，选择书签图标，进入 `@` 符号的共享链接列表，点击右下角的订阅按钮，并在新出现的设置页面最后找到你的共享链接并启用。

注:

如果你的 Extension 中要使用 Containing App 的沙盒内容，需要使用 App Group 功能，参考 [***相关博客***]({{ site.blog_perma }}/iOS_App_Group/)。

