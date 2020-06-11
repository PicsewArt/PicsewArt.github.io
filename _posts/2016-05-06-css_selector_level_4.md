---
title: "CSS Selectors Level 4"
category: "CSS"
copy: true
tags: [CSS]
cave: true
hero:
  format: 'jpeg'
  url: 'post/css.jpg'
---
关于 CSS Selectors Level 4 阶段性新特性的总结。

## Negation pseudo-class `:not`

`:not` 用于将符合规则的元素剔除, 将样式规则应用于其他元素上。

在 CSS3 中已经有 `:not`, 不过在 CSS3 中只能使用简单的匹配规则, 例如 `:not(p)` 用来选择不是 `<p>` `</p>` 的元素。

在 CSS4 中, 可以应用更复杂的匹配规则, 但是同样地不允许嵌套使用, 例如 `:not(:not(...))`。

```css
.negation {
    color: black;
}
.negation .default:not([data-red="no"]) {
    color: red;
}
.negation .default a {
    color: green;
}
.negation .default a:not([rel="green"], [rel="default"]) {
    color: blue;
}
```

```html
<div class="negation">
    <div class="default" data-red="no">
        <a href="https://www.baidu.com" rel="green">这里是绿色</a>
        <a href="https://www.ele.me" rel="default">这里也是绿色</a>
        <a href="https://www.sina.com" rel="blue">这里是蓝色</a>
    </div>
    <div class="default" data-red="no">这里是黑色</div>
    <div class="default" data-red="yes">这里是红色</div>
</div>
```

> 我们可以利用 `:not` 来对 CSS 样式进行一个优先级提升, 例如 `div:not(span) {…}` 跟 `div {…}` 是同个概念, 但是明显地前者的优先级更高。

## Matches-any Pseudo-class `:matches` 伪类

`:matches` 用于匹配所述规则的元素, 并应用相应的样式规则, 同样不允许嵌套使用, `-webkit-any` 和 `-moz-any` 是它的两个兼容性写法。它可以让我们节省书写大量的 CSS 样式匹配规则, 让我们从大量重复的规则书写中解放出来。

```css
.matches {
    color: black;
}
.matches :matches(span, div) :matches(span, div) {
    color: green;
}
/*等同于
.matches span div, .matches span span,
.matches div span, .matches div div {
    color: green;
}
*/
.matches :-webkit-any(span, div) :-webkit-any(span, div) {
    color: green;
}
.matches :-moz-any(span, div) :-moz-any(span, div) {
    color: green;
}
.matches :matches(.a, .b) :matches(.a, .b) {
    color: red;
}
/* 等同于
.matches .a .a, .matches .a .b,
.matches .b .a, .matches .b .b {
    color: red;
}
*/
.matches :-webkit-any(.a, .b) :-webkit-any(.a, .b) {
    color: red;
}
.matches :-moz-any(.a, .b) :-moz-any(.a, .b) {
    color: red;
}
```

```html
<div class="matches">
    <span>
        <div>绿色</div>
    </span>
    <span>
        <span>绿色</span>
    </span>
    <div>
        <span>绿色</span>
    </div>
    <div>
        <div>绿色</div>
    </div>
    <div class="a">
        <div class="b">红色</div>
    </div>
    <div class="b">
        <div class="a">红色</div>
    </div>
    <div class="a">
        <div class="a">红色</div>
    </div>
    <div class="b">
        <div class="b">红色</div>
    </div>
</div>
```

## Case-Sensitivity 不区分大小写匹配标识

Case-Sensitivity 用于声明某个匹配规则中, 对字符串或者某个 value 的匹配不区分大小写。该标志声明于 `]` 即右中括号之前, 例如 `[data-value="case" i]`, 其中的 `i` 就是 Case-Sensitivity 标识。但是如果我们需要明确区分大小写区别的时候, 该标识可能会导致某些不可意料的后果, 所以使不使用该标识应该明确使用的场景是否对数据来源的大小写敏感。

```css
.case-sensitivity :matches([data-value="case" i]) {
    color: yellow;
}
```

```html
<div class="case-sensitivity">
    <p data-value='Case'>Case</p>
    <p data-value="case">case</p>
</div>
```

其中, `data-value` 虽然既有大写也有小写, 但是由于我们声明了 Case-Sensitivity, 所以无论大小写都会被匹配。像例子中 case, Case, CASE 等都会被匹配。

## The Directionality Pseudo-class `:dir`

`:dir` 用于匹配符合某个方向性的元素, 例如 `:dir(ltr)` 和 `dir(rtl)`。

* `ltr` 表示 `left to right`, 即方向从左到右;
* `rtl` 表示 `right-to-left`, 即方向从右到左。

使用 `:dir` 匹配元素和使用 `[dir=...]` 在某个程度上是一样的效果, 但是一个区别是 `[dir=...]` 无法匹配到没有显示声明 `dir` 的元素, 但是 `:dir` 却可以匹配到由浏览器计算得到或者继承来的 `dir` 属性的元素。因此, 如果我们有明确地对某个元素声明 `dir`, 那我们大可以使用 `[dir=...]` 的形式来匹配某个元素, 但是如果我们只是单纯从父元素继承而来的 `dir`, 那么此时还是需要用到 `:dir`。

```css
.dir :dir(ltr) {
    color: blue;
}
.dir :dir(rtl) {
    color: green;
}
```

```html
<div class="dir">
    <p dir="ltr">从左到右</p>
    <p dir="rtl">从右到左</p>
</div>
```

## The Language Pseudo-class `:lang`

`:lang` 用于匹配声明了 `lang=value` 的元素, 并且可以使用通配符匹配, 例如 `p:lang(*-CH)` 将可以匹配 `de-CH` 的 `p` 元素。
```css
.lang p:lang(de-DE) {
    color: green;
}
.lang p:lang(*-CH) {
    color: blue;
}
```
```html
<div class="lang">
    <p lang="de-DE-1996">de-DE-1996</p>
    <p lang="de-CH">de-CH</p>
</div>
```

## The Hyperlink Pseudo-class `:any-link` 伪类

`:any-link` 用于匹配带有 `href` 属性的超链接元素, 例如 `<a>`, `<area>`, `<link>` 等带有 `href` 属性的元素。`:-webkit-any-link` 和 `:-moz-any-link` 是它的兼容性写法。

目前工作组对该选择器的命名尚不满意, 未来该选择器可能会修改其名字。该选择器的作用在于可以选出所有带有链接的元素, 如果使用旧方法, 那么只能使用标签名的方式或者 `a[href=value]` 的方式去匹配。

```css
.link a:any-link {
    color: red;
}
.link a:-webkit-any-link {
    color: red;
}
.link a:-moz-any-link {
    color: red;
}
```

```html
<div class="link">
    <a href="#">我是带有颜色的超链接</a>
</div>
```

## The contextual reference element pseudo-class `:scope`

`:scope` 用于匹配当前作用域下的顶级元素。但是目前 `<style scoped>` 已经被移除 issue, 所以 `:scope` 基本等效于 `:root`。

```html
<div class="scope">
    <p>This paragraph is outside the scope.</p>
    <div>
        <style scoped>
        :scope {
            background-color: red;
        }
        p {
            color: blue;
        }
        </style>
        <p>This paragraph is inside the scope.</p>
    </div>
</div>
```

其中, 第二个 `div` 将会有红色背景, 并且他的所有 `<p>` 子元素都将拥有蓝色文字。

## Time-dimensional Pseudo-classes `:current`, `:past`, `:future`

`:current` 匹配时间轴当前的元素, `:past` 匹配 `:current` 元素之前的元素, `:future` 则匹配当前时间轴后的所有元素。这里说的时间轴指的是例如 `WebVTT`。规范中写道如果使用的时间轴并不是文档语言所规定的, 那么 `:past` 和 `:future` 有可能分别匹配 `:current` 元素的前面的兄弟元素和后面的兄弟元素。由于在 `Chrome Canary` 和 `Safari TP` 上都不支持这几个伪类, 所以无法实验正确性, 不过可以看一些网上的例子:
```css
:current(p, span) {
    background-color: yellow;
}
:past(p, span), :future(p, span) {
    background-color: gray;
}
```

```html
<video controls preload="metadata">
    <source src="https://html5demos.com/assets/dizzy.mp4" type="video/mp4" />
    <source src="https://html5demos.com/assets/dizzy.webm" type="video/webm" />
    <source src="https://html5demos.com/assets/dizzy.ogv" type="video/ogv" />
    <track label="English" kind="subtitles" srclang="en" src="https://www.iandevlin.com/html5test/webvtt/upc-video-subtitles-en.vtt" default>
</video>
```

## The Indeterminate-value Pseudo-class `:indeterminate`

在 `radio` 和 `checkbox` 元素上一般有两种状态 选中 和 未选中, 但是有的时候的状态会是不确定状态, 而 `:indeterminate` 就是匹配这种不确定状态的 `radio` 或 `checkbox`。

```css
:indeterminate + label {
    background-color: gray;
}
```

```html
<input type="radio" name="name" id="test">
<label for="test">未确定状态</label>
```

`radio` 和 `checkbox` 在没有声明选中状态时, 通常来说, 默认只有两种可能性: `checked` 和 `unchecked`, 为了让他们出现第三种状态, 我们可以借助 JavaScript 来控制:

```css
document.querySelector('#test').indeterminate = true;
```

上面例子的 `<label>` 在 `<input>` 处于 `indeterminate state` 的时候, 文字将会变为灰色。

## The default-option pseudo-class `:default`

`:default` 匹配一组相似元素集合中的默认元素, 例如 `<form>` 中有多个 `<input>`, 其中有一个是 `<input type="submit">`, 那么该元素将会被匹配。此外还有 `<option>` 也有默认元素。

```css
.default .default-form :default {
    background-color: gray;
}
```
```html
<div class="default">
    <form class="default-form" action="#" method="get">
        <input type="submit" name="name" value="submit">
        <input type="reset" name="name" value="reset">
    </form>
</div>
```

## The validity pseudo-classes `:valid`, `:invalid`

在 `<input type="email">` 中, 如果我们输入了 abc123, 那么此时 `:invalid` 将会匹配该元素, 假如我们输入 `abc123@163.com`, 那么此时 `:valid` 将会匹配该元素。这里要注意假如我们没有为 `<input>` 作约束, 例如 `<input type="text">`, 那么它的任意输入将使元素既不会被 `:valid` 匹配, 也不会被 `:invalid` 匹配。

```css
.valid input:valid {
    color: green;
}
.valid input:invalid {
    color: red;
}
```

```html
<div class="valid">
    <input type="email" name="eamil_valid" value="abc@abc.com">
    <input type="email" name="email_invalid" value="abc">
</div>
```

## The range pseudo-classes `:in-range`, `:out-of-range`

`:in-range` 和 `:out-of-range` 只对有被条件约束的元素起作用, 例如 `<input type="number" min="1" value="1">`, 如果输入数字小于 1, 那么将会被 `:out-of-range` 匹配, 反之则是被 `:in-range` 匹配。在很多时候, 我们需要对“脏值”做一个高亮的显示, 以前可能需要配合 JS 对值的边界进行检测, 然后在对元素的样式进行修改。而现在, 有了这两个伪类的存在, 我们可以完全使用 CSS 来控制。

```css
.range input:in-range {
    color: green;
}
.range input:out-of-range {
    color: red;
}
```

```html
<div class="range">
    <input type="number" name="range" value="1" min="1" max="10">
</div>
```

## The optionality pseudo-classes `:required`, `:optional`

`:required` 和 `:optional` 分别匹配带有 `required` 标识的元素和不带 `required` 标识的元素。同样地, 我们可以利用这两个伪类来对需要填写的元素添加特定的样式。

```css
.optionality input:required {
    color: green;
}
.optionality input:optional {
    color: red;
}
```

```html
<div class="optionality">
    <input type="text" name="required" value="required" required>
    <input type="text" name="optional" value="optional">
</div>
```

## The user-interaction pseudo-class `:user-error`

`:user-error` 会匹配 `:invalid`, `:out-of-range` 和没有任何值的 `:required` 元素, 但是假如是初始化时就触发这三种错误, `user-error` 将不会匹配该元素, 只有当用户和元素进行交互或者提交了该表单并且触发了这三种错误, `:user-error` 才会被触发。

```css
.user-error input:user-error {
    color: red;
}
.user-error input:valid {
    color: green;
}
```

```html
<div class="user-error">
    <input type="email" name="eamil_valid" value="abc@abc.com">
    <input type="email" name="email_invalid" value="abc">
</div>
```

## The mutability pseudo-classes `:read-only`, `:read-write`

`:read-only` 匹配不可被编辑的元素, `:read-write` 则匹配可被编辑的元素, 例如 `<input>` 或者 `contenteditable="true"` 的元素。`:-moz-read-only` 和 `:-moz-read-write` 分别是他们的兼容性写法。

```css
.mutability :read-only {
    color: red;
}
.mutability :read-write {
    color: green;
}
```
```html
<div class="mutability">
    <input type="text" name="read-write-input" value="read-write">
    <p contenteditable="true">read-write-paragraph</p>
    <p>read-only-paragraph</p>
</div>
```

## The placeholder-shown pseudo-class `:placeholder-shown`

`:placeholder-shown` 匹配 placeholder 文字显示时的 `<input>` 元素。`::-webkit-input-placeholder`, `::-moz-placeholder`, `:-ms-input-placeholder` 分别是它在不同浏览器的兼容性写法。在此之前, 原生的 placeholder 文字是没有方法去改变其颜色的, 大多数做法是使用 value 来代替 placeholder, 同时利用 JS 对 `input` 的 `focus` 事件进行监听, 将 value 清空, 从而达到一个模仿 placeholder 的效果。

```css
.placeholder input:placeholder-shown {
    color: green;
}
.placeholder input::-webkit-input-placeholder {
    color: green;
}
.placeholder input::-moz-placeholder {
    color: green;
}
.placeholder input:-ms-input-placeholder {
    color: green;
}
```

```html
<div class="placeholder">
    <input type="text" name="placeholder" placeholder="placeholder is green">
</div>
```

## Grid-Structural Selectors

该特性将对例如 `<table>` 的栅格布局起作用。它包含 `:column(selector)`, `:nth-column(n)` 和 `:nth-last-column(n)`。

#### `:column(selector)`

`:column(selector)` 将匹配例如 `<table>` 中带有 selector 类名的那一列的所有元素。

```css
:column(.selected) {
    color: green;
}
```

```html
<table>
    <col class="selected" />
    <col class="blur" />
    <col class="blur" />
    <tr>
        <td>A</td>
        <td>B</td>
        <td>C</td>
    </tr>
    <tr>
        <td>D</td>
        <td>E</td>
        <td>F</td>
    </tr>
    <tr>
        <td>G</td>
        <td>H</td>
        <td>I</td>
    </tr>
</table>
```

在上面的例子中, A、D、G 都将是绿色的。

#### `:nth-column(n)` 和 `:nth-last-column(n)`

`:nth-column(n)` 匹配括号内 n 的计算值的某一列的元素, 计算方式是从头开始计算, 而 `:nth-last-column(n)` 则是从后开始计算。

```css
:nth-column(2n) {
    color: red;
}
:nth-last-column(3n) {
    color: green;
}
```

## Tree-Structural pseudo-classes `:blank`

Tree-Structural pseudo-classes 是 CSS3 中的规范, 但在 CSS Selectors Level 4 中加入了 `:blank`, 它和 `:empty` 类似, 区别在于 `:empty` 只能匹配没有任何内容的元素, 而 `:blank` 可以匹配带有 spaces（空格）, tabs（缩进符） 和 segment breaks（段落过段） 内容的元素。

## Combinators `>>`

`A >> B` 匹配祖先元素为 A 的 B元素, 其用法与 A B 一样, 与 `>`, `+`, `~` 用意一样, 不过意义不同。

> 上面的特性都已经存在 Working Draft 中, 还有一些 Editor’s Draft 的特性, 也顺带一提。


## The Relational Pseudo-class `:has`

`:has(selector)` 匹配含有 某些规则 的元素。

```css
/* 将匹配含有 img 子元素的 a 元素 */
a:has(> img)
```

```css
/* 将匹配拥有 dt 兄弟元素的 dt 元素 */
dt:has(+ dt)
```

```css
/* 将匹配不含有 h1、h2、h3、h4、h5、h6 元素的 section 元素 */
section:not(:has(h1, h2, h3, h4, h5, h6))
```

和上面例子不同, 下面交换了两个伪类的嵌套, 表示匹配含有的不是 `h1`、`h2`、`h3`、`h4`、`h5`、`h6` 子元素的元素, 区别在于这种写法要求必须含有一个子元素, 而上面的写法可以不含有子元素也会被匹配:

```css
section:has(:not(h1, h2, h3, h4, h5, h6))
```

## The Drag-and-Drop Pseudo-class `:drop`, `:drop`

`:drop` 和 `:drop` 匹配可被放置拖动元素的目标元素, 两者区别在于 `:drop` 可以匹配一些规则, 包括 `active`, `valid`, `invalid`。`active` 会匹配可被放置的目标元素, `valid` 匹配放置的元素为合法元素的目标元素, `invalid` 反之。如果 `:drop` 括号里没有任何过滤, 那么将和 `:drop` 没有区别。

## 参考

* [https://www.w3.org/TR/2013/WD-selectors4-20130502/](https://www.w3.org/TR/2013/WD-selectors4-20130502/)
* [https://drafts.csswg.org/selectors-4/](https://drafts.csswg.org/selectors-4/)
* [https://css4.rocks/selectors-level-4/](https://css4.rocks/selectors-level-4/)
* [https://css4-selectors.com/selectors/](https://css4-selectors.com/selectors/)
