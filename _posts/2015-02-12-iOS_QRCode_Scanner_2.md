---
title: "iOS : 二维码扫描之图片识别"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
tags: [iOS,Objective-C,QRCode]
---
接[**上文**]({{ site.blog_perma }}/iOS_QRCode_Scanner/)，好久之前试了试二维码扫描功能，由于苹果实现了基本的检测，我们要做的其实就只是实现一个摄像机功能。最近公司项目需要从图片识别二维码，于是趁这个机会把新的代码贴上来，正如我所说，依然不需要什么智商。

```objc
#pragma mark - 打开相册
- (void)openPhotoAlbum {
    PSImagePickerViewController *picker = [[PSImagePickerViewController alloc] init];
    [picker setShowUpperLimit:NSIntegerMax];
    [picker setSelectUpperLimit:1];
    [picker setDelegate:self];
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:picker];
    [self showDetailViewController:nav sender:self];
}

#pragma mark - 从图片读取二维码
- (NSArray <NSString *>*)QRCodeScanFromImage:(UIImage *)image {
    NSMutableArray *results = [NSMutableArray array];
    if (image == nil) {
        return results;
    }
    CIImage *ciImage = [CIImage imageWithCGImage:image.CGImage];
    CIContext *context = [CIContext contextWithOptions:@{kCIContextUseSoftwareRenderer: @(YES)}];
    CIDetector *detector = [CIDetector detectorOfType:CIDetectorTypeQRCode
                                              context:context
                                              options:@{CIDetectorAccuracy: CIDetectorAccuracyHigh}];
    NSArray *features = [detector featuresInImage:ciImage];
    if (features == nil || !features.count) {
        return results;
    }
    for (CIQRCodeFeature *feature in features) {
        [results addObject:feature.messageString];
    }
    return results;
}

#pragma mark - 相册选择照片代理方法
- (void)imagePicker:(PSImagePickerViewController *)imagePicker didSelectImages:(NSArray *)images {
    if (images != nil && images.count) {
        NSArray *results = [self QRCodeScanFromImage:[images firstObject]];
        if (results.count) {
            for (NSString *string in results) {
                NSLog(@"\nAlbum QRCode: %@", string);
                // 自定义校验扫描结果的方法
                if ([string containsCouponString]) {
                    if (self.scannerCallBackBlock) {
                        self.scannerCallBackBlock([string couponStringIfContains]);
                    }
                    [self backViewController];
                    break;
                }
            }
        }
        [self noQRCodeCaptured];
    }
}

#pragma mark - 没有捕获到有效二维码或格式不符的提示
- (void)noQRCodeCaptured {
    [self.view makeToast:@"no_qrcode_captured"];
}
```

看吧，我会乱说？

