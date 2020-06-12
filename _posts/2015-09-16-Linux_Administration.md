---
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0061.jpg'
title:  "UNIX/Linux 文件权限浅析"
tags: [UNIX,Linux]
summary: "UNIX/Linux 文件权限浅析"
---
## 一、基本文件权限

我们知道在 UNIX/Linux 中可以用 `ls -l` 命令来查看权限，其表示格式是类似这样的:

	-rwxr-xr-x

这种表示方法一共有十位:

	9 8 7 6 5 4 3 2 1 0
	- r w x r - x r - x

* 第`9`位表示文件类型,可以为`p`、`d`、`l`、`s`、`c`、`b`和`-`。
_
<table border="1" class="table table-bordered table-striped table-condensed">
<tr><th>权限</th><th>说明</th></tr>
<tr><th>p</th><th>命名管道文件</th></tr>
<tr><th>d</th><th>目录</th></tr>
<tr><th>l</th><th>符号连接文件</th></tr>
<tr><th>-</th><th>普通文件</th></tr>
<tr><th>s</th><th>socket文件</th></tr>
<tr><th>c</th><th>字符设备文件</th></tr>
<tr><th>b</th><th>块设备文件</th></tr>
</table>
_

* 第`8` - `6`位、`5` - `3`位、`2` - `0`位分别表示文件所有者的权限，同组用户的权限，其他用户的权限，其形式为`rwx`。
_
<table border="1" cellpadding="10">
<tr><th>权限</th><th>说明</th></tr>
<tr><th>r</th><th>可读</th></tr>
<tr><th>w</th><th>可写</th></tr>
<tr><th>x</th><th>可执行</th></tr>
<tr><th>-</th><th>没有对应位置所表示的权限</th></tr>
</table>
_

## 二、特殊文件权限: SUID 与 GUID

除了上述的权限外，还存在一些特殊权限，这里我们来了解下 `SUID`(Setter User ID) 和 `GUID`(Setter Group ID)。

如果一个文件被设置了 `SUID` 或 `SGID` 位，会分别表现在*所有者*或*同组用户*的权限的可执行位上。

## 三、文件权限概述

其实在 UNIX/Linux 系统中，可以使用12个二进制位表示文件权限，如果该位置上的值是 `1` 则表示有相应的权限:
_
<table border="1" cellpadding="10">
<tr><th>序号</th><th>11</th><th>10</th><th>9</th><th>8</th><th>7</th><th>6</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th><th>0</th></tr>
<tr><th>权限</th><th>S</th><th>G</th><th>T</th><th>r</th><th>w</th><th>x</th><th>r</th><th>w</th><th>x</th><th>r</th><th>w</th><th>x</th></tr>
</table>
_

* 第 `11` 位为 `SUID` 位

* 第 `10` 位为 `SGID` 位

* 第 `9` 位为`sticky` 位

* 第 `8` - `0` 位对应于上面的*三组* `rwx` 位。

举个栗子:

* `-rwsr-xr-x` 的值为: `1 0 0 1 1 1 1 0 1 1 0 1`

* `-rw-r-Sr--` 的值为: `0 1 0 1 1 0 1 0 0 1 0 0`

## 四、文件权限设置

给文件设置文件权限我们可以使用 `chmod`(change mode) 命令。

这里我们对 `SUID` 和 `SGID` 的设置命令再单独说明:
_
<table border="1" cellpadding="10">
<tr><th>命令</th><th>说明</th></tr>
<tr><th>chmod u+s filename</th><th>设置所属主的 SUID 位</th></tr>
<tr><th>chmod u-s filename</th><th>去掉所属主的 SUID 设置</th></tr>
<tr><th>chmod g+s filename</th><th>设置所属组的 SGID 位</th></tr>
<tr><th>chmod g-s filename</th><th>去掉所属组的 SGID 设置</th></tr>
<tr><th>chmod o+s filename</th><th>设置其他用户的 SGID 位</th></tr>
<tr><th>chmod o-s filename</th><th>去掉其他用户的 SGID 设置</th></tr>
<tr><th>chmod a+s filename</th><th>设置所有 SGID 位</th></tr>
<tr><th>chmod a-s filename</th><th>去掉所有 SGID 设置</th></tr>
</table>
_

当然，你也可以使用八进制表示方法的设置，这里不再赘述。

另外需要说明的是，`SUID` 和 `SGID` 只在执行时起作用，而相应的，可执行位只对普通文件和目录文件有意义，因此设置其他种类文件的 `SUID` 和 `SGID` 位没有什么实际意义。

## 五、SUID 与 SGID 解析

### 对于普通文件

除了一般的 `user id` 和 `group id` 外，还有两个称之为 `effective`， 也即有效id，它们分别表示为:

* `uid`

* `gid`

* `euid`

* `egid`

内核主要根据 `euid` 和 `egid` 来确定进程对资源的访问权限，一个进程如果没有 `SUID` 或 `SGID` 位，此时 `euid` 和 `egid` 分别等于运行这个程序的用户的 `uid` 和 `gid`。反之如果设置了 `SUID`，那么 `euid` 和 `egid` 则为被运行的程序的所有者的 `uid` 和 `gid`。

`SUID` 的作用是提升用户权限，让本来没有相应权限的用户在执行该文件时可以访问他没有权限访问的资源，例如 `passwd`。

`SUID` 的优先级高于 `SGID `，当一个可执行文件设置了 `SUID`，则 `SGID` 会自动变成相应的 `egid`。使用 `SGID` 的风险比 `SUID` 小得多，出于安全考虑，如果可能应尽量用 `SGID` 而不是 `SUID`。

对于 `SUID`，它对目录没有影响，如果一个目录设置了 `SGID` 位，当任何一个用户对此目录有写权限时，该用户在此目录所建立的文件的组都会自动转为此目录的所属主所在的组，而文件所属主仍为该用户。
