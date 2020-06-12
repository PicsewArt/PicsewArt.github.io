---
title: "SBCL with CodeRunner"
category: "Lisp"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0054.jpg'
tags: [Lisp,SBCL,CodeRunner]
---
Lisp 是继 FORTRAN 之后历史最悠久的高级语言，作为一名括号爱好者，我简单说明一下在 CodeRunner 中运行 Lisp 的方法，由于 Lisp 分支、实现、方言众多，我们选择其中一个 SBCL 来做说明 (不是 `SB's CLisp` 哟)。

首先我们知道 CodeRunner 执行代码是基于 Terminal 指令的，那么也就是说，我们要在 CodeRunner 中执行 `.lisp` 文件，首先需要有终端工具。

为了安装 SBCL，你可以访问器官方网站下载，或者通过 [**Macports**](https://www.macports.org) 来安装，至于 Macports 的安装太过简单这里不做赘述。

如果你使用 Macports，只需要在终端输入以下指令:
```sh
sudo port install sbcl
```


确认密码后，将开始自动下载和安装。在等待下载和安装的过程中，我们来配置 CodeRunner 部分:

* 启动 CodeRunner (废话)

* 按下 `⌘` + `,`  进入偏好设置选择 `Languages` 面板

* 单机左下角 `+` 添加一个语言，名称可以输入 Lisp

* 选择新添加的语言，进入其右侧 `Settings` 部分

* 在 `Run Command:` 后输入指令:

```sh
sbcl --noinform --load $filename
```


* 在 `File Extensions` 后输入 `lisp`

* 将 `Syntax Mode` 设置为 `Lisp`

那么，接下来，等待 SBCL 安装完毕后，我们在 CodeRunner 中新建文件，语言选择刚才新建的 Lisp，随便输入什么代码例如 `(print "Hello Meniny")` 然后按下 `⌘` + `R` 即可运行。




