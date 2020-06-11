---
title: "reStructuredText 怎么玩"
category: "reStructuredText"
cave: true
hero:
  format: 'jpeg'
  url: 'post/rest.jpg'
tags: [reStructuredText, reST, rST]
---
其实之前写过一篇 [关于 AsciiDoc 的博文]({{ site.blog_perma }}/Asciidoc_Syntax/)，其中提到过 `reStructuredText` ，最近赋闲，有朋友问了我关于 `reStructuredText` 的问题，于是也就有了写这篇语法入门的念头。

## 什么是 reStructuredText

简单说，reStructuredText 也是一种轻量级的文本标记语言，字面意思是 *重构建的文本*，是 `Python` 中 `Docutils` 项目的一部分，这也是为什么之前我一直说用 `reStructuredText` 感觉在写 `Python` 的原因。

`reStructuredText` 其一般保存的文件以 `.rst` 为后缀，必要时可以被转换为成 `PDF`、`HTML` 等格式，也可以由 `Sphinx` 转化为 `LaTex`、`man` 等格式，在程序文档撰写方面应用也比较广泛。

## 编辑器

至于编辑器，依旧推荐你使用 `Atom`，记得搜索和安装相关的插件即可。

如果找不到适合你的 `Atom` 插件或编辑器，你也可以尝试 <a href="https://rst.ninjs.org" target="_black">在线编辑器</a> (如果你喜欢的话，它是 [开源](https://github.com/anru/rsted) 的)。

## 与其他格式的转换

通常你可能希望将你的 `.rst` 文件转换为 `.html`、`.pdf` 等格式，推荐几个工具吧:

* [Pandoc](https://www.pandoc.org)，对于我这样的懒人直接 `brew install pandoc`

* [rst2html5](https://pypi.python.org/pypi/rst2html5)，用 `pip install rst2html5` 就好了

* [rst2pdf](https://pypi.python.org/pypi/rst2pdf)，同上，用 `pip`

* [rst2epub](https://pypi.python.org/pypi/rst2epub2/0.3.1)，同上，用 `pip`

* [rst2pptx](https://pypi.python.org/pypi/rst2pptx/0.3)，同上，用 `pip`

嗯，的确很 `Python` 吧。

***

## 标题(Title)

```rst
===================
这就是一个标题
===================
```


```rst
----------------
这也是一个标题
----------------
```

支持用来修饰标题符号有:

```rst
!、"、#、$、%、&、'、(、)、*、+、,、-、.、/、:、;、<、=、>、?、@、[、\、]、^、_、`、{、|、}、~
```

其中，官方推荐使用的有:

```rst
=、-、`、:、.、’、"、~、^、_、*、+、#
```


通常并没有对标题的层级指定明确的标线字符，但对于 `Pyhton` 文档，可以使用如下约定:

* `#`: 有上标线, 用以部分
* `*`: 有上标线, 用以章节
* `=`: 用以小节
* `-`: 用以子节
* `^`: 用以子节的子节
* `"` 用以段落

如果你仍旧觉得复杂，你也可以只给出下半部分:

```rst
这个标题和上面的一样
===================
```


作为修饰的字符长度要大于等于文字长度。此外，标题是可以嵌套的。

## 段落(Paragraphs)

段落是一段左对齐且没有其他元素体标记的文字，通过空行与其他内容分隔。

当段落带有缩进时，将被解析为引用段落，样式方面会有不同。

```rst
这是一个段落，一个可以很长的段落，直到空行


这是另一个段落，与前面的段落用空行分割

    这仍旧是一个段落，但由于带有缩进，会被解析为引用段落。
```


## 样式 (Style)

基本的文字样式有:

* 斜体 (Italic): 使用 `*` 包围，例如 ` *some word* `，注意两端需要留有空格，`HTML` 中一般用 `<strong>` 表示

* 粗体 (Strong): 使用 `**` 包围，例如 ` **some word** `，注意两端需要留有空格，`HTML` 中一般用 `<em>` 表示

* 等宽字体 (Monospace): 使用 ``` `` ``` 包围，例如 ``` ``Inline Literals`` ```，`HTML` 中一般用 `<tt>` 表示

* 引用 (Interpreted Text): 使用 `` ` `` 包围，例如 `` `Interpreted Text` ``，`HTML` 中一般用 `<cite>` 表示

## 超链接 (Hyperlinks)

* 外部链接 (External Links)

用 `` `Link text <https://example.com/>`_ `` 来记录行内链接. 如果文字本身就是链接, 那不用作任何标记，解析器可以自动将链接和邮箱地址转换为超链接。

也可以单独定义链接目标用引用，比如:

```rst
This is a paragraph that contains `a link`_.

.. _a link: https://example.com/
```

* 内部链接 (Internal Links)

`Sphinx` 使用特殊 `reST` 规则支持内部链接, 请参考 [详细定义规则](https://sphinx-doc-zh.readthedocs.io/en/latest/markup/inline.html#ref-role)。

## 图片 (Images)

```rst
.. image:: gnu.png
   (options)
```


图片尺寸的解释选项 (`width` 和 `height`) 有如下规约:

如果大小没给任何单位或单位是像素, 输出通道优先使用像素(换言之,非 `LaTeX` 输出). 其他单位(如 `pt` 或是 点) 将被用于 `HTML` 和 `LaTeX` 输出.

`Sphinx` 扩展了标准 `docutils` 行为，支持如下的星号指代:

```rst
.. image:: gnu.*
```


## 脚注 (Footnotes)

脚注使用 `[#name]_` 来标记位置, 并在文章底部 "Footnotes" 专栏之后追加脚注内容:

```rst
Lorem ipsum [#f1]_ dolor sit amet ... [#f2]_

.. rubric:: Footnotes

.. [#f1] Text of the first footnote.
.. [#f2] Text of the second footnote.
```

你也可以使用确切编号的脚注 (如: `[1]_`) 或是自动编号 (`[#]_`)。

## 引证 (Citations)
标准 `reST` 支持引证，有额外的功能是 "global", 也就是说引证能从所有文件来引用。

```rst
Lorem ipsum [Ref]_ dolor sit amet.

.. [Ref] Book or article reference, URL or whatever.
```

引证的使用基本和脚注相同, 不过使用的标签不是数字或是以 `#` 开始.

## 替换 (Substitutions)
替换以 `|name|` 形式来定义替换的文本或是标记对象，如脚注，可以在直解标记文本块中声明，形如:

```rst
.. |name| replace:: replacement *text*
```

或是:
```rst
.. |caution| image:: warning.png
             :alt: Warning!
```


## 注释 (Comments)
```rst
.. This is a comment.
```

可以用缩进文本来进行多行注释:
```rst
..
   This whole indented block
   is a comment.

   Still in the comment.
```


## 上下标

即 `HTML` 中 `<sub>` 与 `<sup>` 标签，常用于数学、化学、商标等。使用 `` \ :sub: `上标内容`\ `` 和 `` \ :sup: `下标内容`\ `` 表示

```rst
H\ :sub:`2`\ O
E = mc\ :sup:`2`
```


## 列表(List)

在 `reStructuredText`，列表分为:

* 有序列表 (Enumerated Lists)

* 无序列表 (Bullet Lists)

* 定义列表 (Definition Lists)，与 `HTML` 中的 `dl` 标签相同

* 字段列表 (Field Lists)

* 选项列表 (Option Lists)

列表是可以嵌套的。

#### 无序列表

无序列表采用符号 `*`、`+`、`-`、`•`、`‣`、`⁃` 中任意一个作为开头，紧跟空格，后加列表项内容。对于不同的层级，拥有不同长度的缩进。

```rst
- 第一级的第一个列表项

- 第一级的第二个

- 第一级的第三个

  - 缩进的列表第一个列表项
    缩进要与当前列表项的缩进同步

- 第一级的第四个

```


#### 有序列表

无无序列表类似，区别在于开头的符号必须是可排序的字符，常见的有:

* 阿拉伯数字: 1, 2, 3, ...

* 大写英文字母: A, B, C, ..., Z

* 小写英文字母: a, b, c, ..., z.

* 大写罗马数字: I, II, III, IV, ..., MMMMCMXCIX (4999)

* 小写罗马数字: i, ii, iii, iv, ..., mmmmcmxcix (4999)

为了方便撰写，你也可以只标明第一个列表项的序号，后面使用 `#` 让 `reStructuredText` 自动生成需要的序号 (`Docutils` >= `0.3.8`)。

```rst
1. 第一项
    一些内容...

#. 第二项

    a. 第二项的第一小项

    #. 第二项的第二小项

#. 第三项
```


```rst
a. 小写字母

A. 大写字母

i) 小写罗马数字

(I) 大写罗马数字
```


#### 定义列表

前面说过了，定义列表与 `HTML` 的 `dl` 标签一样。

定义列表的列表项，包含:

* 术语 (term): 一行文字或者短语

* 分类器 (classifiers)(可选): 跟在术语后，用 ` : ` (空格，冒号，空格)分隔

* 定义(definition): 相对于术语缩进后的块，可以包含多个段落或者其他的内容元素

术语和定义之间可以没有空行，但在**定义列表前后必须有空行**。

```rst
术语1
    术语1的定义

术语 2
    术语2的定义第一段

    术语2的定义第二段

术语 3 : 分类器
    术语3的定义


术语 4 : 分类器1 : 分类器2
    术语4的定义
```


#### 字段列表

#### 选项列表

## 表格 (Table)

`reStructuredText` 支持的表格有:

* 网格表格 (Grid Tables)

* 简单表格 (Simple Tables)

* CSV表格 (CSV Tables)

* 列表表格 (List Tables)

#### 网格表格

```rst
+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | Cells may span columns.          |
+------------------------+------------+---------------------+
| body row 3             | Cells may  | - Table cells       |
+------------------------+ span rows. | - contain           |
| body row 4             |            | - body elements.    |
+------------------------+------------+---------------------+
```

其中:

* `-`: 分隔行

* `=`: 分隔表头和表体行

* `|`: 分隔列

* `+`: 用来表示行和列相交的节点

表头行是可选的，如果你不需要，就可以不用 `=` 来分割了。

#### 简单表格

这种表格简单许多，一般用于简单的数据展示。用于修饰简单表格的符号也只有 `=` 和 `-`。

* 基本形式，最简单的表格形式，当然你也可以去掉表头展示

```rst
=====  =====  =======
  A      B    A and B
=====  =====  =======
False  False  False
True   False  False
False  True   False
True   True   True
=====  =====  =======
```

* 表内嵌入，下面这种简单表内有列表

```rst
=====  =====
col 1  col 2
=====  =====
1      Second column of row 1.
2      Second column of row 2.
       Second line of paragraph.
3      - Second column of row 3.

       - Second item in bullet
         list (row 3, column 2).
\      Row 4; column 1 will be empty.
=====  =====
```

* 表头合并，表头进行分类合并

```rst
=====  =====  ======
   Inputs     Output
------------  ------
  A      B    A or B
=====  =====  ======
False  False  False A
True   False  True
False  True   True
True   True   True
=====  =====  ======
```

 TIPS：列需要和"="左对齐，不然可能会导致出错；如果碰到第一列为空时，需要使用"\"来转义，不然会被视为是上一行的延续；网格表和简单表中，简单表比较适合展现简单的数据，这些数据本身不需要太复杂的展现形式，而一旦碰到需要和并单元格这类的复杂操作，可能网格表会更加适合。

#### CSV 表格

略为复杂，不太常用，只举个例子好了:

```rst
.. csv-table:: Frozen Delights!
 :header: "Treat", "Quantity", "Description"
 :widths: 15, 10, 30

 "Albatross", 2.99, "On a stick!"
 "Crunchy Frog", 1.49, "If we took the bones out, it wouldn't be
 crunchy, now would it?"
 "Gannet Ripple", 1.99, "On a stick!"
```


#### 列表表格

```rst
.. list-table:: Frozen Delights!
  :widths: 15 10 30
  :header-rows: 1

  * - Treat
    - Quantity
    - Description
  * - Albatross
    - 2.99
    - On a stick!
  * - Crunchy Frog
    - 1.49
    - If we took the bones out, it wouldn't be
      crunchy, now would it?
  * - Gannet Ripple
    - 1.99
    - On a stick!
```


## 块 (Blocks)

块在 `reStructuredText` 中的表现方式有:

* 文字块 (Literal Blocks)

* 引用文字块 (Quoted Literal Blocks)

* 线块 (Line Blocks)

* 文本测试块 (Doctest Blocks)

块的表达非常简单，在前面内容结束之后，使用两个冒号 `::` 紧跟空行的方式来分割，后面接入块的内容，块内容要相对之前的内容有缩进。

普通文字块：
```rst
这里是块之前的的内容 ::

   这里是块的内容。前面有缩进、空行和分隔符。
    此处内容会被一直视为块内容

    块内容可以包含空行

当不再和块内容一样缩进时，自动结束
```

```rst
下面是我们的测试代码：

::

    for i in [1,2,3,4,5]:
        print i
    # 代码块测试

很简单的代码块测试。
```

线块:
```rst
| These lines are
| broken exactly like in
| the source file.
```


对于代码，还可以加入高亮:

```rst
.. code-block:: python
    ::

    def foo():
        print "Love Python, Love FreeDome"
        print "E文标点,.0123456789,中文标点,. "
```

文件包含:

```rst
.. literalinclude:: example.py
    :language: python
```

