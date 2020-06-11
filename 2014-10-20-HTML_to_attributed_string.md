---
title: "iOS: HTML 转 NSAttributedString"
category: "iOS"
copy: true
tags: [iOS, NSAttributedString]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
将 HTML 代码转换成属性文字, 其实很简单:

```objc
- (NSAttributedString *)attributedStringFromHTML {
    NSData *data = [self dataUsingEncoding:NSUnicodeStringEncoding];
    NSAttributedString *attributedString = [[NSAttributedString alloc] initWithData:data options:@{NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType} documentAttributes:nil error:nil];
    return attributedString;
}
```
