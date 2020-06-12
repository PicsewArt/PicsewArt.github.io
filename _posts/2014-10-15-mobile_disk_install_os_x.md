---
category: "OS X"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
title:  "OS X: 制作 U 盘安装盘"
tags: [OS X, Mac]
---
总有人问怎么用 U 盘安装 OS X 系统，写个博客吧以后可以直接发链接了。

## 如何安装

首先打开终端，替换并输入下面这条指令:

```console
sudo createinstallmedia文件路径 --volume U盘路径 --applicationpath 安装器APP路径
```

其中 `安装器` 一般位于 `/Applications/` 目录下，而 `createinstallmedia` 文件位于安装器中 `/Contents/Resources/` 子目录下。

如果你不会输入路径也没关系，所有文件和目录的路径可以通过拖放 `Finder` 中对应图标到终端界面的方式获取。

最后，不要忘记空格!!

## Mavericks 的示例:

```console
sudo /Applications/Install\ OS\ X\ Mavericks.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume --applicationpath /Applications/Install\ OS\ X\ Mavericks.app
```

具体的路径可能因情况不同而有所不同，例如你的安装器被移动其他目录。




