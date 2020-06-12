---
title: "ADB 常用指令"
category: "Android"
copy: true
tags: [Android, ADB]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0006.jpg'
---
调试Android程序有时需要adb shell 命令，adb全称Android Debug Bridge ，就是起到调试桥的作用。通过adb我们可以在Eclipse中通过DDMS来调试Android程序，说白了就是debug工具。adb通过监听Socket TCP 5554等端口让IDE和Qemu通讯。默认情况下当我们运行Eclipse时adb进程就会自动运行。adb是一个C/S模式的程序，由三个部分组成：a client，a server and a daemon。其中client和server运行在的development machine上，daemon运行在emulator或设备上。

adb一般位于 `/platform-tools/` 目录下。可以把adb 路径添加进系统环境变量path里面。

以下是常用adb命令

1. 显示系统中全部Android平台：

```console
android list targets
```

2. 显示系统中全部AVD (模拟器) ：

```console
android list avd
```

3. 创建AVD (模拟器) ：

```console
android create avd –name 名称 –target 平台编号
```

4. 启动模拟器：

```console
emulator -avd 名称 -sdcard ~/名称.img (-skin 1280×800)
```

5. 删除AVD (模拟器) ：

```console
android delete avd –name 名称
```

6. 创建SDCard：

```console
mksdcard 1024M ~/名称.img
```

7. AVD(模拟器)所在位置：

Linux: `~/.android/avd`

Windows: `C:\Documents and Settings\Administrator.android\avd)`

8. 启动DDMS：

```console
ddms
```

9. 显示当前运行的全部模拟器：

```console
adb devices
```

10. 对某一模拟器执行命令：

```console
abd -s 模拟器编号 命令
```

11. 安装应用程序：

```console
adb install -r 应用程序.apk
```

12. 获取模拟器中的文件：

```console
adb pull <remote> <local>
```

13. 向模拟器中写文件：

```console
adb push <local> <remote>
```

14. 进入模拟器的shell模式：

```console
adb shell
```

15. 启动SDK，文档，实例下载管理器：

```console
android
```

16. 缷载apk包：

```console
adb shell
cd data/app
rm apk包
exit
adb uninstall apk包的主包名
adb install -r apk包
```

17. 查看adb命令帮助信息：

```console
adb help
```

18. 在命令行中查看LOG信息：

```console
adb logcat -s 标签名
```

19. adb shell后面跟的命令主要来自：

源码`\system\core\toolbox`目录和源码`\frameworks\base\cmds`目录。

20. 删除系统应用：

```console
adb remount  (重新挂载系统分区，使系统分区重新可写) 。
adb shell
cd system/app
rm *.apk
```

21. 获取管理员权限：

```console
adb root
```

22. 启动Activity：

```console
adb shell am start -n 包名/包名＋类名 (-n 类名,-a action,-d date,-m MIME-TYPE,-c category,-e 扩展数据,等) 。
```

23. 发布端口：

你可以设置任意的端口号，做为主机向模拟器或设备的请求端口。如：

```console
adb forward tcp:5555 tcp:8000
```

24. 复制文件：

你可向一个设备或从一个设备中复制文件，复制一个文件或目录到设备或模拟器上：

```console
adb push <source> <destination></destination></source>
```

从设备或模拟器上复制一个文件或目录：

```console
adb pull <source> <destination></destination></source>
```

25. 搜索模拟器/设备的实例：

取得当前运行的模拟器/设备的实例的列表及每个实例的状态：

```console
adb devices
```

26. 查看bug报告：

```console
adb bugreport
```

27. 记录无线通讯日志：

一般来说，无线通讯的日志非常多，在运行时没必要去记录，但我们还是可以通过命令，设置记录：

```console
adb shell
logcat -b radio
```

28. 获取设备的ID和序列号：

```console
adb get-product
adb get-serialno
```

29. 访问数据库 SQLite3

```console
adb shell
sqlite3
```

30. `cd system/sd/data` //进入系统内指定文件夹

31. `ls` //列表显示当前文件夹内容

32. `rm -r xxx` //删除名字为xxx的文件夹及其里面的所有文件

33. `rm xxx` //删除文件xxx

34. `rmdir xxx` //删除xxx的文件夹
