---
category: "PHP"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0012.jpg'
title:  "PHP 与 RegEx 浅析 003: Unknown Modifier 错误"
tags: [PHP,RegEx,PHP RegEx,PHP Primer]
summary: "PHP 与 RegEx 浅析 003: Unknown Modifier 错误"
---
有时候，你的程序可能会忽然报告 `Unknown Modifier` 错误，这通常是因为你在创建模式参数时没有添加分隔符，例如你希望匹配 HTML 标签：

	preg_match('<(/w+)([^>]*)>', $html)

这里出现的问题是，你希望 `<` 是正则表达式的一部分，而事实上 `preg_match` 将它认定为其实分隔符，基于这样的情况，你的参数被解释为四个部分：

* `<`
* `(\w+)([^`
* `>`
* `]*)>`

而 `(\w+)([^` 并不是一个合法的正则表达式，这时正则引擎会试图将 `]*)>` 解释为模式修饰符，但它也并不是合法的模式修饰符，因此你会得到这样的错误：

	Waring: Unknown modifier ']'

除非你知道 `modifier` 指的是 `pattern` 修饰符，否则一定会为这个错误感到莫名其妙，也许 PHP 5 中的新提示会好很多：

	Waring: preg_match(): Unknown modifier ']'

解决办法你一定已经想到了，十分简单：

```php
preg_match('/<(/w+)(.*?)>/', $html)
```

但是，或许你会意识到另外一个问题，尽管在 PHP 5 中的新提示中出现函数名在一定程度上可以更好地帮助你找到问题所在，但在某些情况下并不会报告错误，还是需要花费很多精力来寻找问题，例如：

```php
preg_match('<(/w+)(.*?)>', $html)
```

这与刚才的解决办法相比其实就是去掉了分隔符，这段代码并不会报错，因为在这种情况下 `(/w+)(.*?)` 部分是一个合法的正则表达式，唯一的问题在于，它不能匹配你希望的结果。
