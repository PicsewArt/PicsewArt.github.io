---
title: "Difference between enum and NS_ENUM in Objective-C"
category: "iOS"
copy: true
tags: [iOS, Objective-C, NS_ENUM, enum]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0020.jpg'
---
First, `NS_ENUM` uses a new feature of the C language where you can specify the underlying type for an `enum`. In this case, the underlying type for the `enum` is NSInteger (in plain C it would be whatever the compiler decides, char, short, or even a 24 bit integer if the compiler feels like it).

Second, the compiler specifically recognises the `NS_ENUM` macro, so it knows that you have an `enum` with values that shouldn't be combined like flags, the debugger knows what's going on, and the `enum` can be translated to Swift automatically.

`NS_ENUM` allows you to define a type. This means that the compiler can check if you're assigning the `enum` to a different variable like so:

```objc
//OK in both cases
NSInteger integer = SizeWidth;
//OK only with typedef
BOOL value = SizeHeight;
```

`NS_ENUM` also provides checks in switch statements that you've covered all possible values:

```objc
//Will generate warning if using `NS_ENUM`
switch(sizeVariable) {
    case SizeWidth:
        //Do something
}
```
