---
title: "Sparkle 1: Setup"
category: "OS X"
copy: true
tags: [OS X, Sparkle]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0015.jpg'
---
做 Mac 开发的同学应该至少都听说过 Sparkle，一个应用升级框架，Sparkle 是开源的，参考 [Github](https://github.com/sparkle-project/Sparkle)。

[![Sparkle](https://ooo.0o0.ooo/2017/04/25/58fea7d983976.png)](https://ooo.0o0.ooo/2017/04/25/58fea7d983976.png){: .cover-link}

不过需要注意的是，Sparkle 的使用场景应仅仅局限于 *非 App Store 且非 Sandbox 应用*。

使用 Sparkle 几乎不需要写代码，但需要做一些 Xcode 配置还是必要的。

## 添加 Sparkle 到你的项目

#### CocoaPods:

```ruby
pod 'Sparkle'
```
记得要使用 `use_frameworks!`。

#### 手动

* 下载 [最新版本](https://github.com/sparkle-project/Sparkle/releases)
* 用 Xcode 打开你的项目并将 `Sparkle.framework` 文件拖入你
  * 拖入时请勾选 `Copy items into the destination group’s folder`
  * 拖入时确保勾选了正确的 Target
* 在对应的 Target 中 `Build Phases`->`Copy Files Build Phase` 中添加 `Sparkle.framework`
* 在对应的 Target 中 `Build Settings` 中设置 `Runpath Search Paths` 为 `@loader_path/../Frameworks`
  * 如果你的应用是非 App 性质，如偏好设置和插件等，此项应设置为 `-Wl,-rpath,@loader_path/../Frameworks`

## 配置 Sparkle

* 打开 `MainMenu.xib`/`Main.storyboard`
* 依次选择 `View`->`Utilities`->`Object Library...`
* 在搜索栏中搜索 `Object` 并将 `Object` 拖入左侧
* 选中刚才添加的内容
* 依次选择 `View`->`Utilities`->`Identity Inspector`
* 修改 `Custom Class` 为 `SUUpdater`
* 如果需要，你也可以添加一个检查更新的菜单项，设置它的 `target` 为刚才的 `SUUpdater` 实例，`action` 为 `checkForUpdates:`

[![setup](https://ooo.0o0.ooo/2017/04/25/58feab0532333.jpg)](https://ooo.0o0.ooo/2017/04/25/58feab0532333.jpg){: .cover-link}

[![action](https://ooo.0o0.ooo/2017/04/25/58feac1bc58d8.jpg)](https://ooo.0o0.ooo/2017/04/25/58feac1bc58d8.jpg){: .cover-link}

## DSA 签名

* 使用 `Installer Package` (`.pkg`)/`Binady Delta Updates` 更新必须进行 Sparkle 的 DSA 签名
* 偏好设置和插件更新必须进行 Sparkle 的 DSA 签名
* 对于常规使用苹果开发者签名的 App，不强制但推荐进行 Sparkle 的 DSA 签名

要进行 DSA 签名:

* 使用 Sparkle 目录下 `bin/generate_keys` 工具生成 DSA 密钥，这个步骤只需执行一次
* 备份你的私钥 `dsa_priv.pem` 并 **保证它的安全，不要被他人获取**
* 用 Xcode 打开你的项目并将公钥 `dsa_pub.pem` 拖入其中
* 在 `Info.plist` 中添加字典 (`Dictionary`) 键值 `SUPublicDSAKeyFile`，将其值设置为公钥的文件名 (`dsa_pub.pem`)

## 发布应用

#### DMG

对于 macOS Sierra 及之后的系统版本，最好的方式是使用 ` signed disk image` (`.dmg`) 映像包。

默认的，网络下载的应用可能会被系统隔离 ([translocate](https://lapcatsoftware.com/articles/app-translocation.html))，除非它们使用的是已签名的 DMG、PKG 包，或使用 Finder 复制它们。

因此，如果你使用 DMG 方式发布，确保你的 DMG 包在 macOS `10.11.5` 及之后的系统中使用开发者 ID 签名。

如果你不做签名，那么则应将应用放在归档的根目录，因为复制整个文件夹不能移除系统的隔离。

当然，你还应该添加一个 `/Applications` 目录的替身 `symlink` 方便用户复制应用到他们的系统中。

#### ZIP/tar

类似的，你也应该想办法让用户更方便的复制你的应用到它们的应用目录，比如使用 [LetsMove](https://github.com/potionfactory/LetsMove/)。

避免在归档中防止除应用外的其它文件，同样的，将应用放在归档根目录。

## 发布 Appcast

`Appcast` 用来提供应用更新的细节信息，事实上，它只是在 RSS 源，添加了一些额外信息。

* 在 `Info.plist` 中添加 `SUFeedURL` 并将它的值设置为你的 `Appcast` 地址，例如 `{{ site.url }}/appcast.xml`
  * 当然，最好的选择还是使用 `HTTPS`
* 注意，你的 `Info.plist` 中还应包含有格式正确的 `CFBundleVersion ` 键值对

```xml
<?xml version="1.0" standalone="yes"?><rss xmlns:sparkle="https://www.andymatuschak.org/xml-namespaces/sparkle" version="2.0"><channel><title>Elias</title>
<item>
<title>1.0</title>
<pubDate>2017-04-25</pubDate>
<sparkle:minimumSystemVersion>10.11</sparkle:minimumSystemVersion>
<enclosure url="{{ site.url }}/clients/mac/Elias.zip" sparkle:version="21" sparkle:shortVersionString="1.0" length="4312551" type="application/octet-stream" sparkle:dsaSignature="MC0CFxxxxxxxxxxxxxx4Ag4X8n+ogIxxxxxxxxxxxxxxxR4SKM="/>
</item>
</channel></rss>
```

#### 自动生成

如果你更新的是常规应用，并且进行了前面介绍的 DSA 签名，那么你可以使用 `generate_appcast` 工具自动生成 `Appcast` 文件

* `Build` 你的应用并进行压缩，例如 DMG/ZIP/`tar.bz2` 等，将压缩后的归档内容放入一个新的文件夹
* 执行 `./bin/generate_appcast DSA私钥文件路径.pem 压缩后的归档所在的目录`
* `generate_appcast` 工具会生成 `Appcast` 文件和 `*.delta` 文件

#### 手动生成

* 直接复制 `Sparkle` 目录下准备好的 `Appcast` 文件
* 根据你自己的情况进行修改

***

至此，基本的流程已经全部结束，Yay!!
