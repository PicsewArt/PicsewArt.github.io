---
title: "如何在 Github 搭建静态博客"
category: "Jekyll"
tags: [Jekyll, Liquid]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0011.jpg'
---
其实最初做这个博客，可能是因为我暗藏了一颗文青的心，后来老有人问我博客怎么做的，想来想去干脆写个教程好了。

# 引言

这样的博客系统适合哪些人群呢？

* 不想、或者不愿意租用服务器
* 不想、或者不熟悉后端代码
* 更倾向于一个免费、永久、不限流量、速度靠谱的解决方案
* 没有太多时间维护
* 浏览量不大
* 可能只是出于一时兴趣
* 对代码感兴趣
* 具备一些编程基础知识

但是，也有一些弊端:

* 需要一些编程基础
* 不适合大型网站，内容过多会导致生成速度较慢
* 只能生成静态页面，动态功能仍旧需要使用外部服务，例如评论功能

此外，搭建博客系统又很多方式，例如使用 `Hexo`、`Jekyll`、`Pelican` 等。本文主要介绍 `Jekyll`。

***

# Git 与 Github

这个博客网站是借助于 `Github Pages` 功能托管在 `Github.com` 服务器的，页面代码由我自己编写，这也就是说，要搭建一个这样的博客网站，你需要学会:

* Git 的基本使用
* Github 的基本使用

#### 什么是 Git

简单来说 [Git](https://git-scm.com) 是一种版本控制工具。版本控制工具是一类工具的通常，用于存储、追踪目录和文件的修改历史，方便用户进行管理控制。

#### Git 怎么玩

首先要玩 `Git` 先要安装，安装的方式有很多，通用的方法是在 Git 的官方网站下载源代码包或安装器。

如果你在使用 OS X 系统:

* Homebrew: `$ sudo brew install git`
* Macport: `$ sudo port install git-core`

如果你在使用 Debian, Ubuntu, 或 Linux Mint:

```console
$ sudo apt-get install git
```

如果你在使用 Fedora, CentOS 或 RHEL:

```console
$ sudo yum install git
```

如果你在使用 Arch Linux:

```console
$ sudo pacman -S git
```

如果你在使用 OpenSUSE:

```console
$ sudo zypper install git
```

如果你在使用 Gentoo:

```console
$ emerge --ask --verbose dev-vcs/git
```

关于 `Git` 的使用，你可以参考我之前的博客: 《[Git 基本指令]({{ site.blog_perma }}/Git_basic_commands/)》、《[Git Primer]({{ site.blog_perma }}/GitPrimer/)》。

#### 什么是 Github

`GitHub` 是一个面向开源及私有软件项目的托管平台，因为只支持 `Git` 作为唯一的版本库格式进行托管，故名 `GitHub`。

#### Github 怎么玩

打开 [https://www.github.com/](https://www.github.com/)，注册并登陆，即可。更多的内容后面必要时会有说明。

***

# Jekyll

![Jekyll](/assets/images/posts/content/jekyll.jpg)

#### 什么是 Jekyll

`Jekyll` 是一个简单的免费的博客生成工具，类似 `WordPress`，但它只是一个生成静态网页的工具，不需要数据库支持。

#### Jekyll 怎么玩

关于 `Jekyll` 的语法，参见我的另一篇博客《[Liquid for Designers]({{ site.blog_perma }}/Jekyll_Liquid_for_Designers/)》。

关于 `Jekyll` 的安装请参考后面 `GEM` 部分。

关于 `Jekyll` 的使用，初期我们只需要记得 `$ jekyll build` 这个编译指令即可。

***

# Ruby

#### 什么是 Ruby

`Ruby` 一种简单快捷的面向对象脚本语言，在 20 世纪 90 年代由日本人松本行弘 (まつもとゆきひろ, Matsumoto Yukihiro) 开发。

#### Ruby 怎么玩

如果你在使用 OS X，你的系统应该已经预置了 `Ruby`，只是可能版本较低。

如果你在使用 Linux，你可以使用这样的指令进行搜索:

`rpm -qa | grep ruby`

`yum list | grep ruby`

如果你查询到了结果，说明你已经安装或系统预置了 `Ruby`; 如果没有查询到，你可以通过 `yum install ruby` 进行安装。

***

# RVM

#### 什么是 RVM

`RVM` 是 `Ruby Version Manager` 的缩写，即 `Ruby` 版本管理器，用于管理计算机中安装的 `Ruby` 版本，也就意味着，你可以同时安装多个版本的 `Ruby`。

#### RVM 怎么玩

`RVM` 的安装和基本用法，可以参考我的其他博客:《[Ruby on OS X]({{ site.blog_perma }}/Mac_ruby_rvm/)》。

***

# GEM

#### 什么是 GEM

`RubyGems` 的简称，是一个用于对 `Ruby` 组件进行打包的 `Ruby` 打包系统。

它的安装或升级可以参考 [官方说明](https://rubygems.org/pages/download)。

#### GEM 怎么玩

在本文中，我们主要用来安装 `Jekyll`，使用 `$ gem install jekyll` 指令即可安装。

在博客建设完成或新帖子完成需要提交时，可以通过 `jekyll b` 指令进行构建，并在出错时通过输出内容获取可能的错误信息。

***

# Markdown

#### 什么是 Markdown

`Markdown` 是一种轻量级文本标记语言，这个博客网站中的所有博客都是使用 `Markdown` 编写的。当然其支持的标记语言并非只有 `Markdown`, 但整体来说 `Markdown` 是学习成本比较低的, 大部分人可能都已经会了。

#### Markdown 怎么玩

关于 `Markdown` 的语法，你可以参考我之前的博客:《[Markndow: Syntax]({{ site.blog_perma }}/Markdown_Syntax/)》。

由于 `Markdown` 的衍生版本和标准有很多，可能你已知的部分语法特性在 `Github` 并不能得到充分或合适的支持。

关于编辑器，如果你在使用 OS X，推荐你使用 `MWeb`，你可以在 `Mac App Store` 搜索到它。

或者，不论你在使用什么操作系统，你都可以使用 [Atom](https://atom.io) 编辑器进行编辑，只不过，你可能需要安装相关的语言和预览等插件才能更好的进行编辑，插件安装的入口就在 `Atom` 的设置中。

***

# 开始搭建

#### 创建仓库

首先你需要在 `Github` 注册、登录并创建一个代码仓库 (`Repository`)。仓库的名称格式应为 `xxxxx.github.io`，其中 `xxxxx` 可自定义，一般为英文字母。

你的博客地址，默认将是 `https://xxxxx.github.io/`。

创建好之后，你可以选择在桌面打开，这要求你安装 [Github Desktop](https://desktop.github.com) 客户端。

或者，你也可以复制页面上的 `git` 地址，从终端进行克隆。为了方便我建议你使用 `Github Desktop`。

#### 仓库设置

进入仓库设置 `Settings` 中，在 `Options` 模块下找到 `Github Pages` 部分，选择 `Source` 为 `master branch` 并保存。

![settings](/assets/images/posts/content/github_page_1.png)

![source](/assets/images/posts/content/github_page_2.png)

#### 基本配置

接下来，进入代码仓库的本地目录，新建一个名为 `_config.yml` 的文本文件。

关于此文件的详细配置，可以参考 [官方文档](https://jekyllrb.com/docs/configuration/)。

你可以以本站的配置作为参考:

```yml
name: Meniny's Blog
url: {{ site.url }}/
description: I’m a software engineer lived in China. This is my very own Blog which shares skills. All written content on this site is provided under a Creative Commons ShareAlike license and all code is provided under a MIT license unless otherwise stated. Please give sources if you'd like to quote.
author: "Elias Abel"
email: meniny#qq.com
domain: www.meniny.com
permalink: /post/:categories/:title/
paginate: 10
highlighter: rouge
#pygments

exclude: ['Gemfile.lock', 'Gemfile', 'Rakefile']

gems:
 - jekyll-paginate
```

简单说明:

```yml
name: 网站名称
url: 网站链接
description: 网站描述
author: 作者名称
email: 坐着邮箱
domain: 域名
permalink: 帖子URL的形式，本例中，帖子最终会被解析为 网站域名/post/帖子分类/帖子标题/ 的形式，如 {{ site.blog_perma }}/how_to_eat_my_mac/
paginate: 10 帖子列表分页时每页帖子数
highlighter: rouge 帖子中嵌入代码时，代码高亮所使用的工具

exclude: ['Gemfile.lock', 'Gemfile', 'Rakefile']

gems:
 - jekyll-paginate
```


#### 页面模版

做了信息配置后，同一个路径下，新建名为 `_layouts` 的文件夹，用于存放页面的模板文件。

我们先创建一个最基本的的模板，例如 `default.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>{% raw %}{{ page.title }}{% endraw %}</title>
  </head>
  <body>
    {% raw %}{{ content }}{% endraw %}
  </body>
</html>
```


在创建一个用于帖子详情的模板，例如 `post.html`:

```html
---
layout: default
---
<p>
  <span>{% raw %}Date: {{ page.date | date: "%b %d, %Y" }} | Category: {{ page.category }}{% endraw %}</span>
</p>
<div>{% raw %}{{ content }}{% endraw %}</div>
```

#### 创建帖子

好了，折腾了这么多，终于该写第一篇帖子了。

首先，与 `_layouts` 同一路径下，新建 `_posts` 文件夹，用于存放帖子。

帖子一般为 `Markdown` 格式，后缀通常为 `.md`，文件名形如 `2016-09-25-SamplePostTitle.md`。

其中，`2016-09-25` 部分表示帖子发布日期，必须保持这个格式;

后面 `SamplePostTitle` 部分表示帖子的标题，最好不要出现中文和空白符号，一般使用下划线 (`_`)、连字符 (`-`)、字母和数字组成。其实这里所谓的标题，只是用于帖子的链接，在博客中显示的标题是在帖子内部定义的，所以不必担心起名的问题。

现在我们来写第一篇帖子:

```markdown
---
title: "这才是真正的标题，不信你试试，呵呵呵"
category: "Jekyll"
tags: [Jekyll, Liquid]
summary: "第一篇博客而已，这是一个描述"
---
# 一号标题

第一篇博客

## 二号标题

* 不知道写点什么好

* 那就随便写吧

* 好了就这样吧

### 三号标题

放一段代码试试 `Jekyll`

{% raw %}
```html
<srcipt type="text/javascript">
  function test() {
    alert("This is a test code");
  }
</script>
```
{% endraw %}

#### 四号标题

<a href="javascript:test();">Click Me</a>

```

这里我们指明了帖子所用的布局、帖子标题、帖子分类，甚至还指明了标签和描述。而后面是 `Markdown` 格式的帖子内容，其中包含了一段 `Jekyll` 代码，用于高亮一些内嵌与帖子中的代码，`Jekyll` 代码会被自动解析，然后帖子内容会被自动解析为 `HTML` 页面，当然，在书写正确的情况下，内嵌的代码部分不会被解析，将保持原样显示。

#### 主页

我们到目前为止，博客还没有一个主页，况且，有了帖子，必不可少需要一个帖子列表。

在 `_post` 所在的目录下，新建一个文本文件名为 `index.html`:

```html
---
layout: default
title: My Blog
---
{% raw %}
{% for post in paginator.posts %}
<article>
	<h3>
		<a href="{{ post.url }}">{{ post.title }}</a>
  </h3>
  <div>{{ post.excerpt | strip_html }}</div>
</article>
{% endfor %}
<div>

  <center>
    {% for page in (1..paginator.total_pages) %} {% if page == paginator.page %}
    <span class="active">{{ page }}</span> {% elsif page == 1 %}
    <a href="{{ '/index.html' | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a> {% else %}
    <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a> {% endif %} {% endfor %}
  </center>
</div>
{% endraw %}
```


好了，我们创建了一个主页，布局采用 `default`，并设置了名称。主页的内容是分页的帖子列表(每页的数量在前面已经配置过)，每页的列子列表后面是页码索引。

#### 其他页面

现在，你也许还想要其它页面，那么依旧在仓库的根目录，新建一个目录，名称根据你的意愿选择，但一般也选择下划线、连字符、英文字母和数字的组合即可。

进入该目录，新建名为 `index.html` 的文本文件，这里我们示范制作一个帖子分类列表:

```html
---
layout: default
title: Categories
---
{% raw %}
{% for cat in site.categories %}
  <h3><span id="{{ cat[0] }}">{{ cat[0] }} [{{ cat[1].size }}]</span></h3>
  <ul>
    {% for post in cat[1] %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}
{% endraw %}
```


至此，一个新的页面完成了。你只需访问 `https://xxxxx.github.io/刚才的文件夹名` 即可浏览这个页面。

本例中，新建了名为 `categories` 的目录，则页面地址为 `https://xxxxx.github.io/categories/`，你也可以通过 `/categories/` 在其他页面中表示它的链接。

#### 提交内容

现在，帖子也写好了，列表也有了，我们使用 `Git` 提交到服务器，稍等一会儿即可在网站中浏览了。

如果你使用 `Github Desktop`，选择要提交的文件和文件夹，输入提交信息，点击提交按钮即可。

等待一会儿让页面生成，然后就可以访问 `https://xxxxx.github.io/` 来浏览你的博客了。

## 域名

如果你对这个默认的域名不感兴趣，你可以购买自己专属的域名，途径有很多，在大陆推荐你使用 [阿里云](https://www.aliyun.com/)，万网已被并入阿里云。

首先，你要在刚才的仓库根目录新建名为 `CNAME` 的文本文件，没有扩展名，其内容为你购买的域名，例如 `somedomain.com`。

然后，在终端 `ping` 一下 `xxxxx.github.io` 并复制 IP 地址:

```console
$ ping xxxxx.github.io
PING xxxxx.github.io (123.123.123.123): 56 data bytes
64 bytes from 123.123.123.123: icmp_seq=0 ttl=55 time=68.416 ms
64 bytes from 123.123.123.123: icmp_seq=1 ttl=55 time=71.404 ms
64 bytes from 123.123.123.123: icmp_seq=2 ttl=55 time=76.085 ms
...
```

现在添加解析记录:

记录类型|主机记录|记录值
:-:|:-:|:-:
A|@|123.123.123.123
A|www|xxxxx.github.io
CNAME|*|xxxxx.github.io

这些解析需要一定的时间，请耐心等待。

顺便一提，有了域名，还可以在 QQ 邮箱绑定域名邮箱哦。比如 `Elias@meniny.cn`，详细信息请参照 QQ 邮箱 [设置] - [账户] - [域名邮箱] 部分。

## 其它

事实上，本文所介绍的都是关于在 `Github Pages` 创建博客的一种简单的情况，更多高级和复杂的用法，例如集合、自定义分页路径等，不可能一一介绍，但你可以在实践中摸索，或者有兴趣的话也可以和我讨论。

<!-- ## 其它

你可以参考 [Jekyll 创始人的示例](https://github.com/mojombo/tpw)，或者 [其他人的作品](https://github.com/jekyll/jekyll/wiki/Sites) 来观摩学习。 -->
