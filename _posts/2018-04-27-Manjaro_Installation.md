---
title: "安装 Manjaro"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0025.jpg'
tags: ["Manjaro"]
---
## 前言

本文只适用于启动方式为UEFI+GPT

`Manjaro` 是一款基于`Arch Linux`的、用户友好的发行版, 虽然 `Manjaro is not Arch`, 但它依然能够从 `AUR`(`Arch User Repository`) 中提取软件包, 且有自己的独立库。

它有且不仅有如下特性:

* `Pre-installed` （在你还没正式安装时, 你便可从启动盘直接流畅体验它的桌面系统）
* 快、强、高效
* 滚动发布, 无需定期更新系统版本
* ……

## 准备工作

### 查看电脑的启动方式

目前主流的两种启动系统的方式:

* `Legacy` 启动 + `MBR` 分区表
* `UEFI` 启动 + `GPT` 分区表

我们需要查看自己硬盘使用的哪种分区:

`资源管理器`->`（右键）此电脑`->`管理`->`磁盘管理`

由于我的电脑是[单硬盘], 所以只有一个`磁盘0`, `右键选择一个磁盘`->`属性`->`卷`, 在磁盘`分区形式`一栏中可以看到是`GPT` 或 `MBR`。

### 下载 Manjaro 镜像

对一般用户而言, 官网下载镜像的速度会非常慢, 所以这里可选择在清华大学开源软件镜像站下载 `Manjaro KDE` 的镜像文件。

### 制作启动盘

制作启动盘官方文档推荐使用 `Rufus` 或 `Image Writer`, 我这里使用 `balenaEtcher` 来制作。

> 最新版本的 `Rufus` 可能无法选择分区类型, 可以选择下载低版本。

* 插入U盘
* 打开 `balenaEtcher`
* 选择镜像
* 选择磁盘
* 点击 `Flash!` 开始

### 在 Windows 上为 Manjaro 预先分配磁盘空间

与前面类似, `此电脑`–`管理`–`磁盘管理`, 选择一个空间充裕的分区, `右键`–`压缩卷`–`想要分配的空间大小`–`压缩`。

### 关闭快速启动与安全启动

#### 快速启动

参考[这篇文章](https://jingyan.baidu.com/article/48b558e30ca7977f38c09a95.html)

#### 安全启动

不同的电脑 `BIOS` 也不同, 一般来说, 进入 `BIOS` 后查找 `System Configuration`–`Boot Options`–`Secure Boot` 并设置 `Disabled`。

### 备份 EFI

保险起见, 你可以备份当前 `ESP` 分区的文件, 这一操作可以通过用 `DiskGenius` 实现, 只需要打开 `ESP` 分区并将文件复制到移动磁盘即可。

### PE 系统

当然, 更保险的做法是在准备一个 USB 的 PE 系统, 以便在误操作无法进入系统时进行补救。

## 开始安装

### 设置从U盘启动

你可以在 `BIOS` 中设置, 也可以从 `Windows 设置`–`更新和安全`–`恢复`–`立即重新启动` 处重启。

### 配置选项

成功从U盘启动后, 首先会进入配置界面, 唯一需要注意的是 `driver` 的选择。

`driver` 选择 `free` 还是 `nofree` 因电脑配置而异, 以下仅供参考:

|CPU|显卡|选择|
|:-:|:-:|:-:|
|Intel|无独显|free|
|AMD|无独显|free|
|AMD|NVIDIA|no free|
|Intel|AMD|free|
|Intel|NVIDIA|no free|

设置完毕后, `enterBoot` 进入桌面，从桌面图标或弹出的欢迎窗口启动安装器 (`Installer`)。

### 分区

在安装器中依次选择地区、键盘等项目后, 会进入分区部分, **注意**这里选择**手动分区**。

我的划分表(共60G):

|大小|文件系统|挂载点|标记|用途|
|:-:|:-:|:-:|:-:|:-:|
|8192MB|linuxswap|swap||交换分区|
|512MB|ext4|/boot|boot|启动|
|2048MB|ext4|/|root|存放系统|
|剩余容量|ext4|/home||用户数据|

分区时主要线找到在 Windows 上划分的空闲区, 点击创建。小心将 Windows 系统删除。

最后, 找到一个已经存在的大小为 100M(或200MB, 一般不超过500MB) 的分区, 格式应为 `NTFS`/`FAT32`, 这里有 Windows 的引导分区, 所以内容点`保留`, 将 Manjaro 也挂载在上面, 及 `/boot/efi`。

## 系统配置

### 软件源

首先将镜像源修改到中国地区的服务器, 以便加快下载速度。

```sh
sudo pacman-mirrors -c China -m rank # 更改源
```

接下来在 `/etc/pacman.conf` 中添加 `archlinuxcn` 源, 在文末添加:

```sh
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```

编辑这个文件可能需要 `root` 权限, 你可以通过 `vi`/`nano` 等指令编辑:

```sh
sudo vi /etc/pacman.conf
```

在 `vi` 中, 直接输入 `i` 进去编辑模式, 编辑完成后按 `esc` 后输入 `:wq` 保存退出。

```sh
sudo nano /etc/pacman.conf
```

在 `nano` 中可以直接进行编辑, 编辑完成后按 `ctrl + O` 保存, 会提示保存的路径, 直接回车确认, 然后 `ctrl + X` 关闭编辑器。

安装 `archlinuxcn-keyring` 包以导入 `GPG key`, 否则的话 `key` 验证失败会无法安装:

```sh
sudo pacman -S archlinuxcn-keyring
sudo pacman -Syyu #更新
```

```sh
sudo pacman -S yay # Arch Linux AUR 包管理工具
```

### 解决双系统时间不同步问题

```sh
timedatectl set-local-rtc true
```

### 输入法

**墙裂推荐使用搜狗拼音, 谷歌拼音不太适合中国人的语境**

```sh
sudo pacman -S fcitx
sudo pacman -S fcitx-configtool
sudo pacman -S fcitx-gtk2 fcitx-gtk3 fcitx-qt4 fcitx-qt5
```

#### 解决中文输入法无法切换问题

添加文件 `~/.xprofile`:

```sh
export GTK_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

若以上执行完后无法输入中文, 只能显示字母, 则删掉 ``~/.conf` 下所有与 `Sogou` 相关的文件夹。

```sh
yay -S fcitx -im
sudo pacman -S fcitx-qt4 fcitx-qt5 fcitx-gtk2 fcitx-gtk3
```

若输入法中文乱码, 将搜狗输入法调整至输入法序列第二位。

### 其它

```sh
sudo pacman -S visual-studio-code-bin # vscode
yay -S typora # markdown编辑利器
yay -S deepin-wine-tim # Tim
```

—— 全文完 ——
