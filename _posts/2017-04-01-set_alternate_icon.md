---
title: "iOS 10.3: Setup Alternate Icon"
category: "iOS"
copy: true
tags: [iOS, setAlternateIconName]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
---
最近苹果发布了新的 iOS 正式版本 10.3, 有一个新特性引起了不少人的注意 —— 换图标。

![58e35b3f46a18.jpg](https://ooo.0o0.ooo/2017/04/04/58e35b3f46a18.jpg)

看了看文档, 代码简单到只有一句话:

```objc
[[UIApplication sharedApplication] setAlternateIconName:@"" completionHandler:^(NSError * _Nullable error) {
}];
```
当然, 在使用这句代码前, 还是需要改一下 `Info.plist` 文件, 格式为:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleAlternateIcons</key>
	<dict>
		<key>新图标名称</key>
		<dict>
			<key>CFBundleIconFiles</key>
			<array>
				<string>新图标名称</string>
			</array>
			<key>UIPrerenderedIcon</key>
			<false/>
		</dict>
	</dict>
	<key>CFBundlePrimaryIcon</key>
	<dict>
		<key>CFBundleIconFiles</key>
		<array>
			<string>AppIcon</string>
		</array>
		<key>UIPrerenderedIcon</key>
		<false/>
	</dict>
</dict>
</plist>
```

作为示例我准备了一张 `180×180 (px)` 的图标 —— `favicon_2-60` (`@2x`、`@3x`), 修改 `Info.plist`:

![58e35b51b0339.png](https://ooo.0o0.ooo/2017/04/04/58e35b51b0339.png)

加入项目中:

![58e35bb9a6ba0.png](https://ooo.0o0.ooo/2017/04/04/58e35bb9a6ba0.png)

默认图标直接使用 `AppIcon.appiconset` 即可。

好了, 用一开始的代码试一试效果:

```objc
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}

- (IBAction)useOne:(id)sender {
    [self changeIcon:nil];
}
- (IBAction)useTwo:(id)sender {
    [self changeIcon:@"favicon_2-60"];
}

- (void)changeIcon:(NSString *)name {
    [[UIApplication sharedApplication] setAlternateIconName:name completionHandler:^(NSError * _Nullable error) {
        if (error) {
            NSLog(@"error = %@", error.localizedDescription);
        } else {
            [self clickHomeButton];
        }
    }];
}

- (void)clickHomeButton {
    // DO NOT USE THIS FOR APP STORE VERSION
    [[UIApplication sharedApplication] performSelector:@selector(suspend)];
}
```
