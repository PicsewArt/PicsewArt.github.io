---
title: "HTML: 自动跳转"
category: "HTML"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0047.jpg'
tags: [HTML]
---
常见的几种自动跳转页面的方式, 以 3 秒后跳转到本博客为例:

### JavaScript setTimeout

```html
<script type="text/javascript">
    // 3 秒后跳转到指定的页面
    setTimeout(window.location.href = '{{ site.url }}', 3);
</script>
```

### HTML meta 标签

```html
<meta http-equiv="refresh" content="3;url={{ site.url }}/" />
```

### JavaScript

```html
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>页面自动跳转</title>
</head>

<body>
    <script type="text/javascript">
        var t = 3; //设定跳转的时间
        setInterval("jump()", 1000); //启动1秒定时
        function jump() {
            if (t == 0) {
                location = "{{ site.url }}"; //#设定跳转的链接地址
            }
            document.getElementById('show').innerHTML = "" + t + "秒后将跳转到我的博客"; // 显示倒计时
            t--; // 计数器递减
        }
    </script>
    <span id="show"></span>
    <br/>
    <hr>
    <a href="javascript: jump();">点这里手动跳转</a>
</body>

</html>

```
