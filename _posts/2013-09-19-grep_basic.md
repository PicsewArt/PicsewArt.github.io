---
title: "grep 基础"
category: "UNIX"
tags: [UNIX, Linux, Terminal, grep]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0029.jpg'
---
# grep 基本概念

grep: global search regular expression and print out the line.

### 作用

文本过滤器，用于文本搜索，用指定“模式”逐行匹配。

### 模式

由正则表达式字符及文本字符所编写的过滤条件

### 正则表达式

由一类特殊字符和文本字符所编写的模式，其有些字符不表示字符字面意义，而表示控制或通配的功能

### 比较记忆

{% assign diffcolor = 'style="background: #FFFD42;"' %}
<table>
    <tr>
        <th>grep</th>
        <th>egrep</th>
        <th>desc</th>
    </tr>
    <tr>
        <td><code>.</code></td>
        <td><code>.</code></td>
        <td>匹配任意单个字符</td>
    </tr>
    <tr>
        <td><code>[]</code></td>
        <td><code>[]</code></td>
        <td>匹配指定范围内任意单个字符</td>
    </tr>
    <tr>
        <td><code>[^]</code></td>
        <td><code>[^]</code></td>
        <td>匹配指定范围外任意单个字符</td>
    </tr>
    <tr>
        <td><code>*</code></td>
        <td><code>*</code></td>
        <td>匹配其前面的字符任意次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\?</code></td>
        <td {{ diffcolor }}><code>?</code></td>
        <td>匹配其前面的字符0次或1次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\+</code></td>
        <td {{ diffcolor }}><code>+</code></td>
        <td>匹配其前面的字符1次或多次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\{m\}</code></td>
        <td {{ diffcolor }}><code>{m}</code></td>
        <td>匹配其前面的字符m次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\{m,n\}</code></td>
        <td {{ diffcolor }}><code>{m,n}</code></td>
        <td>匹配其前面的字符至少m次, 至多n次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\{0,n\}</code></td>
        <td {{ diffcolor }}><code>{0,n}</code></td>
        <td>匹配其前面的字符至多n次</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\{m,\}</code></td>
        <td {{ diffcolor }}><code>{m,}</code></td>
        <td>匹配其前面的字符至少m次</td>
    </tr>
    <tr>
        <td><code>^</code></td>
        <td><code>^</code></td>
        <td>行首锚定</td>
    </tr>
    <tr>
        <td><code>$</code></td>
        <td><code>$</code></td>
        <td>行尾锚定</td>
    </tr>
    <tr>
        <td><code>^$</code></td>
        <td><code>^$</code></td>
        <td>空行</td>
    </tr>
    <tr>
        <td><code>^[[:space:]]*$</code></td>
        <td><code>^[[:space:]]*$</code></td>
        <td>空行, 或包含空白字符的行</td>
    </tr>
    <tr>
        <td><code>\<</code></td>
        <td><code>\<</code></td>
        <td>词首锚定</td>
    </tr>
    <tr>
        <td><code>\></code></td>
        <td><code>\></code></td>
        <td>词尾锚定</td>
    </tr>
    <tr>
        <td><code>\<PATTERN\></code></td>
        <td><code>\<PATTERN\></code></td>
        <td>匹配完整单词</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>\(\)</code></td>
        <td {{ diffcolor }}><code>()</code></td>
        <td>分组, 捆绑作整理处理</td>
    </tr>
    <tr>
        <td {{ diffcolor }}><code>a\|b</code></td>
        <td {{ diffcolor }}><code>a|b</code></td>
        <td>a或b</td>
    </tr>
</table>

基本正则表达式：BRE

扩展正则表达式：ERE

```console
grep -E = egrep
```

# grep 语法

```console
grep [OPTIONS] PATTERN [FILE…]
```

### OPTIONS

<table>
    <tr>
        <th>Option</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>--color=auto</code></td>
        <td>对匹配到的文本着色后高亮显示；</td>
    </tr>
    <tr>
        <td><code>-i</code></td>
        <td>ignorecase，忽略字符的大小写；</td>
    </tr>
    <tr>
        <td><code>-o</code></td>
        <td>仅显示匹配到的字符串本身；</td>
    </tr>
    <tr>
        <td><code>-v</code>, <code>--invert-match</code></td>
        <td>显示不能被模式匹配到的行；</td>
    </tr>
    <tr>
        <td><code>-E</code></td>
        <td>支持使用扩展的正则表达式元字符；</td>
    </tr>
    <tr>
        <td><code>-q</code>, <code>--quiet</code>, <code>--silent</code></td>
        <td>静默模式，即不输出任何信息；</td>
    </tr>
    <tr>
        <td><code>-A #：after,</code></td>
        <td>后#行</td>
    </tr>
    <tr>
        <td><code>-B #：before</code></td>
        <td>前#行</td>
    </tr>
    <tr>
        <td><code>-C #：context</code></td>
        <td>前后各#行</td>
    </tr>
</table>

# grep 基本正则表达式原字符

### 字符匹配

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>.</code></td>
        <td>匹配任意单个字符；</td>
    </tr>
    <tr>
        <td><code>[]</code></td>
        <td>匹配指定范围内的任意单个字符；</td>
    </tr>
    <tr>
        <td><code>[^]</code></td>
        <td>匹配指定范围外的任意单个字符；</td>
    </tr>
    <tr>
        <td><code>[:digit:]</code>, <code>[:lower:]</code>, <code>[:upper:]</code>, <code>[:alpha:]</code>, <code>[:alnum:]</code>, <code>[:punct:]</code>, <code>[:space:]</code></td>
        <td></td>
    </tr>
</table>

### 次数匹配

用在要指定其出现的次数的字符的后面，用于限制其前面字符出现的次数；默认工作于贪婪模式；

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>*</code></td>
        <td>匹配其前面的字符任意次；0,1,多次；</td>
    </tr>
    <tr>
        <td><code>.*</code></td>
        <td>匹配任意长度的任意字符</td>
    </tr>
    <tr>
        <td><code>\?</code></td>
        <td>匹配其前面的字符0次或1次；即其前面的字符是可有可无的；</td>
    </tr>
    <tr>
        <td><code>\+</code></td>
        <td>匹配其前面的字符1次或多次；即其面的字符要出现至少1次；</td>
    </tr>
    <tr>
        <td><code>\{m\}</code></td>
        <td>匹配其前面的字符m次；</td>
    </tr>
    <tr>
        <td><code>\{m,n\}</code></td>
        <td>匹配其前面的字符至少m次，至多n次；</td>
    </tr>
    <tr>
        <td><code>\{0,n\}</code></td>
        <td>至多n次</td>
    </tr>
    <tr>
        <td><code>\{m,\}</code></td>
        <td>至少m次</td>
    </tr>
</table>

### 位置锚定

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>^</code></td>
        <td>行首锚定；用于模式的最左侧；</td>
    </tr>
    <tr>
        <td><code>$</code></td>
        <td>行尾锚定；用于模式的最右侧；</td>
    </tr>
    <tr>
        <td><code>^PATTERN$</code></td>
        <td>用于PATTERN来匹配整行；</td>
    </tr>
    <tr>
        <td><code>^$</code></td>
        <td>空白行；</td>
    </tr>
    <tr>
        <td><code>^[[:space:]]*$</code></td>
        <td>空行或包含空白字符的行；</td>
    </tr>
    <tr>
        <td><code>\<</code>, <code>\b</code></td>
        <td>词首锚定，用于单词模式的左侧；</td>
    </tr>
    <tr>
        <td><code>\></code>, <code>\b</code></td>
        <td>词尾锚定，用于单词模式的右侧；</td>
    </tr>
    <tr>
        <td><code>\<PATTERN\></code></td>
        <td>匹配完整单词；</td>
    </tr>
</table>

> 单词：非特殊字符组成的连续字符 (字符串) 都称为单词；

### 分组及引用

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>\(\)</code></td>
        <td>将一个或多个字符捆绑在一起，当作一个整体进行处理；</td>
    </tr>
</table>

分组括号中的模式匹配 到的内容会被正则表达式引擎自动记录于内部的变量中，这些变量为：

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>\1</code></td>
        <td>模式从左侧起，第一个左括号以及与之匹配的右括号之间的模式所匹配到的字符；</td>
    </tr>
    <tr>
        <td><code>\2</code></td>
        <td>模式从左侧起，第二个左括号以及与之匹配的右括号之间的模式所匹配到的字符；</td>
    </tr>
    <tr>
        <td>...</td>
        <td></td>
    </tr>
</table>

后向引用：引用前面的分组括号中的模式所匹配到的字符；

# 扩展正则表达式的元字符

### 字符匹配

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>.</code></td>
        <td>任意单个字符</td>
    </tr>
    <tr>
        <td><code>[]</code></td>
        <td>指定范围内的任意单个字符</td>
    </tr>
    <tr>
        <td><code>[^]</code></td>
        <td>指定范围外的任意单个字符</td>
    </tr>
</table>

### 次数匹配

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>*</code></td>
        <td>任意次，0,1或多次；</td>
    </tr>
    <tr>
        <td><code>?</code></td>
        <td>0次或1次，其前的字符是可有可无的；</td>
    </tr>
    <tr>
        <td><code>+</code></td>
        <td>其前字符至少1次；</td>
    </tr>
    <tr>
        <td><code>{m}</code></td>
        <td>其前的字符m次；</td>
    </tr>
    <tr>
        <td><code>{m,n}</code></td>
        <td>至少m次，至多n次;</td>
    </tr>
</table>

### 位置锚定

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>^</code></td>
        <td>行首锚定；</td>
    </tr>
    <tr>
        <td><code>$</code></td>
        <td>行尾锚定；</td>
    </tr>
    <tr>
        <td><code>\<</code>, <code>\b</code></td>
        <td>词首锚定；</td>
    </tr>
    <tr>
        <td><code>\></code>, <code>\b</code></td>
        <td>词尾锚定；</td>
    </tr>
</table>

### 分组及引用

<table>
    <tr>
        <th>Code</th>
        <th>Desc</th>
    </tr>
    <tr>
        <td><code>()</code></td>
        <td>分组；括号内的模式匹配到的字符会被记录于正则表达式引擎的内部变量中；</td>
    </tr>
    <tr>
        <td><code>\1</code>, <code>\2</code> ...</td>
        <td>后向引用</td>
    </tr>
    <tr>
        <td><code>a|b</code></td>
        <td>a或者b；</td>
    </tr>
</table>
