---
title: "iOS 面试题: Binary search tree"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0037.jpg'
---
最近遇到和看到的一些面试题。

#### 我知道你大学毕业过后就没接触过算法数据结构了,但是请你一定告诉我什么是Binary search tree? search的时间复杂度是多少?

`Binary search tree` 二叉搜索树主要由四个方法:
* `search`: 时间复杂度为`O(h)`,h为树的高度
* `traversal`: 时间复杂度为`O(n)`,n为树的总结点数。
* `insert`: 时间复杂度为`O(h)`,h为树的高度。
* `delete`: 最坏情况下,时间复杂度为`O(h)+`指针的移动开销。

可以看到,二叉搜索树的`dictionary operation`的时间复杂度与树的高度h相关。所以需要尽可能的降低树的高度,由此引出平衡二叉树`Balanced binary tree`。它要求左右两个子树的高度差的绝对值不超过1,并且左右两个子树都是一棵平衡二叉树。这样就可以将搜索树的高度尽量减小。常用算法有 `红黑树`、`AVL`、`Treap`、`伸展树`等。
