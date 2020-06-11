---
title: "iOS : Debug 与 NSLog [Objective-C]"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0035.jpg'
tags: [iOS,Debug,NSLog]
---
偶然看到别人代码里的 NSLog，忽然想到或许可以写一片简短的博客，能帮到一些朋友也说不定。

大家都知道日志输出在开发测试过程中的重要性，但发布应用后这些无用的打印都在白白的浪费着资源，那么，让日志随着运行环境的不同自动开关就成了一个不错的选择。

```objc

#ifdef DEBUG
#define NSLog(fmt, ...) NSLog((@"\n* FileName:%s\n" "* FunctionName:%s\n" "* FunctionPretty:%s\n" "* LineNumber:%d\n* " fmt), [[[NSString stringWithUTF8String:__FILE__] lastPathComponent] UTF8String], __FUNCTION__, __PRETTY_FUNCTION__, __LINE__, ##__VA_ARGS__);
#else
#define NSLog(...)
#endif

```

通过这段宏定义，我们为每一个 NSLog 输出都添加了文件名、方法名、行号等信息，并在非 DEBUG 环境自动关闭输出。现在，我们来写段代码测试一下，写法与从前没有任何不同。

```objc

@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"哈哈哈");
}
@end

```

看看输出结果:

```objc

2016-02-16 16:05:16.881 PHP Manual for Mac[18894:284676] 
* FileName:ViewController.m
* FunctionName:-[ViewController viewDidLoad]
* FunctionPretty:-[ViewController viewDidLoad]
* LineNumber:64
* 哈哈哈

```






