---
title: "Sierra: 找回消失的允许“任何来源”的应用"
category: "OS X"
copy: true
tags: [OS X, spctl]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0004.jpg'
---
自从 Sierra 之后, `系统偏好设置` -> `通用` -> `允许以下位置下载的应用` 中的 `任何来源` 便消失了。

为了找回它，我们打开 `终端`, 输入：

```console
sudo spctl --master-disable
```

回车，输入密码，之后重新打开设置便可以看到久违的 `任何来源` 了。这个操作也可以解决一些来自网络的应用提示 `已损坏` 的问题。
