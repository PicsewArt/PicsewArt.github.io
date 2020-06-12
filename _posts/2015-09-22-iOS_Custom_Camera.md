---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0001.jpg'
title: "iOS : 自定义相机实现视频录制和照片拍摄"
tags: [iOS,Camera]
summary: "iOS : 自定义相机实现视频录制和照片拍摄"
---
相信很多人都用过拍照功能，通常情况下我们使用 Picker 就可以实现简单地拍照，但是系统提供的简易相机功能真的太少，需要一些高级功能时往往显得十分无能。

## 概念解析

首先，我们需要引入 `AVFoundation.framework` 以便使用相关的类和方法。

### 输入设备

* 我们使用 `AVCaptureDevice` 实例来得到输入设备，例如相机或麦克风。

* 我们使用 `AVCaptureDeviceInput` 实例来配置输入设备。

	* 一个 `AVCaptureDeviceInput` 实例拥有多个输入端口，也就是 `AVCaptureInputPort` 实例。

### 输出设备

* 我们使用 `AVCaptureOutput` 来管理输出内容，允许输出的有视频和静止图像。

	* 一个 `AVCaptureOutput` 可以接收来自一个或多个输入源的数据。

	* 输入设备分别有:

		* `AVCaptureMovieFileOutput`: 输出到文件。

		* `AVCaptureVideoDataOutput`: 可用于处理被捕获的视频帧。

		* `AVCaptureAudioDataOutput`: 可用于处理被捕获的音频数据。

		* `AVCaptureStillImageOutput`: 可用于捕获带有 `MetaData` 的静止图像。

		* 本文主要介绍 `AVCaptureMovieFileOutput` 与 `AVCaptureStillImageOutput`。

### 组织数据

* 我们通过 `AVCaptureSession` 实例来协调和组织数据在输入与输出设备间的流动和传递。

	* 一个 `AVCaptureSession` 实例可以协调多个输入及输出设备。

	* 使用 `AVCaptureSession` 实例的 `addInput` 方法可以增加输入设备

	* 使用 `AVCaptureSession` 实例的 `addOutput` 方法可以增加输出设备

* 在 `AVCaptureOutput` 与 `AVCaptureInput` 间存在 `AVCaptureConnection` 对象。

* 当一个 `AVCaptureOutput` 或 `AVCaptureInput` 加入 `AVCaptureSession` 中，会自动创建连接 (`AVCaptureConnection`)，通常不需要手动管理。

这是以上内容的示例图:

![inoutput](https://course.gdou.com/images/2011121402.png)

将该图进一步细化:

![inoutputMore](https://course.gdou.com/images/2011121403.png)

(图片来自网络)

## 基本操作

### 视频录制

要进行视频录制，输出设备应为 `AVCaptureMovieFileOutput`，先启动 `AVCaptureSession`，然后使用它的子类 `AVCaptureFileOutput` 的方法 `- (void)startRecordingToOutputFileURL:(NSURL *)outputFileURL recordingDelegate:(id < AVCaptureFileOutputRecordingDelegate >)delegate` 和 `- (void)stopRecording` 来分别启动和停止编码输出，整体步骤是:

* 创建输入输出设备:

```objc
AVCaptureDeviceInput *captureInput = [AVCaptureDeviceInput deviceInputWithDevice:[AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo] error:nil];
AVCaptureDeviceInput *microphone = [AVCaptureDeviceInput deviceInputWithDevice:[AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeAudio] error:nil];
captureOutput = [[AVCaptureMovieFileOutput alloc] init];
```

* 创建 `AVCaptureSession` 实例:

```objc
self.captureSession = [[AVCaptureSession alloc] init];
```

* 添加输入输出设备:

```objc
[self.captureSession addInput:captureInput];
[self.captureSession addInput:microphone];
[self.captureSession addOutput:self.captureOutput];
```

* 配置 `AVCaptureSession` 属性(此处使用中等质量):

```objc
[self.captureSession setSessionPreset:AVCaptureSessionPresetMedium]
```

<table border="1" class="table table-bordered table-striped table-condensed">
<tr><th>类型</th><th>质量</th><th>说明</th></tr>
<tr><th>AVCaptureSessionPresetHigh</th><th>高</th><th>最高质量，设备间有差异</th></tr>
<tr><th>AVCaptureSessionPresetMedium</th><th>中</th><th>适合 Wi-Fi 分享，实际值可能有变</th></tr>
<tr><th>AVCaptureSessionPresetLow</th><th>低</th><th>适合 3G 分享，实际值可能有变</th></tr>
<tr><th>AVCaptureSessionPreset640x480</th><th>640x480</th><th>VGA</th></tr>
<tr><th>AVCaptureSessionPreset1280x720</th><th>1280x720</th><th>720p HD</th></tr>
<tr><th>AVCaptureSessionPresetPhoto</th><th>照片</th><th>全分辨率照片，此项不支持视频输出</th></tr>
</table>

* 构建方法用于启动编码(视频编码: H.264，音频编码: AAC):

```objc
- (void)startRecording {
	[captureOutput startRecordingToOutputFileURL:[self tempFileURL] recordingDelegate:self];
				}
```

* 调用方法上述启动编码:

```objc
[self performSelector:@selector(startRecording) withObject:nil afterDelay:10.0];
[self.captureSession startRunning];
```

* 遵守 `AVCaptureFileOutputRecordingDelegate` 协议:

```objc
<AVCaptureFileOutputRecordingDelegate>
```

* 处理编码:

```objc
- (void)captureOutput:(AVCaptureFileOutput *)captureOutput didStartRecordingToOutputFileAtURL:(NSURL *)fileURL fromConnections:(NSArray *)connections {
    NSLog(@"start record video");
}

- (void)captureOutput:(AVCaptureFileOutput *)captureOutput didFinishRecordingToOutputFileAtURL:(NSURL *)outputFileURL fromConnections:(NSArray *)connections error:(NSError *)error {
    ALAssetsLibrary *library = [[ALAssetsLibrary alloc] init];
    [library writeVideoAtPathToSavedPhotosAlbum:outputFileURL completionBlock:^(NSURL *assetURL, NSError *error) {
		if (error) {
			NSLog(@"Error");
		} else {
			NSLog(@"%@", [assetURL path]);
		}
	}];
}
```

* 停止编码:

```objc
[self.captureSession stopRecording];
```

### 拍摄照片

要进行照片拍摄，输出设备应为 `AVCaptureStillImageOutput`。

* 创建设备:

```objc
AVCaptureStillImageOutput *stillImageOutput = [[AVCaptureStillImageOutput alloc] init];
```

* 配置输出参数:

```objc
NSDictionary *outputSettings = [[NSDictionary alloc] initWithObjectsAndKeys: AVVideoCodecJPEG, AVVideoCodecKey, nil];

[stillImageOutput setOutputSettings:outputSettings];
```

* 捕获图像:

	* 获得链接与端口

```objc
AVCaptureConnection *videoConnection = nil;
for (AVCaptureConnection *connection in stillImageOutput.connections) {
	for (AVCaptureInputPort *port in [connection inputPorts]) {
		if ([[port mediaType] isEqual:AVMediaTypeVideo] ) {
			videoConnection = connection;
			break;
		}
	}
	if (videoConnection) {
		break;
	}
}
```

	* 处理图像

```objc
[[self stillImageOutput] captureStillImageAsynchronouslyFromConnection:stillImageConnection completionHandler:^(CMSampleBufferRef imageDataSampleBuffer, NSError *error) {
	ALAssetsLibraryWriteImageCompletionBlock completionBlock = ^(NSURL *assetURL, NSError *error) {
     if (error) {
		}
   };

   if (imageDataSampleBuffer != NULL) {
    NSData *imageData = [AVCaptureStillImageOutput jpegStillImageNSDataRepresentation:imageDataSampleBuffer];
    ALAssetsLibrary *library = [[ALAssetsLibrary alloc] init];
    UIImage *image = [[UIImage alloc] initWithData:imageData];
    [library writeImageToSavedPhotosAlbum:[image CGImage] orientation:(ALAssetOrientation)[image imageOrientation]
    completionBlock:completionBlock];
   } else {
		completionBlock(nil, error);
	}

   if ([[self delegate] respondsToSelector:@selector(captureManagerStillImageCaptured:)]) {
		[[self delegate] captureManagerStillImageCaptured:self];
   }
}];
```
