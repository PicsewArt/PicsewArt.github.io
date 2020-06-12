---
title: "Objective-C Runtime 002 : 基本应用"
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0041.jpg'
tags: [iOS,Objective-C,Runtime,RuntimeSeries]
---
通过上一篇的一些简单介绍与阐述，相信大家应该对 Runtime 有一个基本的认识了，于是，这一篇我们就来看看 Runtime 的基本应用。

# 准备工作

首先作为一个库，当然需要导入其头文件:

```objc
#include <objc/runtime.h>
```


# 基本应用

### 获取和修改对象的类

```c
Class object_getClass(id obj)// 获取对象的类
Class object_setClass(id obj, Class cls)// 设置对象的类
```

来看一个实例:

```objc
MXRuntimeDemoClass *obj = [MXRuntimeDemoClass new];

Class aClass = object_getClass(obj);
NSLog(@"aClass:%@", NSStringFromClass(aClass));
NSLog(@"objClass1:%@", NSStringFromClass([obj class]));

Class returnClass = object_setClass(obj, [MXSomeDemoClass class]);
NSLog(@"returnClass:%@", NSStringFromClass(returnClass));
NSLog(@"objClass2:%@", NSStringFromClass([obj class]));
```

打印结果是:
```sh
aClass:MXRuntimeDemoClass
objClass1:MXRuntimeDemoClass
returnClass:MXRuntimeDemoClass
objClass2:MXSomeDemoClass
```


### 获取对象的类名

```c
const char *object_getClassName(id obj)
```

来看一个实例:

```objc
MXRuntimeDemoClass *obj = [MXRuntimeDemoClass new];
const char *name = object_getClassName(obj);
NSString *className = [NSString stringWithCString:name encoding:NSUTF8StringEncoding];
NSLog(@"className:%@", className);
```

打印结果:

```sh
className:MXRuntimeDemoClass
```


### 添加方法

```c
BOOL class_addMethod(Class cls,SEL name,IMP imp, const char *types)
```

此函数具有四个参数:

* `Class cls`: 要添加方法的类

* `SEL name`: 要添加的方法的方法名

* `IMP imp`: 要添加的方法的实现

* `const char *types`: 方法签名，你可以参考[官方文档](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html)，这里不做赘述

首先，要动态的为类添加一个方法，需要先定义这个方法的实现，例如一个 C 实现:

```c
int newFunction(id self, SEL _cmd, NSString *str, NSNumber *num) {
    NSLog(@"\nstr:%@\nnum:%@\n", str, num);
    return num.intValue;
}
```

接下来，添加和调用:

```objc
MXRuntimeDemoClass *obj = [MXRuntimeDemoClass new];
BOOL res = class_addMethod([MXRuntimeDemoClass class], @selector(newMethod::), (IMP)newFunction, "i@:@@");
if ([obj respondsToSelector:@selector(newMethod::)]) {
  NSLog(@"Success");
  [obj performSelector:@selector(newMethod::) withObject:@"String" withObject:@(2)];
} else {
  NSLog(@"Failed");
}
```

打印结果是:

```sh
Success
str:String
num:2
```

需要注意的是，如果类中已经存在此实现，将不会进行替换，要替换实现请使用:

```c
IMP method_setImplementation(Method m, IMP imp)
```


> 如果不使用 C 实现而是 Objective-C 的话，你需要使用 `(IMP)instanceMethodForSelector:(SEL)aSelector;` 方法，不做赘述。

### 关联对象

```c
void objc_setAssociatedObject(id object, const void *key, id value, objc_AssociationPolicy policy)
id objc_getAssociatedObject(id object, const void *key)
```

首先解释一下这两个方法的参数，设置关联对象的方法 `objc_setAssociatedObject` 有四个参数:

* `id object`: 要关联对象的实例。

* `const void *key`: 关联对象的 key 值，主要用来在其他地方获取关联对象

* `id value`: 关联对象

* `objc_AssociationPolicy`: 关联策略

其中最后一个参数 `objc_AssociationPolicy` (关联策略)包括下列内容:
```c
typedef OBJC_ENUM(uintptr_t, objc_AssociationPolicy) {
    OBJC_ASSOCIATION_ASSIGN = 0,           /**< Specifies a weak reference to the associated object. */
    OBJC_ASSOCIATION_RETAIN_NONATOMIC = 1, /**< Specifies a strong reference to the associated object.
                                            *   The association is not made atomically. */
    OBJC_ASSOCIATION_COPY_NONATOMIC = 3,   /**< Specifies that the associated object is copied.
                                            *   The association is not made atomically. */
    OBJC_ASSOCIATION_RETAIN = 01401,       /**< Specifies a strong reference to the associated object.
                                            *   The association is made atomically. */
    OBJC_ASSOCIATION_COPY = 01403          /**< Specifies that the associated object is copied.
                                            *   The association is made atomically. */
};
```

获取关联对象的方法 `objc_getAssociatedObject` 有两个参数:

* `id object`: 包含要获取的关联对象的实例

* `const void *key`: 关联对象的 key，和前面提到的一致

好了，现在来看实例:

```c
MXRuntimeDemoClass *obj = [[MXRuntimeDemoClass alloc] init];
// 使用 associatedObjectKey 的地址作为 key 值
static char associatedObjectKey;
// 创建关联对象
NSString *assString = @"这是一个关联对象";
// 添加为实例 obj 添加关联对象
objc_setAssociatedObject(obj, &associatedObjectKey, assString, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
// 通过 key 获取关联对象
NSString *getStr = objc_getAssociatedObject(obj, &associatedObjectKey);
NSLog(@"%@", getStr);
```

打印结果:

```c
这是一个关联对象
```


### 替换方法

```c
IMP class_replaceMethod(Class cls, SEL name, IMP imp, const char *types)
```

参数与 `class_addMethod` 类似，不做赘述。

### 获取类中的所有方法名

```c
SEL method_getName(Method m)
Method *class_copyMethodList(Class cls, unsigned int *outCount)
```

来看实例:

```objc
unsigned int insCount = 0;
Method *insMethods = class_copyMethodList([MXRuntimeDemoClass class], &insCount);
for (NSInteger i = 0; i < insCount; ++i) {
  SEL name = method_getName(insMethods[i]);
  NSString *nameString = [NSString stringWithCString:sel_getName(name) encoding:NSUTF8StringEncoding];
  NSLog(@"%@", nameString);
}

unsigned int classCount = 0;
Method *classMethods = class_copyMethodList(object_getClass([MXRuntimeDemoClass class]), &classCount);
for (NSInteger i = 0; i < classCount; ++i) {
  SEL name = method_getName(classMethods[i]);
  NSString *nameString = [NSString stringWithCString:sel_getName(name) encoding:NSUTF8StringEncoding];
  NSLog(@"%@", nameString);
}
```

其中 `MXRuntimeDemoClass` 类中只有下列方法的定义:

* `- (void)someInstanceMethod1;`

* `- (void)someInstanceMethod2;`

* `+ (void)someClassMethod;`

打印结果:

```sh
someInstanceMethod1
someInstanceMethod2
someClassMethod
```


### 获取类中的所有属性名

```c
objc_property_t *class_copyPropertyList(Class cls, unsigned int *outCount)
```

来看实例:

```objc
u_int count;
objc_property_t *properties = class_copyPropertyList([MXRuntimeDemoClass class], &count);
for (int i = 0; i < count ; i++) {
  const char *propertyName = property_getName(properties[i]);
  NSString *nameString = [NSString stringWithCString:propertyName encoding:NSUTF8StringEncoding];
  NSLog(@"%@", nameString);
}
```

打印结果:

```sh
someInteger
someString
someArray
```


### 获取所有实例变量

```c
Ivar *class_copyIvarList(Class cls, unsigned int *outCount)
```

来看实例:

```objc
MXRuntimeDemoClass *obj = [[MXRuntimeDemoClass alloc] init];
[obj setSomeNumber:@(99)];
[obj setSomeArray:@[@"Hello", @(2)]];
[obj setSomeString:@"String"];

unsigned int count = 0;
Ivar * ivars = class_copyIvarList([MXRuntimeDemoClass class], &count);

for(int i = 0; i < count; i++) {
  Ivar someIvar = ivars[i];

  NSString *ivarName = [NSString stringWithCString:ivar_getName(someIvar) encoding:NSUTF8StringEncoding];

  NSString *ivatType = [NSString stringWithCString:ivar_getTypeEncoding(someIvar) encoding:NSUTF8StringEncoding];

  id var = object_getIvar(obj, someIvar);

  NSLog(@"%@(%@) = %@", ivarName, ivatType, var);
}
```

打印结果:

```sh
_someInteger(q) = (null)
_someNumber(@"NSNumber") = 99
_someString(@"NSString") = String
_someArray(@"NSArray") = (
    Hello,
    2
)
```


当然你不但可以获取 iVar 的值，也可以做出修改:

```c
id object_getIvar(id obj, Ivar ivar)
void object_setIvar(id obj, Ivar ivar, id value)
```

根据苹果的说明，这两个方法在实例变量已知的情况下，要比 `object_getInstanceVariable` 和 `object_setInstanceVariable` 方法更快，这里不做赘述。

### 交换方法实现

```c
void method_exchangeImplementations(Method m1, Method m2)
```

来看实例:

```objc
Method method1 = class_getInstanceMethod([NSString class], @selector(lowercaseString));
Method method2 = class_getInstanceMethod([NSString class], @selector(uppercaseString));
method_exchangeImplementations(method1, method2);
NSLog(@"lowercaseString:%@", [@"www.MENINY.cn" lowercaseString]);
NSLog(@"uppercaseString:%@", [@"WWW.meniny.CN" uppercaseString]);
```

打印结果:

```sh
lowercaseString:WWW.MENINY.CN
uppercaseString:www.meniny.cn
```


### 获取和设置方法实现

```c
Method class_getInstanceMethod(Class cls, SEL name)
IMP method_setImplementation(Method m, IMP imp)
```

来看实例，首先在测试类 `MXRuntimeDemoClass` 中声明和定义两个方法:
```objc
- (void)someInstanceMethod1 {
    NSLog(@"%s", __func__);
}

- (void)someInstanceMethod2 {
    NSLog(@"%s", __func__);
}
```

接下来我们将获取 `someInstanceMethod1` 的实现，并设置给 `someInstanceMethod2`:

```objc
MXRuntimeDemoClass *obj = [[MXRuntimeDemoClass alloc] init];
[obj someInstanceMethod2];

Method method1 = class_getInstanceMethod([MXRuntimeDemoClass class], @selector(someInstanceMethod1));
IMP methodIMP = method_getImplementation(method1);

Method method2 = class_getInstanceMethod([MXRuntimeDemoClass class], @selector(someInstanceMethod2));
method_setImplementation(method2, methodIMP);

[obj someInstanceMethod2];
```

打印结果:

```sh
[MXRuntimeDemoClass someInstanceMethod2]
[MXRuntimeDemoClass someInstanceMethod1]
```


## OBJC\_ARC\_UNAVAILABLE

此外，还有一些函数并不支持 ARC 模式，分别有:

```c
// OBJC_ARC_UNAVAILABLE
id object_copy(id obj, size_t size)// 对象拷贝
id object_dispose(id obj)// 对象释放
Ivar object_setInstanceVariable(id obj, const char *name, void *value)// 设置实例变量的值
Ivar object_getInstanceVariable(id obj, const char *name, void **outValue)// 获取实例变量的值
Class objc_getFutureClass(const char *name)
id class_createInstance(Class cls, size_t extraBytes)
id objc_constructInstance(Class cls, void *bytes)
void *objc_destructInstance(id obj)
```

以及下面几个不支持 iOS 环境的函数:

```c
// OBJC_ARC_UNAVAILABLE
// __IPHONE_NA
id object_copyFromZone(id anObject, size_t nBytes, void *z)
id class_createInstanceFromZone(Class, size_t idxIvars, void *z)
```


# 结语

那么，Runtime 的基本使用就是这样，事实上 `runtime.h` 中还有很多函数，提供了十分详尽的功能和解释，基本的道理是一样的，大家只需要根据需求灵活应用。当然，还是那句话，Runtime 的确是一把锋利的刀，但要小心伤到自己。




