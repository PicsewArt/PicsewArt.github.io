---
title: "iOS 9 : Content Blocker"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
tags: [iOS,iOS 9,Content Blocker,广告拦截]
---
我猜很多人已经注意到，在 iOS 9 正式版发布之后，应用商店上开始大量出现广告拦截应用，本文就和小伙伴们一起来了解一下苹果新推出的内容拦截功能—— Content Blocker。

> 关于其他 iOS 9 的特性与功能，有兴趣的朋友可以参考我博客中的 [***iOS 9 适配系列***]({{ site.url }}/series/#ios9)。

### 准备工作

新建项目之后，要使用 Content Blocker 需要新建一个 Target，依次选择菜单 `File` => `New` => `Target...`，然后在新建面板中选择 `iOS`  => `Application Extension` => `Content Blocker Extension`，然后点击 Next 并填写相关内容即可，本文使用 Swift 做说明。

如果出现 `Activate "Target名称" scheme` 提示，选择 `Activate` 即可，你也可以顺便勾选不再提示(`Do not show this message again`)的选项。

### 拦截规则

创建好 Target 后，除了 `ActionRequestHandler.swift` 之外，机智的小伙伴们一定已经看到刚才一个名为 `blockerList.json` 的 JSON 文件，事实上 Content Blocker 的基本原理，正是通过 `ActionRequestHandler.swift` 中的代码将这个 `blockerList.json` 嵌入 Safari。

文件 `ActionRequestHandler.swift` 中的代码是这样的:

```swift
import UIKit
import MobileCoreServices

class ActionRequestHandler: NSObject, NSExtensionRequestHandling {

    func beginRequestWithExtensionContext(context: NSExtensionContext) {
        let attachment = NSItemProvider(contentsOfURL: NSBundle.mainBundle().URLForResource("blockerList", withExtension: "json"))!

        let item = NSExtensionItem()
        item.attachments = [attachment]

        context.completeRequestReturningItems([item], completionHandler: nil);
    }

}
```


那么，我们接下来就来了解一下 `blockerList.json` 中内容的编写规则。要了解这些规则，首先来观察一下 Xcode 自动生成的代码:

```js
[
    {
        "action": {
            "type": "block"
        },
        "trigger": {
            "url-filter": "webkit.org/images/icon-gold.png"
        }
    }
]
```


很显然，这段 JSON 代码中提供了一组 `action` 与 `trigger` 来构成一条规则。其中:

* `action`: 表示该条规则的拦截方式，其 `type` 可以为:
	* `block`: 拦截资源文件，如CSS文件、JS文件、图片资源等

	* `block-cookies`: 拦截cookies

	* `css-display-none`: 将指定 HTML 元素的 CSS 样式的 `display` 属性设置为 `none`)，这些 HTML 元素通过在 `action` 中加入 `selector`(CSS Selector) 键值对来指定，关于 `CSS Selector` 的相关内容请自行百度

* `triggerr`: 表示该条规则适用的 URL，允许使用正规表达式(RegEx)，关于正则表达式的语法请参考我之前的博客 [***RegEx Syntax***]({{ site.blog_perma }}/RegEX_Syntax/)

现在我们就能理解这些预置 JSON 代码的作用，即拦截 `webkit.org/images/icon-gold.png` 文件的加载。

最后，请记住要在 iDevice 中的`设置`应用中选择 `Safari` => `Content Blockers` 并启用你的插件(如果已经启用，你也可能需要关闭后重新启用)。

