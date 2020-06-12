---
title: "The best way to create constants in Objective-C"
category: "iOS"
copy: true
tags: [iOS, Objective-C]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0012.jpg'
---
The first question is what scope you want your constants to have, which is really two questions:

* Are these constants specific to a single class, or does it make sense to have them all over the application?
* If they are class-specific, are they for use by clients of the class, or only within the class?

If they are specific and internal to a single class, declare them as static const at the top of the `.m` file, like so:

```objc
static NSString *const kSampleNotificationKey = @"kSampleNotificationKey";
```

If they pertain to a single class but should be public/used by other classes, declare them as extern in the header and define them in the `.m`:

```objc
//.h
extern NSString *const kSampleNotificationKey;
```

```objc
//.m
NSString *const kSampleNotificationKey = @"kSampleNotificationKey";
```

If they should be global, declare them in a header and define them in a corresponding module, specifically for those constants.

You can mix and match these for different constants with different levels of how global you want them to be, and for different global constants that simply don't belong together—you can put them in separate modules, each with its own header, if you want.

## `extern`

Consider using `FOUNDATION_EXPORT`, `UIKIT_EXTERN`, ..., `CG_EXTERN` for a bit more compatibility than extern since it is defined in foundation and compiles to compatible formats for C, C++, and Win32.

## Why not `#define`?

The old answer is “macros don't have type information”, but compilers today are pretty smart about doing all the type-checking for literals (what macros expand to) as well as variables.

The modern answer is because the debugger won't know about your macros. You can't say [myThing addObserver:self forKey:kSampleNotificationKey] in a debugger command if kSampleNotificationKey is a macro; the debugger can only know about it if it is a variable.

## Why not `enum`?

Well, rmaddy beat me to it in the comments: enum can only define integer constants. Things like serial identifier numbers, bit-masks, four-byte codes, etc.

For those purposes, enum is great and you absolutely should use it. (Even better, use the NS_ENUM and NS_OPTIONS macros.) For other things, you must use something else; enum does not do anything but integers.

## And other questions

> I was thinking about importing the file in the Reddit-Prefix.pch file to make the constants available to all the files. Is it a good way of doing things?

Probably harmless, but probably excessive. Import your constants header(s) where you need them.

> What are the use cases for each of those solutions?

* `#define`: Pretty limited. I'm honestly not sure there's a good reason to use this for constants anymore.
* `const`: Best for local constants. Also, you have to use this for one you declared in a header and are now defining.
* `static const`: Best for file-specific (or class-specific) constants.
* `extern const`: You must use this when exporting a constant in a header.

> Also, if using extern const, do I need to import the file, or the constants will be available globally without importing the file?

You need to import the file, either in each file where you use it or in the prefix header.
