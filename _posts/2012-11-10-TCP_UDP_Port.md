---
title: "TCP/UDP 常见端口 对照表"
category: "UNIX"
copy: true
tags: [TCP, UDP]
cave: true
hero:
  format: 'jpeg'
  url: 'post/unix.jpg'
excerpt: "TCP/UDP 常见端口 对照表"
---
> 下面的表格中列举了包括在红帽企业 Linux 中的服务、守护进程、和程序所使用的最常见的通信端口。该列表还可以在 /etc/services 文件中找到。要查看由互联网号码分派局 (IANA) 制定的“著名的已注册动态端口”官方列表，请参考以下 URL：
>
> [https://www.iana.org/assignments/port-numbers](https://www.iana.org/assignments/port-numbers)
>
> “层”是指服务或协议在交通层上使用 TCP 还是 UDP。若没有列举，这个服务或协议就两者都使用。

<div>
<h2>著名端口</h2>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>1</code></td><td><code>tcpmux</code></td>
<td>TCP 端口服务多路复用</td>
</tr>
<tr><td><code>5</code></td><td><code>rje</code></td>
<td>远程作业入口</td>
</tr>
<tr><td><code>7</code></td><td><code>echo</code></td>
<td>Echo 服务</td>
</tr>
<tr><td><code>9</code></td><td><code>discard</code></td>
<td>用于连接测试的空服务</td>
</tr>
<tr><td><code>11</code></td><td><code>systat</code></td>
<td>用于列举连接了的端口的系统状态</td>
</tr>
<tr><td><code>13</code></td><td><code>daytime</code></td>
<td>给请求主机发送日期和时间</td>
</tr>
<tr><td><code>17</code></td><td><code>qotd</code></td>
<td>给连接了的主机发送每日格言</td>
</tr>
<tr><td><code>18</code></td><td><code>msp</code></td>
<td>消息发送协议</td>
</tr>
<tr><td><code>19</code></td><td><code>chargen</code></td>
<td>字符生成服务；发送无止境的字符流</td>
</tr>
<tr><td><code>20</code></td><td><code>ftp-data</code></td>
<td>FTP 数据端口</td>
</tr>
<tr><td><code>21</code></td><td><code>ftp</code></td>
<td>文件传输协议 (FTP) 端口；有时被文件服务协议 (FSP) 使用</td>
</tr>
<tr><td><code>22</code></td><td><code>ssh</code></td>
<td>安全 Shell (SSH) 服务</td>
</tr>
<tr><td><code>23</code></td><td><code>telnet</code></td>
<td>Telnet 服务</td>
</tr>
<tr><td><code>25</code></td><td><code>smtp</code></td>
<td>简单邮件传输协议 (SMTP) </td>
</tr>
<tr><td><code>37</code></td><td><code>time</code></td>
<td>时间协议</td>
</tr>
<tr><td><code>39</code></td><td><code>rlp</code></td>
<td>资源定位协议</td>
</tr>
<tr><td><code>42</code></td><td><code>nameserver</code></td>
<td>互联网名称服务</td>
</tr>
<tr><td><code>43</code></td><td><code>nicname</code></td>
<td>WHOIS 目录服务</td>
</tr>
<tr><td><code>49</code></td><td><code>tacacs</code></td>
<td>用于基于 TCP/IP 验证和访问的终端访问控制器访问控制系统</td>
</tr>
<tr><td><code>50</code></td><td><code>re-mail-ck</code></td>
<td>远程邮件检查协议</td>
</tr>
<tr><td><code>53</code></td><td><code>domain</code></td>
<td>域名服务 (如 BIND) </td>
</tr>
<tr><td><code>63</code></td><td><code>whois++</code></td>
<td>WHOIS++，被扩展了的 WHOIS 服务</td>
</tr>
<tr><td><code>67</code></td><td><code>bootps</code></td>
<td>引导协议 (BOOTP) 服务；还被动态主机配置协议 (DHCP) 服务使用</td>
</tr>
<tr><td><code>68</code></td><td><code>bootpc</code></td>
<td>Bootstrap (BOOTP) 客户；还被动态主机配置协议 (DHCP) 客户使用</td>
</tr>
<tr><td><code>69</code></td><td><code>tftp</code></td>
<td>小文件传输协议 (TFTP) </td>
</tr>
<tr><td><code>70</code></td><td><code>gopher</code></td>
<td>Gopher 互联网文档搜寻和检索</td>
</tr>
<tr><td><code>71</code></td><td><code>netrjs-1</code></td>
<td>远程作业服务</td>
</tr>
<tr><td><code>72</code></td><td><code>netrjs-2</code></td>
<td>远程作业服务</td>
</tr>
<tr><td><code>73</code></td><td><code>netrjs-3</code></td>
<td>远程作业服务</td>
</tr>
<tr><td><code>73</code></td><td><code>netrjs-4</code></td>
<td>远程作业服务</td>
</tr>
<tr><td><code>79</code></td><td><code>finger</code></td>
<td>用于用户联系信息的 Finger 服务</td>
</tr>
<tr><td><code>80</code></td><td><code>http</code></td>
<td>用于万维网 (WWW) 服务的超文本传输协议 (HTTP) </td>
</tr>
<tr><td><code>88</code></td><td><code>kerberos</code></td>
<td>Kerberos 网络验证系统</td>
</tr>
<tr><td><code>95</code></td><td><code>supdup</code></td>
<td>Telnet 协议扩展</td>
</tr>
<tr><td><code>101</code></td><td><code>hostname</code></td>
<td>SRI-NIC 机器上的主机名服务</td>
</tr>
<tr><td><code>102</code></td><td><code>iso-tsap</code></td>
<td>ISO 开发环境 (ISODE) 网络应用</td>
</tr>
<tr><td><code>105</code></td><td><code>csnet-ns</code></td>
<td>邮箱名称服务器；也被 CSO 名称服务器使用</td>
</tr>
<tr><td><code>107</code></td><td><code>rtelnet</code></td>
<td>远程 Telnet</td>
</tr>
<tr><td><code>109</code></td><td><code>pop2</code></td>
<td>邮局协议版本2</td>
</tr>
<tr><td><code>110</code></td><td><code>pop3</code></td>
<td>邮局协议版本3</td>
</tr>
<tr><td><code>111</code></td><td><code>sunrpc</code></td>
<td>用于远程命令执行的远程过程调用 (RPC) 协议，被网络文件系统 (NFS) 使用</td>
</tr>
<tr><td><code>113</code></td><td><code>auth</code></td>
<td>验证和身份识别协议</td>
</tr>
<tr><td><code>115</code></td><td><code>sftp</code></td>
<td>安全文件传输协议 (SFTP) 服务</td>
</tr>
<tr><td><code>117</code></td><td><code>uucp-path</code></td>
<td>Unix 到 Unix 复制协议 (UUCP) 路径服务</td>
</tr>
<tr><td><code>119</code></td><td><code>nntp</code></td>
<td>用于 USENET 讨论系统的网络新闻传输协议 (NNTP) </td>
</tr>
<tr><td><code>123</code></td><td><code>ntp</code></td>
<td>网络时间协议 (NTP) </td>
</tr>
<tr><td><code>137</code></td><td><code>netbios-ns</code></td>
<td>在红帽企业 Linux 中被 Samba 使用的 NETBIOS 名称服务</td>
</tr>
<tr><td><code>138</code></td><td><code>netbios-dgm</code></td>
<td>在红帽企业 Linux 中被 Samba 使用的 NETBIOS 数据报服务</td>
</tr>
<tr><td><code>139</code></td><td><code>netbios-ssn</code></td>
<td>在红帽企业 Linux 中被 Samba 使用的NET BIOS 会话服务</td>
</tr>
<tr><td><code>143</code></td><td><code>imap</code></td>
<td>互联网消息存取协议 (IMAP) </td>
</tr>
<tr><td><code>161</code></td><td><code>snmp</code></td>
<td>简单网络管理协议 (SNMP) </td>
</tr>
<tr><td><code>162</code></td><td><code>snmptrap</code></td>
<td>SNMP 的陷阱</td>
</tr>
<tr><td><code>163</code></td><td><code>cmip-man</code></td>
<td>通用管理信息协议 (CMIP) </td>
</tr>
<tr><td><code>164</code></td><td><code>cmip-agent</code></td>
<td>通用管理信息协议 (CMIP) </td>
</tr>
<tr><td><code>174</code></td><td><code>mailq</code></td>
<td>MAILQ</td>
</tr>
<tr><td><code>177</code></td><td><code>xdmcp</code></td>
<td>X 显示管理器控制协议</td>
</tr>
<tr><td><code>178</code></td><td><code>nextstep</code></td>
<td>NeXTStep 窗口服务器</td>
</tr>
<tr><td><code>179</code></td><td><code>bgp</code></td>
<td>边界网络协议</td>
</tr>
<tr><td><code>191</code></td><td><code>prospero</code></td>
<td>Cliffod Neuman 的 Prospero 服务</td>
</tr>
<tr><td><code>194</code></td><td><code>irc</code></td>
<td>互联网中继聊天 (IRC) </td>
</tr>
<tr><td><code>199</code></td><td><code>smux</code></td>
<td>SNMP UNIX 多路复用</td>
</tr>
<tr><td><code>201</code></td><td><code>at-rtmp</code></td>
<td>AppleTalk 选路</td>
</tr>
<tr><td><code>202</code></td><td><code>at-nbp</code></td>
<td>AppleTalk 名称绑定</td>
</tr>
<tr><td><code>204</code></td><td><code>at-echo</code></td>
<td>AppleTalk echo 服务</td>
</tr>
<tr><td><code>206</code></td><td><code>at-zis</code></td>
<td>AppleTalk 区块信息</td>
</tr>
<tr><td><code>209</code></td><td><code>qmtp</code></td>
<td>快速邮件传输协议 (QMTP) </td>
</tr>
<tr><td><code>210</code></td><td><code>z39.50</code></td>
<td>NISO Z39.50 数据库</td>
</tr>
<tr><td><code>213</code></td><td><code>ipx</code></td>
<td>互联网络分组交换协议 (IPX) ，被 Novell Netware 环境常用的数据报协议</td>
</tr>
<tr><td><code>220</code></td><td><code>imap3</code></td>
<td>互联网消息存取协议版本3</td>
</tr>
<tr><td><code>245</code></td><td><code>link</code></td>
<td>LINK</td>
</tr>
<tr><td><code>347</code></td><td><code>fatserv</code></td>
<td>Fatmen 服务器</td>
</tr>
<tr><td><code>363</code></td><td><code>rsvp_tunnel</code></td>
<td>RSVP 隧道</td>
</tr>
<tr><td><code>369</code></td><td><code>rpc2portmap</code></td>
<td>Coda 文件系统端口映射器</td>
</tr>
<tr><td><code>370</code></td><td><code>codaauth2</code></td>
<td>Coda 文件系统验证服务</td>
</tr>
<tr><td><code>372</code></td><td><code>ulistproc</code></td>
<td>UNIX Listserv</td>
</tr>
<tr><td><code>389</code></td><td><code>ldap</code></td>
<td>轻型目录存取协议 (LDAP) </td>
</tr>
<tr><td><code>427</code></td><td><code>svrloc</code></td>
<td>服务位置协议 (SLP) </td>
</tr>
<tr><td><code>434</code></td><td><code>mobileip-agent</code></td>
<td>可移互联网协议 (IP) 代理</td>
</tr>
<tr><td><code>435</code></td><td><code>mobilip-mn</code></td>
<td>可移互联网协议 (IP) 管理器</td>
</tr>
<tr><td><code>443</code></td><td><code>https</code></td>
<td>安全超文本传输协议 (HTTP) </td>
</tr>
<tr><td><code>444</code></td><td><code>snpp</code></td>
<td>小型网络分页协议</td>
</tr>
<tr><td><code>445</code></td><td><code>microsoft-ds</code></td>
<td>通过 TCP/IP 的服务器消息块 (SMB) </td>
</tr>
<tr><td><code>464</code></td><td><code>kpasswd</code></td>
<td>Kerberos 口令和钥匙改换服务</td>
</tr>
<tr><td><code>468</code></td><td><code>photuris</code></td>
<td>Photuris 会话钥匙管理协议</td>
</tr>
<tr><td><code>487</code></td><td><code>saft</code></td>
<td>简单不对称文件传输 (SAFT) 协议</td>
</tr>
<tr><td><code>488</code></td><td><code>gss-http</code></td>
<td>用于 HTTP 的通用安全服务 (GSS) </td>
</tr>
<tr><td><code>496</code></td><td><code>pim-rp-disc</code></td>
<td>用于协议独立的多址传播 (PIM) 服务的会合点发现 (RP-DISC) </td>
</tr>
<tr><td><code>500</code></td><td><code>isakmp</code></td>
<td>互联网安全关联和钥匙管理协议 (ISAKMP) </td>
</tr>
<tr><td><code>535</code></td><td><code>iiop</code></td>
<td>互联网内部对象请求代理协议 (IIOP) </td>
</tr>
<tr><td><code>538</code></td><td><code>gdomap</code></td>
<td>GNUstep 分布式对象映射器 (GDOMAP) </td>
</tr>
<tr><td><code>546</code></td><td><code>dhcpv6-client</code></td>
<td>动态主机配置协议 (DHCP) 版本6客户</td>
</tr>
<tr><td><code>547</code></td><td><code>dhcpv6-server</code></td>
<td>动态主机配置协议 (DHCP) 版本6服务</td>
</tr>
<tr><td><code>554</code></td><td><code>rtsp</code></td>
<td>实时流播协议 (RTSP) </td>
</tr>
<tr><td><code>563</code></td><td><code>nntps</code></td>
<td>通过安全套接字层的网络新闻传输协议 (NNTPS) </td>
</tr>
<tr><td><code>565</code></td><td><code>whoami</code></td>
<td>whoami</td>
</tr>
<tr><td><code>587</code></td><td><code>submission</code></td>
<td>邮件消息提交代理 (MSA) </td>
</tr>
<tr><td><code>610</code></td><td><code>npmp-local</code></td>
<td>网络外设管理协议 (NPMP) 本地 / 分布式排队系统 (DQS) </td>
</tr>
<tr><td><code>611</code></td><td><code>npmp-gui</code></td>
<td>网络外设管理协议 (NPMP) GUI / 分布式排队系统 (DQS) </td>
</tr>
<tr><td><code>612</code></td><td><code>hmmp-ind</code></td>
<td>HMMP 指示 / DQS</td>
</tr>
<tr><td><code>631</code></td><td><code>ipp</code></td>
<td>互联网打印协议 (IPP) </td>
</tr>
<tr><td><code>636</code></td><td><code>ldaps</code></td>
<td>通过安全套接字层的轻型目录访问协议 (LDAPS) </td>
</tr>
<tr><td><code>674</code></td><td><code>acap</code></td>
<td>应用程序配置存取协议 (ACAP) </td>
</tr>
<tr><td><code>694</code></td><td><code>ha-cluster</code></td>
<td>用于带有高可用性的群集的心跳服务</td>
</tr>
<tr><td><code>749</code></td><td><code>kerberos-adm</code></td>
<td>Kerberos 版本5 (v5) 的“kadmin”数据库管理</td>
</tr>
<tr><td><code>750</code></td><td><code>kerberos-iv</code></td>
<td>Kerberos 版本4 (v4) 服务</td>
</tr>
<tr><td><code>765</code></td><td><code>webster</code></td>
<td>网络词典</td>
</tr>
<tr><td><code>767</code></td><td><code>phonebook</code></td>
<td>网络电话簿</td>
</tr>
<tr><td><code>873</code></td><td><code>rsync</code></td>
<td>rsync 文件传输服务</td>
</tr>
<tr><td><code>992</code></td><td><code>telnets</code></td>
<td>通过安全套接字层的 Telnet (TelnetS) </td>
</tr>
<tr><td><code>993</code></td><td><code>imaps</code></td>
<td>通过安全套接字层的互联网消息存取协议 (IMAPS) </td>
</tr>
<tr><td><code>994</code></td><td><code>ircs</code></td>
<td>通过安全套接字层的互联网中继聊天 (IRCS) </td>
</tr>
<tr><td><code>995</code></td><td><code>pop3s</code></td>
<td>通过安全套接字层的邮局协议版本3 (POPS3) </td>
</tr>
</table>
</div>
<br/>
<div>
<h2>UNIX 特有的端口</h2>
<p>以下端口是 UNIX 特有的，涉及了从电子邮件到验证不等的服务。在方括号内的名称 (如 [service]) 是服务的守护进程名称或它的常用别名。</p>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>512/tcp</code></td><td><code>exec</code></td><td>用于对远程执行的进程进行验证</td>
</tr>
<tr><td><code>512/udp</code></td>
<td>biff [comsat]</td>
<td>异步邮件客户 (biff) 和服务 (comsat) </td>
</tr>
<tr><td><code>513/tcp</code></td><td><code>login</code></td><td>远程登录 (rlogin) </td>
</tr>
<tr><td><code>513/udp</code></td>
<td>who [whod]</td>
<td>登录的用户列表</td>
</tr>
<tr><td><code>514/tcp</code></td>
<td>shell [cmd]</td>
<td>不必登录的远程 shell (rshell) 和远程复制 (rcp) </td>
</tr>
<tr><td><code>514/udp</code></td><td><code>syslog</code></td><td>UNIX 系统日志服务</td>
</tr>
<tr><td><code>515</code></td><td><code>printer [spooler]</code></td>
<td>打印机 (lpr) 假脱机</td>
</tr>
<tr><td><code>517/udp</code></td><td><code>talk</code></td><td>远程对话服务和客户</td>
</tr>
<tr><td><code>518/udp</code></td><td><code>ntalk</code></td><td>网络交谈 (ntalk) ，远程对话服务和客户</td>
</tr>
<tr><td><code>519</code></td><td><code>utime [unixtime]</code></td>
<td>UNIX 时间协议 (utime) </td>
</tr>
<tr><td><code>520/tcp</code></td><td><code>efs</code></td><td>扩展文件名服务器 (EFS) </td>
</tr>
<tr><td><code>520/udp</code></td>
<td>router [route, routed]</td>
<td>选路信息协议 (RIP) </td>
</tr>
<tr><td><code>521</code></td><td><code>ripng</code></td>
<td>用于互联网协议版本6 (IPv6) 的选路信息协议</td>
</tr>
<tr><td><code>525</code></td><td><code>timed [timeserver]</code></td>
<td>时间守护进程 (timed) </td>
</tr>
<tr><td><code>526/tcp</code></td>
<td>tempo [newdate]</td>
<td>Tempo</td>
</tr>
<tr><td><code>530/tcp</code></td>
<td>courier [rpc]</td>
<td>Courier 远程过程调用 (RPC) 协议</td>
</tr>
<tr><td><code>531/tcp</code></td>
<td>conference [chat]</td>
<td>互联网中继聊天</td>
</tr>
<tr><td><code>532</code></td><td><code>netnews</code></td>
<td>Netnews</td>
</tr>
<tr><td><code>533/udp</code></td><td><code>netwall</code></td><td>用于紧急广播的 Netwall</td>
</tr>
<tr><td><code>540/tcp</code></td>
<td>uucp [uucpd]</td>
<td>Unix 到 Unix 复制服务</td>
</tr>
<tr><td><code>543/tcp</code></td><td><code>klogin</code></td><td>Kerberos 版本5 (v5) 远程登录</td>
</tr>
<tr><td><code>544/tcp</code></td><td><code>kshell</code></td><td>Kerberos 版本5 (v5) 远程 shell</td>
</tr>
<tr><td><code>548</code></td><td><code>afpovertcp</code></td>
<td>通过传输控制协议 (TCP) 的 Appletalk 文件编制协议 (AFP) </td>
</tr>
<tr><td><code>556</code></td><td><code>remotefs [rfs_server, rfs]</code></td>
<td>Brunhoff 的远程文件系统 (RFS) </td>
</tr>
</table>
</div>
<br/>
<div>
<h2>注册的端口</h2>
<p>列举了由网络和软件社区向 IANA 提交的要在端口号码列表中正式注册的端口。</p>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>1080</code></td><td><code>socks</code></td>
<td>SOCKS 网络应用程序代理服务</td>
</tr>
<tr><td><code>1236</code></td><td><code>bvcontrol [rmtcfg]</code></td>
<td>Garcilis Packeten 远程配置服务器</td>
</tr>
<tr><td><code>1300</code></td><td><code>h323hostcallsc</code></td>
<td>H.323 电话会议主机电话安全</td>
</tr>
<tr><td><code>1433</code></td><td><code>ms-sql-s</code></td>
<td>Microsoft SQL 服务器</td>
</tr>
<tr><td><code>1434</code></td><td><code>ms-sql-m</code></td>
<td>Microsoft SQL 监视器</td>
</tr>
<tr><td><code>1494</code></td><td><code>ica</code></td>
<td>Citrix ICA 客户</td>
</tr>
<tr><td><code>1512</code></td><td><code>wins</code></td>
<td>Microsoft Windows 互联网名称服务器</td>
</tr>
<tr><td><code>1524</code></td><td><code>ingreslock</code></td>
<td>Ingres 数据库管理系统 (DBMS) 锁定服务</td>
</tr>
<tr><td><code>1525</code></td><td><code>prospero-np</code></td>
<td>无特权的 Prospero</td>
</tr>
<tr><td><code>1645</code></td><td><code>datametrics [old-radius]</code></td>
<td>Datametrics / 从前的 radius 项目</td>
</tr>
<tr><td><code>1646</code></td><td><code>sa-msg-port [oldradacct]</code></td>
<td>sa-msg-port / 从前的 radacct 项目</td>
</tr>
<tr><td><code>1649</code></td><td><code>kermit</code></td>
<td>Kermit 文件传输和管理服务</td>
</tr>
<tr><td><code>1701</code></td><td><code>l2tp [l2f]</code></td>
<td>第2层隧道服务 (LT2P)  / 第2层转发 (L2F) </td>
</tr>
<tr><td><code>1718</code></td><td><code>h323gatedisc</code></td>
<td>H.323 电讯守门装置发现机制</td>
</tr>
<tr><td><code>1719</code></td><td><code>h323gatestat</code></td>
<td>H.323 电讯守门装置状态</td>
</tr>
<tr><td><code>1720</code></td><td><code>h323hostcall</code></td>
<td>H.323 电讯主持电话设置</td>
</tr>
<tr><td><code>1758</code></td><td><code>tftp-mcast</code></td>
<td>小文件 FTP 组播</td>
</tr>
<tr><td><code>1759</code></td><td><code>mtftp</code></td>
<td>组播小文件 FTP (MTFTP) </td>
</tr>
<tr><td><code>1789</code></td><td><code>hello</code></td>
<td>Hello 路由器通信端口</td>
</tr>
<tr><td><code>1812</code></td><td><code>radius</code></td>
<td>Radius 拨号验证和记帐服务</td>
</tr>
<tr><td><code>1813</code></td><td><code>radius-acct</code></td>
<td>Radius 记帐</td>
</tr>
<tr><td><code>1911</code></td><td><code>mtp</code></td>
<td>Starlight 网络多媒体传输协议 (MTP) </td>
</tr>
<tr><td><code>1985</code></td><td><code>hsrp</code></td>
<td>Cisco 热备用路由器协议</td>
</tr>
<tr><td><code>1986</code></td><td><code>licensedaemon</code></td>
<td>Cisco 许可管理守护进程</td>
</tr>
<tr><td><code>1997</code></td><td><code>gdp-port</code></td>
<td>Cisco 网关发现协议 (GDP) </td>
</tr>
<tr><td><code>2049</code></td><td><code>nfs [nfsd]</code></td>
<td>网络文件系统 (NFS) </td>
</tr>
<tr><td><code>2102</code></td><td><code>zephyr-srv</code></td>
<td>Zephyr 通知传输和发送服务器</td>
</tr>
<tr><td><code>2103</code></td><td><code>zephyr-clt</code></td>
<td>Zephyr serv-hm 连接</td>
</tr>
<tr><td><code>2104</code></td><td><code>zephyr-hm</code></td>
<td>Zephyr 主机管理器</td>
</tr>
<tr><td><code>2401</code></td><td><code>cvspserver</code></td>
<td>并行版本系统 (CVS) 客户 / 服务器操作</td>
</tr>
<tr><td><code>2430/tcp</code></td><td><code>venus</code></td><td>用于 Coda 文件系统 (codacon 端口) 的 Venus 缓存管理器</td>
</tr>
<tr><td><code>2430/udp</code></td><td><code>venus</code></td><td>用于 Coda 文件系统 (callback/wbc interface 界面) 的 Venus 缓存管理器</td>
</tr>
<tr><td><code>2431/tcp</code></td>
<td>venus-se</td>
<td>Venus 传输控制协议 (TCP) 的副作用</td>
</tr>
<tr><td><code>2431/udp</code></td>
<td>venus-se</td>
<td>Venus 用户数据报协议 (UDP) 的副作用</td>
</tr>
<tr><td><code>2432/udp</code></td><td><code>codasrv</code></td><td>Coda 文件系统服务器端口</td>
</tr>
<tr><td><code>2433/tcp</code></td>
<td>codasrv-se</td>
<td>Coda 文件系统 TCP 副作用</td>
</tr>
<tr><td><code>2433/udp</code></td>
<td>codasrv-se</td>
<td>Coda 文件系统 UDP SFTP 副作用</td>
</tr>
<tr><td><code>2600</code></td><td><code>hpstgmgr [zebrasrv]</code></td>
<td>HPSTGMGR；Zebra 选路</td>
</tr>
<tr><td><code>2601</code></td><td><code>discp-client [zebra]</code></td>
<td>discp 客户；Zebra 集成的 shell</td>
</tr>
<tr><td><code>2602</code></td><td><code>discp-server [ripd]</code></td>
<td>discp 服务器；选路信息协议守护进程 (ripd) </td>
</tr>
<tr><td><code>2603</code></td><td><code>servicemeter [ripngd]</code></td>
<td>服务计量；用于 IPv6 的 RIP 守护进程</td>
</tr>
<tr><td><code>2604</code></td><td><code>nsc-ccs [ospfd]</code></td>
<td>NSC CCS；开放式短路径优先守护进程 (ospfd) </td>
</tr>
<tr><td><code>2605</code></td><td><code>nsc-posa</code></td>
<td>NSC POSA；边界网络协议守护进程 (bgpd) </td>
</tr>
<tr><td><code>2606</code></td><td><code>netmon [ospf6d]</code></td>
<td>Dell Netmon；用于 IPv6 的 OSPF 守护进程 (ospf6d) </td>
</tr>
<tr><td><code>2809</code></td><td><code>corbaloc</code></td>
<td>公共对象请求代理体系 (CORBA) 命名服务定位器</td>
</tr>
<tr><td><code>3130</code></td><td><code>icpv2</code></td>
<td>互联网缓存协议版本2 (v2) ；被 Squid 代理缓存服务器使用</td>
</tr>
<tr><td><code>3306</code></td><td><code>mysql</code></td>
<td>MySQL 数据库服务</td>
</tr>
<tr><td><code>3346</code></td><td><code>trnsprntproxy</code></td>
<td>Trnsprnt 代理</td>
</tr>
<tr><td><code>4011</code></td><td><code>pxe</code></td>
<td>执行前环境 (PXE) 服务</td>
</tr>
<tr><td><code>4321</code></td><td><code>rwhois</code></td>
<td>远程 Whois (rwhois) 服务</td>
</tr>
<tr><td><code>4444</code></td><td><code>krb524</code></td>
<td>Kerberos 版本5 (v5) 到版本4 (v4) 门票转换器</td>
</tr>
<tr><td><code>5002</code></td><td><code>rfe</code></td>
<td>无射频以太网 (RFE) 音频广播系统</td>
</tr>
<tr><td><code>5308</code></td><td><code>cfengine</code></td>
<td>配置引擎 (Cfengine) </td>
</tr>
<tr><td><code>5999</code></td><td><code>cvsup [CVSup]</code></td>
<td>CVSup 文件传输和更新工具</td>
</tr>
<tr><td><code>6000</code></td><td><code>x11 [X]</code></td>
<td>X 窗口系统服务</td>
</tr>
<tr><td><code>7000</code></td><td><code>afs3-fileserver</code></td>
<td>Andrew 文件系统 (AFS) 文件服务器</td>
</tr>
<tr><td><code>7001</code></td><td><code>afs3-callback</code></td>
<td>用于给缓存管理器回电的 AFS 端口</td>
</tr>
<tr><td><code>7002</code></td><td><code>afs3-prserver</code></td>
<td>AFS 用户和组群数据库</td>
</tr>
<tr><td><code>7003</code></td><td><code>afs3-vlserver</code></td>
<td>AFS 文件卷位置数据库</td>
</tr>
<tr><td><code>7004</code></td><td><code>afs3-kaserver</code></td>
<td>AFS Kerberos 验证服务</td>
</tr>
<tr><td><code>7005</code></td><td><code>afs3-volser</code></td>
<td>AFS 文件卷管理服务器</td>
</tr>
<tr><td><code>7006</code></td><td><code>afs3-errors</code></td>
<td>AFS 错误解释服务</td>
</tr>
<tr><td><code>7007</code></td><td><code>afs3-bos</code></td>
<td>AFS 基本监查进程</td>
</tr>
<tr><td><code>7008</code></td><td><code>afs3-update</code></td>
<td>AFS 服务器到服务器更新器</td>
</tr>
<tr><td><code>7009</code></td><td><code>afs3-rmtsys</code></td>
<td>AFS 远程缓存管理器服务</td>
</tr>
<tr><td><code>9876</code></td><td><code>sd</code></td>
<td>会话指引器</td>
</tr>
<tr><td><code>10080</code></td><td><code>amanda</code></td>
<td>高级 Maryland 自动网络磁盘归档器 (Amanda) 备份服务</td>
</tr>
<tr><td><code>11371</code></td><td><code>pgpkeyserver</code></td>
<td>良好隐私 (PGP)  / GNU 隐私卫士 (GPG) 公钥服务器</td>
</tr>
<tr><td><code>11720</code></td><td><code>h323callsigalt</code></td>
<td>H.323 调用信号交替</td>
</tr>
<tr><td><code>13720</code></td><td><code>bprd</code></td>
<td>Veritas NetBackup 请求守护进程 (bprd) </td>
</tr>
<tr><td><code>13721</code></td><td><code>bpdbm</code></td>
<td>Veritas NetBackup 数据库管理器 (bpdbm) </td>
</tr>
<tr><td><code>13722</code></td><td><code>bpjava-msvc</code></td>
<td>Veritas NetBackup Java / Microsoft Visual C++ (MSVC) 协议</td>
</tr>
<tr><td><code>13724</code></td><td><code>vnetd</code></td>
<td>Veritas 网络工具</td>
</tr>
<tr><td><code>13782</code></td><td><code>bpcd</code></td>
<td>Vertias NetBackup</td>
</tr>
<tr><td><code>13783</code></td><td><code>vopied</code></td>
<td>Veritas VOPIED 协议</td>
</tr>
<tr><td><code>22273</code></td><td><code>wnn6 [wnn4]</code></td>
<td>假名/汉字转换系统</td>
</tr>
<tr><td><code>26000</code></td><td><code>quake</code></td>
<td>Quake (以及相关的) 多人游戏服务器</td>
</tr>
<tr><td><code>26208</code></td><td><code>wnn6-ds</code></td>
<td>&nbsp;</td>
</tr>
<tr><td><code>33434</code></td><td><code>traceroute</code></td>
<td>Traceroute 网络跟踪工具</td>
</tr>
<tr>
<td colspan="3">注:<br /> /etc/services中的注释如下：端口1236被注册为“bvcontrol”，但是它也被 Gracilis Packeten 远程配置服务器使用。正式名称被列为主要名称，未注册的名称被列为别名。
<br />在/etc/services中的注释：端口 2600 到 2606 被 zebra 软件包未经注册而使用。主要名称是被注册的名称，被 zebra 使用的未注册名称被列为别名。
<br />/etc/services 文件中的注释：该端口被注册为 wnn6，但是还在 FreeWnn 软件包中使用了未注册的“wnn4”。<br /></td>
</tr>
</table>
</div>
<br/>
<div>
<h2>数据报传递协议端口</h2>
<p>显示了一个和数据报传递协议 (DDP) 有关的端口列表。DDP 在 AppleTalk 网络上被使用。</p>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>1/ddp</code></td><td><code>rtmp</code></td><td>路由表管理协议</td>
</tr>
<tr><td><code>2/ddp</code></td><td><code>nbp</code></td><td>名称绑定协议</td>
</tr>
<tr><td><code>4/ddp</code></td><td><code>echo</code></td><td>AppleTalk Echo 协议</td>
</tr>
<tr><td><code>6/ddp</code></td><td><code>zip</code></td><td>区块信息协议</td>
</tr>
</table>
</div>
<br/>
<div>
<h2>Kerberos (工程 Athena/MIT) 端口</h2>
<p>和 Kerberos 网络验证协议相关的端口列表。在标记的地方，v5 代表 Kerberos 版本5协议。注意，这些端口没有在 IANA 注册。</p>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>751</code></td><td><code>kerberos_master</code></td>
<td>Kerberos 验证</td>
</tr>
<tr><td><code>752</code></td><td><code>passwd_server</code></td>
<td>Kerberos 口令 (kpasswd) 服务器</td>
</tr>
<tr><td><code>754</code></td><td><code>krb5_prop</code></td>
<td>Kerberos v5 从属传播</td>
</tr>
<tr><td><code>760</code></td><td><code>krbupdate [kreg]</code></td>
<td>Kerberos 注册</td>
</tr>
<tr><td><code>1109</code></td><td><code>kpop</code></td>
<td>Kerberos 邮局协议 (KPOP) </td>
</tr>
<tr><td><code>2053</code></td><td><code>knetd</code></td>
<td>Kerberos 多路分用器</td>
</tr>
<tr><td><code>2105</code></td><td><code>eklogin</code></td>
<td>Kerberos v5 加密的远程登录 (rlogin) </td>
</tr>
</table>
</div>
<br/>
<div>
<h2>未注册的端口</h2>
<p>一个未注册的端口列表。这些端口可能被安装在你的红帽企业 Linux 系统上的服务或协议使用，或者它们是在红帽企业 Linux 和运行其它操作系统的机器通信所必需的端口。</p>
<table cellspacing="5" cellpadding="2">
<tr>
<th>端口号码 / 层</th>
<th>名称</th>
<th>注释</th>
</tr>
<tr><td><code>15/tcp</code></td><td><code>netstat</code></td><td>网络状态 (netstat) </td>
</tr>
<tr><td><code>98/tcp</code></td><td><code>linuxconf</code></td><td>Linuxconf Linux 管理工具</td>
</tr>
<tr><td><code>106</code></td><td><code>poppassd</code></td>
<td>邮局协议口令改变守护进程 (POPPASSD) </td>
</tr>
<tr><td><code>465/tcp</code></td><td><code>smtps</code></td><td>通过安全套接字层的简单邮件传输协议 (SMTPS) </td>
</tr>
<tr><td><code>616/tcp</code></td><td><code>gii</code></td><td>使用网关的 (选路守护进程) 互动界面</td>
</tr>
<tr><td><code>808</code></td><td><code>omirr [omirrd]</code></td>
<td>联机镜像 (Omirr) 文件镜像服务</td>
</tr>
<tr><td><code>871/tcp</code></td><td><code>supfileserv</code></td><td>软件升级协议 (SUP) 服务器</td>
</tr>
<tr><td><code>901/tcp</code></td><td><code>swat</code></td><td>Samba 万维网管理工具 (SWAT) </td>
</tr>
<tr><td><code>953</code></td><td><code>rndc</code></td>
<td>Berkeley 互联网名称域版本9 (BIND 9) 远程名称守护进程配置工具</td>
</tr>
<tr><td><code>1127</code></td><td><code>sufiledbg</code></td>
<td>软件升级协议 (SUP) 调试</td>
</tr>
<tr><td><code>1178/tcp</code></td><td><code>skkserv</code></td><td>简单假名到汉字 (SKK) 日文输入服务器</td>
</tr>
<tr><td><code>1313/tcp</code></td><td><code>xtel</code></td><td>法国 Minitel 文本信息系统</td>
</tr>
<tr><td><code>1529/tcp</code></td>
<td>support [prmsd, gnatsd]</td>
<td>GNATS 错误跟踪系统</td>
</tr>
<tr><td><code>2003/tcp</code></td><td><code>cfinger</code></td><td>GNU Finger 服务</td>
</tr>
<tr><td><code>2150</code></td><td><code>ninstall</code></td>
<td>网络安装服务</td>
</tr>
<tr><td><code>2988</code></td><td><code>afbackup</code></td>
<td>afbackup 客户-服务器备份系统</td>
</tr>
<tr><td><code>3128/tcp</code></td><td><code>squid</code></td><td>Squid 万维网代理缓存</td>
</tr>
<tr><td><code>3455</code></td><td><code>prsvp</code></td>
<td>RSVP 端口</td>
</tr>
<tr><td><code>5432</code></td><td><code>postgres</code></td>
<td>PostgreSQL 数据库</td>
</tr>
<tr><td><code>4557/tcp</code></td><td><code>fax</code></td><td>FAX 传输服务 (旧服务) </td>
</tr>
<tr><td><code>4559/tcp</code></td><td><code>hylafax</code></td><td>HylaFAX 客户-服务器协议 (新服务) </td>
</tr>
<tr><td><code>5232</code></td><td><code>sgi-dgl</code></td>
<td>SGI 分布式图形库</td>
</tr>
<tr><td><code>5354</code></td><td><code>noclog</code></td>
<td>NOCOL 网络操作中心记录守护进程 (noclogd) </td>
</tr>
<tr><td><code>5355</code></td><td><code>hostmon</code></td>
<td>NOCOL 网络操作中心主机监视</td>
</tr>
<tr><td><code>5680/tcp</code></td><td><code>canna</code></td><td>Canna 日文字符输入界面</td>
</tr>
<tr><td><code>6010/tcp</code></td>
<td>x11-ssh-offset</td>
<td>安全 Shell (SSH) X11 转发偏移</td>
</tr>
<tr><td><code>6667</code></td><td><code>ircd</code></td>
<td>互联网中继聊天守护进程 (ircd) </td>
</tr>
<tr><td><code>7100/tcp</code></td><td><code>xfs</code></td><td>X 字体服务器 (XFS) </td>
</tr>
<tr><td><code>7666/tcp</code></td><td><code>tircproxy</code></td><td>Tircproxy IRC 代理服务</td>
</tr>
<tr><td><code>8008</code></td><td><code>http-alt</code></td>
<td>超文本传输协议 (HTTP) 的另一选择</td>
</tr>
<tr><td><code>8080</code></td><td><code>webcache</code></td>
<td>万维网 (WWW) 缓存服务</td>
</tr>
<tr><td><code>8081</code></td><td><code>tproxy</code></td>
<td>透明代理</td>
</tr>
<tr><td><code>9100/tcp</code></td>
<td>jetdirect [laserjet, hplj]</td>
<td>Hewlett-Packard (HP) JetDirect 网络打印服务</td>
</tr>
<tr><td><code>9359</code></td><td><code>mandelspawn [mandelbrot]</code></td>
<td>用于 X 窗口系统的并行 Mandelbrot 生成程序</td>
</tr>
<tr><td><code>10081</code></td><td><code>kamanda</code></td>
<td>使用 Kerberos 的 Amanda 备份服务</td>
</tr>
<tr><td><code>10082/tcp</code></td><td><code>amandaidx</code></td><td>Amanda 备份服务</td>
</tr>
<tr><td><code>10083/tcp</code></td><td><code>amidxtape</code></td><td>Amanda 备份服务</td>
</tr>
<tr><td><code>20011</code></td><td><code>isdnlog</code></td>
<td>综合业务数字网 (ISDN) 登录系统</td>
</tr>
<tr><td><code>20012</code></td><td><code>vboxd</code></td>
<td>ISDN 音箱守护进程 (vboxd) </td>
</tr>
<tr><td><code>22305/tcp</code></td>
<td>wnn4_Kr</td>
<td>kWnn 韩文输入系统</td>
</tr>
<tr><td><code>22289/tcp</code></td>
<td>wnn4_Cn</td>
<td>cWnn 中文输入系统</td>
</tr>
<tr><td><code>22321/tcp</code></td>
<td>wnn4_Tw</td>
<td>tWnn 中文输入系统 (台湾) </td>
</tr>
<tr><td><code>24554</code></td><td><code>binkp</code></td>
<td>Binkley TCP/IP Fidonet 邮寄程序守护进程</td>
</tr>
<tr><td><code>27374</code></td><td><code>asp</code></td>
<td>地址搜索协议</td>
</tr>
<tr><td><code>60177</code></td><td><code>tfido</code></td>
<td>Ifmail FidoNet 兼容邮寄服务</td>
</tr>
<tr><td><code>60179</code></td><td><code>fido</code></td>
<td>FidoNet 电子邮件和新闻网络</td>
</tr>
</table>
