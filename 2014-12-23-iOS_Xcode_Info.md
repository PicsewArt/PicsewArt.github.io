---
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'post/xcode.jpg'
title:  "Xcode : 修改新创建文件的默认注释"
tags: [iOS,Xcode]
summary: "Xcode : 修改新创建文件的默认注释"
---
通常我们在 Xcode 中新建源代码文件，会有一些自动生成的注释，他们形如下面这样:

```objc
//
//  AppDelegate.m
//  Spyhole
//
//  Created by Meniny on 14/6/23.
//  Copyright © 2014年 Meniny. All rights reserved.
//
```

不知道大家有没有想过修改这些文字? 现在，我们就来看看怎样去自定义这些信息。

首先从哪里下手呢？我们知道这是 Xcode 自动生成的，既然没有提供修改的入口，那么一定在 Xcode 内部保存着，事实上我已经帮你找到了:

`/Applications/Xcode/Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/Xcode/Templates`

进入这个路径有很多方法，例如你可以在 Finder 中按下 `⌘` + `⇧` + `G` 然后输入上面这段路径并回车，或者在应用程序文件夹中找到 Xcode，点右键选择 `显示包内容`，依次进入 `Contents/Developer/Platforms/iPhoneOS.platform/Developer/Library/Xcode/Templates`，如果你不知道应用程序文件夹在哪(╮(╯▽╰)╭ )，你只需要按住 `⌘` 键单击 Dock 栏中的 Xcode 图标即可，若你不知道什么 Dock 栏或者不知道什么是单击，请关闭本页面。

废话少说，继续下面的步骤，进入上面所说的文件夹后，你会看到两个子文件夹，分别是:

* `File Templates`

* `Project Templates`

前者包含了我们要修改的内容；后者提供了一些项目相关的其他信息，例如默认生成的代码。

选择我们进入 `File Templates` 文件夹，如果你熟悉新建文件时的界面，那么你一定已经拍着大腿说 "原来如此":

![File Templates](https://img.blog.csdn.net/20150922222228206?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

是的，`File Templates` 下的子目录与新建文件界面的图标一一对应，由于我们要修改源代码文件的注释，那么我们选择进入 `Source` => `Cocoa Touch Class.xctemplate`:

![Cocoa Touch Class.xctemplate](https://img.blog.csdn.net/20150922222210755?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

这里有很多文件，它们对应了不同类型不同语言的源文件，随便找一个，例如 `NSObjectObjective-C`:

```objc
//
//  ___FILENAME___
//  ___PROJECTNAME___
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//___COPYRIGHT___

//#import "___FILEBASENAME___.h"

@implementation
___FILEBASENAMEASIDENTIFIER___
@end
```

类似 `___FILENAME___ ` 这样的东西大家已经很熟悉了(`__func__` 什么的)。

我们随便改一改，加个金元帅什么的:

```objc
//
//  ___FILENAME___
//  ___PROJECTNAME___
//
//    ／￣￣￣Y￣￣。 ＼
//   l　　　　　　　　　l
//　ヽ,,,,,／ ￣￣￣￣ ヽﾉ
//　|::::: 　　　　　　　l
//　|:::　　 ＿_　　　　 |
// (6　　　＼●　     ●  丨
//　!　　　　  )・・(    ﾉ
//　ヽ 　 　　　(三)　  ﾉ
//　／＼　   　  二　ノ
// /⌒ヽ. ‘ー — 一 ＼
//l　　　 |👍🏻　　　ヽoヽ👍🏻
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//___COPYRIGHT___

//#import "___FILEBASENAME___.h"

@implementation
___FILEBASENAMEASIDENTIFIER___
@end
```

好了，好人就做到这里，其他的都是同样的道理，大家自己发挥吧。
