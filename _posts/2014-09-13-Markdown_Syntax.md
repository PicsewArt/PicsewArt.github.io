---
category: "Markdown"
title:  "Markdown Syntax"
cave: true
hero:
  format: 'jpeg'
  url: 'post/markdown.jpg'
tags: [Markdown]
summary: "Markdown Syntax"
---
Markdown是一种可以使用普通文本编辑器编写的标记语言，通过类似HTML的标记语法，它可以使普通文本内容具有一定的格式。



Markdown具有一系列衍生版本，用于扩展Markdown的功能 (如表格、脚注、内嵌HTML等等) ，这些功能原初的Markdown尚不具备，它们能让Markdown转换成更多的格式，例如LaTeX，Docbook。Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如Pandoc；要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在换行等细节上也有改动。

本文只介绍Markdown的基本语法:

### 标题 ###

在行首插入1~6个 `#` 号，分别对应 1 至 6 级标题 :

```md
# 一级标题  #

## 二级标题 ##

### 三级标题 ###

#### 四级标题 ####

##### 五级标题 #####

###### 六级标题 ######
```

标题末尾的 `#` 可以省略:

```md
### 二级标题
```

### 加粗 ###

```md
**加粗**
```

## 斜体 ###

```md
*倾斜*
_倾斜_
```

### 链接 ###

```md
[链接说明](https://example.com/)
[**加粗的链接说明**](https://example.com/)
```

### 图片 ###

```md
![图片说明](https://example.com/image.png)
```

嵌套链接:

```md
[![图片说明](https://example.com/image.png)](https://example.com/album/)
```

### 列表 ###

有序列表:

```md
1.  第一列
2.  第二列
3.  第三列
```

无序列表:

```md
-   某列
-   某列
-   某列
```

```md
*   某列
*   某列
*   某列
```

可以混合使用有序列表和无序列表:

```md
-   一级项
	- 二级项
-   一级项
	1.  二级项1
	2.  二级项2
		-   三级项
	3.  二级项3
-   一级项
```

### 语句引用 ###

```md
> 乔布斯说过：
> Stay hungry, stay foolish.
> > 你也可以嵌套使用.
> #### 标题 也可出现在引用中
>
> - 当然列表也可以.
> - 是吧.
```

### 代码 ###

```md
这是一句代码：`<code>`
```

### 缩进代码块 ###

4个空格或者一个 tab 后面的文本都会被当做代码.

```md
这是一个普通段落.

	这是一段
	代码.
```

### 分割线 ###

三种分割线:

```md
---
* * *
- - - -
```

好了，基本的就是这些了。
