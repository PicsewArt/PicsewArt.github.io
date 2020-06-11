---
title: "iOS : 二维码扫描"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,Objective-C,QRCode]
---
扫二维码在目前的国内可谓是十分流行，今天有朋友问我二维码扫描怎么做，其实这些功能苹果在 `AVFoundtion` 中已经实现，对于一般的需求都可以满足。

那么，要实现一个二维码扫描功能，首先需要引入 `AVFoundtion.framework`，并导入相关头文件:
```objc
#import <AVFoundation/AVFoundation.h>
```


接下来，我们都知道扫描二维码是需要相机支持的，于是仿照我之前关于自定义相机篇章中所提到的，要实现一个相机功能。
```objc
@property (strong, nonatomic) AVCaptureDevice *device;
@property (strong, nonatomic) AVCaptureDeviceInput *input;
@property (strong, nonatomic) AVCaptureMetadataOutput *output;
@property (strong, nonatomic) AVCaptureSession *session;
@property (strong, nonatomic) AVCaptureVideoPreviewLayer *preview;
```


紧接着是初始化以及先关设置:
```objc
-(void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.

    _device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    _input = [AVCaptureDeviceInput deviceInputWithDevice:self.device error:nil];
    _output = [[AVCaptureMetadataOutput alloc] init];
    [_output setMetadataObjectsDelegate:self queue:dispatch_get_main_queue()];

    _session = [[AVCaptureSession alloc] init];
    [_session setSessionPreset:AVCaptureSessionPresetHigh];
    if ([_session canAddInput:self.input]) {
        [_session addInput:self.input];

    }
    if ([_session canAddOutput:self.output]) {
        [_session addOutput:self.output];

    }

    [_output setMetadataObjectTypes:[NSArray arrayWithObject:AVMetadataObjectTypeQRCode]];

    _preview = [AVCaptureVideoPreviewLayer layerWithSession:_session];
    _preview.videoGravity = AVLayerVideoGravityResizeAspectFill ;
    _preview.masksToBounds = YES;

    UIView *previewView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 300, 300)];
    [previewView setCenter:self.view.center];
    [previewView.layer setCornerRadius:5];
    [previewView setClipsToBounds:YES];

    _preview.frame = previewView.bounds;
    [previewView.layer addSublayer:_preview];

    [self.view addSubview:previewView];

    [_session startRunning];
}
```


想要获取扫描的结果，需要通过代理:
```objc
<AVCaptureMetadataOutputObjectsDelegate>
```


然后理所当然的，实现其代理方法，获取扫描结果并进行处理:
```objc
#pragma mark - AVCaptureMetadataOutputObjectsDelegate
- (void)captureOutput:(AVCaptureOutput *)captureOutput didOutputMetadataObjects:(NSArray *)metadataObjects fromConnection:(AVCaptureConnection *)connection {
    NSString *result = [NSString string];
    if([metadataObjects count]) {
        [_session stopRunning];
        AVMetadataMachineReadableCodeObject *metadataObject = [metadataObjects objectAtIndex:0];
        result = metadataObject.stringValue;
        NSLog(@"\n\n%@", result);
    }
}
```


好了，到这一步，我们已经毫不费力的实现了一个效率很高的 QRCode 扫描工具。




