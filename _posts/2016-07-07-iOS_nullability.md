---
title: "Difference between nullable, __nullable and _Nullable in Objective-C"
category: "iOS"
copy: true
tags: [iOS, Objective-C]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0049.jpg'
---
From the [Swift blog](https://developer.apple.com/swift/blog/?id=25):

> This feature was first released in Xcode 6.3 with the keywords `__nullable` and `__nonnull`. Due to potential conflicts with third-party libraries, we’ve changed them in Xcode 7 to the `_Nullable` and `_Nonnull` you see here. However, for compatibility with Xcode 6.3 we’ve predefined macros `__nullable` and `__nonnull` to expand to the new names.

From the clang [documentation](https://clang.llvm.org/docs/AttributeReference.html#nullability-attributes):

> The nullability (type) qualifiers express whether a value of a given pointer type can be null (the _Nullable qualifier), doesn’t have a defined meaning for null (the `_Nonnull` qualifier), or for which the purpose of null is unclear (the `_Null_unspecified` qualifier). Because nullability qualifiers are expressed within the type system, they are more general than the nonnull and returns_nonnull attributes, allowing one to express (for example) a nullable pointer to an array of nonnull pointers. Nullability qualifiers are written to the right of the pointer to which they apply.

and:

> In Objective-C, there is an alternate spelling for the nullability qualifiers that can be used in Objective-C methods and properties using context-sensitive, non-underscored keywords

So for method returns and parameters you can use the the double-underscored versions `__nonnull`/`__nullable`/`__null_unspecified` instead of either the single-underscored ones, or instead of the non-underscored ones. The difference is that the single and double underscored ones need to be placed after the type definition, while the non-underscored ones need to be placed before the type definition.

Thus, the following declarations are equivalent and are correct:

```objc
- (nullable NSNumber *)result
- (NSNumber * __nullable)result
- (NSNumber * _Nullable)result
```

For parameters:

```objc
- (void)doSomethingWithString:(nullable NSString *)str
- (void)doSomethingWithString:(NSString * _Nullable)str
- (void)doSomethingWithString:(NSString * __nullable)str
```

For properties:

```objc
@property(nullable) NSNumber *status
@property NSNumber *__nullable status
@property NSNumber * _Nullable status
```

Things however complicate when double pointers or blocks returning something different than void are involved, as the non-underscore ones are not allowed here:

```objc
- (void)compute:(NSError *  _Nullable * _Nullable)error
- (void)compute:(NSError *  __nullable * _Null_unspecified)error;
// and all other combinations
```

Similar with methods that accept blocks as parameters, please note that the nonnull/nullable qualifier applies to the block, and not its return type, thus the following are equivalent:

```objc
- (void)executeWithCompletion:(nullable void (^)())handler
- (void)executeWithCompletion:(void (^ _Nullable)())handler
- (void)executeWithCompletion:(void (^ __nullable)())handler
```

If the block has a return value, then you're forced into one of the underscore versions:

```objc
- (void)convertObject:(nullable id __nonnull (^)(nullable id obj))handler
- (void)convertObject:(id __nonnull (^ _Nullable)())handler
- (void)convertObject:(id _Nonnull (^ __nullable)())handler
// the method accepts a nullable block that returns a nonnull value
// there are some more combinations here, you get the idea
```

As conclusion, you can use either ones, as long as the compiler can determine the item to assign the qualifier to.
