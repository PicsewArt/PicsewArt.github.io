---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0031.jpg'
title:  "JSONKit isa错误解决办法"
tags: [iOS,Objective-C,JSONKit,isa]
summary: "JSONKit isa错误解决办法"
---
由于JSONKit不支持ARC，所以我们导入JSONKit之后都需要在Target中为JSONKit.m添加`-fno-objc-arc`，但是这时候可能出现一个isa错误，解决办法是在Target的Build Settings中搜索`Direct usage of 'isa'`并将其设置为`NO`即可。
