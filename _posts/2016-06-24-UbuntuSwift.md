---
title: "Ubuntu: Using Swift"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0008.jpg'
tags: [Linux, Ubuntu, Clang, Swift]
---
本文主要关于在 `Ubuntu` 中安装和使用 `Swift` 的相关步骤。

(以 `Ubuntu 15.10` 为例)

## 下载 `Swift`

在 [Swift.org](https://swift.org/download/#releases) 找到并下载对应的 `Swift` 版本。

## 解压 `Swift`

```sh

$ cd Swift压缩包所在目录的路径
$ tar -xf Swift压缩包文件名.tar.gz
$ mv Swift解压后的文件夹名 /swift

```


(最后一句 `mv` 是为了方便操作，可以省略，`/swift` 也可以是其它路径)

举个例子:

```sh

$ cd /home/meniny/Desktop/swift-2.2.1-RELEASE-ubuntu15.10.tar.gz
$ tar -xf swift-2.2.1-RELEASE-ubuntu15.10.tar.gz
$ mv swift-2.2.1-RELEASE-ubuntu15.10 /swift

```


## 安装 `Clang`

```sh

$ sudo apt-get install clang

```


## 环境变量

如果你将 `Swift` 安装到了自定义的路径，那么你还需要执行类似这样的指令来指明该路径:

```sh

$ gedit ~/.profile

```


在末尾添加下面的文字并保存:

```sh

export PATH=解压后的路径/usr/bin:"${PATH}"

```


例如我解压到 `/swift`，那么:

```sh

$ export PATH=/swift/usr/bin:"${PATH}"

```


## 版本确认

确认 `Swift` 版本:

```sh

$ swift --version
Swift version 2.2.1 (swift-2.2.1-RELEASE)
Target: x86_64-unknown-linux-gnu

```


## 使用 REPL

要使用 `REPL` 只需要键入下面的指令即可

```sh

$ swift
Welcome to Swift version 2.2.1 (swift-2.2.1-RELEASE). Type :help for assistance.
  1 >

```




