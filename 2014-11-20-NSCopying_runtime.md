---
title: "iOS: 用 Runtime 实现全局 NSCopying"
category: "iOS"
copy: true
tags: [iOS, Runtime, Objective-C, NSCopying]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
给每个类手动添加 `NSCopying` 支持真的很累, 干脆一次性解决吧:

```objc
#import <Foundation/Foundation.h>

@interface MXObject : NSObject <NSCopying>

@end
```

```objc
#import "MXObject.h"
#import <objc/runtime.h>

@implementation MXObject
- (instancetype)copyWithZone:(NSZone *)zone {
    id obj = [[[self class] allocWithZone:zone] init];

    unsigned int uVarCount = 0;
    Ivar *pVarList = class_copyIvarList(self.class, &uVarCount);

    for (unsigned int i = 0; i < uVarCount; ++i) {

        Ivar *pVar = pVarList+i;
        const char *typeEncoding = ivar_getTypeEncoding(*pVar);
        NSString *strTypeEncoding = [NSString stringWithUTF8String:typeEncoding];
//        const char *name = ivar_getName(*pVar);
//        NSLog(@"var name:%s, type:%s", name, typeEncoding);

        if ([strTypeEncoding hasPrefix:@"@"]) {

            // it is a object
            id o = object_getIvar(self, *pVar);
            o = [o copy];
            object_setIvar(obj, *pVar, o);

        } else {

            unsigned int size = 0;
            BOOL support = NO;
            size = [self sizeOfTypeEncoding:strTypeEncoding supported:&support];
            if (!support) {
                NSString *reason = [NSString stringWithFormat:@"Don't support type encoding %@", strTypeEncoding];
                NSException *exception = [NSException exceptionWithName:@"UnsupportedTypeException" reason:reason userInfo:nil];
                [exception raise];
            }
            ptrdiff_t offset = ivar_getOffset(*pVar);
            uint8_t *src = (uint8_t *)(__bridge void *)self + offset;
            uint8_t *dst = (uint8_t *)(__bridge void *)obj + offset;
            memcpy(dst, src, size);
        }
    }

    free(pVarList);

    return obj;
}

- (unsigned int)sizeOfTypeEncoding:(NSString *)typeEncoding supported:(BOOL *)support {
    *support = YES;
    unsigned int size = 0;
    if ([typeEncoding isEqualToString:@"c"] ||
        [typeEncoding isEqualToString:@"C"]) {
        size = sizeof(char);
    } else if ([typeEncoding isEqualToString:@"i"] ||
               [typeEncoding isEqualToString:@"I"]) {
        size = sizeof(int);
    } else if ([typeEncoding isEqualToString:@"s"] ||
               [typeEncoding isEqualToString:@"S"]) {
        size = sizeof(short);
    } else if ([typeEncoding isEqualToString:@"l"] ||
               [typeEncoding isEqualToString:@"L"]) {
        size = sizeof(long);
    } else if ([typeEncoding isEqualToString:@"q"] ||
               [typeEncoding isEqualToString:@"Q"]) {
        size = sizeof(long long);
    } else if ([typeEncoding isEqualToString:@"f"]) {
        size = sizeof(float);
    } else if ([typeEncoding isEqualToString:@"d"]) {
        size = sizeof(double);
    } else if ([typeEncoding isEqualToString:@"B"]) {
        size = sizeof(bool);
    } else {
        *support = NO;
        // v is void
        // * is char *
        // @ is object
        // # is class object
        // : is method selector
        // [ is array
        // { is struct
        // ( is union
        // b is bit
        // ^ pointer to type
        // ? other
        size = 0;
    }
    return size;
}
@end
```
