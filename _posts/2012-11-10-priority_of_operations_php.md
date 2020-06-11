---
title: "PHP 运算符优先级 对照表"
excerpt: "PHP 运算符优先级 对照表"
category: "PHP"
copy: true
tags: [PHP]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0006.jpg'
---
<table cellspacing="5" cellpadding="2">
    <caption>PHP运算符优先级</caption>
    <tr>
        <th>结合方向</th>
        <th>运算符</th>
        <th>附加信息</th>
    </tr>
    <tr>
        <td>非结合</td>
        <td><code>clone new</code></td>
        <td>clone 和 new</td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>[</code></td>
        <td> <span class="function">array()</span></td>
    </tr>

    <tr>
        <td>非结合</td>
        <td><code>++ --</code></td>
        <td>
            递增／递减运算符
        </td>
    </tr>

    <tr>
        <td>非结合</td>
        <td><code>~ - (int) (float) (string) (array) (object) (bool) @</code></td>
        <td>
            类型
        </td>
    </tr>

    <tr>
        <td>非结合</td>
        <td><code>instanceof</code></td>
        <td>
            类型
        </td>
    </tr>

    <tr>
        <td>右结合</td>
        <td><code>!</code></td>
        <td>
            逻辑操作符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>* / %</code></td>
        <td>
            算术运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>+ - .</code></td>
        <td>
            算术运算符 和 字符串运算符</td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>&lt;&lt; &gt;&gt;</code></td>
        <td>
            位运算符
        </td>
    </tr>

    <tr>
        <td>非结合</td>
        <td><code>&lt; &lt;= &gt; &gt;= &lt;&gt;</code></td>
        <td>
            比较运算符
        </td>
    </tr>

    <tr>
        <td>非结合</td>
        <td><code>== != === !==</code></td>
        <td>
            比较运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>&amp;</code></td>
        <td>
            位运算符 和 引用</td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>^</code></td>
        <td>
            位运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>|</code></td>
        <td>
            位运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>&amp;&amp;</code></td>
        <td>
            逻辑运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>||</code></td>
        <td>
            逻辑运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>? :</code></td>
        <td>
            三元运算符
        </td>
    </tr>

    <tr>
        <td>右</td>
        <td>
            <code>= += -= *= /= .= %= &amp;= |= ^= &lt;&lt;= &gt;&gt;=</code>
        </td>
        <td>
            赋值运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>and</code></td>
        <td>
            逻辑运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>xor</code></td>
        <td>
            逻辑运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>or</code></td>
        <td>
            逻辑运算符
        </td>
    </tr>

    <tr>
        <td>左</td>
        <td><code>,</code></td>
        <td>多处用到</td>
    </tr>
</table>
