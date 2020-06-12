---
title: "Android: 在 Mac 中生成 keystore"
category: "Android"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0058.jpg'
tags: [Android, keystore, Mac,]
---
在 Mac 中生成 keystore 其实也很简单, 虽然 Android Studio 中有这个功能, 但不少小伙伴还在用 eclipse 呢。

### 打开终端进入 Java 安装路径

```console
cd /Library/Java/Home/bin/
```

### 生成到指定路径

```console
keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -validity 20000 -keystore 指定路径/文件名.keystore
```

例如, 生成到我的桌面, `~/Desktop/demo.keystore`:

```console
keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -validity 20000 -keystore /Users/Meniny/Desktop/demo.keystore
```

### 按照提示输入

```console
$ cd /Library/Java/Home/bin/
$ keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -validity 20000 -keystore /Users/Meniny/Desktop/demo.keystore
Enter keystore password:
Re-enter new password:
What is your first and last name?
  [Unknown]:  Elias Abel
What is the name of your organizational unit?
  [Unknown]:  meniny.cn
What is the name of your organization?
  [Unknown]:  Meniny Inc
What is the name of your City or Locality?
  [Unknown]:  Beijing
What is the name of your State or Province?
  [Unknown]:  Beijing
What is the two-letter country code for this unit?
  [Unknown]:  86
Is CN=Elias Abel, OU=meniny.cn, O=Meniny Inc, L=Beijing, ST=Beijing, C=86 correct?
  [no]:  y

Generating 1,024 bit RSA key pair and self-signed certificate (SHA1withRSA) with a validity of 20,000 days
	for: CN=Elias Abel, OU=meniny.cn, O=Meniny Inc, L=Beijing, ST=Beijing, C=86
Enter key password for <android>
	(RETURN if same as keystore password):
[Storing /Users/Meniny/Desktop/demo.keystore]
```

至此，我们的 keystore 文件已经生成。
