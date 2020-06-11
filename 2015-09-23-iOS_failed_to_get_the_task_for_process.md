---
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'post/xcode.jpg'
title:  "Xcode : Failed to get the task for process xxxxx"
tags: [iOS,Xcode]
summary: "Xcode : Failed to get the task for process xxxxx"
---
在真机调试时有时会遇到一个提示:

	process launch failed: failed to get the task for process xxxxx
	
如果出现上面的提示(或者 `time out`)，一般情况下是由于 `Code Signing` 中描述文件选择不当，真机调试要求使用 `Developer Provisioning Profile`，而你可能选择了 `AdHoc/Distribution Provisioning profile`。

