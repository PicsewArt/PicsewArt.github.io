---
title: "iOS: Copy UIColor"
category: "iOS"
copy: true
tags: [iOS, UIColor]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0050.jpg'
---
`UIColor` 实例默认是不支持 `copy` 操作的, 但有时候我们还是需要这样的操作, 怎么实现呢?

```objc
// @implementation UIImage (Copying)
+ (UIImage *)decode:(UIImage *)image {
    if (image == nil) {
        return nil;
    }

    UIGraphicsBeginImageContextWithOptions(image.size, NO, image.scale);
    [image drawAtPoint:CGPointZero];
    UIImage *result = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    return result;
}

- (instancetype)copy {
    return [UIImage decode:self];
}
```
