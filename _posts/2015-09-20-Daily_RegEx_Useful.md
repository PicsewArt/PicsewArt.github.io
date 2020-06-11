---
category: "RegEx"
cave: true
hero:
  format: 'jpeg'
  url: 'post/regex.jpg'
title: "Useful RegEx"
tags: [RegEx]
---
## Hex Value

	/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

#### 匹配示例:

	#a3c113

#### 错误示例:

	#4d82h4

***

## HTML Tag

	/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/

#### 匹配示例:

	<a href="{{ site.url }}/">Meniny+</a>

#### 错误示例:

	<img src="img.jpg" ⌥="Some image>" />

***

## IP Address

	/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

#### 匹配示例:

	123.45.67.89

#### 错误示例:

	256.45.67.89

***

## URL

	/^(https?:\/\/)?([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})([\/\w \.-]*)*\/?$/

#### 匹配示例:

	{{ site.url }}/something

#### 错误示例:

	https://google.com/some/file!!.html

***

## E-mail

	/^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/

#### 匹配示例:

	Meniny@qq.com

#### 错误示例:

	Meniny@qq.somethingtoolongohitssolong
