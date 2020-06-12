---
title: "Git : 基本指令"
category: "Git"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0034.jpg'
tags: [Git]
---
这一篇简单介绍下 Git 中基本的指令。

## 基本指令

* `git status`: 查看 Git 文件状态，在Git 中文件有三种状态:

	* `Untracked`: 未追踪

	* `Tracked & Staged`: 追踪未暂存

	* `Tracked & Unstaged`: 暂存

* `git add`: 添加文件(夹)

* `git commit`: 提交暂存状态的文件，可以使用 `-m` 添加日志信息

* `git diff`: 比较未暂存文件和当前文件的差异

* `git diff –cached`: 比较暂存文件和上次提交的文件的快照的差异

* `git rm file`: 将文件从追踪列表移除并删除文件，如果文件已经是暂存状态则需要 `-f` 选项

* `git rm —cached file`: 移除追踪但不删除文件

* `git log`: 查看提交历史

	* `-p`: 可以展开提交的内容的差异

	* `-num`: 显示最近 `num` 次更新

* `git commit —amend`: 将此次提交合并到此前最后一次提交

* `git checkout file`: 撤销对未暂存文件的修改，恢复到修改前版本

* `git reset HEAD file`: 取消暂存区域文件的修改，恢复到修改未暂存状态

* `git revert HEAD`: 对于已经推送(`push`)的文件，创建一个撤销上次提交的新提交

* `git reset HEAD^`:  恢复到上一个版本，使修改处于未暂存状态

	* `—soft`: 恢复到上一个版本，使修改处于暂存状态

	* `—hard`: 恢复到上一个版本，丢弃修改

* `git clone url`: 克隆原始的远程仓库，完成后创建默认为 `origin` 的远程仓库

* `git remote -v`: 显示远程仓库的信息

* `git remote add name url`: 添加远程仓库

* `git fetch (remote-name)`: 从远程仓库拉取本地仓库中没有的数据

* `git push (remote-name) (branch-name)`: 推送到远程仓库的分支

* `git remote show (remote-name)`: 显示远程仓库的详细信息

* `git remote rm (remote-name)`: 删除远程仓库

#### 本地分支

之前介绍过，Git 中有一个 `HEAD` 指针(`.git/HEAD`)，它指向正在工作的本地分支的。

* `git branch branch-name`: 创建本地分支，会产生指向当前 `commit`  对象的指针

* `git checkout branch-name`: 切换分支，将 `HEAD` 指针指向新分支，将工作目录文件切换为新分支指向的快照内容

	* **注意**: 切换分支前务必要先提交需要保留的修改

* `git merge branch-name`: 将指定分支合并到当前分支，如果存在冲突会等待用户解决冲突后由用户自己提交

* `git branch -d branch-name`: 删除分支

* `git branch (-v|—merged|—no-merged)`: 罗列分支

#### 远程分支

* `git fetch (远程仓库名) (分支名)`: 同步远程仓库中数据到本地，如果不指定远程仓库名和分支名则同步所有远程仓库所有分支

* `git push (远程仓库名) (本地分支名):(远程分支名)`: 将指定本地分支推送到指定远程仓库的指定分支，如果省略本地分知名则推送当前分支

* `git checkout -b (本地分支名) (远程仓库名/分支名)`: 新建本地分支并从远程分支检出到该本地分支，称为跟踪分支

	* 使用 `git clone` 时会自动创建 `master` 本地分支跟踪远程 `master` 分支

	* 使用 `git push` 时会自动选择推送的服务器和分支

* `git pull`: 从远程拉取更新内容，实质上是自动执行 `git fetch` 和 `git merge`

* `git push (远程仓库名) :(远程分支名)`: 推送到远程分支

* `git rebase branchname`: 将指定分支里提交的改变在当前分支里重做,能产生比 `merge` 更为整洁的提交记录

	* **注意**: 不要再分支中的提交对象发布到远程公共仓库后使用此操作





