---
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'post/unix.jpg'
quote: true
title:  "Start-up Procedure of CentOS 6.5"
tags: [UNIX, Linux, CentOS, Quote]
summary: "Start-up Procedure of CentOS 6.5"
---
Linux的启动其实和windows的启动过程很类似，不过windows我们是无法看到启动信息的，而Linux启动时我们会看到许多启动信息，例如某个服务是否启动。Linux系统的启动过程大体上可分为五部分：内核的引导、运行init、系统初始化、建立终端、用户登录系统。

* 内核引导

> 当计算机打开电源后，首先是BIOS开机自检，按照BIOS中设置的启动设备 (通常是硬盘) 来启动。紧接着由启动设备上的grub程序开始引导Linux，当引导程序成功完成引导任务后，Linux从它们手中接管了CPU的控制权，然后CPU就开始执行Linux的核心映象代码，开始了Linux启动过程。也就是所谓的内核引导开始了，在内核引导过程中其实是很复杂的，我们就当它是一个黑匣子，反正是Linux内核做了一些列工作，最后内核调用加载了init程序，至此内核引导的工作就完成了。交给了下一个主角`init`.

* 运行init

> `init` 进程是系统所有进程的起点，您可以把它比拟成系统所有进程的老祖宗，没有这个进程，系统中任何进程都不会启动。`init` 最主要的功能就是准备软件执行的环境，包括系统的主机名、网络设定、语言、文件系统格式及其他服务的启动等。 而所有的动作都会通过 init的配置文件`/etc/inittab`来规划，而`inittab` 内还有一个很重要的设定内容，那就是默认的 `runlevel` (开机运行级别)。先来看看运行级别Run level,Linux就是通过设定run level来规定系统使用不同的服务来启动，让Linux的使用环境不同。我们来看看这个`inittab`文件里面的支持级别。

```sh
# inittab is only used by upstart for the default runlevel.
#
# ADDING OTHER CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.
#
# System initialization is started by /etc/init/rcS.conf
#
# Individual runlevels are started by /etc/init/rc.conf
#
# ⌃-⌥-⌫ is handled by /etc/init/control-⌥-⌫.conf
#
# Terminal gettys are handled by /etc/init/tty.conf and /etc/init/serial.conf,
# with configuration in /etc/sysconfig/init.
#
# For information on how to write upstart event handlers, or how
# upstart works, see init(5), init(8), and initctl(8).
#
# Default runlevel. The runlevels used are:
#   0 - halt (Do NOT Setter initdefault to this)
#   1 - Single user mode
#   2 - Multiuser, without NFS (The same as 3, if you do not have networking)
#   3 - Full multiuser mode
#   4 - unused
#   5 - X11
#   6 - reboot (Do NOT Setter initdefault to this)
#
id:3:initdefault:
```

> `inittab`配置文件格式和之前老版本CentOS5或者更老版本比有很大改动。`Runlevels`共七个级别，0表示关机，1表示单用户，2表示没有网络的命令行级别，3命令行级别 (大多服务器都用这个级别) ，4为保留级别，5为图形化级别，6为重启。这个文件中除了最后一行外，其他都为注释行，也就是说最后一行才是关键，它用来指定服务器跑哪个级别，这里除了可以设置2,3,5外其他级别都不能设置。在该文件的前面部分，可以看到很多行都提及到某个配置文件，而所有配置文件都是在`/etc/init/`目录下。

* 系统初始化

> 系统初始化，就是去执行`/etc/init/`下的各个配置文件。`inittab`配置文件中有这么一行 `System initialization is started by /etc/init/rcS.conf` 也就是说系统初始化会先执行`/etc/init/rcS.conf` 而该配置文件中又有一行 `exec /etc/rc.d/rc.sysinit` 所以，重心又转移到了这个`rc.sysinit`文件上，它会做如下工作：激活交换分区，检查磁盘，加载硬件模块以及其它一些需要优先执行任务。当`rc.sysinit`程序执行完毕后，将返回`init`继续下一步，又到了`/etc/init/rc.conf`, 在这个配置文件里，最关键的一行为 `exec /etc/rc.d/rc $RUNLEVEL` 而`$RUNLEVEL`是在`/etc/inittab`中定义的(最下面的那一行)，以阿铭的/`etc/inittab`为例，表示`$RUNLEVE=3`, 所以此时会执行 `/etc/rc.d/rc 3` 此时实际上是把`/etc/rc.d/rc3.d/` 下的脚本都给执行了，随后`/etc/rc.d/rc.local`也会被执行，通常我们会把开机启动执行的命令放到这个脚本下。服务执行完，系统初始化也就完成了。接下来该建立终端了。

* 建立终端

> 建立终端是由配置文件`/etc/init/tty.conf, /etc/init/serial.conf`和`/etc/sysconfig/init`等配置文件来完成的。在2、3、4、5的运行级别中都将以`respawn`方式运行`mingetty`程序，`mingetty`程序能打开终端、设置模式。同时它会显示一个文本登录界面，这个界面就是我们经常看到的登录界面，在这个登录界面中会提示用户输入用户名，而用户输入的用户将作为参数传给login程序来验证用户身份。

* 用户登陆系统

> 对于运行级别为5的图形方式用户来说，他们的登录是通过一个图形化的登录界面。登录成功后可以直接进入KDE、Gnome等窗口管理器。而本文主要讲的还是文本方式登录的情况：当我们看到`mingetty`的登录界面时，我们就可以输入用户名和密码来登录系统了。

> Linux的账号验证程序是login，login会接收mingetty传来的用户名作为用户名参数。然后login会对用户名进行分析：如果用户名不是root，且存在 `/etc/nologin` 文件，login将输出`nologin`文件的内容，然后退出。这通常用来系统维护时防止非root用户登录。只有 `/etc/securetty` 中登记了的终端才允许root用户登录，如果不存在这个文件，则root可以在任何终端上登录。`/etc/usertty` 文件用于对用户作出附加访问限制，如果不存在这个文件，则没有其他限制。

> 在分析完用户名后，login将搜索 `/etc/passwd` 以及 `/etc/shadow` 来验证密码以及设置账户的其它信息，比如：主目录是什么、使用何种shell。如果没有指定主目录，将默认为根目录；如果没有指定shell，将默认为 `/bin/bash`。

> login程序成功后，会向对应的终端在输出最近一次登录的信息(在 `/var/log/lastlog` 中有记录)，并检查用户是否有新邮件(在 `/usr/spool/mail/` 的对应用户名目录下)。然后开始设置各种环境变量：对于bash来说，系统首先寻找 `/etc/profile` 脚本文件，并执行它；然后如果用户的主目录中存在 `.bash_profile` 文件，就执行它，在这些文件中又可能调用了其它配置文件，所有的配置文件执行后后，各种环境变量也设好了，这时会出现大家熟悉的命令行提示符，到此整个启动过程就结束了。

---
**Author: @aming**
