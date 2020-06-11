---
title: "Xcode: TODO 的实现"
category: "Xcode"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0030.jpg'
tags: [Xcode, iOS, Macro, 宏, Obejctive-C, C]
---
自从 `Xcode Ghost` 事件之后苹果就开始收缩插件功能了, 直到现在的 `Xcode` 已经去掉了旧形式的插件。

安全性在很大程度上算是提高了, 但是也随之带来一些不便, 比如之前不能再使用 TODO 插件等。

下面我们开始着手实现一个 TODO 效果。首先明确我们的目的, 那就是让 Xcode 产生警告, 要做到这个效果有两种途径:

***

# Macro

![TODO MACRO]({{ site.url }}/assets/images/posts/content/todo_macro_preview.png)

![TODO MACRO]({{ site.url }}/assets/images/posts/content/todo_macro_preview_2.png)

相关的预处理指令有:

```c
#warning elias
#pragma message "elias"
#pragma GCC warning "elias"
#error elias
#pragma GCC error "elias"
```

但是问题来了, 我们是不能通过 `#define` 来使用这些预处理指令。这时候 `_Pragma` 就派上了用场，它可以将部分 `#pragma` 指令字符串化, 例如刚才提到的:

```c
#pragma message "elias"
// 它等价于
_Pragma("message(\"elias\")")
// 也等价于
_Pragma("message \"elias\"")
```

这下就简单了, 先来一个简单的:

```c
#define DEFINE_WARNING _Pragma("message(\"elias\")")
int main(void) {
    // 警告[!]elias
    DEFINE_WARNING
    return 1;
}
```

警告产生了, 但我们还希望警告的内容可以自定义:

```c
#define STRINGILY(S) #S
#define DEFER_STRINGIFY(S) STRINGIFY(S)
#define PRAGMA_MESSAGE(MSG) _Pragma(STRINGILY(message(MSG)))
```

其中, `STRINGILY` 作为辅助, 将传入的参数字符串化; 之后的 `PRAGMA_MESSAGE` 使用这个结果产生警告。

```c
#define FORMATTED_MSG(T, MSG) "[" T "] " MSG
#define WARNING_MACRO(T, MSG) PRAGMA_MSG(FORMATTED_MSG(DEFER_STRINGIFY(T), STRINGIFY(MSG)))
```

至此, 一个基本形态已经显现。

接下来, 最后的努力, 为了让这个宏更加明显, 也更有 `Objective-C` 的风格, 我们要将他设计成 `@TODO()` 的样式:

> 其实本来理想的写法是类似 `Swift` 的样式, 即 `// TODO:`, 但是在这种方案中, 目前我还没有想到或到好的方案。如果你感兴趣, 请参考第二种 TODO 实现方案。如果你有好的建议, 请联系我: [meniny@qq.com](mailto:meniny@qq.com)。

```c
#if defined(DEBUG) && !defined(NDEBUG)
#define MXKEYWORDIFY autoreleasepool {}
#else
#define MXKEYWORDIFY try {} @catch (...) {}
#endif
```

这个 `@` 符号我们通过定义了 `MXKEYWORDIFY` 宏来实现。

紧接着我们最终的版本就完成了:

```c
#define TODO(MSG) MXKEYWORDIFY WARNING_MACRO(TODO, MSG)
```

它的使用也很简单:

```c
@TODO(this is a TODO macro sample)
```

如果你愿意你也可以改为其它样式, 比如使用 `$` 开头:

```c
#define $TODO(MSG) WARNING_MACRO(TODO, MSG)
```

> 其实 `WARNING_MACRO` 不单单可以用作 TODO, 你还可以对其扩展做更多的场合, 例如 FIXME 等。

***

# Script

![TODO MACRO]({{ site.url }}/assets/images/posts/content/todo_macro_preview_script.png)

![TODO MACRO]({{ site.url }}/assets/images/posts/content/todo_macro_preview_script_2.png)

在 `Build Phases` 中可以增加和运行脚本大家应该都知道, 这也是我们可以利用的点之一。

点击 `Build Phases` 中左上角的 `+` 符号, 选择 `Add Run Script Phase`。

![Add Phase]({{ site.url }}/assets/images/posts/content/build_phases_add_phase_run_script.png)

展开新添加的 `Run Script` 模块, `Shell` 保持 `/bin/sh`, 下面的代码框中输入:

```sh
KEYWORDS="TODO:|FIXME:|TEAM:|XXX:"
find "${SRCROOT}" \( -name "*.h" -or -name "*.m" \) -print0 | xargs -0 egrep --with-filename --line-number --only-matching "($KEYWORDS).*\$" | perl -p -e "s/($KEYWORDS)/ warning: \$1/"
```

这段脚本中我们不仅指定了 TODO, 还指定了 FIXME、TEAM 等。因为逻辑很简单, 只是查找关键字。

使用依旧简单:

```c
// TODO: this is a shell warning sample
```
