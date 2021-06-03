---
title: "CocoaPods: 常用操作"
category: "CocoaPods"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0028.jpg'
tags: [CocoaPods]
---
CocoaPods 相比不用介绍了，本文主要介绍一些 pod 常用操作: CocoaPods is a dependency manager for iOS & Mac projects.

## 安装

首先要安装 `pod` 需要 Ruby 2.2.2 以上，在 OS X 中自带了 Ruby，但可能版本比较低，升级 Ruby 的方法有很多，这里不一一列举 (but, 如果你使用 `rvm`，可以参考我之前的 [相关博客]({{ site.blog_perma }}/Mac_ruby_rvm/))。

接下来我们还需要用到 `gem`。

首先你可能需要修改 `gem` 的源，国内的网络你懂得，`rubygems.org` 存放在 `Amazon S3` 上面的资源文件间歇性连接失败。所以你会与遇到 `gem install rack` 或 `bundle install` 的时候半天没有响应，具体可以用类似 `gem install rails -V` 的指令来查看执行过程。

现在我们将 `gem` 的源修改为国内淘宝的镜像，这是一个完整 `rubygems.org` 镜像，你可以用此代替官方版本，同步频率目前为15分钟一次以保证尽量与官方服务同步。

```sh

$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
https://ruby.taobao.org/ added to sources
https://rubygems.org/ removed from sources

$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org

```


接下来我们开始安装 CocoaPods，只需执行:

```sh

$ gem install cocoapods

```


## 初始化

在使用 CocoaPods 前你可能需要执行一次初始化操作:

```sh

$ pod setup

```


依据你的网络情况，你可能需要等一段时间，或者多次尝试。

你可以在 `~/.cocoapods/repos/` 查看下载进度。

如果你愿意，你可以增加 `--verbose` 查看操作细节。

***

## 基本使用

对于一般的使用，我们通常只需要为我们的项目安装依赖。

### 为项目初始化

首先进入你的项目目录:

```sh

$ cd ~/Desktop/your-example-project/

```


初始化:

```sh

$ pod init

```


此时会产生 `Podfile` 文件，当然你也可以自己创建，但是通过 `pod init` 生成的文件已经具备了基本的 `Podfile` 框架。

```sh

# Uncomment this line to define a global platform for your project
# platform :ios, '7.0'

target 'MXProject-Demo' do
  # Pods for MXProject-Demo

end

```


编辑的方法有很多，例如 `vi Podfile`，Atom 等图形化工具等等。

### 搜索依赖

在增加某个依赖之前，例如 `SDWebImage`，首先可能需要通过搜索来确认要安装的版本等相关信息:

```sh

$ pod search SDWebImage

```


搜索结果中输入 `q` 即可退出。

### 增加依赖

首先，你需要编辑你的 `Podfile` 文件，为相关的 `Target` 增加 `pod 'SDWebImage'` 这样的语句。

```sh

# Uncomment this line to define a global platform for your project
# platform :ios, '7.0'

target 'MXProject-Demo' do
  # Pods for MXProject-Demo
  pod 'SDWebImage'
  pod 'DemoToolKit', :configurations => ['Debug', 'DEBUG']
  pod 'SomeSampleSDK', :git => 'https://github.com/somename/asamplesdk-cocoapods.git'
end

```


### 安装与更新

对于首次集成 CocoaPods 的项目，执行:

```sh

$ pod install

```


CocoaPods 会在项目目录生成 `.xcworkspace` 文件和 `Pods` 目录 (如果在集成 CocoaPods 之前你已经有了 `.xcworkspace` 文件也没关系)。

也就是说此时你的项目工作目录较之前可能多出:

* `.xcworkspace` 文件

* `Pods` 目录

* `Podfile` 文件

* `Podfile.lock` 文件

此后我们打开 `.xcworkspace` 文件来进行开发工作即可。

如果你在此后的开发过程中需要修改依赖列表或更新依赖版本，继续编辑 `Podfile` 文件并执行 `$ pod update [POD_NAME]` 即可。

### 更新 Repo

在某些情况下，例如执行 `$ pod update` 时，你可能已经注意到 CocoaPods 会更新 Repo 内容，当然，你也可以手动更新:

```sh

$ pod repo update

```


此外，在更新依赖时你还可以通过添加 `--no-repo-update` 选项要求 CocoaPods 不进行 Repo 更新: `$ pod update --no-repo-update`。

### 缓存清理

CocoaPods 安装依赖需要从网络下载，为了节省网络流量和时间，CocoaPods 会在本地留有缓存。

有些情况下，我们可能需要清除缓存重新下载:

```sh

$ pod cache clean SDWebImage

```


或者你也可以全部清理:

```sh

$ pod cache clean --all

```


***

## 发布

要发布自己的框架到 CocoaPods 也很简单，通常我们配合 `git` 使用。

### 注册

首先，在开始之前，你可能需要注册 CocoaPods:

```sh

$ pod trunk register EMAIL [NAME]

```


例如:

```sh

$ pod trunk register meniny@qq.com

$ pod trunk register ezra@outlook.com 'EzraLee' --verbose

```


接下来你会在该邮箱中收到一封邮件，点击邮件中的链接进行确认。

然后执行 `$ pod trunk me` 查看相关信息。

### 建立仓库

第一步，要创建自己的代码仓库，并提交代码到该仓库。以 Github 为例，创建一个公开 (`Public`) 的 `Repository`，并 `clone` 到本地。

### 新建 podspec 文件

第二步，进入该仓库的本地目录:

```sh

$ cd ~/Desktop/Code/MyGithubDemoRepo/

```


建立 `.podspec` 文件:

```sh

$ pod spec create NAME

```


例如你的框架叫做 `MXMyToolKit`，那么你将执行的指令是: `pod spec create MXMyToolKit`，这将会在本地生成 `MXMyToolKit.podspec` 文件。该文件为文本文件，已经预设了一些内容。

常用的内容项有:

* `s.name`: 框架名称，本例中为 `MXMyToolKit`，注意需要与文件名保持一致

* `s.version`: 框架版本，每次发布新的版本都需要改动这里

* `s.summary`: 框架的总结性说明信息

* `s.description`: 描述信息，与上一条类似，但通常较为详细

* `s.homepage`: 主页，填写网址即可

* `s.license`: 许可证类型，例如 `s.license = "MIT"`，`# s.license = { :type => "MIT", :file => "FILE_LICENSE" }`

* `s.author`: 作者，填写您或您所在公司、组织的名称即可

* `s.platform`: 平台，例如 `s.platform = :ios, "7.0"` 表示此框架支持 iOS 7.0 及以上版本

* `s.source`: 源，与版本控制工具挂钩，本例以 `git` 为例，`s.source = { :git => "https://github.com/Meniny/MXMyToolKit.git", :tag => "#{s.version}" }`，这一示例中指定了 `git` 地址以及 `git tag` 号。

* `s.source_files`: 源文件路径，因为我们的代码仓库中可能并不是所有内容都是必须的，因此我们在此指有效的文件和目录，填写与此 `.podspec` 文件相对应的相对路径即可，本例中，可以是 `s.source_files = "MXMyToolKit/**/*.{h,m}"`，将包含 `MXMyToolKit` 目录下的所有目录、子目录以及其中的 `.h` 与 `.m` 文件。

* `s.public_header_files`: 开放的头文件，相对路径，例如 `s.public_header_files = "MXMyToolKit/Classes/**/*.h"`

* `s.resource`: 资源文件，同为相对路径，例如 `s.resource = 'MXMyToolKit/Resources.bundle'`

* `s.frameworks`: 需要引入的 `Cocoa/Cocoa Touch` 框架，例如 `s.frameworks = "Foundation", "UIKit", "CoreLocation"`

* `s.dependency`: 此框架的 `pod` 依赖，例如 `s.dependency "SDWebImage", "AFNetworking"`

* `s.requires_arc`: 是否要求 `ARC` 自动内存管理，例如 `s.requires_arc = true`

* `s.xcconfig`: Xcode 配置，例如 `s.xcconfig = { "HEADER_SEARCH_PATHS" => "$(SDKROOT)/usr/include/libxml2" }`

以 Github 为例，我们通常还会建立 `LICENSE` 和 `README.md` 文件。

`LICENSE` 文件 (或者你指定名称的 License 文件)，通常是一些许可相关的声明、说明等内容，例如:

```sh

Copyright (c) 2015 Meniny <meniny@qq.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```


至于 `README.md`，是 Github 要求的仓库说明性文件，非必须。内容为 Markdown 格式的文本，不做举例。

### 提交代码和文件

本例中，在仓库根目录依次执行:

* `$ git add .`: 添加当前目录及子目录的所有文件

* `$ git commit -m "First Commit of MXToolKit"`: 提交刚才添加的文件，并撰写描述

* `$ git push`: 推送本地的提交到远程服务器，本例为 Github 的代码仓库 `https://github.com/Meniny/MXMyToolKit.git`。某些情况下，你可能需要执行 `$ git push origin master`、`$ git push https://github.com/Meniny/MXMyToolKit.git` 等指令才能推送

* `$ git tag 1.0.0`: 在本例中，因为 `s.source` 中指明 `git tag` 与 `s.version` 相同，所以我们创建与版本相同的 `tag`

* `$ git push --tag`: 推送本地 `tag` 到远程服务器

### 校验

为了顺利发布到 CocoaPods，我们通常在发布前进行校验:

```sh

$ pod lib lint

```


你还可以通过 `--verbose` 查看详细的内容:

```sh

$ pod lib lint --verbose

```


### 发布

通过执行 `$ pod trunk push` 即可发布到 CocoaPods，你也可以指定 `.podspec` 文件来发布:

```sh

`$ pod trunk push MXToolKit.podspec`

```


成功发布后你可以使用 `$ pod search MXToolKit` 来搜索你的框架，如果存在则可以在 `Podfile` 中添加来使用了。

### 删除和废弃

在有些情况下，你也可能需要删除或废弃你的框架、版本:

* `$ pod trunk delete 'MXToolKit' 1.0.0`: 删除某个版本

* `$ pod trunk deprecate 'MXToolKit'`: 废弃

执行这些操作后，建议你再执行一次 `$ pod repo update` 来更新本地 Repo 内容。

***

## 题外话

如果你使用 `Gemfile` 和 `Bundle`，例如 `Rails` 项目，你可以用 `Bundler` 的 [Gem 源代码镜像命令](https://bundler.io/v1.5/bundle_config.html#gem-source-mirrors) 以避免修改你的 `Gemfile` 中的的 `source`:

```sh

$ bundle config mirror.https://rubygems.org https://ruby.taobao.org

```


```sh

source 'https://rubygems.org/'
gem 'rails', '4.1.0'
...

```


此外你也可以通过此镜像加速国内的 Ruby 安装速度 (适用范围: Mac OS X):

```sh

$ sed -i .bak -E 's!https?://cache.ruby-lang.org/pub/ruby!https://ruby.taobao.org/mirrors/ruby!' $rvm_path/config/db

```

