---
title: "iOS 面试题: Retain Cycle"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0014.jpg'
---
最近遇到和看到的一些面试题。

#### 描述一个你遇到过的 Retain Cycle 例子。

block中的循环引用: 一个viewController

```objc
@property (nonatomic,strong)HttpRequestHandler * handler;
@property (nonatomic,strong)NSData             *data;
_handler = [httpRequestHandler sharedManager];
[_handler downloadData:^(id responseData){
    _data = responseData;
}];
```

self 拥有_handler, _handler 拥有block, block拥有self(因为使用了self的_data属性,block会copy 一份self)

解决方法:
```objc
__weak typedof(self)weakSelf = self
[_handler downloadData:^(id responseData){
    weakSelf.data = responseData;
}];
```
