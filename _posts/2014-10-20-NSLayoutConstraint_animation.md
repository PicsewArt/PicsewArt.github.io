---
title: "iOS: NSLayoutConstraint 动画"
category: "iOS"
copy: true
tags: [iOS, NSLayoutConstraint]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0006.jpg'
---
直接上代码:

```objc
// @implementation NSLayoutConstraint (Animation)
- (void)setConstant:(CGFloat)constant animatedDuration:(NSTimeInterval)duration {
    __weak typeof(self) weakSelf = self;
    [UIView animateWithDuration:duration animations:^{
        __strong typeof(weakSelf) strongSelf = weakSelf;
        [strongSelf setConstant:constant];
        if ([strongSelf.firstItem isMemberOfClass:[UIView class]]) {
            [((UIView *)strongSelf.firstItem) layoutIfNeeded];
        }
    }];
}
```
