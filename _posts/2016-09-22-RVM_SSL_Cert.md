---
title: "SSL: certificate verify failed"
category: "RVM"
cave: true
hero:
  format: 'jpeg'
  url: 'post/rvm.jpg'
tags: [RVM, SSL, OpenSSL]
---
今天在虚拟机里安装 CocoaPods 的时候，偶然遇到一个问题:

```sh
$ gem install cocoapods
ERROR:  Could not find a valid gem 'cocoapods' (>= 0), here is why:
          Unable to download data from https://ruby.taobao.org/ - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://ruby.taobao.org/specs.4.8.gz)
```

想起来刚在虚拟机里安装了 RVM，那既然说是 certificate 问题的话，而且我们知道 OS X 默认的 OpenSSL 版本比较低，RVM 又安装了新的版本，甚至 RVM 还允许指定版本。

所以:

`rvm osx-ssl-certs update all`

成功解决。

(参见 [RVM.io](https://rvm.io/support/fixing-broken-ssl-certificates))

但需要注意的是，如果你在使用 Ruby 2.2.x 的版本，你有可能需要重新安装这个版本才能解决，例如:

`rvm reinstall 2.2.2 --disable-binary`
