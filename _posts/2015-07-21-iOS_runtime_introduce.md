---
title: "Objective-C Runtime 001 : 浅析与概述"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS,Objective-C,Runtime,RuntimeSeries]
---
很多人在初学 iOS 时都忽略掉了 Runtime 部分，因为 Objective-C 已经可以满足绝大部分的日常开发需求。



尽管由于 Swift 的出现使 Objective-C 的落寞成了不争的事实，但我想编程这个领域很多东西都是相通的，这次这篇博客，我也希望能至少对不懂 Objective-C Runtime 的朋友有一些帮助，在可见的几年内还是有很多用处的。

# 概述

### 什么是 Runtime

简单来说，Runtime 就是一套底层运行时库，它主要由 C 语言和汇编编写，为 C 语言增加了面向对象特性，是我们所写的 Objective-C 程序的真正幕后工作者，我们所写的代码，在程序执行时都转化为运行时代码。并且，它是[开源](https://opensource.apple.com/)的。

举个栗子，一句常用的创建对象的 OC 代码:
```objc
[[MXRuntimeDemoClass alloc] init]
```

它将转化为运行时代码:

```c
objc_msgSend(objc_msgSend("MXRuntimeDemoClass", "alloc"), "init")
```

这个例子中，简单理解，是将 Objective-C 中通过 `alloc` 分配内存后初始化的代码转化为 Runtime 中发送 `alloc` 和 `init` 消息的方式。如果你不理解这个例子，没关系，继续看后面的内容。

### 为什么使用 Runtime

我们知道，Objective-C 是一门面向运行时语言(Runtime Oriented Language)，换句话说，编译和链接时要执行的逻辑都被尽量延迟到了运行阶段，这给予了程序巨大的灵活性，通常 Runtime 会被用来实现一些使用 Objective-C 无法实现、不易实现或实现不理想的操作，例如在程序运行中动态创建一个类，或者添加、修改、遍历类的属性与方法等。

> 如果你对 Method Swizzling 感兴趣，可以参考 [jrswizzle](https://github.com/rentzsch/jrswizzle)。

可以说 Runtime 的确是一把锋利的刀，但也容易伤到自己，我并不推荐大家在实际应用中过多的使用 Runtime，尤其是你对它还不够熟练的情况下。

# 基本概念

### Modern Runtime 与 Legacy Runtime

对于苹果生态圈的开发者，我们主要关注两个部分:

* Modern Runtime: 覆盖所有 64 位的 Mac OS X 应用和所有 iPhone OS 的应用

* Legacy Runtime: 覆盖所有 32 位的 Mac OS X 应用

当然，由于 64 位快速普及，Legacy Runtime 很显然已经没有太多学习价值，因此我主要介绍 Modern Runtime 的相关知识。

### Class Method 与 Instance Method

对于 Objective-C 中方法的两种类型，我相信大家十分熟悉:

* Class Method: 类方法，以 `+` 开头，使用类名调用

* Instance Method: 实例方法，以 `-` 开头，使用类的实例调用

### Selector

我们使用的 selector 事实上只是一个 C 语言结构体:

```c
typedef struct objc_selector *SEL;
```


### Message

Objective-C 的消息(Message)和 C 函数的调用是不同的，向对象发送消息并不表示会被执行，因为对象会对消息的发送者作出检查，然后再决定执行还是转发。

### Class 与 Object

接下来，我们也可以进一步的理解类(Class)与对象(Object)的存在:

```c
typedef struct objc_class *Class;
typedef struct objc_object {
    Class isa;
} *id;
```

从这段代码中我们可以看到一个 Objective-C 类的结构体和一个对象的结构体，在后者(`objc_object`)中只有一个指向类的 `isa` 指针，但这及其关键，通过这个指针，当你向对象发送消息时，Objective-C Runtime 才能够检查对象并确认它的类，然后进一步确认对象是否响应 selector。新的实例对象的 `isa` 初始化为被指向一个结构体，这个结构体描述了对应的类，而我们之所以继承苹果提供的 NSObject 类，最重要的一点，也就是为了在内存中创建满足 Runtime 需求的实例结构。

当然，你应该知道 Objective-C 类事实上也是对象，它是类类型(`MetaClass`)的实例。结合一开始的例子，接收 `alloc` 消息的 `MXRuntimeDemoClass` 就是一个类对象。

### Block

此外不得不提到 Block:

```c
struct Block_literal_1 {
    void *isa; // initialized to &_NSConcreteStackBlock or &_NSConcreteGlobalBlock
    int flags;
    int reserved;
    void (*invoke)(void *, ...);
    struct Block_descriptor_1 {
        unsigned long int reserved; // NULL
        unsigned long int size;  // sizeof(struct Block_literal_1)
        // optional helper functions
        void (*copy_helper)(void *dst, void *src);
        void (*dispose_helper)(void *src);
    } *descriptor;
    // imported variables
};
```

可以看到，Block 的设计完全兼容 Objective-C Runtime，也就是说 Block 也可以响应消息。

### IMP

IMP 指的是方法实现(Method Implementations)，它是指向方法实现的函数指针。

```c
typedef id (*IMP)(id self,SEL _cmd,...);
```

SEL 与 IMP 它们分别记录了方法的方法名和实现，被包含在方法中，而方法又包含在类中。

### Class Cache

当我们追随 `isa` 指针作出一系列的检查，你可能会找到许多方法，而事实上它们中很大一部分你可能永远都不会调用，那么每次都检查其分发表(dispatch table)中的所有方法就显得十分浪费，类缓存(Class Cache)的概念也就随之诞生了。当分发表中存在合适的 selector 时，它会被放入类缓存，而类缓存会优先于分发表被 `objc_msgSend()` 检查。

> [Apple: Class Clusters](https://developer.apple.com/library/ios/documentation/General/Conceptual/CocoaEncyclopedia/ClassClusters/ClassClusters.html)

### Runtime 中的一些表示

```c
// 表示类中的方法
typedef struct objc_method *Method;

// 表示实例变量
typedef struct objc_ivar *Ivar;

// 表示类别
typedef struct objc_category *Category;

// 表示类中的属性
typedef struct objc_property *objc_property_t;

// 类
struct objc_class {
    Class isa; // 实例的isa指向类对象，类对象的isa指向元类

#if !__OBJC2__
    Class super_class;  // 指向父类
    const char *name;  // 类名
    long version;
    long info;
    long instance_size
    struct objc_ivar_list *ivars // 成员变量列表
    struct objc_method_list **methodLists; // 方法列表
    struct objc_cache *cache;// 缓存
    struct objc_protocol_list *protocols // 协议列表
    #endif
} OBJC2_UNAVAILABLE;
```


### 调用

我们已经知道，在 Objective-C 中调用方法正是通过 `objc_msgSend()` 发送消息来实现的，我们所写的 Objective-C 方法会被解释为 C 语言函数，虽然并不能直接调用，但可以获得函数指针，并通过函数指针进一步访问。

当我们调用一个方法，如果是实例方法，则会到实例的 `isa` 指向的对象也即类对象中操作；如果是类方法，则会到类对象的 `isa` 指向的对象也即元类对象中操作。确定了操作对象，则在该操作对象的缓存中查找方法，如果找到则转向实现，反之进入方法列表查找，如果找到则转向实现，如果仍旧没有找到，则在父类中执行同样的查找，以此类推，如果一直到根类还没有找到，则进行转发，如果没有重写转发方法，则程序报错。

### 转发

那么，我们再来了解一下转发，需要介绍几个方法:

```objc
+ (BOOL)resolveClassMethod:(SEL)sel;
+ (BOOL)resolveInstanceMethod:(SEL)sel;
- (id)forwardingTargetForSelector:(SEL)aSelector;
- (void)forwardInvocation:(NSInvocation *)anInvocation;
```

简单来说:

* `+ (BOOL)resolveClassMethod:(SEL)sel;`: 当我们调用一个不存在的类方法时会调用这个方法，默认返回 `NO`，我们可以添加自己的处理后返回 `YES`

* `+ (BOOL)resolveInstanceMethod:(SEL)sel;`: 和前一个方法相似，但处理对象是实例方法

* `- (id)forwardingTargetForSelector:(SEL)aSelector;`: 将我们调用的不存在的方法重新定向到其它声明了该方法的类，唯一要做的就是返回一个包含该方法的 `target`

* `- (void)forwardInvocation:(NSInvocation *)anInvocation;`: 将我们调用的不存在的方法包装为 `NSInvocation`，我们可以添加自己的处理后通过 `invokeWithTarget:` 方法触发

那么可以看出，其实向一个无法响应某方法的对象发送消息也是完全合法的，甚至向 `nil` 发送消息也是合法的，这并不是设计缺陷，有一个原因是为了模拟多继承。

