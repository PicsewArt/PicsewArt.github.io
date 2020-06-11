---
title: "Xcode 8: 注释快捷键失效的问题"
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0030.jpg'
tags: [Xcode]
---
Xcode 8 发布以来，Beta 版有一个可能不是很普遍的问题: 注释快捷键 `⌘` + `/` 失效。

在 [Twitter](https://twitter.com/kolpanic/status/763323546814844928) 上找到一个解决办法，很简单，在终端执行下面的指令，然后重启系统即可。

```sh

sudo /usr/libexec/xpccachectl

```




