---
title: "OS X : 像 iPhone 一样的充电提示音"
category: "OS X"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0013.jpg'
tags: [OS X, Mac]
---
用 iPhone/iPad/iPod Touch 的同学肯定对充电时的提示音不陌生，但是，有没有想过在 Mac 上也听到同样的声音呢？如果你想过，却不知道怎么实现，今天就让我来告诉你。

首先，为了体现我们的高端之处，我们打开终端工具。

接下来，输入下面的指令:

```sh
defaults write com.apple.PowerChime ChimeOnAllHardware -bool true; open /System/Library/CoreServices/PowerChime.app
```

这其实是两条指令，如果你愿意，你可以把他们分开:

```sh
defaults write com.apple.PowerChime ChimeOnAllHardware -bool true
```

```sh
open /System/Library/CoreServices/PowerChime.app
```

接下来，插上电源，有没有听到呢？




