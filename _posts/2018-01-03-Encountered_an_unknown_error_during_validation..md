---
title: "CocoaPods: Encountered an unknown error (Pod::DSLError) during validation"
category: "CocoaPods"
quote: false
tags: [iOS, CocoaPods]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0035.jpg'
---
在发布到 `CocoaPods` 是如果遇到下面的问题:

```console
Validating podspec
 -> UIMessageBar (1.0.0)
    - ERROR | [iOS] unknown: Encountered an unknown error (Pod::DSLError) during validation.

[!] The spec did not pass validation, due to 1 error.
```

可以尝试修改 `.podspec` 文件中类似这样的配置:

```ruby
spec.source_files     = 'UIMessageBar/**/*'
spec.resource_bundles = {'UIMessageBar' => ['UIMessageBar/Resources/**/*']}
```

手动指明要包含的文件类型:

```ruby
spec.source_files     = 'UIMessageBar/**/*.{swift}'
spec.resource_bundles = {'UIMessageBar' => ['UIMessageBar/Resources/**/*.{xib,png}']}
```
