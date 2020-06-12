---
title: "Python 运算符优先级 对照表"
excerpt: "Python 运算符优先级 对照表"
category: "Python"
copy: true
tags: [Python]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0056.jpg'
---
<div class="quote">
这个表给出Python的运算符优先级 (从低到高) 。<br/>
从最低的优先级 (最松散地结合) 到最高的优先级 (最紧密地结合) 。<br/>
这意味着在一个表达式中，Python会首先计算表中较下面的运算符，然后在计算列在表上部的运算符。
</div>

<table cellspacing="5" cellpadding="2">
    <caption>Python 运算符优先级</caption>
    <tr>
        <th>运算符</th>
        <th>描述</th>
    </tr>
    <tr>
        <td><code>lambda</code></td>
        <td>Lambda表达式</td>
    </tr>
    <tr>
        <td><code>or</code></td>
        <td>布尔“或”</td>
    </tr>
    <tr>
        <td><code>and</code></td>
        <td>布尔“与”</td>
    </tr>
    <tr>
        <td><code>not x</code></td>
        <td>布尔“非”</td>
    </tr>
    <tr>
        <td><code>in，not in</code></td>
        <td>成员测试</td>
    </tr>
    <tr>
        <td><code>is，is not</code></td>
        <td>同一性测试</td>
    </tr>
    <tr>
        <td><code>&lt;，&lt;=，&gt;，&gt;=，!=，==</code></td>
        <td>比较</td>
    </tr>
    <tr>
        <td><code>|</code></td>
        <td>按位或</td>
    </tr>
    <tr>
        <td><code>^</code></td>
        <td>按位异或</td>
    </tr>
    <tr>
        <td><code>&amp;</code></td>
        <td>按位与</td>
    </tr>
    <tr>
        <td><code>&lt;&lt;，&gt;&gt;</code></td>
        <td>移位</td>
    </tr>
    <tr>
        <td><code>+，-</code></td>
        <td>加法与减法</td>
    </tr>
    <tr>
        <td><code>*，/，%</code></td>
    <td>乘法、除法与取余</td>
    </tr>
    <tr>
    <td><code>+x，-x</code></td>
    <td>正负号</td>
    </tr>
    <tr>
    <td><code>~x</code></td>
    <td>按位翻转</td>
    </tr>
    <tr>
    <td><code>**</code></td>
    <td>指数</td>
    </tr>
    <tr>
    <td><code>x.attribute</code></td>
    <td>属性参考</td>
    </tr>
    <tr>
    <td><code>x[index]</code></td>
    <td>下标</td>
    </tr>
    <tr>
    <td><code>x[index:index]</code></td>
    <td>寻址段</td>
    </tr>
    <tr>
    <td><code>f(arguments...)</code></td>
        <td>函数调用</td>
    </tr>
    <tr>
        <td><code>(experession,...)</code></td>
        <td>绑定或元组显示</td>
    </tr>
    <tr>
        <td><code>[expression,...]</code></td>
        <td>列表显示</td>
    </tr>
    <tr>
        <td><code>{key:datum,...}</code></td>
        <td>字典显示</td>
    </tr>
    <tr>
        <td><code>'expression,...'</code></td>
        <td>字符串转换</td>
    </tr>
</table>
