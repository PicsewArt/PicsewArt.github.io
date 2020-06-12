---
title: "iOS: 保存和读取 GIF"
category: "iOS"
copy: true
tags: [iOS, GIF, ALAsset]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0015.jpg'
---
大家都知道iOS的系统相册是不支持 gif 图片预览的。但是, 这并不代表系统相册不能保存和读取 gif 图片。通过 Safari 长按 gif 图片, 选择保存到相册, 这时保存到相册里的图片就是 gif 的, 虽然它不会动。

下面将介绍如何对系统相册进行 gif 的读取与保存。

# 什么是 UTI

iOS系统相册是根据 UTI 来区分资源类型的。那什么是 UTI 呢。UTI字面意思是: Uniform Type Identifiers (统一类型标示符)

apple 介绍文档:
> [https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html](https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Introduction/Introduction.html)

都支持哪些UTI类型:

> [https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259-SW1](https://developer.apple.com/library/ios/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html#//apple_ref/doc/uid/TP40009259-SW1)

在 MobileCoreServices/UTCoreTypes.h中可以找到一些内置的UTI类型


```objc
extern const CFStringRef kUTTypeImage                                __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeJPEG                                 __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeJPEG2000                             __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeTIFF                                 __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypePICT                                 __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeGIF                                  __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypePNG                                  __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeQuickTimeImage                       __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeAppleICNS                            __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeBMP                                  __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeICO                                  __OSX_AVAILABLE_STARTING(__MAC_10_4,__IPHONE_3_0);
extern const CFStringRef kUTTypeRawImage                             __OSX_AVAILABLE_STARTING(__MAC_10_10,__IPHONE_8_0);
extern const CFStringRef kUTTypeScalableVectorGraphics               __OSX_AVAILABLE_STARTING(__MAC_10_10,__IPHONE_8_0);
extern const CFStringRef kUTTypeLivePhoto                            __OSX_AVAILABLE_STARTING(__MAC_NA,__IPHONE_9_1);
```

用来标识 gif 资源的, 就是 `kUTTypeGIF` 这个类型, 实际字符串是: `@"com.compuserve.gif"`

# 判断是不是 gif 资源

我们使用 `ALAssetsLibrary` 来进行相册资源的获取。至于如何使用 `ALAssetsLibrary`, 这不是本文的重点, 大家搜索一下即可。

定义一个 `ALAsset` 的类别。下面所有的实例方法均是这个类别中的方法

```objc
@interface ALAsset (GifSupport)
@end
@implementation ALAsset (GifSupport)
@end
```

判断是不是一个 gif 资源, 只要简单的判断资源在 `kUTTypeGIF` 这个 UTI 下是不是有内容就可以了。

```objc
- (BOOL)isGif {
    ALAssetRepresentation *re = [self representationForUTI: (__bridge NSString *)kUTTypeGIF];
    if (re) {
        return YES;
    }
    return NO;
}
```

# 读取 gif 数据

一个 `ALAsset` 是 gif 资源, 那么通过普通的获取 `CGImageRef` 是无法取到完整的gif的, 只能取到第一帧。

所以需要使用 `ALAssetRepresentation` 的这个方法来获取 data。

```objc
- (NSUInteger)getBytes:(uint8_t *)buffer fromOffset:(long long)offset length:(NSUInteger)length error:(NSError **)error;
```

下面是具体实现

```objc
- (NSData *)gifData {
    if (![self isGif]) {
         return nil;
    }

    ALAssetRepresentation *re = [self representationForUTI:(__bridge NSString *)kUTTypeGIF];;
    long long size = re.size;
    uint8_t *buffer = malloc(size);
    NSError *error;
    NSUInteger bytes = [re getBytes:buffer fromOffset:0 length:size error:&error];
    NSData *data = [NSData dataWithBytes:buffer length:bytes];
    free(buffer);
    return data;
}
```

# 展示 gif 图片

使用 `SDWebImage` 中 `UIImage+GIF.h` 内的一个类方法即可将 gif data 转换成 `UIImage`

```objc
+ (UIImage *)sd_animatedGIFWithData:(NSData *)data;
```

简单的展示:

```objc
- (void)printGifImage {
    NSData *data = [self gifData];
    UIImage *gifImage = [UIImage sd_animatedGIFWithData:data];
    UIImageView *imageView = [[UIImageView alloc] initWithImage:gifImage];
    imageView.frame = CGRectMake(0, 0, gifImage.size.width, gifImage.size.height);
    [[[UIApplication sharedApplication] keyWindow] addSubview:imageView];
}
```

# 保存 gif 图片到相册

我们自己的应用可不可以实现 Safari 里面的保存 gif 功能呢？

答案是可以的。

这一部分比较复杂, 直接上代码。里面没有做具体的异常判断。需要根据需求自行添加。

我将在系统相册里建立一个 gif 相册, gif 图片将保存到这个组里面。

测试时用了 `[self gifData]` 作为待保存的 data。实际上可以使用 `SDWebImage` 的缓存等等具体 gif 数据

```objc
- (void)saveGifData:(NSData *)data toGroup:(ALAssetsGroup *)group inLibrary:(ALAssetsLibrary *)library {
    NSDictionary *metadata = @{@"UTI":(__bridge NSString *)kUTTypeGIF};
    // 开始写数据
    [library writeImageDataToSavedPhotosAlbum:data metadata:metadata completionBlock:^(NSURL *assetURL, NSError *error) {

        if (error) {
            NSLog(@"写数据失败: %@",error);
        }else{

            [library assetForURL:assetURL resultBlock:^(ALAsset *asset) {

                NSLog(@"成功保存到相册");

                if ([group isEditable]) {
                    [group addAsset:asset];
                }else{
                    NSLog(@"系统gif相册不可编辑或者为nil");
                }

            } failureBlock:^(NSError *error) {
                NSLog(@"gif保存到的ALAsset有问题, URL: %@, err:%@",assetURL,error);
            }];
        }
   }];
}
```
