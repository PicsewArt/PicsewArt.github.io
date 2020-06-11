---
title: "NSImage: Get size in pixels"
category: "OS X"
copy: true
tags: [OS X, NSImage]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
---
Just simple:
```swift
let rep = originImage.representations.first
let pixelSize = CGSize(width: (rep?.pixelsWide)!, height: (rep?.pixelsHigh)!)
```
