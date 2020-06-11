---
title: "Liquid for Designers"
category: "Jekyll"
tags: [Jekyll, Liquid]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0038.jpg'
---
`Jekyll` 是这个博客网站的主要支撑之一，本文主要介绍其基本语法及使用。

<!-- *注: 此文为 [英文原作](https://github.com/shopify/liquid/wiki/liquid-for-designers) 之译文，版权归原作者所有。* -->



在 `Liquid` 中有两种标记类型: 输出 (`Output`) 和 标签(`Tag`)。

* 输出标记 (有些可能解析文本) 被包含在:

```liquid

{% raw %}{{ 两对配对的花括号之间 }}{% endraw %}

``` 

* 标签标记 (不能解析文本) 被包含在:

```liquid

{% raw %}{% 成对的花括号与百分号之间 %}{% endraw %}

``` 

<hr>

## 输出

一个输出声明被包含在两对配对的花括号之间，当模板被渲染后，其内容会被替换为对应的值。

这是一个简单的例子:

```liquid

Hello {% raw %}{{name}}{% endraw %}
Hello {% raw %}{{user.name}}{% endraw %}
Hello {% raw %}{{ 'tobi' }}{% endraw %}

``` 

<a id="expressions"></a>

<hr>

### 表达 (`Expressions`) 和变量 (`Variables`)

表达是是有值的声明. `Liquid` 模板可以在多处使用它们; 常见于在输出声明中, 有时也以参数形式出现在一些标签和过滤器。

`Liquid` 接受下列形式的表达:

* **变量.** 最基本的的一种表达就是一个变量的名称，`Liquid` 变量被命名为 `Ruby` 变量的风格，它们应该含有字母和下划线，应该总是以字母开头, 且不带有任何前缀。也就是说，看起来像 `var_name` 而不是 `$var_name`。
* **访问数组、哈希.** 如果你有一个表达的值是数组或哈希(通常是一个变量)，你可以:
  * `my_variable[<键表达>]` — 变量的名称，后面紧跟一对方括号，其中包含一个键的表达。
    * 对于数组，键必须是一个整数的字面量或者可以化解为整数的表达。
      * 对于哈希，键必须是一个引号包含的字符串，或者可以化解为字符串的表达。
  * `my_hash.key` — 哈希也允许使用点 (`.`) 符号，及变量的名称后紧跟一个句号，随后再紧跟键的名称。这种用法只在键不包含空格的情况有效。与方括号的形式不同的是，这种用法不允许将键名存储在变量中。
  * 注意: 如果一个访问表达的值也是一个数组或哈希，你可以访问通过同样的方式访问这个值，甚至你可以结合两种方法，比如 `site.posts[34].title`。
* **数组、哈希的大小.** 如果你有一个表达的值是数组或哈希，你可以使用在其后紧跟 `.size` 来获取其元素数量的整数值。
* **字符串.** 字符串字面量必须使用一组成对的双引号 (`""`) 或单引号 (`''`) 包含，例如 `"my string"` 或 `'my string'`。这两种写法并没有什么不同，也都不允许变量值插入。
* **整数.** 整数必须不带有引号。
* **布尔(`Boolean`) 和 nil.** 及字面值 `true`，`false` 和 `nil`。

请注意，一个字面的数组 (`literal array`) 或哈希 (`hash`) 无法作为表达。数组和哈希必须成为模板，或由标签和输出声明创建间接。

<a name="filters"></a>

<hr>

### 高阶输出: 过滤器 (`Filters`)

输出标记可以带有过滤器, 用来更改输出结果。你可以通过在输出声明的主表达的后面跟随这些内容来调用:

* 一个管道符号 (`|`)

* 过滤器的名称

* 以及可选的, 一个冒号 (`:`) 和用逗号 (`,`) 分隔的过滤器的额外参数列表。每个额外参数都必须是合法的表达，每个过滤器都预定义了它可以接受的参数及传递顺序。

过滤器也可以通过增加额外过滤器声明(以另一个管道符号开始)串联在一起。前一个过滤器的输出将会作为后一个的输入。

```liquid

Hello {% raw %}{{ 'tobi' | upcase }}{% endraw %}
Hello tobi has {% raw %}{{ 'tobi' | size }}{% endraw %} letters!
Hello {% raw %}{{ '*tobi*' | textilize | upcase }}{% endraw %}
Hello {% raw %}{{ 'now' | date: "%Y %h" }}{% endraw %}

``` 

在底层，一个过滤器就是一个有一个或多个参数且有返回值的 `Ruby` 方法。参数根据位置被传递给过滤器:
 第一个参数是管道符号前的表达，额外参数会通过 `name: arg1, arg2` 语法形式传递。

<hr>

### 标准过滤器

* `append` - 拼接一个字符串，例如 `{% raw %}{{ 'foo' | append:'bar' }}{% endraw %} #=> 'foobar'`

* `capitalize` - 使输入语句首字母大写

* `ceil` - 将数组向上增大到最接近的整数 `{% raw %}{{ 4.6 | ceil }}{% endraw %} #=> 5`

* `date` - 重新格式化一个日期 ([语法参考](https://docs.shopify.com/themes/liquid-documentation/filters/additional-filters#date))

* `default` - 返回一个给定的变量值，除非它是空的或者是空字符，例如 `{% raw %}{{ undefined_variable | default: "Default value" }}{% endraw %} #=> "Default value"`

* `divided_by` - 整数除法，例如 `{% raw %}{{ 10 | divided_by:3 }}{% endraw %} #=> 3`

* `downcase` - 转换输入字符串为小写

* `escape_once` - 返回一个转义的 HTML 版本，不影响现有的转义文本

* `escape` - HTML 脱义文本

* `first` - 获取传入的数组的第一个元素

* `floor` - 将数组向下减小到最接近的整数，例如 `{% raw %}{{ 4.6 | floor }}{% endraw %} #=> 4`

* `join` - 将确定的字符当做分隔符加入到数组元素之间

* `last` - 获取传入的数组的最后一个元素

* `lstrip` - 删除字符串开头的所有空白符号

* `map` - 从一个给定属性中映射/收集一个数组

* `minus` - 减法，例如  `{% raw %}{{ 4 | minus:2 }}{% endraw %} #=> 2`

* `modulo` - 模运算，求余，例如 `{% raw %}{{ 3 | modulo:2 }}{% endraw %} #=> 1`

* `newline_to_br` - 将所有换行 (`\n`) 替换为 HTML 换行

* `pluralize` - 如果输入不是 `1` 则返回第二个词，否则返回第一个词，例如 `{% raw %}{{ 3 | pluralize: 'item', 'items' }}{% endraw %} #=> 'items'`

* `plus` - 加法，例如 `{% raw %}{{ '1' | plus:'1' }}{% endraw %} #=> 2`, `{% raw %}{{ 1 | plus:1 }}{% endraw %} #=> 2`

* `prepend` - 在前面拼接一个字符串 `{% raw %}{{ 'bar' | prepend:'foo' }}{% endraw %} #=> 'foobar'`

* `remove_first` - 删除第一个匹配的子字符串，例如 `{% raw %}{{ 'barbar' | remove_first:'bar' }}{% endraw %} #=> 'bar'`

* `remove` - 删除所有匹配的子字符串，例如 `{% raw %}{{ 'foobarfoobar' | remove:'foo' }}{% endraw %} #=> 'barbar'`

* `replace_first` - 替换第一个匹配的子字符串，例如 `{% raw %}{{ 'barbar' | replace_first:'bar','foo' }}{% endraw %} #=> 'foobar'`

* `replace` - 替换所有匹配的子字符串，例如 `{% raw %}{{ 'foofoo' | replace:'foo','bar' }}{% endraw %} #=> 'barbar'`

* `reverse` - 反转传入的数组

* `round` - 将输入舍入到最接近的整数，并置为十进制，例如 `{% raw %}{{ 4.5612 | round: 2 }}{% endraw %} #=> 4.56`

* `rstrip` - 删除字符串结尾的所有空白符号

* `size` - 返回数组或字符串的大小

* `slice` - 通过偏移和长度 (`offset and length`) 分隔字符串，例如 `{% raw %}{{ "hello" | slice: -3, 3 }}{% endraw %} #=> llo`

* `sort` - 对数组元素进行排序

* `split` - 将一串字符串根据匹配模式分割成数组，例如 `{% raw %}{{ "a~b" | split:"~" }}{% endraw %} #=> ['a','b']`

* `strip_html` - 删除字符串中的 HTML 元素

* `strip_newlines` - 删除字符串中有所换行 (`\n`)

* `strip` - 删除字符串两端所有空白符号

* `times` - 乘法  *e.g* `{% raw %}{{ 5 | times:4 }}{% endraw %} #=> 20`

* `truncate` - 将字符串截断为若干字符，如果有第二个参数将拼接到字符串，例如 `{% raw %}{{ 'foobarfoobar' | truncate: 5, '.' }}{% endraw %} #=> 'foob.'`

* `truncatewords` - 将字符串截断为若干词

* `uniq` - 删除数组中重复的元素, 可选的，使用给定的属性来测试唯一性

* `upcase` - 转换输入字符串为大写

* `url_encode` - URL 编码字符串

<hr>

## 标签

标签被用在模板逻辑中，新的标签很容易开发。

这是一个目前支持的标签的列表:

* **assign** - 将一些值赋给变量

* **capture** - 块标签，把一些文本捕捉到变量中

* **case** - 块标签，标准的 `case` 语句

* **comment** - 块标签，将一块文本作为注释

* **cycle** - 通常用于循环轮换值，比如颜色或 `DOM` 类

* **for** - 用于循环

* **break** - 结束 `for` 循环

* **continue** 进入当前循环的下一次循环过程

* **if** - 标准 `if/else` 块

* **include** - 包含其他模块，对于区块化非常有效

* **raw** - 暂时性的禁用标签解析，脱义

* **unless** - `if` 的简版



### 注释

任何被你放在 `{% raw %}{% comment %}{% endraw %}` 和 `{% raw %}{% endcomment %}{% endraw %}` 标签之间的内容都会被解析为注释。

```liquid

今年我们交易 {% raw %}{% comment %}{% endraw %} 损失 {% raw %}{% endcomment %}{% endraw %} 了一百万美元

``` 



### Raw

`Raw` 暂时性的禁用标签的解析。这在展示一些可能产生冲突的语法内容时很有用，例如我们在这篇使用 `Jekyll` 的博文中展示 `Jekyll` 代码，这代码是被包含在 `Raw` 标签之间的，所以不被解析。

```liquid
{% raw %}{% {% endraw %}raw{% raw %} %}{% endraw %}
  In Handlebars, {% raw %}{{ this }}{% endraw %} will be HTML-escaped, but {% raw %}{{{ that }}}{% endraw %} will not.
{% raw %}{% {% endraw %}endraw{% raw %} %}{% endraw %}

``` 

### If / Else

`if / else` 声明在其它语言中应该已经被大家熟知了，`Liquid` 实现中它是这样使用的:

* `{% raw %}{% if <条件> %}{% endraw %} ... {% raw %}{% endif %}{% endraw %}` — 包含一组只在条件成立时才会执行的内容。

* `{% raw %}{% elsif <条件> %}{% endraw %}` — 可以被可选的用于 `if ... endif` 块中。它指明另一个条件，当第一个 `if` 的条件不成立时，`Liquid` 将会尝试 `elsif`，如果其条件成立将会执行其包含的一组内容，你可以在 `if` 块中使用任意数量的 `elsifs`。

* `{% raw %}{% else %}{% endraw %}` — 可以被可选的用于 `if ... endif` 块，放在任意一个 `elsif` 标签后，如果它前面所有的条件都不成立，`Liquid` 将会执行 `else` 标签后包含的一组内容。

* `{% raw %}{% unless <条件> %}{% endraw %} ... {% raw %}{% endunless %}{% endraw %}` — `if` 声明的相反版本，不要在 `unless` 声明后使用 `elsif` 或 `else`。

`if`，`elsif` 或 `unless` 标签的条件应该一个普通的 `Liquid` 表达，或 `Liquid` 表达的比较。
请注意，比较操作符被实现为类似 `if` 的标签，他们在 `Liquid` 的其它任何地方都不起作用。

可用的比较操作符有:

* `==`，`!=,` 和 `<>` — 等于和不等于
    * 还有一个 `empty` 可以用来比较数组，如果数组没有元素则成立
* `<`、`<=`、`>`、`>=` — 小于、小于等于、大于、大于等于
* `contains` — 对 `Ruby` 中 `include?` 方法的包装，可用于字符串、数组和哈希。如果其左侧参数是字符串而右侧不是, 右侧将被字符串化。

可用的布尔 (`Boolean`) 操作符有:

* `and`
* `or`

请注意，没有 `not` 操作符。

另外还要注意，你 **不能** 使用圆括号 (`()`)来控制操作顺序。操作符的优先级是不确定的。所以如果有疑问时，使用嵌套的 `if` 声明而不使用这些操作符冒险。

`Liquid` 表达是在 `Ruby` 式看似成立的情况下测试的:

* `true` 是真
* `false` 是假
* 任何字符串都是真，包括空字符串
* 任何数组都是真
* 任何哈希都是真
* 任何不存在的、`nil` 值 (比如丢失元素的哈希) 都是假.

```liquid

{% raw %}{% if user %}{% endraw %}
  你好 {% raw %}{{ user.name }}{% endraw %}
{% raw %}{% endif %}{% endraw %}

``` 


```liquid

# 和上面相同
{% raw %}{% if user != null %}{% endraw %}
  你好 {% raw %}{{ user.name }}{% endraw %}
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

{% raw %}{% if user.name == 'tobi' %}{% endraw %}
  你好 tobi
{% raw %}{% elsif user.name == 'bob' %}{% endraw %}
  你好 bob
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

{% raw %}{% if user.name == 'tobi' or user.name == 'bob' %}{% endraw %}
  你好 tobi 或 bob
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

{% raw %}{% if user.name == 'bob' and user.age > 45 %}{% endraw %}
  你好老 bob
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

{% raw %}{% if user.name != 'tobi' %}{% endraw %}
  你好不是tobi的家伙
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

# 和上面相同
{% raw %}{% unless user.name == 'tobi' %}{% endraw %}
  你好不是tobi的家伙
{% raw %}{% endunless %}{% endraw %}

``` 

```liquid

# 检查数组大小
{% raw %}{% if user.payments == empty %}{% endraw %}
   你没有付款 !
{% raw %}{% endif %}{% endraw %}

{% raw %}{% if user.payments.size > 0  %}{% endraw %}
   你已经付款 !
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

{% raw %}{% if user.age > 18 %}{% endraw %}
   点这里登录
{% raw %}{% else %}{% endraw %}
   抱歉你的年龄不够
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

# array = 1,2,3
{% raw %}{% if array contains 2 %}{% endraw %}
   数组包含2
{% raw %}{% endif %}{% endraw %}

``` 

```liquid

# string = '你好世界'
{% raw %}{% if string contains 'hello' %}{% endraw %}
   字符串包含 '你好'
{% raw %}{% endif %}{% endraw %}

``` 

### Case 表达

如果你需要更多的条件，你可以使用 `case` 声明:

```liquid

{% raw %}{% case 条件 %}{% endraw %}
{% raw %}{% when 1 %}{% endraw %}
是 1
{% raw %}{% when 2 or 3 %}{% endraw %}
是 2 或 3
{% raw %}{% else %}{% endraw %}
... else ...
{% raw %}{% endcase %}{% endraw %}

``` 

*示例:*

```liquid

{% raw %}{% case template %}{% endraw %}

{% raw %}{% when 'label' %}{% endraw %}
     // {% raw %}{{ label.title }}{% endraw %}
{% raw %}{% when 'product' %}{% endraw %}
     // {% raw %}{{ product.vendor | link_to_vendor }}{% endraw %} / {% raw %}{{ product.title }}{% endraw %}
{% raw %}{% else %}{% endraw %}
     // {% raw %}{{page_title}}{% endraw %}
{% raw %}{% endcase %}{% endraw %}

``` 

### Cycle

可能你经常需要在不同的颜色或者类似任务中轮流切换，`Liquid` 对这样的操作拥有内建支持，使用 `cycle` 标签即可。

```liquid

{% raw %}{% cycle 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'one', 'two', 'three' %}{% endraw %}

``` 

产生的结果是

```liquid

one
two
three
one

``` 

如果一组 `cycle` 没有命名，那默认情况下有用相同参数的会被认为是一个组。

如果你希望完全控制 `cycle` 组，你可以指定一个组名，这个组名甚至可以是一个变量。

```liquid

{% raw %}{% cycle 'group 1': 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'group 1': 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'group 2': 'one', 'two', 'three' %}{% endraw %}
{% raw %}{% cycle 'group 2': 'one', 'two', 'three' %}{% endraw %}

``` 

产生的结果是

```liquid

one
two
one
two

``` 

### For 循环

Liquid 允许 `for` 循环遍历集合:

```liquid

{% raw %}{% for item in array %}{% endraw %}
  {% raw %}{{ item }}{% endraw %}
{% raw %}{% endfor %}{% endraw %}

``` 

#### 支持的集合类型

`for` 可以用于数组、哈希以及指定范围内的数值。

用于哈希时, `item[0]` 包含了键，而 `item[1]` 则包含值:

```liquid

{% raw %}{% for item in hash %}{% endraw %}
  {% raw %}{{ item[0] }}{% endraw %}: {% raw %}{{ item[1] }}{% endraw %}
{% raw %}{% endfor %}{% endraw %}

``` 

除了用于已存在的集合循环，你也可以对一定范围内数值使用循环，它们看起来 像`(1..10)` 这样 — 圆括号包含着一个起始值、两个英文句号和一个结束值。起始值和结束值都必须是整数或者可以被化解为整数的表达。

```liquid

# if item.quantity is 4...
{% raw %}{% for i in (1..item.quantity) %}{% endraw %}
  {% raw %}{{ i }}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
# results in 1,2,3,4

``` 

#### 循环控制

你可以通过下列标签控制一个循环:

* `{% raw %}{% continue %}{% endraw %}` — 立即终止当前轮次的循环，进入 `for` 循环下一轮次

* `{% raw %}{% break %}{% endraw %}` — 立即终止整个循环，忽略未执行的轮次

二者均在搭配 `if` 声明使用时才有用处。

```liquid

{% raw %}{% for page in pages %}{% endraw %}
# 跳过任何存在于 hidden_pages 数组中的内容，但不影响其他内容的循环
{% raw %}{% if hidden_pages contains page.url %}{% endraw %}
    {% raw %}{% continue %}{% endraw %}
{% raw %}{% endif %}{% endraw %}
# 如果不在该数组中
* [page.title](page.url)
{% raw %}{% endfor %}{% endraw %}

``` 

```liquid
{% raw %}{% for page in pages %}{% endraw %}
* [page.title](page.url)
# 完成 cutoff_page 后立即跳出循环，继续去执行循环后面的内容
{% raw %}{% if cutoff_page == page.url %}{% endraw %}
    {% raw %}{% break %}{% endraw %}
{% raw %}{% endif %}{% endraw %}
{% raw %}{% endfor %}{% endraw %}

``` 

#### 辅助变量

在每一个 `for` 循环中，这些辅助变量都可以使用:

```liquid

forloop.length      # => 整个循环的总次数
forloop.index       # => 当前轮次的索引编号
forloop.index0      # => 当前轮次的索引编号，最小值从0开始
forloop.rindex      # => 剩余循环次数
forloop.rindex0     # => 剩余循环次数，最小值从0开始
forloop.first       # => 本轮是否为首轮循环
forloop.last        # => 本轮是否为末轮循环

``` 

#### 可选参数

这是一系列 `for` 标签的可选参数，它们可以影响你在循环中获得的元素内容和顺序:

* `limit:<整数>` 允许你限制最大循环次数

* `offset:<整数>` 允许你指定从集合的什么位置开始循环

* `reversed` 倒序循环集合

循环元素:

```liquid

# array = [1,2,3,4,5,6]
{% raw %}{% for item in array limit:2 offset:2 %}{% endraw %}
  {% raw %}{{ item }}{% endraw %}
{% raw %}{% endfor %}{% endraw %}
# results in 3,4

``` 

倒序循环:

```liquid

{% raw %}{% for item in collection reversed %}{% endraw %} {% raw %}{{item}}{% endraw %} {% raw %}{% endfor %}{% endraw %}

``` 

一个 `for` 循环可以使用一个可选的 `else` 分句，在集合没有元素时显示一些文字:

```liquid

    # items => []
    {% raw %}{% for item in items %}{% endraw %}
       {% raw %}{{ item.title }}{% endraw %}
    {% raw %}{% else %}{% endraw %}
       没有任何元素!
    {% raw %}{% endfor %}{% endraw %}

``` 

### 变量赋值

你可以存储数据到变量中，从而在输出或其他标签中使用。创建变量最简单的方式是使用 `assign` 标签，它的语法很直截了当:

```liquid

{% raw %}{% assign name = 'freestyle' %}{% endraw %}

{% raw %}{% for t in collections.tags %}{% endraw %}{% raw %}{% if t == name %}{% endraw %}
  <p>Freestyle!</p>
{% raw %}{% endif %}{% endraw %}{% raw %}{% endfor %}{% endraw %}

``` 

另一种方式是将 `true / false` 复制给变量:

```liquid

{% raw %}{% assign freestyle = false %}{% endraw %}

{% raw %}{% for t in collections.tags %}{% endraw %}{% raw %}{% if t == 'freestyle' %}{% endraw %}
  {% raw %}{% assign freestyle = true %}{% endraw %}
{% raw %}{% endif %}{% endraw %}{% raw %}{% endfor %}{% endraw %}

{% raw %}{% if freestyle %}{% endraw %}
  <p>Freestyle!</p>
{% raw %}{% endif %}{% endraw %}

``` 

如果你想将一些字符串组合为一个整体单一的字符串并保存到变量，你可以使用 `capture` 标签，这个标签会将任何交于它的内容捕获，然后将捕获的内容交给变量而不是输出到屏幕。

```liquid

  {% raw %}{% capture attribute_name %}{% endraw %}{% raw %}{{ item.title | handleize }}{% endraw %}-{% raw %}{{ i }}{% endraw %}-color{% raw %}{% endcapture %}{% endraw %}

  <label for="{% raw %}{{ attribute_name }}{% endraw %}">Color:</label>
  <select name="attributes[{% raw %}{{ attribute_name }}{% endraw %}]" id="{% raw %}{{ attribute_name }}{% endraw %}">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>

``` 

好了，基础的内容大概就是这些了。
<bt>
