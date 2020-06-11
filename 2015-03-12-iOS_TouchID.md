---
title: "iOS : Touch ID"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,Touch ID,LocalAuthentication]
---
苹果在 iOS 8 中向开发者开放了 Touch ID 的 API，本文主要介绍它的使用。

![touchid](https://img.blog.csdn.net/20151013122506583?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


### 从哪里入手

其实关于 Touch ID 的 API 全部都在一个叫做 `LocalAuthentication` 的  framework 中，其中仅含有三个头文件:

* `LAContext.h`

* `LAError.h`

* `LAPublicDefines.h`

而且事实上，实际使用中你可能仅仅用到 `LAContext` 中的	两个方法:

```objc
// 设备是否支持 Touch ID
- (BOOL)canEvaluatePolicy:(LAPolicy)policy error:(NSError * __autoreleasing *)error;

```

这个方法十分简单，用于检查设备是否支持 Touch ID，并返回布尔值。唯一值得说明的是 `LAPolicy` ，目前它只有 `LAPolicyDeviceOwnerAuthenticationWithBiometrics` 这一个值可用。

```objc
// 使用 Touch ID 验证身份
- (void)evaluatePolicy:(LAPolicy)policy localizedReason:(NSString *)localizedReason reply:(void(^)(BOOL success, NSError *error))reply;
```

这个方法也没有什么难度:

* 第一个参数 `Policy` 和上一个方法相同；

* 第二个参数 `localizedReason` 是在指纹图标下的一句描述信息，通常用来指示用户验证指纹的原因(图中的 `1` 部分)；

* 第三个参数 `reply` 是一个 block，当指纹验证成功，或被用户取消(`LAErrorUserCancel`)，或被系统中断(`LAErrorSystemCancel`)，或用户选择输入密码(`LAErrorUserFallback`)，则会执行此 block 中的代码，该 block 的第一个参数 `success` 为布尔值，表示指纹验证是否成功，第二个参数表示错误信息。

有了这两个方法，我们即可实现在支持 Touch ID 的设备上进行指纹校验，接下来我们来做进一步的实现与封装。

### 使用与封装

首先，尽管很简单，但为了方便以后重复使用，我们新建 `MXTouchID` 类来做管理封装。

导入相关框架:

```objc
@import LocalAuthentication;
```


然后，在 `MXTouchID.m` 文件中封装一个用于校验 Touch ID 是否可用的方法，由于我们不需要实例化，因此此方法为类方法:
```objc
#pragma mark - 判断指纹是否可用
+ (BOOL)touchIDEnabled {
    LAContext *context = [[LAContext alloc] init];
    NSError *error;
    BOOL success = [context canEvaluatePolicy: LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error];
    if (success) {
        return YES;
    } else {
        NSLog(@"%@", error);
        return NO;
    }
}
```


接下来，如果 Touch ID 可用，我们还要做进一步的验证操作，同理，封装到另一个类方法中:

```objc
#pragma mark - 验证指纹
+ (void)touchIDEvaluateWithMessage:(NSString *)message localizedFallbackTitle:(NSString *)localizedFallbackTitle completed:(void (^)(BOOL success, NSError *authenticationError))completion {
    LAContext *context = [[LAContext alloc] init];
    context.localizedFallbackTitle = localizedFallbackTitle;

    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:NSLocalizedString(message, nil) reply:
     ^(BOOL success, NSError *authenticationError) {
         if (completion) {
             completion(success, authenticationError);
         }
     }];
}
```

之所以为这个封装方法添加参数 `message` 和 `localizedFallbackTitle`，是因为这两个部分是允许自定义的，他们分别对应前面图中的 `1` 和 `2` 部分。如果你不需要输入密码(图中的 `2` 部分)操作，你可以将 `localizedFallbackTitle` 的值设置为 `@""` (或者干脆对其进行设置)来隐藏输入密码的按钮(图中的 `2` 部分)。

在这个方法中还有一个 block 参数名为 `completion`，无论是否验证成功，他都将被调用(如果它的值不为 `nil`)，在 `completion` 内部又有参数 `BOOL success` 和 `NSError *authenticationError`，在指纹验证的反馈 block 中将对应的值传入以便使用。如果你需要根据验证失败的不同情况做出反应，你可以通过判断 `NSError *authenticationError` 的 `code` 属性值与三种错误情况——用户取消(`LAErrorUserCancel`)、系统中断(`LAErrorSystemCancel`)、用户选择输入密码(`LAErrorUserFallback`)——是否匹配来实现。

最后，不要忘了在头文件中对这些方法进行声明。




