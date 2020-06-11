---
title: "JavaScript: 短信验证码"
category: "JavaScript"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
tags: [JavaScript, J2EE]
---
相信大家都遇到过手机验证码的功能，今天介绍一个简单的实现方式。

先做一个简单页面:

<div style="background-color: #EEEEE">
  <form action="#" method="get">
      <p>手机号:
          <input type="text" name="phonenumber" placeholder="手机号" />
          <input type="submit" value="获取验证码" />
      </p>
      <p>验证码:
          <input type="text" name="authentication" placeholder="验证码" />
          <input type="submit" value="确定" />
      </p>
  </form>
</div>

```js

// 发送按钮方法
$(document).on('click', "#getCheckId", function(e) {
  time(this);
  $.ajax({
    url: "checkPhoneNumber/sendCheckNumber",
    data: {
      "operatorTel": $("#operatorTel").val()
    },
    async: false,
    dataType: "text",
    success: function(res) {
      if (data == 'true') {
        alert("验证码发送成功");
      } else {
        alert("验证码发送失败");
      }
    },
    error: function(xhr) {
      alert("请求出错");
    }
  });
});

```

```js

// 倒计时方法
var wait = 60;
function time(obj) {
  if (wait == 0) {
    $("#getCheckId").removeAttr("disabled");
    $("#getCheckId").val("获取验证码");
    wait = 60;
  } else {
     $("#getCheckId").attr("disabled", "true");
     $("#getCheckId").val(wait + "秒后重试");
     wait--;
     setTimeout(function() {
       time(obj);
     }, 1000)
  }
}

```

```js

// 校验验证码方法
function check() {
  $.ajax({
    url: "checkPhoneNumber/check",
    data: {
      "checkNumber": $("#checkNumber").val();
      "operatorTel": $("#operatorTel").val()
    },
    async: false,
    dataType: "text",
    success: function(res) {
      if (data == 'true') {
        alert("验证码发送成功");
        time(this)
      } else {
        alert("验证码发送失败");
      }
    },
    error: function(xhr) {
      alert("请求出错");
    }
  });
}

```
