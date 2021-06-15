---
title: "Git Stuffs"
category: "Technology"
tags: ["Git"]
date: 20210608T170000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0029.jpg'
---
## Branches - 分支

![git-workflow]({{ site.url }}/assets/images/git-workflow.png)

> - `master` - 默认主分支，一般功能开发不与此分支交互
>   - `hotfix-*` - 问题修复分支，完成后立即合并入 `master` 与 `develop` 分支
>   - `develop` - 主开发分支，也即功能最新最全的分支
>     - `feature-*` - 功能开发分支，完成后合并入 `develop` 分支
>     - `release-*` - 版本发布分支，完成后合并入 `master` 与 `develop` 分支并添加 `tag` 标记
>
> 其中 `develop` 及 `hotfix-*` 为 `master` 的子分支，`feature-*` 及 `release-*` 为 `develop` 的子分支。

- 首先由 `master` 分支 `fork` 产生 `develop` 分支；
- 进行功能开发时，由 `develop` 分支 `fork` 产生 `feature-*` 分支，完成后合并入 `develop` 分支；
- 进行版本发布时，由 `develop` 分支 `fork` 产生 `release-*` 分支，完成后合并入 `master` 与 `develop` 分支，并添加 `tag` 标记；
- 进行线上版本问题修复时，由 `master` 分支 `fork` 产生 `hotfix-*` 分支，完成后合并入 `master` 与 `develop` 分支。

## Pick & Squash - 遴选与压平

在合并到主要分支前，合并并编辑相关信息以明确意图。注意，不要在变基的过程中不小心删掉提交。

```sh
# 以下内容仅供参考：
$ git rebase -i HEAD~20  # 查看可进行压扁的二十个提交
$ git push -f
$ git commit --amend
```

## Divergent Branches - 偏离分支

```sh
hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint:
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
```

进行不带参数的 `git pull` 拉取时，如果出现以上警告，最简单的解决方式是保持默认策略:

```sh
git config pull.ff false
```

此后再次执行不带参数的 `git pull` 时就不会再有警告了。

当然，也可以将此策略配置为全局缺省配置:

```sh
git config --global pull.ff false
```

<center><br /><img src="{{ site.url }}/assets/images/card-pub.jpg" alt="PROFILE" align=center style="width: 100%; max-width: 350px;"/></center>
