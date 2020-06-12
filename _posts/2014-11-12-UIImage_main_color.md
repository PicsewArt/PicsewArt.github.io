---
title: "iOS: UIImage 获取主色调"
category: "iOS"
copy: true
tags: [iOS, UIImage]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0059.jpg'
---
获取一个 `UIImage` 实例的主色调:

```objc
// @implementation UIImage (Detector)
- (UIColor *)mainColor {

#if __IPHONE_OS_VERSION_MAX_ALLOWED > __IPHONE_6_1
    int bitmapInfo = kCGBitmapByteOrderDefault | kCGImageAlphaPremultipliedLast;
#else
    int bitmapInfo = kCGImageAlphaPremultipliedLast;
#endif

    // 1 先把图片缩小 加快计算速度. 但越小结果误差可能越大
    CGSize thumbSize = CGSizeMake(50, 50);

    CGColorSpaceRef colorSpace = CGColorSpaceCreateDeviceRGB();
    CGContextRef context = CGBitmapContextCreate(NULL,
                                                 thumbSize.width,
                                                 thumbSize.height,
                                                 8,//bits per component
                                                 thumbSize.width*4,
                                                 colorSpace,
                                                 bitmapInfo);

    CGRect drawRect = CGRectMake(0, 0, thumbSize.width, thumbSize.height);
    CGContextDrawImage(context, drawRect, self.CGImage);
    CGColorSpaceRelease(colorSpace);

    // 2 取每个点的像素值
    unsigned char* data = CGBitmapContextGetData(context);

    if (data == NULL) {
        CGContextRelease(context);
        return nil;
    }

    NSCountedSet *cls = [NSCountedSet setWithCapacity:thumbSize.width*thumbSize.height];

    for (int x = 0; x < thumbSize.width; ++x) {
        for (int y = 0; y < thumbSize.height; ++y) {

            int offset = 4 * (x * y);

            int red = data[offset];
            int green = data[offset + 1];
            int blue = data[offset + 2];
            int alpha =  data[offset + 3];

            NSArray <NSNumber *>*clr = @[@(red), @(green), @(blue), @(alpha)];
            [cls addObject:clr];

        }
    }
    CGContextRelease(context);

    // 3 找到出现次数最多的那个颜色
    NSEnumerator *enumerator = [cls objectEnumerator];
    NSArray *curColor = nil;

    NSArray <NSNumber *>*MaxColor = nil;
    NSUInteger MaxCount = 0;

    while ((curColor = [enumerator nextObject]) != nil) {
        NSUInteger tmpCount = [cls countForObject:curColor];

        if (tmpCount < MaxCount) {
            continue;
        }

        MaxCount = tmpCount;
        MaxColor = curColor;
    }

    CGFloat r = [MaxColor[0] intValue] / 255.0f;
    CGFloat g = [MaxColor[1] intValue] / 255.0f;
    CGFloat b = [MaxColor[2] intValue] / 255.0f;
    CGFloat a = [MaxColor[3] intValue] / 255.0f;

    return [UIColor colorWithRed:r green:g blue:b alpha:a];
}
```
