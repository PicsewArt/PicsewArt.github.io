---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0013.jpg'
title: "iOS : 自定义相机实例 Demo"
tags: [iOS,Camera]
summary: "iOS : 自定义相机实例 Demo"
---
本文介绍一个简单的自定义相机实例 Demo。

如我前面文章所说，首先需要包含 `AVFoundation.framework`，并导入头文件:

```objc
#import <AVFoundation/AVFoundation.h>
```

添加必要的属性:

```objc
// 处理输入输出设备的数据流动
@property (nonatomic, strong) AVCaptureSession *captureSession;
// 输入设备
@property (nonatomic, strong) AVCaptureDeviceInput *captureInput;
// 输出设备，本例输出静止图像
@property (nonatomic, strong) AVCaptureStillImageOutput *stillImageOutput;
// 预览层
@property (nonatomic, strong) AVCaptureVideoPreviewLayer *previewLayer;
```

创建必要的控件(略)并为控件添加属性:

```objc
// 放置 预览层 的视图
@property (nonatomic, weak) UIView *cameraShowView;
// 切换前后摄像头的按钮
@property (nonatomic, weak) UIButton *toggleButton;
// 拍照按钮
@property (nonatomic, weak) UIButton *shutterButton;
// 切换闪光灯模式的按钮
@property (nonatomic, weak) UIButton *flashButton;
```

对输入输出设备等进行初始化:

```objc
#pragma mark - 初始化
- (void)initialSession {
    // 初始化 session 和设备
    self.captureSession = [[AVCaptureSession alloc] init];
    self.captureInput = [[AVCaptureDeviceInput alloc] initWithDevice:[self backCamera] error:nil];
    // [self backCamera] 为自定义方法，参见下文
    self.stillImageOutput = [[AVCaptureStillImageOutput alloc] init];

    // 输出配置
    NSDictionary *outputSettings = [[NSDictionary alloc] initWithObjectsAndKeys:AVVideoCodecJPEG, AVVideoCodecKey, nil];
    [self.stillImageOutput setOutputSettings:outputSettings];

    // 添加设备
    if ([self.captureSession canAddInput:self.captureInput]) {
        [self.captureSession addInput:self.captureInput];
    }
    if ([self.captureSession canAddOutput:self.stillImageOutput]) {
        [self.captureSession addOutput:self.stillImageOutput];
    }

    // 拿到设备
    AVCaptureDevice *device = self.captureInput.device;
    // 修改前注意要锁定设备
    if ([device lockForConfiguration:nil]) {
    // 对焦模式
        if ([device isFocusModeSupported:AVCaptureFocusModeContinuousAutoFocus]) {
            [device setFocusMode:AVCaptureFocusModeContinuousAutoFocus];
        } else if ([device isFocusModeSupported:AVCaptureFocusModeAutoFocus]) {
            [device setFocusMode:AVCaptureFocusModeAutoFocus];
        }
        // 曝光模式
//        if ([device isExposureModeSupported:AVCaptureExposureModeAutoExpose]) {
//            [device setExposureMode:AVCaptureExposureModeAutoExpose];
//        }
		// 闪光灯模式
        if ([device hasFlash]) {
            [device setFlashMode:AVCaptureFlashModeAuto];
            [device setTorchMode:AVCaptureTorchModeAuto];
        }
        // 修改后解锁设备
        [device unlockForConfiguration];
    }
}
```

配置预览层:

```objc
#pragma mark - 配置预览层
- (void)setUpCameraLayer {
//    if (_cameraAvaible == NO) return;

    if (self.previewLayer == nil) {
        self.previewLayer = [[AVCaptureVideoPreviewLayer alloc] initWithSession:self.captureSession];
        CALayer * viewLayer = [self.cameraShowView layer];
        [viewLayer setMasksToBounds:YES];
        [self.previewLayer setFrame:[UIScreen mainScreen].bounds];
        [self.previewLayer setVideoGravity:AVLayerVideoGravityResizeAspectFill];
        [viewLayer insertSublayer:self.previewLayer below:[[viewLayer sublayers] objectAtIndex:0]];
    }
}
```

在合适的地方，例如 `viewDidLoad` 中调用初始化和配置预览层的方法:

```objc
// 初始化
[self initialSession];
// 配置预览层
[self setUpCameraLayer];
```

控制器视图显示后摄像头开始摄取图像:

```objc
// 开始
if (self.captureSession) {
   [self.captureSession startRunning];
}
```

控制器视图消失后摄像头停止摄取图像:

```objc
- (void) viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear: animated];
    // 结束
    if (self.captureSession) {
        [self.captureSession stopRunning];
    }
}
```

获取摄像头:

```objc
#pragma mark - 获得前置
- (AVCaptureDevice *)frontCamera {
    return [self cameraWithPosition:AVCaptureDevicePositionFront];
}

#pragma mark - 获得后置
- (AVCaptureDevice *)backCamera {
    return [self cameraWithPosition:AVCaptureDevicePositionBack];
}

#pragma mark - 获得摄像头
- (AVCaptureDevice *)cameraWithPosition:(AVCaptureDevicePosition)position {
    NSArray *devices = [AVCaptureDevice devicesWithMediaType:AVMediaTypeVideo];
    for (AVCaptureDevice *device in devices) {
        if ([device position] == position) {
            return device;
        }
    }
    return nil;
}
```

切换摄像头:

```objc
#pragma mark - 切换摄像头
- (void)toggleCamera {
    NSUInteger cameraCount = [[AVCaptureDevice devicesWithMediaType:AVMediaTypeVideo] count];
    if (cameraCount > 1) {
        NSError *error;
        AVCaptureDeviceInput *newVideoInput;
        AVCaptureDevicePosition position = [[self.captureInput device] position];

        if (position == AVCaptureDevicePositionBack)
            newVideoInput = [[AVCaptureDeviceInput alloc] initWithDevice:[self frontCamera] error:&error];
        else if (position == AVCaptureDevicePositionFront)
            newVideoInput = [[AVCaptureDeviceInput alloc] initWithDevice:[self backCamera] error:&error];
        else
            return;

        if (newVideoInput != nil) {
            [self.captureSession beginConfiguration];
            [self.captureSession removeInput:self.captureInput];
            if ([self.captureSession canAddInput:newVideoInput]) {
                [self.captureSession addInput:newVideoInput];
                [self setCaptureInput:newVideoInput];
            } else {
                [self.captureSession addInput:self.captureInput];
            }
            [self.captureSession commitConfiguration];
        } else if (error) {
            [self showOpoosAlertViewWithContentText:[NSString stringWithFormat:@"%@", error] durationTime:2.0];
        }
    }
}
```

捕获图像拍摄照片:

```objc
#pragma mark - 拍照
- (void)shutterCamera {
    AVCaptureConnection * videoConnection = [self.stillImageOutput connectionWithMediaType:AVMediaTypeVideo];
    if (!videoConnection) {
        [self showOpoosAlertViewWithContentText:@"拍摄失败" durationTime:2.0];
        return;
    }

    // 捕获图像
    [self.stillImageOutput captureStillImageAsynchronouslyFromConnection:videoConnection completionHandler:^(CMSampleBufferRef imageDataSampleBuffer, NSError *error) {
        if (imageDataSampleBuffer == NULL) {
            return;
        }
        NSData *imageData = [AVCaptureStillImageOutput jpegStillImageNSDataRepresentation:imageDataSampleBuffer];
        UIImage *image = [UIImage imageWithData:imageData];
        // 处理图像...
    }];
}
```

好了，一个简单的自定义相机就完成了。
