---
title: "AsciiDoc"
category: "AsciiDoc"
cave: true
hero:
  format: 'jpeg'
  url: 'post/asciidoc.jpg'
tags: [AsciiDoc]
---
轻量级的标记语言已经有很多([Wikipedia](https://en.wikipedia.org/wiki/Lightweight_markup_language))，例如我用来写博客的 Markdown 就是目前十分流行的一种轻量级标记语言，包括 Github、StackOverflow 等很多网站以及个人都在使用。

## Markdown 还不够吗

Markdown 语法简介，即便阅读未经渲染的源文件也有不错的可读性。但它对于较为复杂的格式例如表格的支持始终遭人诟病，许多网站使用各自不同的扩展语法来实现，也从而导致了各种方言的滋生。这也是为何会出现 [Standard Markdown](https://blog.codinghorror.com/standard-flavored-markdown/) 项目的原因，虽然因为种种原因又更名为 [Common Markdown](https://blog.codinghorror.com/standard-flavored-markdown/)，然而整个 Markdown 社区依然缺乏创建者的支持，Common Markdown 也很可能沦为另一个方言。

![md_standards](/assets/images/posts/content/md_standards.png)

## 为什么选择 AsciiDoc

第一次接触到 AsciiDoc 是通过 `O'Reilly` 的图书，Atlas 的推荐语言就是 AsciiDoc。那么十多种标记语言中，为什么要选择 AsciiDoc 呢？其实在选择另一种标记语言时，我做过一些简单的研究:

* **LaTex :** 大名鼎鼎的 LaTex 是除了 Markdown 之外我第一个投入精力学习的标记语言。不得不说 LaTex 十分强大，但与这份强大伴随而来则是复杂的语法，导致了写作过程的枯燥，也让我失去了对 LaTex 的兴趣。

* **reStructuredText :** REST 也是一种松散的文本结构，功能也较为全面，但书写起来更像是在写 Python。

* **Org mode :** 我想基本上只有 Emacs 社区的人在使用了吧。

* **Texy!，BBCode，Creole，Textile... :** 事实上大部分轻量级的标记语言语法都较为类似，所以这场抉择很大程度上是使用范围、功能、兼容性、扩展性等多方面的比赛，这也是我为什么不选择这些语言的原因。

## AsciiDoc 与 Markdown

AsciiDoc 的语法与 Markdown 十分类似，在学会 Markdown 的前提下很容易转向 AsciiDoc 阵营。

在的功能方面，前面已经说过许多功能 Markdown 要通过扩展语法和 HTML 来实现，前者直接导致了通用性的缺失，后者提高了后期编撰的成本，而 AsciiDoc 的学习成本也远不及多学一门 HTML 甚至多种扩展语法。

AsciiDoc 原生支持的特性就足以应付大多数电子文档的编撰需求，你可以使用标准的 AsciiDoc 语法为你的文档添加作者信息、版本信息、表格等特性，它还支持文档引入、自定义块语法等功能。

## AsciiDoctor

[AsciiDoctor](https://asciidoctor.org) 项目是一个 AsciiDoc 的 Ruby 实现，还通过 JRuby 提供 Java 版本，通过转编译提供 JavaScript 版本。

## 编辑器

说了这么多，既然 AsciiDoc 这么好，总要有一个合适的编辑器来配合书写。

目前而言，我推荐并且也在使用的编辑器是 [Atom](https://atom.io/)，当然，你需要在偏好设置中搜索并安装一些插件，例如 `language-asciidoc` 和 `asciidoc-preview` 等。

![AsciiDoc_Atom.png](/assets/images/posts/content/AsciiDoc_Atom.png)

## 语法

关于 AsciiDoc 的语法，可以参考 [语法介绍]({{ site.url }}/posts/AsciiDoc_Syntax_Quick_Reference/)。
