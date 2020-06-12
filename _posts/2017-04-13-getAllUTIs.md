---
title: "Determining UTIs defined by App bundles"
category: "OS X"
copy: true
tags: [OS X, UTIs]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0022.jpg'
---
We know that `lsregister -dump` is an option; however, I'm left to wonder if there isn't a better solution.

In my searching I've come across a private API that could be of use:

`__UTCopyDeclaredTypeIdentifiers`

Since there's absolutely no documentation for it, I give you this:

```swift
import Foundation
@_silgen_name("_UTCopyDeclaredTypeIdentifiers") func UTCopyDeclaredTypeIdentifiers() -> CFArray

let UTIs = UTCopyDeclaredTypeIdentifiers()
print(UTIs)
```

Should print all the `UTIs` that the function knows about. Pretty simple.
