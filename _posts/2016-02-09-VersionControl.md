---
title: "版本控制系统: SVN 与 Git 的一些误区"
category: "VCS"
tags: [Git, SVN]
cave: true
hero:
  format: 'jpeg'
  url: 'post/vcs.jpg'
---
最近都在找工作，所以博客更新停滞了下来。之前几个 Primer 系列也没有写完。不过暂时先写一些和面试有关的内容吧，因为这几次面试，总被问到 SVN 和 Git 的相关问题，但在其中却也发现一些理解误区，因此也就有了这篇博客。

### 脱库问题

似乎很多人认为只有 Git 可以脱库，但事实上 SVN 也是可以的，其本身就提供了 `svnsync` 工具，主要用于镜像 SVN 版本库。

### 安全问题

对于脱库问题，有人说 SVN 可以通过目录授权阻止对脱库，也有面试官告诉我 Git 不安全，问我对这件事情怎么看待。

事实上，对于这个问题我却更倾向使用 Git，因为实践证明 SVN 的目录授权就是一场灾难，随着版本库的分支和 Tag 增多，配置的工作也变得越来越繁琐庞大，其弊病显而易见。

而 Git 可以通过子模组来实现细粒度的读授权。在合适的使用场合中将版本库拆分后单独授权，再通过子模组将整合，且操作也并不复杂。

### 历史提交修改问题

还有一些人认为，Git 可以对历史提交随意修改，不利于版本控制。事实上这只对本地提交有意义，你可以将其视为缓冲区，它允许你在推送提交到服务器的共享版本之前后悔，而且这样灵活的操作正是 Git 的特点之一。此外，由于对远程共享的版本不允许这样修改，也保证了安全性。

相对于 SVN 的集中式管理，优劣显而易见。

### SVN 真的这么差吗

虽然我个人比较推崇 Git，但 SVN 也并非一无是处，关键要用对场合，选择适合的工具解决问题。

举个例子，SVN 有悲观锁 (Pessimistic Lock) 功能，可以在用户在操作时对文件进行锁定，防止多人同时操作。据我有限的了解，目前 Git 并不具备。