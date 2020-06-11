---
category: "Switch"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0052.jpg'
title:  "Nintendo Switch 下载加速"
tags: [Nintendo, Switch, 任天堂, NS]
---
## 小白方法

#### 方法一

由于任天堂并未在中国设立服务器, 所以中国玩家难免会出现访问困难的情况, 此时我们将无线网络的DNS修改一下, 设置成韩国长安大学的DNS: `168.126.63.1` 或 `168.126.63.2`, 下载速度就会有很大的提升。

![](http://gameclassify.com/images/upload/image/20170617/20170617134211_81839.jpg)

#### 方法二

还有一个比较「玄学」的方法: 开启睡眠模式, 大概可以提升15%左右的下载速度。

![](http://gameclassify.com/images/upload/image/20170617/20170617134217_56450.jpg)

## 其他方法

申请免费的 GCP 服务器, 选东亚区, 建一个 ss 代理。纯复制粘贴就完事了。搜索关键词 `gXXgle cloud Platform teddysun 一键脚本`。

有现成的 ss 或者其他类型代理这步可以跳过。不过建议还是申请一个, 除非你有一年几千的专线, 质量比 gXXgle 线路还好。

这里引申一点, 如何判断自己的线路是否适合。用 iPad 抓包看了下,  主要涉及这几个域名

```sh
nintendo.net
nintendo.com
nintendowifi.net
```

可以都 ping 一下看大概的延迟。

#### 方法三

路由器挂 ss。搜索关键词 `路由器 ss`, 在路由层走代理, 想省心就用路由器。

优点: 其他设备不用设置, 可以直接提速。

缺点: 性能和灵活性不好。我这实测跑 200M 没问题, 性能差的路由可能 100M 就满载了。

#### 方法四

路由渣的, 也可以用 PC/Mac 挂 ss, 打开局域网共享。在 switch 网络设置里打开 HTTP 代理。搜索关键词 `ss 局域网共享`。

缺点: 需要电脑一直开机。

方法五:
----

路由器渣, 还没有电脑的, iPhone/iPad 总有吧？也可以局域网共享。搜索关键词 `surge 局域网共享`。

缺点: 需要 iPad 一直开机。

我的截图就是通过 iPad 局域网共享给 NS 的, 测速均 50M 以上, eshop 下载也是这个速

![](http://gameclassify.com/images/upload/image/20170617/20170617134409_60545.jpg)

![](http://gameclassify.com/images/upload/image/20170617/20170617134410_15105.jpg)
