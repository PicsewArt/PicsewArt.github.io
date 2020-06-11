---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS 小知识: 获取网页内容高度"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 获取 Web 页面内容高度

利用 JavaScript 来实现，一般写在 UIWebView 代理中。

```objc

- (void)webViewDidFinishLoad:(UIWebView *)webView  {
    CGFloat height = [[webView stringByEvaluatingJavaScriptFromString:@"document.body.offsetHeight"] doubleValue];
		// ...
}

```




