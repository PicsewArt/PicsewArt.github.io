---
title: "Objective-C: weakSelf"
category: "iOS"
copy: true
tags: [iOS, Objective-C]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
---
The correct way to define a weak object is:

```objc
__typeof__(obj) __weak wobj = obj;
```

Note that having `__weak` before the type is [technically incorrect](https://developer.apple.com/library/mac/#releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html).

However, you can find this in `AFNetworking`'s `AFURLConnectionOperation.m` codes:

```objc
__weak __typeof(&*self)weakSelf = self;
```

But the `__typeof__((__typeof__(self))self)` trick is not necessary anymore in the clang version Apple clang version `4.0` and later, like Xcode `4.4`+.
