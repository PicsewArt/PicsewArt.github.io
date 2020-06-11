---
title: "Xcode: LLVM Error"
category: "Xcode"
quote: true
tags: [Xcode, LLVM]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0045.jpg'
---
在使用Xcode5进行iOS7开发时，在打开SDK文件后，可能会不小心对其中的代码进行了一些操作，那么在下一次 Build 或者 Run 的时候就会出现类似以下的错误:
 
```sh
After modifying system headers, please delete the module cache at '/Users/one/Library/Developer/Xcode/DerivedData/ModuleCache/24CDWDK5BTYJE'
```

解决方法:

- 删除错误中提到的 `~/Library/Developer/Xcode/DerivedData/ModuleCache/24CDWDK5BTYJE` 目录下的内容。
- 在 Xcode 中点击 Product - Clean, 清空缓存