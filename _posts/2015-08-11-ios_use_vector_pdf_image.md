---
title: "iOS: PDF 矢量图"
category: "iOS"
copy: true
tags: [iOS, PDF]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0050.jpg'
---
从 Xcode 6 开始我们有了基于矢量图像 (PDF文件) 的编译能力。

对于 UI 设计师, 以及像我这种苦逼的、拿一份工资做 N 份活的工程师, 都会面临一个问题: 切图。

## 切图那些事

<div class="quote">
PDF 切图方式要满足:
<br/>
<ul>
<li>必须为矢量</li>
<li>各自的矢量环境下导出 PDF 格式切图, PS 绘制的矢量图在 PS 里导出, AI 同理</li>
</ul>
<br/>
使用 PDF 矢量图的好处:
<br/>
<ul>
<li>优化下载体验, 减少app大小</li>
<li>自动适配</li>
</ul>
</div>

### Photoshop

按住 `⌘` 键用鼠标左键点击对应的图层来创建选取, 然后按照选区大小新建大小相同的新文件, 记得要保持适量状态, 切勿不要栅格化。此外如果你的图不需要背景, 也记得要使用透明背景。

一般情况, 在设计时以 iPhone 6 为基准 (即 750), 属于是 `@2x` 尺寸, 按下 `⌘ + ⌃ + i` 并将宽高百分比调整到 `50%`, 即 `@1x` 状态。

就下来就是储存了, 先在格式中找到 `Photoshop PDF`, 勾选 `作为副本`, 然后点击 `保存`, 会弹出一个新的界面:

![onsave]({{ site.url }}/assets/images/posts/content/ps_pdf_save_opt.jpg)

移除 `保留 Photoshop 编辑功能` 的选项, 只剩下 `嵌入页面缩览图` 以及 `优化快速 Web 预览`, 然后点击 `保存`。

### Illustrator

同理, 按 `@1x` 尺寸另存为 PDF 格式, 勾选 `嵌入页面缩览图` 以及 `从顶层图层穿件 Acrobat 图层` 然后点击 `保存`。

![onsave]({{ site.url }}/assets/images/posts/content/ai_pdf_save_opt.jpg)

## Xcode

接下来, 图片生成之后, 就要导入 Xcode 中了。

* 如果现在没有 `.xcassets` 文件, 创建一个并打开; 反之, 直接打开
* 打开后, 在右侧 `.imageset` 列表中, 点击鼠标右键, 然后在右键菜单中选择 `New Image Set`
* 此时会出现一个新的 `Image Set`, 点击打开
* 在 Xcode 右侧栏 `Utilities` 中, 选择 `Attributes Inspector`
* 修改 `Type` 为 `Vector`
* 把矢量 PDF 文件拖入

新导入的 PDF 矢量图在使用方面没有什么区别, 比如你依然可以使用 `- imageNamed:`。

在编译时, Xcode 会会通过 PDF 文件自动生成三个尺寸的 `.png` 图片, 不过生成的过程由 Xcode 自动把控, 开发者没有控制权。

举个栗子, 我们现在有一个 `@1X` 的 PDF, `150px × 150px`, 那么 Xcode 会生成三个尺寸的 `.png` 图片:

* `150px × 150px`
* `300px × 300px`
* `450px × 450px`
