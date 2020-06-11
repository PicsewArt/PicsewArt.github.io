---
title: "iOS: WKWebView Useage"
category: "iOS"
copy: true
tags: [iOS, WKWebView]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
excerpt: "开发App的过程中, 常常会遇到在App内部加载网页, 通常用<code>UIWebView</code>加载。这个自iOS2开始使用的网页加载器一直是开发的<code>心病</code>: 加载速度慢, 占用内存多, 优化困难。如果加载网页多, 还可能因为过量占用内存而给系统<code>kill</code>掉。各种优化的方法效果也不那么明显。"
---
iOS8以后, 苹果推出了新框架`Wekkit`, 提供了替换`UIWebView`的组件`WKWebView`。各种`UIWebView`的问题没有了, 速度更快了, 占用内存少了, 一句话, `WKWebView`是App内部加载网页的最佳选择!

先看下 `WKWebView`的特性:

1. 在性能、稳定性、功能方面有很大提升
2. 允许JavaScript的Nitro库加载并使用;
3. 支持了更多的HTML5特性;
4. 高达60fps的滚动刷新率以及内置手势;
5. 将UIWebViewDelegate与UIWebView重构成了14类与3个协议 ([查看苹果官方文档](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/WebKit/ObjC_classic/index.html)) ;

然后从以下几个方面说下`WKWebView`的基本用法:

1. 加载网页
2. 加载的状态回调
3. 新的`WKUIDelegate`协议
4. 动态加载并运行`JS`代码
5. webView 执行`JS`代码
6. `JS`调用App注册过的方法

# 一、加载网页

加载网页或HTML代码的方式与`UIWebView`相同, 代码示例如下:

```objc
WKWebView *webView = [[WKWebView alloc] initWithFrame:self.view.bounds];
[webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:@"https://www.baidu.com"]]];
[self.view addSubview:webView];
```

# 二、加载的状态回调 (WKNavigationDelegate)

用来追踪加载过程 (页面开始加载、加载完成、加载失败) 的方法:

```objc
// 页面开始加载时调用

- (void)webView:(WKWebView _)webView didStartProvisionalNavigation:(WKNavigation_ )navigation; // 当内容开始返回时调用
- (void)webView:(WKWebView _)webView didCommitNavigation:(WKNavigation_ )navigation; // 页面加载完成之后调用
- (void)webView:(WKWebView _)webView didFinishNavigation:(WKNavigation_ )navigation; // 页面加载失败时调用
- (void)webView:(WKWebView _)webView didFailProvisionalNavigation:(WKNavigation_ )navigation;
```

页面跳转的代理方法:

```objc
// 接收到服务器跳转请求之后调用

- (void)webView:(WKWebView _)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation_ )navigation; // 在收到响应后, 决定是否跳转
- (void)webView:(WKWebView _)webView decidePolicyForNavigationResponse:(WKNavigationResponse_ )navigationResponse decisionHandler:(void (^)(WKNavigationResponsePolicy))decisionHandler; // 在发送请求之前, 决定是否跳转
- (void)webView:(WKWebView _)webView decidePolicyForNavigationAction:(WKNavigationAction_ )navigationAction decisionHandler:(void (^)(WKNavigationActionPolicy))decisionHandler;
```

# 三、新的`WKUIDelegate`协议

这个协议主要用于`WKWebView`处理web界面的三种提示框(警告框、确认框、输入框), 下面是警告框的例子:

```objc
/**

- web界面中有弹出警告框时调用 *
- @param webView 实现该代理的webview
- @param message 警告框中的内容
- @param frame 主窗口
- @param completionHandler 警告框消失调用
*/

- (void)webView:(WKWebView _)webView runJavaScriptAlertPanelWithMessage:(NSString_ )message initiatedByFrame:(void (^)())completionHandler;
```

# 四、动态加载并运行`JS`代码

用于在客户端内部加入`JS`代码, 并执行, 示例如下:

```objc
// 图片缩放的js代码
NSString *js = @"var count = document.images.length;for (var i = 0; i < count; i++) {var image = document.images[i];image.style.width=320;};window.alert('找到' + count + '张图');";
// 根据JS字符串初始化WKUserScript对象
WKUserScript *script = [[WKUserScript alloc] initWithSource:js injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
// 根据生成的WKUserScript对象, 初始化WKWebViewConfiguration
WKWebViewConfiguration *config = [[WKWebViewConfiguration alloc] init];
[config.userContentController addUserScript:script];
_webView = [[WKWebView alloc] initWithFrame:self.view.bounds configuration:config];
[_webView loadHTMLString:@"<head></head><imgea src='https://www.nsu.edu.cn/v/2014v3/img/background/3.jpg' />"baseURL:nil];
[self.view addSubview:_webView];
```

# 五、webView 执行`JS`代码

用户调用用`JS`写过的代码, 一般指服务端开发的:

```objc
//javaScriptString是JS方法名, completionHandler是异步回调block
[self.webView evaluateJavaScript:javaScriptString completionHandler:completionHandler];
```

`scriptMessageHandler`是代理回调, `JS`调用`name`方法后, `OC`会调用`scriptMessageHandler`指定的对象。

`JS`在调用`OC`注册方法的时候要用下面的方式:

```objc
window.webkit.messageHandlers.<name>.postMessage(<messagebody>)
```

注意, name(方法名)是放在中间的, messageBody只能是一个对象, 如果要传多个值, 需要封装成数组, 或者字典。整个示例如下:

```objc
// OC注册供JS调用的方法
[[_webView configuration].userContentController addScriptMessageHandler:self name:@"closeMe"];

// OC在JS调用方法做的处理
- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    NSLog(@"JS 调用了 %@ 方法, 传回参数 %@",message.name,message.body);
}

// JS调用
window.webkit.messageHandlers.closeMe.postMessage(null);
```

如果你在`self`的`dealloc`打个断点, 会发现`self`没有释放!这显然是不行的!谷歌后看到[一种解决方法](https://stackoverflow.com/questions/26383031/wkwebview-causes-my-view-controller-to-leak), 如下:

```objc
@interface WeakScriptMessageDelegate : NSObject<WKScriptMessageHandler>

@property (nonatomic, weak) id<WKScriptMessageHandler> scriptDelegate;

- (instancetype)initWithDelegate:(id<WKScriptMessageHandler>)scriptDelegate;

@end

@implementation WeakScriptMessageDelegate

- (instancetype)initWithDelegate:(id<WKScriptMessageHandler>)scriptDelegate {
    self = [super init];
    if (self) {
        _scriptDelegate = scriptDelegate;
    }
    return self;
}

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    [self.scriptDelegate userContentController:userContentController didReceiveScriptMessage:message];
}

@end
```

思路是另外创建一个代理对象, 然后通过代理对象回调指定的`self`,

```objc
WKUserContentController *userContentController = [[WKUserContentController alloc] init];
[userContentController addScriptMessageHandler:[[WeakScriptMessageDelegate alloc] initWithDelegate:self] name:@"closeMe"];
```

运行代码, `self`释放了, `WeakScriptMessageDelegate`却没有释放啊啊啊!<br>
还需在`self`的`dealloc`里面 添加这样一句代码:

```objc
[[_webView configuration].userContentController removeScriptMessageHandlerForName:@"closeMe"];
```

至此, 问题解决。

目前大多数App需要支持iOS7以上的版本, 而`WKWebView`只在iOS8后才能用, 所以需要一个兼容性方案, 既iOS7下用`UIWebView`, iOS8后用`WKWebView`。兼容性方案可以参考: [IMYWebView](https://github.com/wangyangcc/IMYWebView)
