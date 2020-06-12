---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0014.jpg'
title:  "iOS 9 : CLLocation 后台定位"
tags: [iOS,iOS 9,CLLocationManager,CLLocation]
---
iOS 9 还对另外一个常用的操作——定位做了一些改进，主要针对的场景是后台定位。

> 关于其他 iOS 9 的特性与功能，有兴趣的朋友可以参考我博客中的 [***iOS 9 适配系列***]({{ site.url }}/series/#ios9)。

### 后台定位权限

在 iOS 9 中，如果你没有请求后台定位权限，那么后台定位时将出现类似开启个人热点后的蓝色提示条，这里所说的权限分为两种:

* `requestWhenInUseAuthorization`: 可在应用使用时定位，也即处于前台时
* `requestAlwaysAuthorization`: 一直定位，即使应用在后台

我们只需要使用其中之一即可，如果前后台都需要时则只使用 `requestAlwaysAuthorization`。

```objc
self.locationManager = [[CLLocationManager alloc] init];
self.locationManager.delegate = self;
[_locationManager setDesiredAccuracy:kCLLocationAccuracyBest];
// 请求权限
if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 8) {
   // [self.locationManager requestWhenInUseAuthorization];
   [self.locationManager requestAlwaysAuthorization];
}
```

### 多个 LocationManager

在 iOS 9 中苹果允许多个 Location Manager 在单一 APP 中使用，它们中的一部分只在前台定位，另一部分则可在后台定位，且后者可以随时禁止。

在此之前为了避免报错，我们需要对进行配置:

```xml
<key>NSLocationAlwaysUsageDescription</key>
    <string>Meniny's Background Location Demo</string>
    <key>UIBackgroundModes</key>
    <array>
        <string>location</string>
    </array>
```

接下来你可能已经猜到了:

```objc
if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 9) {
	self.locationManager.allowsBackgroundLocationUpdates = YES;
}
[_locationManager startUpdatingLocation];
```

如果你没有配置 `Info.plist` 那么你可能会看到这样的错误:

> Assertion failure in -[CLLocationManager setAllowsBackgroundLocationUpdates:], /BuildRoot/Library/Caches/com.apple.xbs/Sources/CoreLocationFramework_Sim/CoreLocation-1808.1.5/Framework/CoreLocation/CLLocationManager.m:593
