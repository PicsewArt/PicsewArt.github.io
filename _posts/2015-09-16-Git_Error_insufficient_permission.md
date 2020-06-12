---
category: "Git"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0029.jpg'
title:  "Git Error: insufficient permission for adding an object to repository database .git/objects"
tags: [OS X,Mac,Git]
summary: "Git Error: insufficient permission for adding an object to repository database .git/objects"
---
今天提交 `Git` 的时候出现一个错误，来看一下：

	error: insufficient permission for adding an object to repository database .git/objects

看字面意思是权限不完全，第一个想法是 `chmod`:

	chmod -R 755 ~/Meniny.github.io

这里是将 `~/Meniny.github.io` 权限设置为 `755` ，也就是`rwxr-xr-x` ，其中 `-R` 表示其子路径的文件(夹)也将继承该权限。
提示是这样的:

	chmod: Unable to change file mode on /Users/Meniny/Meniny.github.io/.git/objects/38/3e9005dd5092845436e91d5f3c5d52309a3219: Operation not permitted

问题出在哪里呢？我想到了 `sudo -s`:

	sudo -s

回车，无异常，重新 `chmod`。

	chmod -R 755 ~/Meniny.github.io

接着用 `add`、`commit`、`push`，OK 无异常。
