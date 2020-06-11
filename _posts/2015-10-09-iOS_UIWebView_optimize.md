---
title: "iOS : UIWebView 优化之资源文件本地化"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,UIWebView]
---
为了降低开发和维护成本，很多公司和团队选择了嵌入 Web 页面的方式发布客户端，但一直以来 Web 应用与 Native 应用的在用户体验方面都存在不小的差距，因此如何缩小这种差距就成了一个关键的问题。

通常来说，我们的 Web 应用都拥有许多页面，页面切换也比较频繁，而在页面在加载时，相关的资源诸如 JS、CSS、IMG 等在很多情况下并不会随页面变动，因此我们可以将这部分资源放置在本地，在需要的时候交给页面使用。

### 资源变动的分析

正如前面所有，不会改变的资源只是所有资源中的一部分，因此我们就需要对资源的变动情况进行分析，以便将不会改变的资源提取出来。

### 资源拦截的实现

经过了资源变动的分析之后，就需要针对性的对资源进行拦截，资源拦截需要分为两步:

* 实现自己的拦截协议

* 注册自己的拦截协议

### 拦截协议的实现

要实现拦截协议，需要我们重写下面几个方法:

* `canInitWithRequest`: 是否拦截请求，如果不拦截则会交还系统处理

* `canonicalRequestForRequest`: 原请求

* `startLoading`: 加载请求开始

* `stopLoading`: 加载请求结束

为了更好的举例说明，我假设前面提到的 JS、CSS、IMG 三类资源我们都需要拦截，分别有:

* `bootstrap.min.js`

* `bootstrap.min.css`

* `icon.png`

然后，我们来逐步实现自己的 `URLProtocol`:

```swift
//  MXResourceInterceptURLProtocol.swift
//  MXWebViewOptimizeDemo
//  Created by Meniny on 10/09/15.
//  Copyright © 2015 Meniny. All rights reserved.
//

import Foundation

class MXResourceInterceptURLProtocol: NSURLProtocol {
    static var res:Dictionary<String,String> = [:]  // 资源文件
    static var type:Dictionary<String,String> = [:]  // 资源类型

    // MARK: - 数据初始化
    class func initData(){
        MXResourceInterceptURLProtocol.res["bootstrap.min.css"] = "res/css"
        MXResourceInterceptURLProtocol.res["bootstrap.min.js"] = "res/js"
        MXResourceInterceptURLProtocol.res["icon.png"] = "res/img"

        MXResourceInterceptURLProtocol.type["bootstrap.min.css"] = "text/css"
        MXResourceInterceptURLProtocol.type["bootstrap.min.js"] = "application/javascript"
        MXResourceInterceptURLProtocol.type["icon.png"] = "image/png"
    }

    // MARK: - 拦截请求
    override class func canInitWithRequest(request: NSURLRequest) -> Bool {
        if MXResourceInterceptURLProtocol.res.isEmpty {
            MXResourceInterceptURLProtocol.initData()
        }

        let requestUrl = request.URL!.absoluteString
        for key in MXResourceInterceptURLProtocol.res.keys{
            if requestUrl.hasSuffix(key) {
                // true: 使用本协议处理
                return true
            }
        }
        // false: 不使用本地协议处理
        return false
    }

    // MARK: - 原请求
    override class func canonicalRequestForRequest(request: NSURLRequest) -> NSURLRequest{
        return request
    }

    // MARK: - 替换请求
    override func startLoading(){

        let path:NSString = self.request.URL!.path!

        var name:String!
        for key in MXResourceInterceptURLProtocol.res.keys {
            if path.hasSuffix(key){
                name = key ;
                break ;
            }
        }

        if MXResourceInterceptURLProtocol.res.indexForKey(name) == nil{
            return;
        }

        let dir = MXResourceInterceptURLProtocol.res[name]
        let urlPath = NSBundle.mainBundle().pathForResource(name, ofType: nil, inDirectory:dir)
        let url = NSURL.fileURLWithPath(urlPath!)

        let type = MXResourceInterceptURLProtocol.type[name]

        let data = NSData(contentsOfURL:url)

        let response = NSURLResponse(URL: url, MIMEType: type, expectedContentLength: data!.length, textEncodingName: "UTF-8")
        self.client!.URLProtocol(self, didReceiveResponse: response, cacheStoragePolicy: .NotAllowed)
        self.client!.URLProtocol(self, didLoadData: data!)
        self.client!.URLProtocolDidFinishLoading(self)
    }

    // MARK: - 加载结束，这里不做特殊处理
    override func stopLoading() {

    }
}
```


### 拦截协议的注册

前面提到，拦截协议实现后还需要进行注册，此操作我们来到 `AppDelegate` 中进行:

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
	// 注册协议
	NSURLProtocol.registerClass(MXResourceInterceptURLProtocol)
	// 其他代码...
	return true
}
```


好了，到这里一个基本的资源拦截和替换就完成了。




