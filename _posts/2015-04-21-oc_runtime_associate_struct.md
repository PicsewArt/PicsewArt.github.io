---
title: "Obj-C: Associate struct value to your object"
category: "Objective-C"
copy: true
tags: [Objective-C, Runtime]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
---

The `value` of function `OBJC_EXPORT void objc_setAssociatedObject(id object, const void *key, id value, objc_AssociationPolicy policy)` must be an Objective-C object. We need to wrap the struct in an Objective-C class.

```objc
StructType s = ...;
NSValue* value = [NSValue valueWithBytes:&s objCType:@encode(StructType)];
objc_setAssociatedObject(obj, SPECIAL_KEY, value, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
// ...
NSValue* value = objc_getAssociatedObject(obj, SPECIAL_KEY);
StructType s;
[value getValue:&s];
```
