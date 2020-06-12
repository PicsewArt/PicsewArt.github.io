---
title: "Work with CocoaPods and Gemfile"
category: "iOS"
copy: true
tags: [iOS, Mac, macOS, Terminal, CocoaPods, Gemfile, ruby]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0029.jpg'
---
工作在一个 iOS 开发团队中，可能会有很多关于安装 CocoaPods 的问题。团队成员拥有不同的 `cocoapods` `gem` 的安装版本，并且当有人运行 `pod install` 时，会将事情搞得一团糟。解决方案是, 使用 Gemfile。你可以在 Gemfile 中指定 cocoapods gem 的使用版本。

```console
gem source 'https://rubygems.org'
#gem source 'https://ruby.taobao.org'
```

```ruby
gem 'cocoapods', '0.39.0'
```

当你更新了 Gemfile 文件并且自动安装了正确版本的 `gem` 后，确保团队的每个成员都运行一次 `bundle install` 这条命令。

此后，只需要运行 `bundle exec pod install` 这条命令来安装新的 CocoaPods —— 这将会确保通过你在的 Gemfile 中指定 `cocoapods` `gem` 的版本后，pods 仍可以被正确的安装。
