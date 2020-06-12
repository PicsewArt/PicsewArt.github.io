---
title: "MongoDB Primer 001: 介绍与安装"
category: "MongoDB"
tags: [MongoDB, MongoDB Primer]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0048.jpg'
---
[MongoDB](https://www.mongodb.com) 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 Web 应用提供可扩展的高性能数据存储解决方案。



MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似 json 的 bson 格式，因此可以存储比较复杂的数据类型。Mongo 最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。



## 特点

它的特点是:

* 高性能

* 易部署

* 易使用

* 存储数据非常方便



主要功能特性有:

* 面向集合存储，易存储对象类型的数据。

* 模式自由。

* 支持动态查询。

* 支持完全索引，包含内部对象。

* 支持查询。

* 支持复制和故障恢复。

* 使用高效的二进制数据存储，包括大型对象 (如视频等) 。

* 自动处理碎片，以支持云计算层次的扩展性。

* 支持RUBY，PYTHON，JAVA，C++，PHP，C#等多种语言。

* 文件存储格式为BSON (一种JSON的扩展) 。

* 可通过网络访问。



## 安装

在进行操作之前，我们需要先下载安装 MongoDB，在官方网站 ([https://www.mongodb.com](https://www.mongodb.com)) 可以轻易找到下载页面 ([https://www.mongodb.com/download-center](https://www.mongodb.com/download-center))，选择相应的系统平台并点击下载按钮即可。下载后的文件是一个 `.tgz` 包 (针对 Windows 平台的是 `.msi`)。



#### 手动安装

先来介绍手动安装的方法，对 OS X 和 Linux 用户，你也可以参考后面具有针对性的安装方法。



手动安装时，如果你下载的是 `.tgz` 文件，你应该先进行文件提取:

```console
tar -zxvf mongodb-osx-x86_64-3.4.0-rc0.tgz
```

当然，具体的 `.tgz` 文件名依据情况会有所不同。提取后，一般我们还会将提取到的文件复制或移动到指定的目录:

```console
mkdir -p mongodb
cp -R -n mongodb-osx-x86_64-3.4.0-rc0/ mongodb
```

接下来还需要配置 `PATH` 变量，例如 `~/.bashrc` 中加入:

```console
export PATH=<mongodb-install-directory>/bin:$PATH
```

当然这也依据实际情况有所不同。其中，`<mongodb-install-directory>` 部分表示刚才我们指定的目录。



#### OS X: Homebrew

对于 OS X，你还可以使用 Homebrew 来进行安装。要使用 Homebrew 安装，首先你应当更新其数据库:

```console
brew update
```

然后进行安装:

```console
brew install mongodb
```

如果你需要 `TLS/SSL` 支持，这样安装:

```console
brew install mongodb --with-openssl
```

如果你愿意安装最新的开发版本，这样安装:

```console
brew install mongodb --devel
```



#### Linux: yum

对于 Linux，你可以选择使用 yum 来进行安装。但 Linux 版本众多，实际情况请参考 [官方说明](https://docs.mongodb.com/master/administration/install-on-linux/)，这里不做赘述。



## 启动

第一步，建立数据目录，默认使用 `/data/db` 目录。

```console
sudo mkdir -p /data/db
```

第二步，你需要确认你的账户对这个文件夹具有读写权限。



第三步，启动。如果你的 `PATH` 变量包含了 `mongod` 二进制文件的路径，并且你使用了默认的数据库目录，则只需要执行:

```console
mongod
```

如果你的 `PATH` 没有包含该二进制文件路径，则执行这样的命令来启动:

```console
full_path_to_binary/mongod
```

如果你指定了其它数据库目录:

```console
mongod --dbpath full_path_to_data_directory
```

如果你不具备权限，会有 `Permission denied` 错误。


