---
title: "iOS : 二维码生成"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0059.jpg'
tags: [iOS,Objective-C,QRCode,CIFilter]
---
最近发过几个关于二维码的内容( [**相机扫描二维码**]({{ site.blog_perma }}/iOS_QRCode_Scanner/)，[**识别图片二维码**]({{ site.blog_perma }}/iOS_QRCode_Scanner_2/)，趁热打铁，再来一篇二维码生成的博文吧。

看过前面文章的小伙伴肯定猜到了，这里还是使用 `CI` 系列。是的，在 iOS 7 之后我们可以使用苹果提供的 CIFilter 来实现二维码的生成。

```objc
+ (CIImage *)imageFromString:(NSString *)string {
    CIFilter *filter = [CIFilter filterWithName:@"CIQRCodeGenerator"];
    [filter setValue:@"H" forKey:@"inputCorrectionLevel"];
    [filter setValue:[string dataUsingEncoding:NSUTF8StringEncoding] forKey:@"inputMessage"];
    return filter.outputImage;
}
```

这里要特别说明一下 `inputCorrectionLevel` ，也就是纠错等级，允许的值有 `L` / `M` / `Q` / `H` 四种，依次对应7%，15%，25%，30%的容错度，生成器会通过重复表示部分信息，也就是信息冗余，来提高其容错度，这样在二维码被遮挡或缺失一部分时，也有机会成功被解析。

通过上面的代码，成功生成一张二维码图像的 CIImage 实例，那么问题来了:

* 我们最常用的是 UIImage 实例

* 图像模糊

* 尺寸不易控制

为了解决这些问题，我们需要添加新的步骤，这里我为 UIImage 添加了一个分类，使用绘制位图的方式来产生一个指定尺寸的 UIImage 实例:
```objc
@implementation UIImage (CIImage)
+ (UIImage *)imageWithCIImage:(CIImage *)image borderLength:(CGFloat)borderLength {
    // 原图尺寸
    CGRect extent = CGRectIntegral(image.extent);
    // 缩放比
    CGFloat scale = MIN(borderLength/CGRectGetWidth(extent), borderLength/CGRectGetHeight(extent));
    size_t width = CGRectGetWidth(extent) * scale;
    size_t height = CGRectGetHeight(extent) * scale;
    // 色域
    CGColorSpaceRef cs = CGColorSpaceCreateDeviceGray();
    // 上下文
    CIContext *context = [CIContext contextWithOptions:nil];
    // 创建位图
    CGImageRef bitmapImage = [context createCGImage:image fromRect:extent];
    // 位图上下文
    CGContextRef bitmapRef = CGBitmapContextCreate(nil, width, height, 8, 0, cs, (CGBitmapInfo)kCGImageAlphaNone);
    // 属性设定与绘制
    CGContextSetInterpolationQuality(bitmapRef, kCGInterpolationNone);
    CGContextScaleCTM(bitmapRef, scale, scale);
    CGContextDrawImage(bitmapRef, extent, bitmapImage);
    // 产生 CGImage
    CGImageRef scaledImage = CGBitmapContextCreateImage(bitmapRef);
    // 释放
    CGContextRelease(bitmapRef);
    CGImageRelease(bitmapImage);
    // 产生并返回 UIImage
    return [UIImage imageWithCGImage:scaledImage];
}
@end
```

好了，现在我们可以得到一个尺寸合适、足够清晰的二维码图片了。

如果你对生成的图片还有其他需求，例如需要更换二维码的颜色等，你可以继续改造上面的方法，这里不再赘述。
