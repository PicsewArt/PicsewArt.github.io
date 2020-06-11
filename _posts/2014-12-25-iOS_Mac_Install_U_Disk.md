---
category: "OS X"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0049.jpg'
title:  "OS X : 制作系统安装盘"
tags: [OS X]
---
本文主要介绍用终端制作 OS X 安装 U 盘的方法。

## 下载安装器

首先你需要在 Mac App Store 下载 OS X 系统，下载完成之后你可以在 `/Applications` 路径下找到它。

## 准备 U 盘

你需要准备一个容量足够的 U 盘，或者一个大约 6GB 以上的分区。注意，在使用之前请***务必**备份这些磁盘或分区中的数据。

## 开始制作

做好前面的准备工作之后就可以使用终端来制作安装盘了，安装命令的格式为:

```sh

sudo createinstallmedia路径 --volume U盘路径 --applicationpath 安装器App路径

```


如果你不知道 `createinstallmedia` 的路径，可以进入 `/Applications` 找到安装器 app，点击右键，选择 **显示包内容**，然后依次进入 `Contents/Resources` 即可找到 `createinstallmedia` 文件。

输入完整的指令后，按下回车会提示输入用户密码，输入后回车。

然后屏幕上将会显示:

```sh

Ready to start.
To continue we need to erase the disk at /Volumes/TestVolumes.
If you wish to continue type (Y) then press return:

```


这个提示的意思是，如果继续将会擦除磁盘中的数据。如果确定继续，则输入 Y 后回车。制作完成后会显示 `done.`。




