---
title: "NSImage: Get size in pixels"
category: "OS X"
copy: true
tags: [OS X, NSImage]
cave: true
hero:
  format: 'jpeg'
  url: 'post/macintosh.jpg'
---
Just simple:
```swift
let rep = originImage.representations.first
let pixelSize = CGSize(width: (rep?.pixelsWide)!, height: (rep?.pixelsHigh)!)
```
