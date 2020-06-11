---
title: "UNIX/Linux : awk 清理重复行"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'post/unix.jpg'
tags: [UNIX,Linux,awk]
---
最近遇到一个需求，就是要清理掉文本中重复的行。这看起来并不是什么困难的事情，你可以使用 Python、Ruby、Perl 甚至 C 来完成这项任务，轻而易举。

但是，作为一个处女座的程序员，并不能满足于此。在 UNIX 世界中，还有一个很基础同时也是很强大的工具 —— awk。

```sh

awk '{ if (!seen[$0]) print $0; seen[$0]++ }'

```


但这依然不够简洁，我这样想的一个重要的原因是，在 awk 中对很多操作都有预设，因此你并不需要明确的告诉它每一件事。例如，awk 会认为你希望循环处理文本的每一行，或者它会认为你希望打印处理结果。

现在，删掉一些不必要的指令让它看起来更清晰一些:

```sh

awk '!seen[$0]++' <filename>

```






