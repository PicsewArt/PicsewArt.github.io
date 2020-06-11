---
title: "Sparkle 2: Publishing an update"
category: "OS X"
copy: true
tags: [OS X, Sparkle]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0023.jpg'
---
配置好一些基本的内容后，是时候发布一个新版本了。

## 归档

首先你需要归档你的应用。

* 如果你使用 DMG，归档后不要再次压缩 `.dmg` 文件
* 如果你使用 ZIP，你可以通过 `ditto -c -k --sequesterRsrc --keepParent 应用路径 压缩包目标路径` 创建
* 如果你使用 PKG，保证 PKG 文件与应用同名，并以上述的任意一种形式归档
  * 默认状态下 Sparkle 会使用 GUI 进行安装
  * 如果你使用 `.sparkle_guided.pkg` 后缀而非 `.pkg` 则 Sparkle 不会显示 GUI，而在后台安装，不需要用户确认每一步

## 安全性措施

为了提升安全性、避免中间人攻击等，这一步骤是十分必要的。

同样的，也有命令行工具可以使用:

```console
./bin/sign_update 更新归档.zip 你的DSA私钥.pem
```

输出的字符串是你的更新的 DSA 签名，它会在下一步骤中用到。

## 更新 Appcast

现在，你需要在你的 Appcast 中添加一个 `<item>`。这里提供一个模板:

```xml
<item>
    <title>Version 2.0 (2 bugs fixed; 3 new features)</title>
    <sparkle:releaseNotesLink>
        https://example.com/release_notes/app_2.0.html
    </sparkle:releaseNotesLink>
    <pubDate>Mon, 05 Oct 2017 19:20:11 +0000</pubDate>
    <enclosure url="https://example.com/downloads/app.zip.or.dmg.or.tar.etc"
               sparkle:version="2.0"
               sparkle:dsaSignature="MC0CFBfeCa1JyW30nbkBwainOzrN6EQuAh="
               length="1623481"
               type="application/octet-stream" />
</item>
```

其中 `sparkle:dsaSignature` 的值就是上一步骤中的 DSA 签名字符串。

#### 下载链接

如果你想提供一个下载链接而不是让 Sparkle 自动下载，那么请删除 `<enclosure>` 标签，然后添加 `<sparkle:version>` 和 `<link>` 标签。举个栗子:

```xml
<item>
  <title>Version 1.2.4</title>
  <sparkle:releaseNotesLink>https://example.com/release_notes_test.html</sparkle:releaseNotesLink>
  <pubDate>Mon, 28 Jan 2017 14:30:00 +0500</pubDate>
  <sparkle:version>1.2.4</sparkle:version>
  <link>https://example.com/manual_update_info.html</link>
</item>
```

#### 系统要求

如果新的版本有新的最低系统版本要求，你可以为 `<item>` 添加 `<sparkle:minimumSystemVersion>` 标签进行说明。举个栗子:

```xml
<item>
    <title>Version 2.0 (2 bugs fixed; 3 new features)</title>
    <sparkle:minimumSystemVersion>10.8.4</sparkle:minimumSystemVersion>
</item>
```

#### 更新说明

如果你需要添加更新内容说明，有两种方式:

* 添加 `<sparkle:releaseNotesLink>` 标签进行指明更新说明的链接地址
  * 你可以添加 `xml:lang="语言"` 属性来做本地化处理
* 为 `<item>` 添加 `<description>` 标签并写入说明。
  * 通过使用 `<![CDATA[ ... ]]>` 标签，你可以使用未脱义的 HTML 代码
  * 如果你愿意，你可以在这里包含整个 HTML 文档，包括其 `<style>`

举个栗子:

```xml
<item>
    <title>Version 2.0 (2 bugs fixed; 3 new features)</title>
    <sparkle:releaseNotesLink>https://yourdomain.com/releasenotes.html</sparkle:releaseNotesLink>
    <sparkle:releaseNotesLink xml:lang="de">https://yourdomain.com/releasenotes_de.html</sparkle:releaseNotesLink>
    ...
</item>
```

```xml
<item>
    <title>Version 2.0 (2 bugs fixed; 3 new features)</title>
    <description><![CDATA[
        <h2>New Features</h2>
        ...
    ]]>
    </description>
    ...
</item>
```
