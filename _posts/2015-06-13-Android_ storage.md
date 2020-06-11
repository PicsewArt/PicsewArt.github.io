---
title: "Android : File 数据存储"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
tags: [Android]
---
这篇博客主要说说用 File 存储文件的相关内容。

## 存储位置

要存储文件，首先来看看存储位置:

#### Internal Storage

* 保持可用

* 默认只能由 APP 本身访问

* 文件会随着 APP 卸载而一并清空

####  External Storage

* 当用户通过 USB 存储模式挂载外部存储器后将其进行访问，但也意味着用户可以直接通过 USB 挂载来访问这里的文件

* 可以轻易被其他程序访问

* 并非所有文件都会随着 APP 卸载而被删除

> 通常，我们的 APP 会默认安装到 `Internal Storage`，当然你也可以用过在 `manifest` 中声明 `android:installLocation` 将安装位置指定到 `External Storage`:

```xml

<manifest xmlns:android="https://schemas.android.com/apk/res/android" android:installLocation="preferExternal"
    package="com.example.storagethings">

```


## 存储方法

下面再来看看如何存储:

#### Internal Storage

`Context` 中对文件操作、文件夹都提供了相应的函数来支持:

* 创建文件并以文件输出流形式打开，需要提供文件名

```java

FileOutputStream  output = Context.openOutputFile(filename， Context.MODE_***); 
output.write(data) ；// use output to write whatever you like 
output.close();

```


* 打开一个文件作为输入，需要提供文件名

```java

FileInputStream input = Context.openInputFile(filename); 
input.read(); 
input.close();

```


* 列出所有已创建文件

```java

String[] files = Context.fileList(); 
for (String file : files) { 
	Log.e(TAG, "file is " + file); 
}

```


* 删除文件，需要提供文件名

```java

if (Context.deleteFile(filename)) { 
	Log.e(TAG, "delete file " + filename + " sucessfully"); 
} else { 
	Log.e(TAG, "failed to delete file " + filename); 
}

```


* 获取文件已创建文件的路径，返回文件对象

```java

File fileDir = Context.getFileDir(); 
Log.e(TAG, "file directory: " + fileDir.getAbsolutePath();

```


* 创建目录，需要目录名称，返回文件对象

```java

File folder = Context.getDir(dirName, Context.MODE_***); 
Log.e(TAG, "folder: " + folder.getAbsolutePath();

```


* 以 File 对象的方式查看创建的文件，需要文件名，返回文件对象

```java

File store = Context.getFileStreamPath(filename); 
Log.e(TAG, "store.length: " + store.length());

```


* 获取 Cache 路径，返回文件对象，Cache 目录中的内容会在系统内部空间不足时自动清除

```java

File cachedir = Context.getCacheDir(); 
Log.e(TAG, "cachedir " + cacheDir.getAbsolutePath());

```


####  External Storage

要使用 `External Storage` 首先记得一定要检查可用性:

```java

final String state = Environment.getExternalStorageState(); 
if (state.equals(Environment.MEDIA_MOUNTED) || state.equals(Environment.MEDIA_READ_ONLY)) {
	// sd card is ready to us 
}

```


如果可用，那么还需要获取路径:

```java

File sdcardDir = Environment.getExternalStorageDirectory();

```


在 API 8 之后，官方文档开始建议开发者更加规范的使用外部存储，那么，你可能需要这些方法:

```java

Log.i(TAG, "getFilesDir = " + getFilesDir()); 
Log.i(TAG, "getExternalFilesDir = " + getExternalFilesDir("exter_test").getAbsolutePath()); 
Log.i(TAG, "getDownloadCacheDirectory = " + Environment.getDownloadCacheDirectory().getAbsolutePath()); 
Log.i(TAG, "getDataDirectory = " + Environment.getDataDirectory().getAbsolutePath()); 
Log.i(TAG, "getExternalStorageDirectory = " + Environment.getExternalStorageDirectory().getAbsolutePath()); 
Log.i(TAG, "getExternalStoragePublicDirectory = " + Environment.getExternalStoragePublicDirectory("pub_test"));

```


当然，别忘了权限:

```xml

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

```


#### 文件操作模式

前面代码中出现的 `MODE_***` 你可能已经注意到了，下面我们来看看文件的操作模式都有哪些:

* `MODE_PRIVATE`: 默认的操作模式，表示该文件为私有数据，只课被应用本身访问。如果文件存在则其内容会被覆盖。

* `MODE_APPEND`: 追加模式，如果文件存在则追加内容，否则创建新文件

* `MODE_WORLD_READABLE`: 其他应用有权限读取该文件

* `MODE_WORLD_WRITEABLE`: 其他应用有权限写入该文件







