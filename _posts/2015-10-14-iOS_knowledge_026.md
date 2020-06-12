---
title: "iOS 面试题: GET 和 POST 有什么区别"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0003.jpg'
---
最近遇到和看到的一些面试题。

#### http的post和get啥区别?

* GET请求的数据会附在URL之后(就是把数据放置在HTTP协议头中),以?分割URL和传输数据,参数之间以&相连,如: `login.action?name=hyddd&password=idontknow&verify=%E4%BD%A0%E5%A5%BD`。如果数据是英文字母/数字,原样发送,如果是空格,转换为+,如果是中文/其他字符,则直接把字符串用BASE64加密,得出如: `%E4%BD%A0%E5%A5%BD`,其中`％XX`中的`XX`为该符号以16进制表示的ASCII。POST把提交的数据则放置在是HTTP包的包体中。
* GET是通过URL提交数据,那么GET可提交的数据量就跟URL的长度有直接关系了。而实际上,URL不存在参数上限的问题,HTTP协议规范没有对URL长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器,如Netscape、FireFox等,理论上没有长度限制,其限制取决于操作系统的支持。POST理论上是没有大小限制的,HTTP协议规范也没有进行大小限制,说“POST数据量存在80K/100K的大小限制”是不准确的,POST数据是没有限制的,起限制作用的是服务器的处理程序的处理能力。
* POST的安全性要比GET的安全性高。注意: 这里所说的安全性和上面GET提到的“安全”不是同个概念。上面“安全”的含义仅仅是不作数据修改,而这里安全的含义是真正的Security的含义,比如: 通过GET提交数据,用户名和密码将明文出现在URL上,因为(1)登录页面有可能被浏览器缓存,(2)其他人查看浏览器的历史纪录,那么别人就可以拿到你的账号和密码了,除此之外,使用GET提交数据还可能会造成`Cross-site request forgery`攻击。

总结一下,Get是向服务器发索取数据的一种请求,而Post是向服务器提交数据的一种请求,在FORM(表单)中,Method默认为"GET",实质上,GET和POST只是发送机制不同,并不是一个取一个发.
