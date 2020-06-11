---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0033.jpg'
title:  "Linux 配置 IP"
tags: [UNIX,Linux,IP]
summary: "Linux 配置 IP"
---
首先需要找到配置文件，以 `eth0` 为例，用 `vi` 打开它:

`vi /etc/sysconfig/network-script/ifcfg-eth0`

将其内容改为如下格式:

```sh
DEVICE=eth0
HWADDR=00:0C:29:A9:66:DB
TYPE=Ethernet
UUID=37b4ade3-c11e-43b0-95e1-b2fcd2c4d8c9
ONBOOT=yes
NM_CONTROLLED=yes
BOOTPROTO=static
IPADDR=192.168.1.2
NETMASK=255.255.255.0
GATEWAY=192.168.1.1
DNS1=61.139.2.69
DNS2=202.98.96.68
```

下面我们来了解一下它们都有什么作用:

<table border="1" class="table table-bordered table-striped table-condensed">
<tr><th>DEVICE</th><th>设备名称</th></tr>
<tr><th>HWADDR</th><th>MAC 地址</th></tr>
<tr><th>TYPE</th><th>网络类型(Ethernet: 以太网)</th></tr>
<tr><th>UUID</th><th>UUID 识别码</th></tr>
<tr><th>ONBOOT</th><th>是否在系统启动时启动设备</th></tr>
<tr><th>NM_CONTROLLED</th><th>是否为network management服务影响</th></tr>
<tr><th>BOOTPROTO</th><th>如果设置静态IP则填写 none 或static，如果要自动获取(DHCP)则填写 dhcp</th></tr>
<tr><th>IPADDR</th><th>IP 地址</th></tr>
<tr><th>NETMASK</th><th>子网掩码</th></tr>
<tr><th>GATEWAY</th><th>网关</th></tr>
<tr><th>DNS1</th><th>DNS</th></tr>
<tr><th>DNS2</th><th>DNS</th></tr>
</table>
