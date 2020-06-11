---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS 小知识: 为 UIView 设置图片"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 给 UIView 设置图片

* 方法一

```objc

UIImage *image = [UIImage imageNamed:@"<#Your Image#>"];
UIColor *color = [UIColor colorWithPatternImage:image];
UIView *view = [[UIView alloc] initWithFrame:<#CGRect#>];
[view setBackGroundColor:color];

```


* 方法二

```objc

UIImage *image = [UIImage imageNamed:@"<#Your Image#>"];
UIView *view = [[UIView alloc] initWithFrame:<#CGRect#>];
[view layer].contents = (__bridge id)image.CGImage;
// 显示的范围
[view layer].contentsCenter = CGRectMake(0.25, 0.25, 0.5, 0.5);

```




