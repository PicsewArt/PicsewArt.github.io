---
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0007.jpg'
title:  "UNIX/Linux Command: find"
tags: [UNIX,Linux]
summary: "UNIX/Linux Command: find"
---
`find` 是 UNIX/Linux 系统中用于查找档案的命令，这里我们来看一下它的用法和相关选项。


### 命令用法

	`find path -option [ -print ] [ -exec -ok command ] {} \;

### 使用说明

`expression` 中可使用的选项有二三十个之多，在此只介绍最常用的部分。

* `-exec`：对搜索的结果执行指定的shell命令。注意格式要正确：`-exec 命令 {} \;`。注意`{}` 与`\;`之间有空格。

* `-mount`,`-xdev` : 只检查和指定目录在同一个档案系统下的档案，避免列出其它档案系统中的档案

* `-amin -n`: 在最近的 n 分钟内被读取过

* `-amin +n` : 在 n 分钟之前被读取过

* `-anewer file` : 比档案 `file` 更晚被读取过的档案

* `-atime -n` : 在最近的 n 天内读取过的档案

* `-atime +n` : 在 n 天前读取过的档案

* `-cmin -n` : 在最近的 n 分钟内被修改过

* `-cmin +n` : 在 n 分钟前被修改过

* `-cnewer file` :比档案 `file` 更新的档案

* `-ctime -n` : 在最近的 n 天内修改过的档案

* `-ctime +n` : 在 n 天前修改过的档案

* `-empty` : 空的档案

* `-ipath p`,`-path p` : 路径名称符合 p 的档案，ipath 会忽略大小写

* `-name name`,`-iname name` : 档案名称符合 name 的档案。iname 会忽略大小写

* `-size n[cwbkMG]` : 档案大小, 为 n 个由后缀决定的数据块。其中后缀含义为：

	* `b`: 代表 512 位元组的区块 (如果用户没有指定后缀，则默认为 b) 

	* `c`: 表示字节数

	* `k`: 表示 `kilo bytes`  (1024字节) 

	* `w`: 字  (2字节) 

	* `M`:兆字节 (1048576字节) 

	* `G`: 千兆字节  (1073741824字节) 

* `-type c`: 档案类型是 c 的档案。

	* `d`: 目录

	* `c`: 字型装置档案

	* `b`: 区块装置档案

	* `p`: 具名贮列

	* `f`: 一般档案

	* `l`: 符号连结

	* `s`: socket

* `-pid n`: `process id`是 n 的档案

你可以使用 () 将运算式分隔，并使用下列运算。

	exp1 -and exp2
	! expr
	-not expr
	exp1 -or exp2
	exp1,exp2


### 范例
将目前目录及其子目录下所有延伸档名是 c 的档案列出来。

	$ find . -name "*.c"

将目前目录其其下子目录中所有一般档案列出

	$ find . -ftype f

将目前目录及其子目录下所有最近 20 天内更新过的档案列出

	$ find . -ctime -20

查当前目录下的所有普通文件

	$ find . -type f -exec ls -l {} \;


***
**(内容来自[百度百科](https://baike.baidu.com/))**
