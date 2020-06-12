---
title: "iOS : 模拟微信红包照片"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0022.jpg'
tags: [iOS,Blur]
---
上一篇博客用 HTML5 + CSS3 实现了一个简单的微信红包照片的效果，那当然少不了街机 iPhone 中的实现。

iOS 实现这个效果常用的有三种方式:

* CoreImage 绘图

* CALayer

* UIVisualEffectView

其实都比较简单，这里介绍一下第一种。首先创建一个 UIImageView 供展示图片。

```objc

UIImageView *imgView = [[UIImageView alloc] initWithFrame:self.view.bounds];
[imgView setContentMode:UIViewContentModeScaleAspectFit];
[self.view addSubview:imgView];
    
```


接下来，准备一张图片，例如:

![image](/assets/images/posts/content/2016-01-28-17-00-00-HTML5_Canvas_Blur.jpg)

通过 CoreImage 制作模糊效果:

```objc

UIImage *img = [UIImage imageNamed:@"img"];
CIImage *inputImg = [CIImage imageWithCGImage:img.CGImage];
CIContext *context = [CIContext contextWithOptions:nil];

CIFilter *filter = [CIFilter filterWithName:@"CIGaussianBlur" keysAndValues:kCIInputImageKey, inputImg,@"inputRadius", @20, nil];
    
CIImage *blurImg = [filter outputImage];
CGImageRef blurRef = [context createCGImage:blurImg fromRect:CGRectMake(0, 0, img.size.width, img.size.height)];//[blurImg extent]];
    
UIImage *blur = [UIImage imageWithCGImage:blurRef];

```

得到了模糊图片(`UIImage *blur`)后，还需要制作一个圆形图片。我们把这两张图拼在一起。

```objc

UIGraphicsBeginImageContext(img.size);
[blur drawInRect:CGRectMake(0, 0, img.size.width, img.size.height)];
CGContextRef ctx = UIGraphicsGetCurrentContext();
CGContextAddArc(ctx, 160, 280, 50, 50, 0, M_PI);
CGContextClip(ctx);
[img drawInRect:CGRectMake(0, 0, img.size.width, img.size.height)];
UIImage *final = UIGraphicsGetImageFromCurrentImageContext();
UIGraphicsEndImageContext();

```

最后，展示图片:

```objc

imgView.image = final;

```

看看效果:

![image2](/assets/images/posts/content/2016-01-28-17-00-00-HTML5_Canvas_Blur_ios.jpg)







