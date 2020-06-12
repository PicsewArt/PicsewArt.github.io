---
title: "Ruby on OS X"
category: "RVM"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
tags: [Ruby,RVM]
---
最近用 Ruby 较多，主要介绍一些 rvm 相关内容吧。rvm 是 Ruby 版本管理工具。

### 安装 RVM

`$ curl -L https://get.rvm.io | bash -s stable`

期间可能需要输入管理员密码。

### 载入 RVM 环境

`$ source ~/.rvm/scripts/rvm`

### 检查是否安装成功

`$ rvm -v`

如果输出版本信息则表示安装成功，当然你也可以尝试其他 rvm 指令来测试

### 用 RVM 安装 Ruby

`$ rvm install 2.2.2`

### 设置为默认版本

`$ rvm use 2.2.2 --default`

### 查看已安装的 Ruby 版本

`$ rvm list`

### 查看可安装的 Ruby 版本

`$ rvm list known`

### 卸载一个已安装的 Ruby 版本

`$ rvm remove 2.2.2`

### 卸载 RVM

`$ rvm implode`

***

对于 gem:

* `$ gem source` 查看已有源

* `$ gem sources -a https://ruby.taobao.org` 把源切换至淘宝镜像服务器


