---
title: "CentOS: Install Clang"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0016.jpg'
tags: [Linux, CentOS, Clang]
---
本文主要关于在 `CentOS` 中安装 `Clang` 的相关步骤。

(以 `CentOS 7` 为例)

## 安装 `libstdc++`

如果你正在使用 `CentOS 7` 及以上的版本，请直接跳过此步骤。

```sh

wget https://people.centos.org/tru/devtools-2/devtools-2.repo -O /etc/yum.repos.d/devtools-2.repo

```


```sh

yum install devtoolset-2-gcc devtoolset-2-binutils devtoolset-2-gcc-c++

```


```sh

ln -s /opt/rh/devtoolset-2/root/usr/bin/* /usr/local/bin/

```


## 安装Python

如果你已经安装了 `Python 2.7` 及以上的版本，请直接跳过此步骤。

```sh

yum install zlib-devel
yum install bzip2-devel
yum install openssl-devel
yum install ncurses-devel
yum install sqlite-devel

```


```sh

cd /opt

```


```sh

wget --no-check-certificate https://www.python.org/ftp/python/3.5.1/Python-3.5.1.tar.xz

```


```sh

tar xf Python-3.5.1.tar.xz

```


```sh

cd Python-3.5.1

```


```sh

./configure --prefix=/usr/local

```


```sh

make && make altinstall

```


```sh

ln -s /usr/local/bin/python3.5 /usr/local/bin/python

```


## 下载 `LLVM` 源代码

```sh

wget https://llvm.org/releases/3.8.0/llvm-3.8.0.src.tar.xz

```


```sh

mv llvm-3.8.0.src llvm

```


## 下载 `clang` 源代码

```sh

cd llvm/tools

```


```sh

wget https://llvm.org/releases/3.8.0/cfe-3.8.0.src.tar.xz

```


```sh

tar xf cfe-3.8.0.src.tar.xz

```


```sh

mv cfe-3.8.0.src clang

```


## 下载 `compiler-rt` 源代码

```sh

cd ../projects

```


```sh

wget https://llvm.org/releases/3.8.0/compiler-rt-3.8.0.src.tar.xz

```


```sh

tar xf compiler-rt-3.8.0.src.tar.xz

```


```sh

mv compiler-rt-3.8.0.src compiler-rt

```


## 配置编译选项

由于不允许在 `LLVM` 的 `Source Tree` 中配置，所以我们随便进入一个路径

```sh

cd ~

```


```sh

/usr/local/bin/llvm/configure --enable-optimized CC=gcc CXX=g++

```


如果你执行上面指令后得到这样的提示:

```sh

error: g++|clang++|icc required but not found

```


那么你可能需要安装 `G++`:

```sh

yum install gcc-c++

```


## 编译 `llvm`

```sh

make -j2

```


根据这可能需要较长的时间，编译成功后的提示:

```sh

llvm[0]: ***** Completed Release+Asserts Build

```


## 安装 `llvm`

```sh

make install

```


`LLVM` 会安装在 `/usr/local/bing` 目录下。

## 检查 `clang` 版本

```sh

# clang --version
clang version 3.8.0 (tags/RELEASE_350/final)

```


如果还是旧版本:

```sh

ls -s /usr/local/bin/clang /usr/bin/clang

```




