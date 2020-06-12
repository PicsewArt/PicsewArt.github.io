---
title: "iOS 面试题: 对 Runtime 的理解"
category: "iOS"
tags: [Interview]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0045.jpg'
---
最近遇到和看到的一些面试题。

#### 为什么其他语言里叫函数调用, Objective-C里则是给对象发消息(或者谈下对Runtime的理解)

先来看看怎么理解发送消息的含义:

曾经觉得Objc特别方便上手,面对着 Cocoa 中大量 API,只知道简单的查文档和调用。还记得初学 Objective-C 时把[receiver message]当成简单的方法调用,而无视了“发送消息”这句话的深刻含义。于是[receiver message]会被编译器转化为:

`objc_msgSend(receiver, selector)`

如果消息含有参数,则为:

`objc_msgSend(receiver, selector, arg1, arg2, ...)`

如果消息的接收者能够找到对应的selector,那么就相当于直接执行了接收者这个对象的特定方法;否则,消息要么被转发,或是临时向接收者动态添加这个selector对应的实现内容,要么就干脆玩完崩溃掉。

现在可以看出`[receiver message]`真的不是一个简简单单的方法调用。因为这只是在编译阶段确定了要向接收者发送message这条消息,而receive将要如何响应这条消息,那就要看运行时发生的情况来决定了。

Objective-C 的 Runtime 铸就了它动态语言的特性,这些深层次的知识虽然平时写代码用的少一些,但是却是每个 Objc 程序员需要了解的。

Objc Runtime使得C具有了面向对象能力,在程序运行时创建,检查,修改类、对象和它们的方法。可以使用runtime的一系列方法实现。

顺便附上OC中一个类的数据结构 `/usr/include/objc/runtime.h`

```objc
struct objc_class {
    Class isa OBJC_ISA_AVAILABILITY; //isa指针指向Meta Class,因为Objc的类的本身也是一个Object,为了处理这个关系,r        untime就创造了Meta Class,当给类发送[NSObject alloc]这样消息时,实际上是把这个消息发给了Class Object

    #if !__OBJC2__
    Class super_class OBJC2_UNAVAILABLE; // 父类
    const char *name OBJC2_UNAVAILABLE; // 类名
    long version OBJC2_UNAVAILABLE; // 类的版本信息,默认为0
    long info OBJC2_UNAVAILABLE; // 类信息,供运行期使用的一些位标识
    long instance_size OBJC2_UNAVAILABLE; // 该类的实例变量大小
    struct objc_ivar_list *ivars OBJC2_UNAVAILABLE; // 该类的成员变量链表
    struct objc_method_list **methodLists OBJC2_UNAVAILABLE; // 方法定义的链表
    struct objc_cache *cache OBJC2_UNAVAILABLE; // 方法缓存,对象接到一个消息会根据isa指针查找消息对象,这时会在method        Lists中遍历,如果cache了,常用的方法调用时就能够提高调用的效率。
    struct objc_protocol_list *protocols OBJC2_UNAVAILABLE; // 协议链表
    #endif
} OBJC2_UNAVAILABLE;
```

OC中一个类的对象实例的数据结构(`/usr/include/objc/objc.h`):

```objc
typedef struct objc_class *Class;

/// Represents an instance of a class.
struct objc_object {
    Class isa  OBJC_ISA_AVAILABILITY;
};

/// A pointer to an instance of a class.
typedef struct objc_object *id;
```

向object发送消息时,Runtime库会根据object的isa指针找到这个实例object所属于的类,然后在类的方法列表以及父类方法列表寻找对应的方法运行。id是一个objc_object结构类型的指针,这个类型的对象能够转换成任何一种对象。

然后再来看看消息发送的函数: objc_msgSend函数

在引言中已经对objc_msgSend进行了一点介绍,看起来像是objc_msgSend返回了数据,其实objc_msgSend从不返回数据而是你的方法被调用后返回了数据。下面详细叙述下消息发送步骤:

* 检测这个 selector 是不是要忽略的。比如 Mac OS X 开发,有了垃圾回收就不理会 retain,release 这些函数了。

* 检测这个 target 是不是 nil 对象。ObjC 的特性是允许对一个 nil 对象执行任何一个方法不会 Crash,因为会被忽略掉。

* 如果上面两个都过了,那就开始查找这个类的 IMP,先从 cache 里面找,完了找得到就跳到对应的函数去执行。

* 如果 cache 找不到就找一下方法分发表。

* 如果分发表找不到就到超类的分发表去找,一直找,直到找到NSObject类为止。

* 如果还找不到就要开始进入动态方法解析了,后面会提到。

后面还有:

* 动态方法解析`resolveThisMethodDynamically`
* 消息转发`forwardingTargetForSelector`
