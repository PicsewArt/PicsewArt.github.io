---
title: "Cocoa/Cocoa Touch: Hex Color"
category: "iOS"
copy: true
tags: [iOS, OS X, Cocoa]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0023.jpg'
---
将 Hex 颜色 (例如 `#ffffff`) 转换为 `UIColor`/`NSColor`, 以 `UIColor` 举例:

我们通过分类方式实现:

```objc
@implementation UIColor (MXColours)
```

Hex 字符串转 Color 实例:

```objc
#pragma mark - Color from Hex
+ (instancetype)colorFromHexString:(NSString *)hexString {
    unsigned rgbValue = 0;
    hexString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    NSScanner *scanner = [NSScanner scannerWithString:hexString];
    [scanner scanHexInt:&rgbValue];

    return [[self class] colorWithR:((rgbValue & 0xFF0000) >> 16) G:((rgbValue & 0xFF00) >> 8) B:(rgbValue & 0xFF) A:1.0];
}
```

Color 实例转 Hex 字符串:

```objc
#pragma mark - Hex from Color
- (NSString *)hexString {
    NSArray *colorArray	= [self rgbaArray];
    int r = [colorArray[0] floatValue] * 255;
    int g = [colorArray[1] floatValue] * 255;
    int b = [colorArray[2] floatValue] * 255;
    NSString *red = [NSString stringWithFormat:@"%02x", r];
    NSString *green = [NSString stringWithFormat:@"%02x", g];
    NSString *blue = [NSString stringWithFormat:@"%02x", b];

    return [NSString stringWithFormat:@"#%@%@%@", red, green, blue];
}
```

上面代码用到的自定义方法:

```objc
#pragma mark - Private
#pragma mark - RGBA Helper method
+ (instancetype)colorWithR:(CGFloat)red G:(CGFloat)green B:(CGFloat)blue A:(CGFloat)alpha {
    return [[self class] colorWithRed:red/255.0f green:green/255.0f blue:blue/255.0f alpha:alpha];
}

#pragma mark - RGBA from Color
- (NSArray <NSNumber *>*)rgbaArray {
    CGFloat r=0,g=0,b=0,a=0;

    if ([self respondsToSelector:@selector(getRed:green:blue:alpha:)]) {
        [self getRed:&r green:&g blue:&b alpha:&a];
    }
    else {
        const CGFloat *components = CGColorGetComponents(self.CGColor);
        r = components[0];
        g = components[1];
        b = components[2];
        a = components[3];
    }

    return @[@(r),
             @(g),
             @(b),
             @(a)];
}
```
