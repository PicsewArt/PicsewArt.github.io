---
title: "系统基本配置概要"
category: "UNIX"
copy: true
tags: [iOS, Mac, macOS, Terminal, Xcode, vim]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0043.jpg'
---
因为时不时会给自己或者被人的电脑💻重装系统, 装系统很简单, 但之后要配置的内容还是蛮多的, 这里列举一下吧。

# 重装系统

首先要从重装系统说起, 由于直接运行 `.app` 安装会保留原来的数据, 而很多时候这正是我们不希望看到的, 所以我们要用到 Terminal 来解决，详细内容可以参考我 [之前的博客]({{ site.blog_perma }}/iOS_Mac_Install_U_Disk/)。

```console
sudo createinstallmedia路径 --volume U盘路径 --applicationpath 安装器App路径
```

# 安装工具

## rvm

接下来, 系统安装好之后先来安装 `rvm` 吧:

```console
\curl -sSL https://get.rvm.io | bash -s stable
```

安装好之后, 再来安装 Ruby, 版本根据需要来选, 比如 `2.2.5`:

```console
rvm install 2.2.5
```

## gem

由于 `gem` 已经自带, 所以我们直接安装一些常用工具即可, 首先如果你在天朝大陆, 没有任何高科技的情况下, 记得修改源到淘宝镜像:

```console
gem sources --add https://gems.ruby-china.org/ --remove https://rubygems.org/
```

然后确认一下:

```console
gem sources -l
```

## CocoaPods

`gem` 没问题的话, 开始安装 `CocoaPods`:

```console
gem install cocoapods
```

## Jekyll

接下来还要安装 `Jekyll`:

```console
gem install jekyll
```

需要的话还可以安装其他插件, 比如:

```console
$ gem install jekyll-paginate
$ gem install jekyll-toc
```

## macgap

顺手安装个小工具, MacGap, 一个 WebApp 生成器。

```console
gem install macgap
```

使用起来也很简单, 随意在什么路径下创建一个 app, 例如我在 `~` 目录新建一个叫 `MyBlog` 的 app:

```console
$ cd ~
$ macgap new MyBlog
```

这时, MacGap 会在 `~` 下创建 `MyBlog` 文件夹, 包含 `index.html` 文件。

修改 `MyBlog/index.html` 甚至添加其它资源到 `Blog/` 中, 然后开始构建:

```console
macgap build MyBlog
```

构建完成后会生成 `MyBlog.app` 文件。

## pip

`pip` 也免不了, 可以参考我 [之前的博客]({{ site.blog_perma }}/PIP/):

```console
sudo easy_install pip
```

有了 `pip` 也可以装一些实用的东西, 比如 `Pygments`:

```console
sudo pip install Pygments
```

## port

`Macport` 应该不用介绍了, 安装工具请移步 [https://www.macports.org/install.php](https://www.macports.org/install.php)。

当然, 你也可以在这个的链接中找到源文件, 通过源文件安装也是安装选项之一, 相关内容可以参考我 [之前的博客]({{ site.blog_perma }}/MacPorts/)。

## brew

`Homebrew` 也是很常用的工具, 必装之一, 可以参考我 [之前的博客]({{ site.blog_perma }}/Homebrew/):

```console
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

`brew` 能做不少事情, 比如:

```console
brew install coreutils
```

## Carthage

有个 `brew`, 来安装 `Carthage` 吧:

```console
brew install carthage
```

当然, 你的系统也可能已经安装了 `carthage`, 这时一般会提示你 `unlink carthage`, 你可以通过 `carthage version` 查看其版本。

## npm

node和npm安装必不可少，这里我们用 `brew` 来安装它们。

一般来说, 首先应该确保 `brew` 是安全可靠的:

```console
brew doctor
```

如果出现:

> Warning: Some directories in /usr/local/share/man aren't writable. This can happen if you "sudo make install" software that isn't managed by Homebrew. If a brew tries to add locale information to one of these directories, then the install will fail during the link step.
>
> You should probably `sudo chown -R $(whoami)` them:
> `/usr/local/share/man/man5`
> `/usr/local/share/man/man7`

那么, 将 `brew` 的位置添加到 `$PATH` 环境变量中:

```console
export PATH="/usr/local/bin:$PATH"
```


如果出现:

> Warning: You have unlinked kegs in your Cellar Leaving kegs unlinked can lead to build-trouble and cause brews that depend on
those kegs to fail to run properly once built. Run brew link on these: `node`

则需清理 `brew`:

```console
brew cleanup
```

并删除 `node` 文件:

```console
sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
```

或:

```console
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules
```

一切正常的话开始安装:

```console
$ brew link node
$ brew uninstall node
$ brew install node
```

当然你也可能只需要 `brew install node` 这一条指令。

## Grunt

```console
npm install -g grunt-cli
```

## PHP

`php` 已经在系统中内置, 需要的话可以安装新版, 以及 `php-fpm`:

```console
brew install homebrew/php/php70 homebrew/php/php70-mcrypt homebrew/php/php70-gmagick homebrew/php/php70-opcache homebrew/php/php70-xdebug
```

接下来:

```console
vi ~/.bash_profile
```

按 `i` 进入编辑模式, 依据情况, 添加或修改:

```console
export PATH="/usr/local/sbin:$PATH"
```

然后:

```console
source ~/.bash_profile
```

现在你可以输入 `php -v` 和 `php-fpm -v` 都应该显示查看版本号。

接着, 启动 `php-fpm` 试试看:

```console
sudo php-fpm
```

结束掉:

```console
sudo pkill php-fpm
```

就目前的情况下, 在终端中启动 `php-fpm` 后, 未结束前不要关闭窗口, 若输入其他命令应该新建窗口, 非正常关闭重新启动将显示端口被占用, 此时需要修改默认的端口 `9000` 为其他端口。

## Nginx

先安装:

```console
brew install nginx
```

或:

```console
brew install --with-http2 nginx
```

安装结束后要进行一些设置:

```console
vi /usr/local/etc/nginx/nginx.conf
```

根据情况修改或添加:

```sh
server {
    listen       8080; # 默认端口为8080
    server_name  localhost; # 网站地址
    # charset koi8-r;
    # access_log  logs/host.access.log  main;
    # 如果想使用80端口，需要给予权限，添加下面两行并参考下一个步骤，不需要则可以跳过
    ssl_certificate ssl/nginx.crt;
    ssl_certificate_key ssl/nginx.key;
    location / {
        root   html; # html为网站根目录，可以自己修改
        index  index.html index.htm; # 添加index.php
    }
```

生成密钥给予权限以使用 `80` 端口:

```console
sudo mkdir /usr/local/etc/nginx/ssl/
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /usr/local/etc/nginx/ssl/nginx.key -out /usr/local/etc/nginx/ssl/nginx.crt
```

设置 `Nginx` 支持 `php`:

```console
vi /usr/local/etc/nginx/nginx.conf
```

找到下面内容并打开其中的注释部分, 并修改:

```console
location ~ \.php$ {
    root           html; #此处的根目录应与上面的设置的一致
    fastcgi_pass   127.0.0.1:9000; #此处可以设置php-fpm默认端口
    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name; #此处将/scripts$fastcgi_script_name修改为根目录$fastcgi_script_name
    include        fastcgi_params; #将此行代码与上一行对调位置
}
```

启动 Nginx:

```console
sudo nginx
```

结束/重载 (配置文件) Nginx:

```console
sudo nginx -s stop
```

```console
sudo nginx -s reload
```

## MySQL

```console
brew install mysql
```

安装完成后为 MySQL 设置密码, 首先无密码登录, 用户名为 `root`:

```console
mysql -u root
```

在 MySQL 中操作:

```console
$ update mysql.user set authentication_string="new password" where User='root'；
$ flush privileges；
$ quit
```

# 设置

## 隐藏文件

首先是显示 `Finder` 隐藏文件:

```console
defaults write com.apple.finder AppleShowAllFiles -bool true
```

反之, 想要关闭的话执行:

```console
defaults write com.apple.finder AppleShowAllFiles -bool false
```

## vim

`vi/vim` 是十分常用的命令行编辑器, 一般要做的有几件事, 显示行号、语法高亮:

```console
vi ~/.vimrc
```

按 `i` 进入编辑模式, 输入:

```sh
filetype on
syntax on
syntax enable
colorscheme railscasts
set nocompatible
set number
set nu
set ai
set flash
set showmatch
set showmode
set showcmd
set warn
set wrap
set history=1000
set background=dark
set autoindent
set smartindent
set tabstop=4
set softtabstop=4
set shiftwidth=4
set showmatch
set guioptions-=T
set vb t_vb=
set ruler
set incsearch
```

其中 `railscasts` 是自定义的高亮配置, 并不是默认提供的, 默认配置有:

```console
Elias Abel $ ls /usr/share/vim/vim74/colors/
README.txt     evening.vim    ron.vim
blue.vim       industry.vim   shine.vim
darkblue.vim   koehler.vim    slate.vim
default.vim    morning.vim    torte.vim
delek.vim      murphy.vim     zellner.vim
desert.vim     pablo.vim
elflord.vim    peachpuff.vim
```

如果你有自己的色彩配置文件, 比如我刚才使用的 `railscasts.vim`, 将其复制到用户目录下的 `vim` 配置中:

```console
cp railscasts.vim ~/.vim/colors/railscasts.vim
```

然后和我一样在 `.vimrc` 中使用它即可, 下面是 `railscasts.vim` 文件的内容。

```sh
"
" Name:    railscasts.vim
" URL:     https://meniny.cn/
" License: MIT <https://opensource.org/licenses/MIT>
"

set background=dark
hi clear
if exists("syntax_on")
  syntax reset
endif
let g:colors_name = "railscasts"

hi Normal                    guifg=#e4e4e4 guibg=#121212 ctermfg=254 ctermbg=233
hi Search                    guifg=#000000 guibg=#5f5f87 ctermfg=0 ctermbg=60 cterm=NONE
hi Visual                    guibg=#5f5f87 ctermbg=60
hi LineNr                    guifg=#666666 ctermfg=242
hi Cursor                    guifg=#000000 guibg=#FFFFFF ctermfg=0 ctermbg=15
hi CursorLine                guibg=#1c1c1c gui=NONE ctermbg=234 cterm=NONE
hi CursorLineNr              guifg=#a9a8a8 gui=NONE ctermfg=248 cterm=NONE
hi ColorColumn               guibg=#1c1c1c ctermbg=234
hi! link CursorColumn ColorColumn
hi VertSplit                 guifg=#444444 guibg=#121212 gui=NONE ctermfg=238 ctermbg=233 cterm=NONE
hi SignColumn                guifg=#FFFFFF guibg=NONE ctermfg=15 ctermbg=NONE

" StatusLine
" Bold
hi User1                     guifg=#eeeeee guibg=#606060 gui=bold ctermfg=255 ctermbg=241 cterm=bold
" Yellow
hi User2                     guifg=#FFAF00 guibg=#606060 gui=bold ctermfg=214 ctermbg=241 cterm=bold
" Green
hi User3                     guifg=#5fff00 guibg=#606060 gui=bold ctermfg=82 ctermbg=241 cterm=bold
" Red
hi User4                     guifg=#870000 guibg=#606060 gui=bold ctermfg=88 ctermbg=241 cterm=bold
hi User5                     guifg=#e4e4e4 guibg=#606060 gui=bold ctermfg=254 ctermbg=241 cterm=bold
hi User6                     guifg=#e4e4e4 guibg=#606060 gui=bold ctermfg=254 ctermbg=241 cterm=bold
hi User7                     guifg=#e4e4e4 guibg=#606060 gui=bold ctermfg=254 ctermbg=241 cterm=bold
hi User8                     guifg=#e4e4e4 guibg=#606060 gui=bold ctermfg=254 ctermbg=241 cterm=bold
hi User9                     guifg=#e4e4e4 guibg=#606060 gui=bold ctermfg=254 ctermbg=241 cterm=bold
hi StatusLine                guifg=#e4e4e4 guibg=#606060 gui=NONE ctermfg=254 ctermbg=241 cterm=NONE
hi StatusLineNC              guifg=#585858 guibg=#303030 gui=NONE ctermfg=240 ctermbg=236 cterm=NONE

" Folds
" -----
" line used for closed folds
hi Folded                    guifg=#ffffff guibg=#444444 gui=NONE ctermfg=15 ctermbg=238 cterm=NONE
hi! link FoldColumn SignColumn

" Invisible Characters
" ------------------
hi NonText                   guifg=#767676 gui=NONE cterm=NONE ctermfg=243
hi SpecialKey                guifg=#767676 gui=NONE cterm=NONE ctermfg=243

" Misc
" ----
" directory names and other special names in listings
hi Directory                 guifg=#87af5f gui=NONE ctermfg=107 cterm=NONE

" Popup Menu
" ----------
" normal item in popup
hi Pmenu                     guifg=#ffffff guibg=#444444 gui=NONE ctermfg=15 ctermbg=238 cterm=NONE
" selected item in popup
hi PmenuSel                  guifg=#000000 guibg=#87af5f gui=NONE ctermfg=0 ctermbg=107 cterm=NONE
" scrollbar in popup
hi PMenuSbar                 guibg=#5A647E gui=NONE ctermfg=15 ctermbg=60 cterm=NONE
" thumb of the scrollbar in the popup
hi PMenuThumb                guifg=#ffffff guibg=#a8a8a8 gui=NONE ctermfg=15 ctermbg=248 cterm=NONE

" Code constructs
" ---------------
hi Comment                   guifg=#af875f ctermfg=137
hi Todo                      guifg=#df5f5f guibg=NONE gui=bold ctermfg=167 ctermbg=NONE cterm=bold
" hi Todo                      guifg=#000000 guibg=ffff00 gui=bold ctermfg=16 ctermbg=11 cterm=bold
hi Constant                  guifg=#6D9CBE ctermfg=73
hi Error                     guifg=#FFFFFF guibg=#990000 ctermfg=221 ctermbg=88
hi WarningMsg                guifg=#800000 guibg=NONE ctermfg=1 ctermbg=NONE
hi Identifier                guifg=#af5f5f gui=NONE ctermfg=221 cterm=NONE
hi Keyword                   guifg=#af5f00 gui=NONE ctermfg=130 cterm=NONE
hi Number                    guifg=#87af5f ctermfg=107
hi Statement                 guifg=#af5f00 gui=NONE ctermfg=130 cterm=NONE
hi String                    guifg=#87af5f ctermfg=107
hi Title                     guifg=#FFFFFF ctermfg=15
hi Type                      guifg=#df5f5f gui=NONE ctermfg=167 cterm=NONE
hi PreProc                   guifg=#ff8700 ctermfg=208
hi Special                   guifg=#005f00 ctermfg=22

" Diffs
" -----
hi DiffAdd                   guifg=#e4e4e4 guibg=#519F50 ctermfg=254 ctermbg=22
hi DiffDelete                guifg=#000000 guibg=#660000 gui=bold ctermfg=16 ctermbg=52 cterm=bold
hi DiffChange                guifg=#FFFFFF guibg=#870087 ctermfg=15 ctermbg=90
hi DiffText                  guifg=#FFFFFF guibg=#FF0000 gui=bold ctermfg=15 ctermbg=9 cterm=bold

hi diffAdded                 guifg=#008700 ctermfg=28
hi diffRemoved               guifg=#800000 ctermfg=1
hi diffNewFile               guifg=#FFFFFF guibg=NONE gui=bold ctermfg=15 ctermbg=NONE cterm=bold
hi diffFile                  guifg=#FFFFFF guibg=NONE gui=bold ctermfg=15 ctermbg=NONE cterm=bold


" Ruby
" ----
hi rubyTodo                  guifg=#df5f5f guibg=NONE gui=bold ctermfg=167 ctermbg=NONE cterm=bold
hi rubyClass                 guifg=#FFFFFF ctermfg=15
hi rubyConstant              guifg=#df5f5f ctermfg=167
hi rubyInterpolation         guifg=#FFFFFF ctermfg=15
hi rubyBlockParameter        guifg=#dfdfff ctermfg=189
hi rubyPseudoVariable        guifg=#ffdf5f ctermfg=221
hi rubyStringDelimiter       guifg=#87af5f ctermfg=107
hi rubyInstanceVariable      guifg=#dfdfff ctermfg=189
hi rubyPredefinedConstant    guifg=#df5f5f ctermfg=167
hi rubyLocalVariableOrMethod guifg=#dfdfff ctermfg=189

" Python
" ------
hi pythonExceptions          guifg=#ffaf87 ctermfg=216
hi pythonDoctest             guifg=#8787ff ctermfg=105
hi pythonDoctestValue        guifg=#87d7af ctermfg=115

" Mail
" ----
hi mailEmail                 guifg=#87af5f ctermfg=107 gui=italic cterm=underline
hi mailHeaderKey             guifg=#ffdf5f ctermfg=221
hi! link mailSubject mailHeaderKey

" Spell
" ----
hi SpellBad                  guifg=#D70000 guibg=NONE gui=undercurl ctermfg=160 ctermbg=NONE cterm=underline
hi SpellRare                 guifg=#df5f87 guibg=NONE gui=underline ctermfg=168 ctermbg=NONE cterm=underline
hi SpellCap                  guifg=#dfdfff guibg=NONE gui=underline ctermfg=189 ctermbg=NONE cterm=underline
hi SpellLocal                guifg=#00FFFF guibg=NONE gui=undercurl ctermfg=51 ctermbg=NONE cterm=underline
hi MatchParen                guifg=#FFFFFF guibg=#005f5f ctermfg=15 ctermbg=23

" XML
" ---
hi xmlTag                    guifg=#dfaf5f ctermfg=179
hi xmlTagName                guifg=#dfaf5f ctermfg=179
hi xmlEndTag                 guifg=#dfaf5f ctermfg=179

" HTML
" ----
hi! link htmlTag              xmlTag
hi! link htmlTagName          xmlTagName
hi! link htmlEndTag           xmlEndTag

hi checkbox guifg=#3a3a3a guibg=NONE gui=NONE ctermfg=237 ctermbg=NONE cterm=NONE
hi checkboxDone guifg=#5fff00 guibg=NONE gui=BOLD ctermfg=82 ctermbg=NONE cterm=BOLD
hi checkboxNotDone guifg=#005fdf guibg=NONE gui=BOLD ctermfg=26 ctermbg=NONE cterm=BOLD

```

## bash

此外, 由于使用 `bash`, 也需要做一些配置:

```console
vi ~/.bash_profile
```

按 `i` 进入编辑模式, 并依据实际情况添加:

```sh
export PS1="\[\e[1;32m\]Elias Abel $ \[\e[m\]"
#export PS1='\n😋☞ $ '
#export PS1='\e[1;32m\]\h\[\e[m\]\[\e[0m\]:\[\e[m\]\[\e[1;35:m\]\W\[\e[m\] \[\e[1;33m\]\u\[\e[m\]\[\e[0m\]$ \[\e[m\]'

# default path
#cd ~/Desktop

alias tosldc='cd ~/Desktop/SLDC/xin_TK_ios/;pwd'

alias linecount='python3 ~/Desktop/Python/LineCount.py' # run ~/Desktop/Python/LineCount.py with params

alias newb='echo -e "---\nlayout: post\ntoc: true\ntitle: \"\"\ncategory: \"\"\ncopy: true\ntags: []\nimg: \"/assets/images/posts/content/postimg/.jpg\"\n---\n" >' # create new blog

alias jb='jekyll b -s ~/MXDevelop/Meniny.github.io/ --config ~/MXDevelop/Meniny.github.io/_config_dev.yml -d ~/MXDevelop/GITHUB_SITE_BUILD/meniny.github.io/ --verbose' # build my blog

alias gitaddempty='find . -type d -empty -exec touch {}/.gitignore \;' # add .gitignore to empty directorie
alias rm='rm -i' # rm with alert
alias ls='ls -FG' # ls with color
alias show='pygmentize -g' # Pygments colorful
alias sbash='source ~/.bash_profile;pwd' # source this file
alias vbash='vi ~/.bash_profile' # edit this file
alias cbash='show ~/.bash_profile' # show this file
alias showall='defaults write com.apple.finder AppleShowAllFiles -bool true; echo "please killall Finder"' # show hidden files, needs 'killall Finder'
alias shownor='defaults write com.apple.finder AppleShowAllFiles -bool false; echo "please killall Finder"' # do not show hidden files, needs 'killall Finder'
alias adoc='asciidoctor' # short of asciidoctor

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*

#export ANDROID_HOME=/usr/local/opt/android-sdk
export ANDROID_HOME="/Users/Meniny/Android/ADT/sdk"

# cd with pwd / ls
cdpwd(){
	cd $1 && pwd;
};
cdls(){
	cd $1 && ls -FG && pwd;
};

alias up='cd ..;pwd'
```

其中关于 `PS1` 更详细的设置可以参考我 [之前的博客]({{ site.blog_perma }}/UNIX_PS1/)。

## Xcode

我目前的主要工作是 iOS 研发, 所以对苹果的 IDE: Xcode 也需要做一些设置。

首先下载 Xcode 及模拟器、API 文档这些事情我就不废话了, 直接来设置新的语法高亮主题:

首先进入 `~/Library/Developer/Xcode/UserData/FontAndColorThemes/` 目录, 如果不存在则自己新建即可。

接下来, 复制新的 `.dvtcolortheme` 文件到这里, 重启 Xcode 即可在设置中使用了。

下面, 附上 `Railscasts.dvtcolortheme` 文件:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>DVTConsoleDebuggerInputTextColor</key>
	<string>0.863 0.862 0.8 1</string>
	<key>DVTConsoleDebuggerInputTextFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTConsoleDebuggerOutputTextColor</key>
	<string>0.863 0.862 0.8 1</string>
	<key>DVTConsoleDebuggerOutputTextFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTConsoleDebuggerPromptTextColor</key>
	<string>0.808754 0.56476 0.57089 1</string>
	<key>DVTConsoleDebuggerPromptTextFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTConsoleExectuableInputTextColor</key>
	<string>0.584314 0.72549 0.27451 1</string>
	<key>DVTConsoleExectuableInputTextFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTConsoleExectuableOutputTextColor</key>
	<string>0.584314 0.72549 0.27451 1</string>
	<key>DVTConsoleExectuableOutputTextFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTConsoleTextBackgroundColor</key>
	<string>0.117647 0.117647 0.117647 1</string>
	<key>DVTConsoleTextInsertionPointColor</key>
	<string>0.862745 0.862745 0.8 1</string>
	<key>DVTConsoleTextSelectionColor</key>
	<string>0.352941 0.392157 0.494118 1</string>
	<key>DVTDebuggerInstructionPointerColor</key>
	<string>0.333 0.333 0.333 1</string>
	<key>DVTMarkupTextBackgroundColor</key>
	<string>0.188235 0.188235 0.188235 1</string>
	<key>DVTMarkupTextBorderColor</key>
	<string>0.253176 0.253176 0.253176 1</string>
	<key>DVTMarkupTextCodeFont</key>
	<string>Menlo-Regular - 11.0</string>
	<key>DVTMarkupTextEmphasisColor</key>
	<string>0.901961 0.882353 0.862745 1</string>
	<key>DVTMarkupTextEmphasisFont</key>
	<string>.SFNSText-Italic - 11.0</string>
	<key>DVTMarkupTextInlineCodeColor</key>
	<string>0.901961 0.882353 0.862745 0.7</string>
	<key>DVTMarkupTextLinkColor</key>
	<string>0.967391 0.959151 0.576175 1</string>
	<key>DVTMarkupTextLinkFont</key>
	<string>.SFNSText-Regular - 11.0</string>
	<key>DVTMarkupTextNormalColor</key>
	<string>0.901961 0.882353 0.862745 1</string>
	<key>DVTMarkupTextNormalFont</key>
	<string>.SFNSText-Regular - 11.0</string>
	<key>DVTMarkupTextOtherHeadingColor</key>
	<string>0.901961 0.882353 0.862745 0.5</string>
	<key>DVTMarkupTextOtherHeadingFont</key>
	<string>.SFNSText-Regular - 15.4</string>
	<key>DVTMarkupTextPrimaryHeadingColor</key>
	<string>0.901961 0.882353 0.862745 1</string>
	<key>DVTMarkupTextPrimaryHeadingFont</key>
	<string>.SFNSDisplay-Regular - 26.4</string>
	<key>DVTMarkupTextSecondaryHeadingColor</key>
	<string>0.901961 0.882353 0.862745 1</string>
	<key>DVTMarkupTextSecondaryHeadingFont</key>
	<string>.SFNSText-Regular - 19.8</string>
	<key>DVTMarkupTextStrongColor</key>
	<string>0.901961 0.882353 0.862745 1</string>
	<key>DVTMarkupTextStrongFont</key>
	<string>.SFNSText-Bold - 11.0</string>
	<key>DVTSourceTextBackground</key>
	<string>0.117647 0.117647 0.117647 1</string>
	<key>DVTSourceTextBlockDimBackgroundColor</key>
	<string>0.3 0.3 0.3 1</string>
	<key>DVTSourceTextInsertionPointColor</key>
	<string>1 1 1 1</string>
	<key>DVTSourceTextInvisiblesColor</key>
	<string>0.5 0.5 0.5 1</string>
	<key>DVTSourceTextSelectionColor</key>
	<string>0.352941 0.392157 0.494118 1</string>
	<key>DVTSourceTextSyntaxColors</key>
	<dict>
		<key>xcode.syntax.attribute</key>
		<string>0.339673 0.536005 0.699935 1</string>
		<key>xcode.syntax.character</key>
		<string>0.585441 0.727116 0.275033 1</string>
		<key>xcode.syntax.comment</key>
		<string>0.559943 0.439967 0.262012 1</string>
		<key>xcode.syntax.comment.doc</key>
		<string>0.559943 0.439967 0.262012 1</string>
		<key>xcode.syntax.comment.doc.keyword</key>
		<string>0.559943 0.439967 0.262012 1</string>
		<key>xcode.syntax.identifier.class</key>
		<string>0.338776 0.621747 0.405362 1</string>
		<key>xcode.syntax.identifier.class.system</key>
		<string>0.856885 0.286616 0.223017 1</string>
		<key>xcode.syntax.identifier.constant</key>
		<string>0.338776 0.621747 0.405362 1</string>
		<key>xcode.syntax.identifier.constant.system</key>
		<string>0.856885 0.286616 0.223017 1</string>
		<key>xcode.syntax.identifier.function</key>
		<string>0.339673 0.536005 0.699935 1</string>
		<key>xcode.syntax.identifier.function.system</key>
		<string>0.339673 0.536005 0.699935 1</string>
		<key>xcode.syntax.identifier.macro</key>
		<string>0.967391 0.959151 0.576175 1</string>
		<key>xcode.syntax.identifier.macro.system</key>
		<string>0.967391 0.959151 0.576175 1</string>
		<key>xcode.syntax.identifier.type</key>
		<string>0.338776 0.621747 0.405362 1</string>
		<key>xcode.syntax.identifier.type.system</key>
		<string>0.856885 0.286616 0.223017 1</string>
		<key>xcode.syntax.identifier.variable</key>
		<string>0.699278 0.693974 0.922983 1</string>
		<key>xcode.syntax.identifier.variable.system</key>
		<string>0.699278 0.693974 0.922983 1</string>
		<key>xcode.syntax.keyword</key>
		<string>0.801862 0.471508 0.199898 1</string>
		<key>xcode.syntax.number</key>
		<string>0.585441 0.727116 0.275033 1</string>
		<key>xcode.syntax.plain</key>
		<string>0.901961 0.882353 0.862745 1</string>
		<key>xcode.syntax.preprocessor</key>
		<string>1 0.774968 0.425486 1</string>
		<key>xcode.syntax.string</key>
		<string>0.585441 0.727116 0.275033 1</string>
		<key>xcode.syntax.url</key>
		<string>0.967391 0.959151 0.576175 1</string>
	</dict>
	<key>DVTSourceTextSyntaxFonts</key>
	<dict>
		<key>xcode.syntax.attribute</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.character</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.comment</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.comment.doc</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.comment.doc.keyword</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.class</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.class.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.constant</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.constant.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.function</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.function.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.macro</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.macro.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.type</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.type.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.variable</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.identifier.variable.system</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.keyword</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.number</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.plain</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.preprocessor</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.string</key>
		<string>Menlo-Regular - 14.0</string>
		<key>xcode.syntax.url</key>
		<string>Menlo-Regular - 14.0</string>
	</dict>
</dict>
</plist>
```

# Apps

除了命令行工具, 也需要一些图形化工具:

* [Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro, .etc)](https://adobe.com/cn/)
* [Final Cut Pro](https://itunes.apple.com/cn/app/final-cut-pro/id424389933?mt=12)
* [Pixelmator](https://itunes.apple.com/cn/app/pixelmator/id407963104?mt=12), 轻量版 Photoshop
* [Atom](https://atom.io), Github 出品的强大编辑器
* [Google Chrome](https://www.google.cn/chrome/browser/), Google 出品的浏览器
* [Jetbrains Suite (IntelliJ IDEA CE, PyCharm, PhpStorm, .etc)](https://www.jetbrains.com/products.html?fromMenu)
* [Android Studio](https://www.android-studio.org), Android 开发 IDE
* [Genymotion](https://www.genymotion.com), Android 模拟器
* [QQ](https://im.qq.com/macqq/index.shtml), 聊天工具
* [WeChat](https://itunes.apple.com/cn/app/wechat/id836500024?mt=12), 聊天工具
* [GIPHY Capture](https://itunes.apple.com/cn/app/giphy-capture.-the-gif-maker/id668208984?mt=12), 录屏转换 GIF 工具
* [ScreenFlow](https://itunes.apple.com/cn/app/screenflow-6/id1107828211?mt=12), 最强大录屏工具, 没有之一
* [RegexToolBox](https://itunes.apple.com/cn/app/regextoolbox/id954196690?mt=12), 正则工具
* [Paste](https://itunes.apple.com/cn/app/paste-smart-clipboard-history/id967805235?mt=12), 剪贴板管理工具
* [Day One](https://itunes.apple.com/cn/app/day-one/id1055511498?mt=12), 个人日记应用
* [1Password](https://itunes.apple.com/cn/app/1password/id443987910?mt=12), 密码管理工具
* [Snip](https://itunes.apple.com/us/app/snip-screen-capture-tool/id1178539865?l=zh&ls=1&mt=12), 截图工具
* [SmartKB](https://itunes.apple.com/cn/app/smart-kb/id893880060?mt=12), 自动为不同的应用选择不同输入源
* [Retinasizer](https://itunes.apple.com/cn/app/retinasizer/id959767192?mt=12), 快速创建低倍图的工具
* [Reflector](https://www.airsquirrels.com/reflector/features/mac/), 使用 AirPlay 分享屏幕的工具
* [Shazam](https://itunes.apple.com/cn/app/shazam/id897118787?mt=12), 听歌识曲
* [TextPal](https://itunes.apple.com/cn/app/textpal/id677976033?mt=12), 文本文件编码识别和转换工具
* [The Unarchiver](https://itunes.apple.com/cn/app/the-unarchiver/id425424353?mt=12), 解压工具
* [The Archive Browser](https://itunes.apple.com/cn/app/the-archive-browser/id510232205?mt=12), 解压工具, 支持再不解压的情况下浏览内容
* [Name Manager](https://manytricks.com/namemangler/), 强大的文件命名工具
* [Lantern](https://github.com/liuling07/Lantern), 高科技梯子
* [Github Desktop](https://desktop.github.com), Github 客户端
* [ClearMyMac](https://cleanmymac.com), 垃圾清理工具
* [PopClip](https://itunes.apple.com/cn/app/popclip/id445189367?mt=12), 类似 iOS 的文字菜单工具
* [LilyView](https://itunes.apple.com/cn/app/lilyview/id529490330?mt=12), 图片浏览工具
* [iStat Menus](https://bjango.com/mac/istatmenus/), 菜单栏实用工具
* [PhoneView](https://www.ecamm.com/mac/phoneview/), iOS 设备管理工具
* [Spectacle](https://github.com/eczarny/spectacle), 窗口布局管理工具
* [Thunder 迅雷](https://dl.xunlei.com), 下载工具
* [Pick Pick](https://itunes.apple.com/us/app/pick-pick/id1179694481?l=zh&ls=1&mt=12), 颜色管理工具
* [Sip](https://itunes.apple.com/cn/app/sip/id507257563?mt=12), 颜色管理工具
* [Movist](https://itunes.apple.com/cn/app/movist/id461788075?mt=12), 视频播放器
* [VLC](https://www.videolan.org), 开源视频播放器
* .etc

<!-- * [Icon Set Creator](), 快速创建 iOS、OS X、watchOS 图标 -->
<!-- * [Smart Resizer](), 通过 `@3x` 或 `@2x` 快速创建低倍图 -->

# 其它

暂时想到的就是这些, 有遗漏的话后面我会补充进来。
