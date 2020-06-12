---
title: "Swift: What is @_silgen_name?"
category: "Swift"
quote: true
tags: [Swift, C, "@_silgen_name"]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0045.jpg'
---
As a general Swift developer, one wouldn't come across this attribute, unless working with, say, porting Swift to some other platform.

> This reflects the fact that the attribute's *only for compiler-internal use* , and isn't really equivalent to C's asm attribute, since it doesn't change the calling convention to be C-compatible.

Now, `@_silgen_name` is an attribute (macro) for the class `SILGenNameAttr` with certain options, where the latter is part of Swifts [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree). From the [`swift/AST/Attr.def` source code](https://github.com/apple/swift/blob/master/include/swift/AST/Attr.def) (see also [swift/lib/AST/Attr.cpp](https://github.com/apple/swift/blob/master/lib/AST/Attr.cpp))

```cpp
// Schema for DECL_ATTR:
//
// - Attribute name.
// - Class name without the 'Attr' suffix (ignored for
// - Options for the attribute, including:
//    * the declarations the attribute can appear on
//    * whether duplicates are allowed
//    * whether the attribute is considered a decl modifier or not (no '@')
// - Unique attribute identifier used for serialization.  This
//   can never be changed.
//
// SIMPLE_DECL_ATTR is the same, but the class becomes
// SimpleDeclAttr<DAK_##NAME>.
//

DECL_ATTR(_silgen_name, SILGenName,
          OnFunc | OnConstructor | OnDestructor | LongAttribute |
          UserInaccessible, 0)
```


We find the declaration of `SILGeneNameAttr` in [swift/AST/Attr.h](https://github.com/apple/swift/blob/master/include/swift/AST/Attr.h)):

```cpp
/// Defines the @_silgen_name attribute.
class SILGenNameAttr : public DeclAttribute {
public:
  SILGenNameAttr(StringRef Name, SourceLoc AtLoc, SourceRange Range, bool Implicit)
    : DeclAttribute(DAK_SILGenName, AtLoc, Range, Implicit),
      Name(Name) {}

  SILGenNameAttr(StringRef Name, bool Implicit)
    : SILGenNameAttr(Name, SourceLoc(), SourceRange(), /*Implicit=*/true) {}

  /// The symbol name.
  const StringRef Name;

  static bool classof(const DeclAttribute *DA) {
    return DA->getKind() == DAK_SILGenName;
  }
};
```

To sum up, it's related to provide a Swift interface for C functions. You will most likely have a hard time finding any details regarding `SILGenNameAttr` in the developer library, and can consider it an undocumented feature.

***

Finally, the following talk with Russ Bishop might be of interest to you:

[Unsafe Swift: For Fun &amp; Profit](https://realm.io/news/russ-bishop-unsafe-swift/):

> *The Toolbox: Here there be dragons (34:20)*
>
> I would not ship this in a production application under any circumstances. But if you’re feeling adventurous, here they are.

> `@_silgen_name` is an attribute to decorate a function. You definitely need to understand the ABI to use this one. Swift will not help you marshall the parameters very much. The compiler is not going to be very forgiving, so you have to make sure that you’ve manipulated your parameters into a format it’s compatible with. The following code shows how to declare it. Give the function attribute, `@_silgen_name`, and the string symbol; then function its arguments in return type. The compiler will not complain if you get the arguments wrong or return type incorrectly. It only expects that that symbol exists, and when it jumps to it, it better take those arguments and have that return type.
>
```swift
@_silgen_name("dispatch_get_current_queue") func _get_current_queue() -> dispatch_queue_t
```
>
> *Q&amp;A (37:08)*
>
> *Q* : **Obviously not all of these are documented by Apple, so what’s your process of discovering all these behaviors?**
>
> *Russ* : I’ll look at the documentation first, but you’re right that there is a lot of stuff that isn’t in there. If you go to the Swift REPL and use the flag — I think it’s something like `-deprecated-integrated-repl` — you can ask it to print the Swift module and all the bits that Xcode doesn’t show you. If you dig into the toolchain directory Xcode, you can also find stuff in `libswiftCore` and `libswiftRuntime`.
>
> *JP* : If you’re interested in doing some more unsafe things with Swift, you can do a code search in GitHub for `@_silgen_name` and language “Swift”, and you’ll see a bunch of really bad but interesting stuff.

A slightly older post from Bishops' blog: [Swift - Don't do this](https://www.russbishop.net/swift-don-t-do-this)

> First off notice the `@_silgen_name` attribute. This is the equivalent of `DllImport` or `extern`. It tells Swift that we are going to link in some library that defines a function with the given name and matching the given arguments. **"Just trust me Swift, I know what I'm doing"** .
>
> Hint: You had better know what you're doing.
