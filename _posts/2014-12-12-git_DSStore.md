---
title: "Git: .DS_Store"
category: "Git"
copy: true
tags: [Git]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0055.jpg'
---
`.DS_Store` 是个很烦人的家伙, 在使用版本控制工具时, 我们都希望能忽略它的存在, 不过在每一个仓库中都设置一次好像更烦人, 那现在我们想办法一次性解决这个问题吧:

```console
vi ~/.gitignore_global
```

按 `i` 进入编辑模式, 增加新行:

```console
.DS_Store
.DS_Store?
```

如果你要忽略其它没用的文件, 可以继续添加新的行。

按 `esc` 后输入 `:wq` 保存并推出, 然后进入你的仓库:

```console
vi .git/config
```

在 `[core]` 中增加:

```console
excludesfile = /Users/用户名/.gitignore_global
```

保存退出, 然后提交这次改动。

现在, 你可以 `touch` 一个 `.DS_Store` 文件再用 `git status` 来试试效果了。
