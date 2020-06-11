---
title: "iOS : Debug 与 print 001[Swift]"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,Debug,print,Swift]
---
接上文，本篇是 Swift 版本。

```swift

//
//  Console.swift
//  Console
//
//  Created by Meniny on 15/7/27.
//  Copyright © 2015年 Meniny. All rights reserved.
//
import Foundation
    
/*!
*  @method println:
*
*  @discussion custom print function
*
*/
class func println<T>(message: T, file: String = __FILE__, method: String = __FUNCTION__, line: Int = __LINE__) {
   #if DEBUG
       print("* ----------------------\n* File: \((file as NSString).lastPathComponent)\n* Line: \(line)\n* Function: \(method)\n* \(message)\n")
   #else
       // save logs
   #endif
}

```

与上一篇类似，我们的输出依然会额外添加文件名、方法名、行号等信息。

```swift

let abc = "def"
println("abc = \(abc)")
println("Some log")

```

看看输出结果:

```sh

* ----------------------
* File: ViewController.swift
* Line: 19
* Function: viewDidLoad()
* abc = def

* ----------------------
* File: ViewController.swift
* Line: 20
* Function: viewDidLoad()
* Some log

```






