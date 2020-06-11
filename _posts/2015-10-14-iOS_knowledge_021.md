---
title: "iOS 面试题: UIImageView 圆角"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
最近遇到和看到的一些面试题。

#### 如何高性能的给UIImageView加个圆角?(不准说layer.cornerRadius!)

可以使用Quartz2D直接绘制图片。

* 创建目标大小(cropWidth,cropHeight)的画布。
* 使用`UIImage`的`drawInRect`方法进行绘制的时候,指定rect为`(-x,-y,width,height)`。
* 从画布中得到裁剪后的图像。

```objc
+ (UIImage)cropImageWithRect:(CGRect)cropRect {
    CGRect drawRect = CGRectMake(-cropRect.origin.x , -cropRect.origin.y, self.size.width self.scale, self.size.height * self.scale);

    UIGraphicsBeginImageContext(cropRect.size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextClearRect(context, CGRectMake(0, 0, cropRect.size.width, cropRect.size.height));

    [self drawInRect:drawRect];

    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();

    return image;
}
```

也可以使用贝塞尔曲线来切割图片:

```objc
UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 100, 100)];
imageView.center = CGPointMake(200, 300);
UIImage *anotherImage = [UIImage imageNamed:@"image"];
UIGraphicsBeginImageContextWithOptions(imageView.bounds.size, NO, 1.0);
[[UIBezierPath bezierPathWithRoundedRect:imageView.bounds cornerRadius:50] addClip];
[anotherImage drawInRect:imageView.bounds];
imageView.image = UIGraphicsGetImageFromCurrentImageContext();
UIGraphicsEndImageContext();
[self.view addSubview:imageView];
```
