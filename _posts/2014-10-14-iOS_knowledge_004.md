---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
title:  "iOS 小知识: UITableView 收起键盘"
tags: [iOS]
---
介绍一些 iOS 小知识。

### UITableView 收起键盘

可能很多用用过 `[self.view endEditing:YES];` 这句代码，但对于 `UITableView` 还有更好的选择:

`tableView.keyboardDismissMode = UIScrollViewKeyboardDismissModeOnDrag;`





