---
category: "PHP"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
title:  "PHP 与 RegEx 浅析 002: preg_match()"
tags: [PHP,RegEx,PHP RegEx,PHP Primer]
summary: "PHP 与 RegEx 浅析 002: preg_match()"
---
本文主要介绍函数 `preg_match()` 的语法、参数、返回值以及使用方法和范例。

<table border="1" class="table table-bordered table-striped table-condensed">
<tr>
<th>格式</th>
<th colspan="2"><code>preg_match(pattern,  subjevt[, match[, flags [, offset]]])</code></th>
</tr>
<tr><th rowspan="5">参数</th>
<th>pattern</th><th>用分隔符包围的正则表达式，可能出现修饰符</th></tr>
<tr><th>subject</th><th>需要搜索的目标字符串</th></tr>
<tr><th>matches</th><th>用来接收匹配数据，可省略</th></tr>
<tr><th>flags</th><th>只允许出现标志位 <code>PREG_OFFSET_CAPTURE</code>，可省略</th></tr>
<tr><th>offset</th><th>从 <code>0</code> 开始，表示匹配尝试的开始位置，可省略，默认为 <code>0</code> 此参数值非负则从前面计算，反之从后面计算</th></tr>
<tr><th>返回</th><th colspan="2">如果找到匹配返回 <code>true</code>，否则返回 <code>false</code></th></tr>
</table>

### 简单使用

这是一个最简单的用法：

```php
preg_match($pattern, $subject)
```

### 捕获匹配数据

出现 `matches` 参数用来保存匹配结果，匹配成功后设置 `matches` 所使用的变量(假定这个变量是 `$matches`)的规则是：

```php
$matches[0] 正则表达式匹配的所有文本
$matches[1] 第一组捕获型括号捕获的文本
$matches[2] 第二组捕获型括号捕获的文本
$matches[3] 第三组捕获型括号捕获的文本
...
```

如果你命名了分组，那么该变量中也会保留对应元素。

我们来看一个例子：

```php
if (preg_match('{ / ([^/]+) $}x', $WholePath, $matches))
		$FileName = $matches[1];
```

上面的例子是从输入的完整路径中分离出文件名。使用 `if` 进行判断是因为在某些情况下如果发生错误，`$matches` 的值并不一定会发生变化，所以我们不能认定它不为空就表示匹配成功。

### 末尾被忽略的 "未参与匹配项"

如果有一组捕获型括号没有参与最终匹配将会在 `$matches` 中生成空字符串，而 `$matches` 末尾的空字符串都会被忽略掉。

### 命名捕获

如果使用命名捕获，虽然正则表达式会变长，但是我们也因此可以直接使用我们的命名，来看例子：

```php
if (preg_match('{^(?P<proto> https? ) ://
						(?P<host> [^/:]+ )
						(?P<port> \d+ )? }x', $url, $matches)) {
	$proto = $matches['proto'];
	$host = $matches['host'];
	$port = $matches['port'] ? $matches['port'] : ($proto == "http" ? 80 : 443);
	print "Protocol: $proto\n";
	print "Host: $host\n";
	print "Port: $port\n";
}
```

这样在很大程度上变得更加便捷，但事实上也付出了一定的代价，因为用数字编号的捕获依然会插入到 `$matches` 中。

此外，要特别说明的是，我并不建议你使用数字来命名分组。

### 用 flags 获得更多细节

前面曾提到一个参数叫做 `flags`，可以帮助我们获得更多匹配细节，如果你设置了此参数，且包含了 `PREG_OFFSET_CAPTURE` (目前来说它还不能接受其他内容)，那么 `$matches` 中的每个元素将不再是普通字符串，而是变为一个数组，如果匹配成功，其元素 `0` 为匹配到的文本，元素 `1` 的内容为匹配到的文本在目标字符串中的偏移量；如果匹配不成功，则分别为空和 `-1`。这里提到的偏移量的计算不受最后一个参数 `offset` 影响，它从 `0` 开始，通常按照字节来计数，且不会因为使用修饰符 `u` 而改变。
