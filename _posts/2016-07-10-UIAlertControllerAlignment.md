---
title: "iOS: UIAlertController text alignment"
category: "iOS"
copy: true
tags: [iOS, Swift, UIAlertController]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
Custom text alignment of `UIAlertController`:

```swift
let controller = UIAlertController(title: t, message: informative, preferredStyle: type)

let paragraphStyle = NSMutableParagraphStyle()
paragraphStyle.alignment = alignment
paragraphStyle.lineBreakMode = lineBreakMode

let messageText = NSMutableAttributedString(string: info, attributes: [
  NSParagraphStyleAttributeName: paragraphStyle,
  NSFontAttributeName: font ?? UIFont.systemFont(ofSize: 12),
  NSForegroundColorAttributeName: textColor ?? UIColor.darkGray
  ])
controller.setValue(messageText, forKey: "attributedMessage")
```
