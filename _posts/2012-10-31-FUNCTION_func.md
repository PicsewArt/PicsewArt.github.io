---
category: "C"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0027.jpg'
title:  "__FUNCTION__ 与 __func__ 浅析"
tags: [C,iOS,C++,__FUNCTION__,__func__]
---
可能大家在日常开发中经常用到 `__func__` 或 `__FUNCTION__`，但不知道有没有和我一样，一开始并不知道两者有什么区别该使用哪个，该注意什么。

### `__func__`

`__func__` 是 C99 引入的新标识符，用来报告未被修饰的正在被访问的函数名。

`__func__` 并不是宏定义，事实上它是以**隐式声明的常量字符数组**的形式实现的，其定义是:

```c
static const char __func__[] = "function-name";
```


### `__FUNCTION__` 与 `__FUNC__`

我们知道，ISO C++ 标准中并不完全支持 C99 的全部特性，前面提到的 `__func__` 正是不被支持的特性之一，因此许多编译器提供 `__FUNCTION__` 作为代替，通常它是定义为 `__func__` 的宏，因此在功能上并没有什么差异。

如果你在某些开发环境中见到 `__FUNC__`，事实上它与 `__FUNCTION__` 是类似的。

### 其它

在 GCC 3.0 以及之后的版本，同时支持 `__FUNCTION__` 和 `__func__`。




