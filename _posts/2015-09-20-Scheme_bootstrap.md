---
category: "Lisp"
cave: true
hero:
  format: 'jpeg'
  url: 'post/scheme.jpg'
quote: true
title:  "完成一个 Scheme 解释器需要哪些知识"
tags: [Scheme, Quote]
summary: "完成一个 Scheme 解释器需要哪些知识"
---
### 源码级解释器

在词法、语法分析的过程中解释执行其语义，不需要生成抽象语法树
对于简单的语言 (如各种 Scheme 子集) ，实现起来比较方便，间接层少，但是模块耦合度大，不方面调试。

### 基于语法树解释

生成抽象语法树 (`AST`) 再解释。AST形式不唯一 (事实上，Scheme源代码已经很AST了) 语法树解释器的执行效率仍然不高。

### 字节码解释器

可以边解析边生成字节码，也可以基于AST生成字节码。
字节码是一种 `IR` (中间表示) ，可以把字节码转换为 `SSA`、`CPS` 等其他 `IR` 的形式，方面优化。

### 生成机器码

全部编译成机器码：从源代码直接生成；从AST生成；从字节码生成
`JIT` 技术：`baseline JIT`，`tracing JIT`。`JIT` 可以考虑用 `LLVM` 辅助

### 基于各种IR的优化

`SSA`、`CPS` 等。这一块比较"底层"，或者说背景比较多、杂。
其实构造SSA的过程就会进行常量折叠、公共子表达式消除等优化。构造完后可以再基于SSA做优化。
循环相关的优化主要在这一层面，太多了。

其实也有很多优化是设计上的选择，或者 `tricks`，或者说宏观需要考虑的，比如下面这些：

### Value representation

如何表示 scheme 的值？最 `naive` 的

```scm
enum type { integer, pair, string, vector, ... };
typedef struct value *SCM;
struct value {
	enum type type;
	union {
	    int integer;
	    struct { SCM car, cdr; } pair;
	    struct { int length; char *elts; } string;
	    struct { int length; SCM *elts; } vector;
	    ...
    } value;
};
```


int类型的数需要打包在value里面，获取它的值要进行那么多操作：`x->value.integer`。时空复杂度都比较高。[bootstrap-scheme/scheme.c at v0.21 · petermichaux/bootstrap-scheme · GitHub](https://github.com/petermichaux/bootstrap-scheme/blob/v0.21/scheme.c) 中就是类似的做法。
比较现代的方式有：`tagging pointer`、`nan-boxing`、`num-boxing`、`Ruby`、`V8`、`Lua`等都是用第一种。Lua JIT，IronJS是第二种

### Type Specialization
动态的type feedback和静态的type inference。Scheme是动态类型语言，可以通过类型反馈/推导，减少运行时类型检查/转换。在JIT中，可以根据类型预测的结果生成一条快速路径。。

### 虚拟机相关
字节码的指令设计？
字节码解释器的指令分派方式 (switch-threading，token-threading等) ？

虚拟机用栈式还是寄存器式？
GC用引用计数还是tracing？。当然GC还有很多可讲的。
尽量用native stack实现VM stack

### 函数式语言相关
`uncurring`，`inlining switch continuations`，`stream fusion`...
PS：`JavaScript` / `Ruby` 语法已经很函数式了，但是基本无此类优化，因为实际使用起来函数式特性造成的问题不如其他方面：做好传统的优化，解决部分动态类型造成的问题，已经很不错了。

### 附
[bootstrap-scheme](https://github.com/petermichaux/bootstrap-scheme/blob/v0.21/scheme.c) 这是最直接的实现
[Lisp-In-Small-Pieces](https://github.com/appleby/Lisp-In-Small-Pieces)  Lisp in Small Piece书上的实现
