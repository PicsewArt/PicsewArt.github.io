---
title: "C++ 运算符优先级 对照表"
excerpt: "C++ 运算符优先级 对照表"
category: "UNIX"
copy: true
tags: [C++]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0046.jpg'
---
<table cellspacing="5" cellpadding="2">
    <caption>C++运算符优先级</caption>
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
            <th> 1
            </th>
            <td> <code>::</code>
            </td>
            <td> Scope resolution
            </td>
            <td style="vertical-align: top" rowspan="6"> Left-to-right
            </td>
        </tr>
        <tr>
            <th rowspan="5"> 2
            </th>
            <td style="border-bottom-style: none"> <code>++</code>&nbsp;&nbsp; <code>--</code>
            </td>
            <td style="border-bottom-style: none"> Suffix/postfix increment and decrement
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
            <td style="border-bottom-style: none; border-top-style: none"> Element selection by reference
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>−&gt;</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Element selection through pointer
            </td>
        </tr>
        <tr>
            <th rowspan="9"> 3
            </th>
            <td style="border-bottom-style: none"> <code>++</code>&nbsp;&nbsp; <code>--</code>
            </td>
            <td style="border-bottom-style: none"> Prefix increment and decrement
            </td>
            <td style="vertical-align: top" rowspan="9"> Right-to-left
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>+</code>&nbsp;&nbsp; <code>−</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Unary plus and minus
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>!</code>&nbsp;&nbsp; <code>~</code>
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
            <td style="border-bottom-style: none; border-top-style: none"> <code>new</code>, <code>new[]</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Dynamic memory allocation
            </td>
        </tr>
        <tr>
            <td style="border-top-style: none"> <code>delete</code>, <code>delete[]</code>
            </td>
            <td style="border-top-style: none"> Dynamic memory deallocation
            </td>
        </tr>
        <tr>
            <th> 4
            </th>
            <td> <code>.*</code>&nbsp;&nbsp; <code>-&gt;*</code>
            </td>
            <td> Pointer to member
            </td>
            <td style="vertical-align: top" rowspan="12"> Left-to-right
            </td>
        </tr>
        <tr>
            <th> 5
            </th>
            <td> <code>*</code>&nbsp;&nbsp; <code>/</code>&nbsp;&nbsp; <code>%</code>
            </td>
            <td> Multiplication, division, and remainder
            </td>
        </tr>
        <tr>
            <th> 6
            </th>
            <td> <code>+</code>&nbsp;&nbsp; <code>−</code>
            </td>
            <td> Addition and subtraction
            </td>
        </tr>
        <tr>
            <th> 7
            </th>
            <td> <code>&lt;&lt;</code>&nbsp;&nbsp; <code>&gt;&gt;</code>
            </td>
            <td> Bitwise left shift and right shift
            </td>
        </tr>
        <tr>
            <th rowspan="2"> 8
            </th>
            <td style="border-bottom-style: none"> <code>&lt;</code>&nbsp;&nbsp; <code>&lt;=</code>
            </td>
            <td style="border-bottom-style: none"> For relational operators &lt; and ≤ respectively
            </td>
        </tr>
        <tr>
            <td style="border-top-style: none"> <code>&gt;</code>&nbsp;&nbsp; <code>&gt;=</code>
            </td>
            <td style="border-top-style: none"> For relational operators &gt; and ≥ respectively
            </td>
        </tr>
        <tr>
            <th> 9
            </th>
            <td> <code>==</code>&nbsp;&nbsp; <code>!=</code>
            </td>
            <td> For relational = and ≠ respectively
            </td>
        </tr>
        <tr>
            <th> 10
            </th>
            <td> <code>&amp;</code>
            </td>
            <td> Bitwise AND
            </td>
        </tr>
        <tr>
            <th> 11
            </th>
            <td> <code>^</code>
            </td>
            <td> Bitwise XOR (exclusive or)
            </td>
        </tr>
        <tr>
            <th> 12
            </th>
            <td> <code>|</code>
            </td>
            <td> Bitwise OR (inclusive or)
            </td>
        </tr>
        <tr>
            <th> 13
            </th>
            <td> <code>&amp;&amp;</code>
            </td>
            <td> Logical AND
            </td>
        </tr>
        <tr>
            <th> 14
            </th>
            <td> <code>||</code>
            </td>
            <td> Logical OR
            </td>
        </tr>
        <tr>
            <th> 15
            </th>
            <td> <code>?:</code>
            </td>
            <td> Ternary conditional
            </td>
            <td style="vertical-align: top" rowspan="7"> Right-to-Left
            </td>
        </tr>
        <tr>
            <th rowspan="5"> 16
            </th>
            <td style="border-bottom-style: none"> <code>=</code>
            </td>
            <td style="border-bottom-style: none"> Direct assignment (provided by default for C++ classes)
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>+=</code>&nbsp;&nbsp; <code>−=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by sum and difference
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>*=</code>&nbsp;&nbsp; <code>/=</code>&nbsp;&nbsp; <code>%=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by product, quotient, and remainder
            </td>
        </tr>
        <tr>
            <td style="border-bottom-style: none; border-top-style: none"> <code>&lt;&lt;=</code>&nbsp;&nbsp; <code>&gt;&gt;=</code>
            </td>
            <td style="border-bottom-style: none; border-top-style: none"> Assignment by bitwise left shift and right shift
            </td>
        </tr>
        <tr>
            <td style="border-top-style: none"> <code>&amp;=</code>&nbsp;&nbsp; <code>^=</code>&nbsp;&nbsp; <code>|=</code>
            </td>
            <td style="border-top-style: none"> Assignment by bitwise AND, XOR, and OR
            </td>
        </tr>
        <tr>
            <th> 17
            </th>
            <td> <code>throw</code>
            </td>
            <td> Throw operator (for exceptions)
            </td>
        </tr>
        <tr>
            <th> 18
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
