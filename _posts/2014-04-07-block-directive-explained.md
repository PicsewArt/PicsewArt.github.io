---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0012.jpg'
tags: [iOS, Quote]
title: __block directive, a simple explanation
---

Nowadays, if you pass a variable inside a block and try to assign a new value to it, you will encounter the error *Variable is not assignable (missing __block type specifier)*.

This is a definitive improvement from the previous behavior where your variables simply remained unmodified. Now consider the following example:

```objc
NSMutableString *digits = [NSMutableString stringWithString:@"12345"];

void (^someBlock) (void) = ^{
    [digits appendString:@"67890"];

};

someBlock();

NSLog(@"%@", digits);
```

Since ```digits``` was modified inside a block without the ```__block``` directive, you could think it will print the sequence "12345".

Surprisingly,  ```digits``` actually holds the value **"1234567890"**.

Why?
--------

The answer is simple. When you make use of a variable inside a block. It is **imported** into the block structure as a ```const```. Hence, the behavior is consistent with the declaration:

```objc
NSMutableString * const importedDigits = digits;
```

You would not be able to point ```importedDigits``` to a different address, but nothing stops you from changing the content of the object ```digits``` being referenced.

By using the ```__block``` directive, the variable is no longer imported to the block. Instead, it's passed by **reference** and its behavior will be consistent with the declaration:

```objc
NSMutableString **digitsReference = &digits;
```

In this case, you can move where ```digitsReference``` is pointing at and you will actually be affecting the content of the variable ```digits```.

For more information on the topic,  check out the [Block Implementation Specification](https://clang.llvm.org/docs/Block-ABI-Apple.html) in Clang's documentation.
