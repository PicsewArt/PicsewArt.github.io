---
title: "HTML5/CSS3: 模拟微信红包照片"
category: "HTML"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
tags: [HTML,HTML5,Blur,CSS3]
---
前几天微信红包照片着实火了一把，很多人也已经发现可以通过抓包获取到原始图片，而其背后的实现方式也引起了一些朋友的兴趣。

所以今天我们一起实现一个简单的微信红包照片效果。

首先，根据标题你已经知道我们要使用 HTML5 和 CSS3 来实现。那么新建一个 HTML5 文件吧。

```html

<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Blur">
		<meta name="keywords" content="Blur">
		<title>Blur</title>
		<script src="jquery-2.2.0.min.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>

	</body>
</html>

```


接下来，准备一张图片(img.jpg)，例如:

![image](/assets/images/posts/content/2016-01-28-17-00-00-HTML5_Canvas_Blur.jpg)

并在 body 部分加入一张图片。

```html
<body>
	<div id="blur-div">
		<img id="blur-image" src="img.jpg" alt="blur image">
	</div>
</body>

```


然后，准备一个 blur.css 文件:

```css

#blur-div {
	width: 350px;
	height: 389px;
	margin: 0 auto;
	position: relative;
}

#blur-image {
	width: 350px;
	height: 389px;
	margin: 0 auto;
	display: block;

	filter: blur(20px);
	-webkit-filter: blur(20px);
	-o-filter: blur(20px);
	-moz-filter: blur(20px);
	-ms-filter: blur(20px);

	position: absolute;
	left: 0px;
	top: 0px;
	z-index: 0;
}

```


在 HTML 中链接 CSS:

```html

	<link href="blur.css" rel="stylesheet" type="text/css"/>
</head>

```


看一下效果，已经可以显示一个模糊效果的图片了。紧接着要实现的，是那个不模糊的圆。我的思路是，在模糊的图片前面覆盖一张原始图片，通过剪切原始图片使其只保留一个圆形部分。

在前面的 blur-div 中补充一个 Canvas 画布:

```html

<div id="blur-div">
	<img id="blur-image" src="img.jpg" alt="blur image">
	<canvas id="canvas"></canvas>
</div>

```


为画布设置 CSS，为圆形部分添加一个阴影:

```css

#canvas {
	margin: 0 auto;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: 100;
	display: block;
	filter: drop-shadow(0px 0px 5px #E2E1E0);
	-webkit-filter: drop-shadow(0px 0px 5px #E2E1E0);
	-o-filter: drop-shadow(0px 0px 5px #E2E1E0);
	-moz-filter: drop-shadow(0px 0px 5px #E2E1E0);
	-ms-filter: drop-shadow(0px 0px 5px #E2E1E0);
}

```


现在，设置画布内容，开始剪切。我们新建一个 blur.js 文件:

```js

var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

canvas.width = 350
canvas.height = 389

function initCanvas() {
	draw(img, {x: 160, y: 280, r: 50})
}

function draw(image, clip) {
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.save()
	context.beginPath()
	context.arc(clip.x, clip.y, clip.r, 0, Math.PI * 2)
	context.clip()
	context.drawImage(image, 0, 0)
	context.restore()
}

var img = new Image()
img.src = "img.jpg"
img.onload = function () {
	initCanvas()
}

```


别忘了在 HTML 中加入这个 JS 文件:

```html

<script src="blur.js" charset="utf-8"></script>

```


现在，一个微信红包的模糊效果就实现了，关于适配和优化的部分就不多说了。

![image2](/assets/images/posts/content/2016-01-28-17-00-00-HTML5_Canvas_Blur2.jpg)





