---
title: "iOS: UIView 绘制圆角矩形"
category: "iOS"
copy: true
tags: [iOS, UIView, drawRect]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
---
绘制圆角矩形:

```objc
@implementation UIView (Draw)

void CGContextAddRoundRect(CGContextRef __nullable c, CGRect rect, CGFloat radius) {
    CGFloat width = rect.size.width;
    CGFloat x = rect.origin.x;
    CGFloat height = rect.size.height;
    CGFloat y = rect.origin.y;

    // 移动到初始点
    CGContextMoveToPoint(c, radius + x, y);

    // 绘制第1条线和第1个1/4圆弧
    CGContextAddLineToPoint(c, width - radius + x, y);
    CGContextAddArc(c, width - radius + x, radius + y, radius, -0.5 * M_PI, 0.0, 0);

    // 绘制第2条线和第2个1/4圆弧
    CGContextAddLineToPoint(c, width + x, height - radius + y);
    CGContextAddArc(c, width - radius + x, height - radius + y, radius, 0.0, 0.5 * M_PI, 0);

    // 绘制第3条线和第3个1/4圆弧
    CGContextAddLineToPoint(c, radius + x, height + y);
    CGContextAddArc(c, radius + x, height - radius + y, radius, 0.5 * M_PI, M_PI, 0);

    // 绘制第4条线和第4个1/4圆弧
    CGContextAddLineToPoint(c, x, radius + y);
    CGContextAddArc(c, radius + x, radius + y, radius, M_PI, 1.5 * M_PI, 0);
}

- (void)drawRoundRectWithContext:(CGContextRef __nullable)context inRect:(CGRect)rect radius:(CGFloat)radius {
    CGContextAddRoundRect(context, rect, radius);
}
```
