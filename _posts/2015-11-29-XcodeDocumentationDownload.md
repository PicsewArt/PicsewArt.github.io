---
title: "Download the Xcode Documentations"
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0029.jpg'
tags: [iOS, Mac, Apple, Xcode, OS X]
---
由于 Xcode 中的自带的文档为在线文档，不包含离线 HTML 文件，然而 Xcode 中的下载速度又实在让人无奈，所以本文主要介绍如何加速下载 Xcode 文档的问题。

首先需要访问苹果官网的 XML 文件来获取下载路径:

[https://developer.apple.com/library/downloads/docset-index.dvtdownloadableindex](https://developer.apple.com/library/downloads/docset-index.dvtdownloadableindex)

在这份 XML 中，依据更新时间的先后排序，越新的文档在越靠后的位置。

每一个 Docset 文档文件都有单独的注释，例如 `<!-- START OS X doc set -->` 和 `<!-- END OS X doc set -->` 。

来看其中一段:

```xml

<!-- START OS X doc set -->
<dict>
  <key>fileSize</key>
  <integer>931959772</integer>
  <key>identifier</key>
  <string>com.apple.adc.documentation.OSX</string>
  <key>name</key>
  <string>OS X 10.11.4 Documentation</string>
  <key>source</key>
  <string>https://devimages.apple.com.edgekey.net/docsets/20160321/031-52211-A.dmg</string>
  <key>userInfo</key>
  <dict>
    <key>ActivationPredicate</key>
    <string>$XCODE_VERSION &gt;= '7.3' &amp;&amp; $XCODE_VERSION &lt; '8.0'</string>
    <key>Category</key>
    <string>Documentation</string>
    <key>IconType</key>
    <string>IDEDownloadablesTypeDocSet</string>
    <key>InstallPrefix</key>
    <string>$(HOME)/Library/Developer/Shared/Documentation/DocSets</string>
    <key>InstalledIfAllReceiptsArePresentOrNewer</key>
    <dict>
      <key>com.apple.pkg.10.9.OSXDocset</key>
      <string>10.9.0.0.1.1458364023</string>
    </dict>
    <key>RequiresADCAuthentication</key>
    <false/>
    <key>Summary</key>
    <string>My description of content</string>
  </dict>
  <key>version</key>
  <string>1014.5</string>
</dict>
<!-- END OS X doc set -->

```

其中 `<key>name</key><string>OS X 10.11.4 Documentation</string>` 表示了文档名称，
而 `<key>source</key><string>https://devimages.apple.com.edgekey.net/docsets/20160321/031-52211-A.dmg</string>` 表示了下载地址，一般为 `.dmg` 文件。

下载对应的文件后，打开 `.dmg` 文件并执行将其中的 `.pkg` 文件进行安装，安装完成后在 `/` 磁盘根目录下可以找到 `.docset` 文件。

现在在 Finder 中找到 `/Applications/Xcode.app` 并点击右键，选择 `显示包内容`，然后依次进入 `Contents` - `Developer` - `Documentation` - `DocSets`，将刚才根目录( `/` )中的 `.docset` 文件复制或移动过来即可(如果没有下载过，那么已经存在的 `.docset` 为在线文档)。

如果存在，你也可以将缓存 `~/Library/Caches/com.apple.dt.Xcode` 删除。




