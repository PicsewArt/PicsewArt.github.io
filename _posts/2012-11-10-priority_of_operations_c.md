---
title: "C语言 运算符优先级 对照表"
excerpt: "C语言 运算符优先级 对照表"
category: "C"
copy: true
tags: [C]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0031.jpg'
---
<table cellspacing="5" cellpadding="2">
    <caption>C语言运算符优先级</caption>
    <tbody>
        <tr>
            <th style="text-align: left"> Precedence
            </th>
            <th style="text-align: left"> Operator
            </th>
            <th style="text-align: left"> Description
            </th>
            <th style="text-align: left"> Associativity
            </th>
        </tr>
        <tr>
            <th rowspan="6"> 1
            </th>
            <td style="border-bottom-style: none"> <code>++</code> <code>--</code>
            </td>
            <td style="border-bottom-style: none"> Suffix/postfix increment and decrement
            </td>
            <td style="vertical-align: top" rowspan="6"> Left-to-right
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>()</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Function call
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>[]</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Array subscripting
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>.</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Structure and union member access
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>−&gt;</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Structure and union member access through pointer
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>(<i>type</i>){<i>list</i>}</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Compound literal<span class="t-mark">(C99)</span>
            </td>
        </tr>
        <tr>
            <th rowspan="8"> 2
            </th>
            <td style="border-bottom-style: none"> <code>++</code> <code>--</code>
            </td>
            <td style="border-bottom-style: none"> Prefix increment and decrement
            </td>
            <td style="vertical-align: top" rowspan="8"> Right-to-left
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>+</code> <code>−</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Unary plus and minus
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>!</code> <code>~</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Logical NOT and bitwise NOT
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>(<i>type</i>)</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Type cast
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>*</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Indirection (dereference)
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>&amp;</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Address-of
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>sizeof</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Size-of
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>_Alignof</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Alignment requirement<span class="t-mark">(C11)</span>
            </td>
        </tr>
        <tr>
            <th> 3
            </th>
            <td> <code>*</code> <code>/</code> <code>%</code>
            </td>
            <td> Multiplication, division, and remainder
            </td>
            <td style="vertical-align: top" rowspan="11"> Left-to-right
            </td>
        </tr>
        <tr>
            <th> 4
            </th>
            <td> <code>+</code> <code>−</code>
            </td>
            <td> Addition and subtraction
            </td>
        </tr>
        <tr>
            <th> 5
            </th>
            <td> <code>&lt;&lt;</code> <code>&gt;&gt;</code>
            </td>
            <td> Bitwise left shift and right shift
            </td>
        </tr>
        <tr>
            <th rowspan="2"> 6
            </th>
            <td style="border-bottom-style: none"> <code>&lt;</code> <code>&lt;=</code>
            </td>
            <td style="border-bottom-style: none"> For relational operators &lt; and ≤ respectively
            </td>
        </tr>
        <tr>
            <td style="border-top-style: none"> <code>&gt;</code> <code>&gt;=</code>
            </td>
            <td style="border-top-style: none"> For relational operators &gt; and ≥ respectively
            </td>
        </tr>
        <tr>
            <th> 7
            </th>
            <td> <code>==</code> <code>!=</code>
            </td>
            <td> For relational = and ≠ respectively
            </td>
        </tr>
        <tr>
            <th> 8
            </th>
            <td> <code>&amp;</code>
            </td>
            <td> Bitwise AND
            </td>
        </tr>
        <tr>
            <th> 9
            </th>
            <td> <code>^</code>
            </td>
            <td> Bitwise XOR (exclusive or)
            </td>
        </tr>
        <tr>
            <th> 10
            </th>
            <td> <code>|</code>
            </td>
            <td> Bitwise OR (inclusive or)
            </td>
        </tr>
        <tr>
            <th> 11
            </th>
            <td> <code>&amp;&amp;</code>
            </td>
            <td> Logical AND
            </td>
        </tr>
        <tr>
            <th> 12
            </th>
            <td> <code>||</code>
            </td>
            <td> Logical OR
            </td>
        </tr>
        <tr>
            <th> 13
            </th>
            <td> <code>?:</code>
            </td>
            <td> Ternary conditional
            </td>
            <td style="vertical-align: top" rowspan="6"> Right-to-Left
            </td>
        </tr>
        <tr>
            <th rowspan="5"> 14
            </th>
            <td style="border-bottom-style: none"> <code>=</code>
            </td>
            <td style="border-bottom-style: none"> Simple assignment
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>+=</code> <code>−=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by sum and difference
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>*=</code> <code>/=</code> <code>%=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by product, quotient, and remainder
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>&lt;&lt;=</code> <code>&gt;&gt;=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by bitwise left shift and right shift
            </td>
        </tr>
        <tr>
            <td style="border-top-style: none"> <code>&amp;=</code> <code>^=</code> <code>|=</code>
            </td>
            <td style="border-top-style: none"> Assignment by bitwise AND, XOR, and OR
            </td>
        </tr>
        <tr>
            <th> 15
            </th>
            <td> <code>,</code>
            </td>
            <td> Comma
            </td>
            <td> Left-to-right
            </td>
        </tr>
    </tbody>
</table>
