---
title: "The Objective-C Style Guide/Objective-C 规范指南"
#copy: true
#quote: false
#tags: [docs, Objective-C, Style Guide]
cave: true
hero:
  format: 'jpeg'
  url: 'post/objc.jpg'
category: "iOS"
tags: [iOS, macOS, Objective-C, Style Guide]
---
* [English Version](#English)
* [中文版本](#中文版本)

# English

This style guide outlines the coding conventions for {{ site.author }}.

## Introduction

The reason I made this style guide was so that I could keep the code in our books, tutorials, and starter kits nice and consistent - even though we have many different authors working on the books.

This style guide is different from other Objective-C style guides you may see, because the focus is centered on readability for print and the web. Many of the decisions were made with an eye toward conserving space for print, easy legibility, and tutorial writing.

## Background

Here are some of the documents from Apple that informed the style guide. If something isn't mentioned here, it's probably covered in great detail in one of these:

* [The Objective-C Programming Language](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html)
* [Cocoa Fundamentals Guide](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CocoaFundamentals/Introduction/Introduction.html)
* [Coding Guidelines for Cocoa](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CodingGuidelines/CodingGuidelines.html)
* [iOS App Programming Guide](https://developer.apple.com/library/ios/#documentation/iphone/conceptual/iphoneosprogrammingguide/Introduction/Introduction.html)

## Table of Contents

* [Language](#language)
* [Code Organization](#code-organization)
* [Spacing](#spacing)
* [Comments](#comments)
* [Naming](#naming)
  * [Underscores](#underscores)
* [Methods](#methods)
* [Variables](#variables)
* [Property Attributes](#property-attributes)
* [Dot-Notation Syntax](#dot-notation-syntax)
* [Literals](#literals)
* [Constants](#constants)
* [Enumerated Types](#enumerated-types)
* [Case Statements](#case-statements)
* [Private Properties](#private-properties)
* [Booleans](#booleans)
* [Conditionals](#conditionals)
  * [Ternary Operator](#ternary-operator)
* [Init Methods](#init-methods)
* [Class Constructor Methods](#class-constructor-methods)
* [CGRect Functions](#cgrect-functions)
* [Golden Path](#golden-path)
* [Error handling](#error-handling)
* [Singletons](#singletons)
* [Line Breaks](#line-breaks)
* [Smiley Face](#smiley-face)
* [Xcode Project](#xcode-project)


## Language

US English should be used.

**Preferred:**
{% highlight objc %}
UIColor *myColor = [UIColor whiteColor];
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
UIColor *myColour = [UIColor whiteColor];
{% endhighlight %}


## Code Organization

Use `#pragma mark -` to categorize methods in functional groupings and protocol/delegate implementations following this general structure.

{% highlight objc %}
#pragma mark - Lifecycle

- (instancetype)init {}
- (void)dealloc {}
- (void)viewDidLoad {}
- (void)viewWillAppear:(BOOL)animated {}
- (void)didReceiveMemoryWarning {}

#pragma mark - Custom Accessors

- (void)setCustomProperty:(id)value {}
- (id)customProperty {}

#pragma mark - IBActions

- (IBAction)submitData:(id)sender {}

#pragma mark - Public

- (void)publicMethod {}

#pragma mark - Private

- (void)privateMethod {}

#pragma mark - Protocol conformance
#pragma mark - UITextFieldDelegate
#pragma mark - UITableViewDataSource
#pragma mark - UITableViewDelegate

#pragma mark - NSCopying

- (id)copyWithZone:(NSZone *)zone {}

#pragma mark - NSObject

- (NSString *)description {}
{% endhighlight %}

## Spacing

* Indent using 2 spaces (this conserves space in print and makes line wrapping less likely). Never indent with tabs. Be sure to set this preference in Xcode.
* Method braces and other braces (`if`/`else`/`switch`/`while` etc.) always open on the same line as the statement but close on a new line.

**Preferred:**
{% highlight objc %}
if (user.isHappy) {
  //Do something
} else {
  //Do something else
}
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
if (user.isHappy)
{
    //Do something
}
else {
    //Do something else
}
{% endhighlight %}

* There should be exactly one blank line between methods to aid in visual clarity and organization. Whitespace within methods should separate functionality, but often there should probably be new methods.
* Prefer using auto-synthesis. But if necessary, `@synthesize` and `@dynamic` should each be declared on new lines in the implementation.
* Colon-aligning method invocation should often be avoided.  There are cases where a method signature may have >= 3 colons and colon-aligning makes the code more readable. Please do **NOT** however colon align methods containing blocks because Xcode's indenting makes it illegible.

**Preferred:**

{% highlight objc %}
// blocks are easily readable
[UIView animateWithDuration:1.0 animations:^{
  // something
} completion:^(BOOL finished) {
  // something
}];
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
// colon-aligning makes the block indentation hard to read
[UIView animateWithDuration:1.0
                 animations:^{
                     // something
                 }
                 completion:^(BOOL finished) {
                     // something
                 }];
{% endhighlight %}

## Comments

When they are needed, comments should be used to explain **why** a particular piece of code does something. Any comments that are used must be kept up-to-date or deleted.

Block comments should generally be avoided, as code should be as self-documenting as possible, with only the need for intermittent, few-line explanations. *Exception: This does not apply to those comments used to generate documentation.*

## Naming

Apple naming conventions should be adhered to wherever possible, especially those related to [memory management rules](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html) ([NARC](https://stackoverflow.com/a/2865194/340508)).

Long, descriptive method and variable names are good.

**Preferred:**

{% highlight objc %}
UIButton *settingsButton;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
UIButton *setBut;
{% endhighlight %}

A three letter prefix should always be used for class names and constants, however may be omitted for Core Data entity names. For any official Meniny.cn books, starter kits, or tutorials, the prefix 'MX' should be used.

Constants should be camel-case with all words capitalized and prefixed by the related class name for clarity.

**Preferred:**

{% highlight objc %}
static NSTimeInterval const MXTutorialViewControllerNavigationFadeAnimationDuration = 0.3;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
static NSTimeInterval const fadetime = 1.7;
{% endhighlight %}

Properties should be camel-case with the leading word being lowercase. Use auto-synthesis for properties rather than manual @synthesize statements unless you have good reason.

**Preferred:**

{% highlight objc %}
@property (strong, nonatomic) NSString *descriptiveVariableName;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
id varnm;
{% endhighlight %}

### Underscores

When using properties, instance variables should always be accessed and mutated using `self.`. This means that all properties will be visually distinct, as they will all be prefaced with `self.`.

An exception to this: inside initializers, the backing instance variable (i.e. _variableName) should be used directly to avoid any potential side effects of the getters/setters.

Local variables should not contain underscores.

## Methods

In method signatures, there should be a space after the method type (-/+ symbol). There should be a space between the method segments (matching Apple's style).  Always include a keyword and be descriptive with the word before the argument which describes the argument.

The usage of the word "and" is reserved.  It should not be used for multiple parameters as illustrated in the `initWithWidth:height:` example below.

**Preferred:**
{% highlight objc %}
- (void)setExampleText:(NSString *)text image:(UIImage *)image;
- (void)sendAction:(SEL)aSelector to:(id)anObject forAllCells:(BOOL)flag;
- (id)viewWithTag:(NSInteger)tag;
- (instancetype)initWithWidth:(CGFloat)width height:(CGFloat)height;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
-(void)setT:(NSString *)text i:(UIImage *)image;
- (void)sendAction:(SEL)aSelector :(id)anObject :(BOOL)flag;
- (id)taggedView:(NSInteger)tag;
- (instancetype)initWithWidth:(CGFloat)width andHeight:(CGFloat)height;
- (instancetype)initWith:(int)width and:(int)height;  // Never do this.
{% endhighlight %}

## Variables

Variables should be named as descriptively as possible. Single letter variable names should be avoided except in `for()` loops.

Asterisks indicating pointers belong with the variable, e.g., `NSString *text` not `NSString* text` or `NSString * text`, except in the case of constants.

[Private properties](#private-properties) should be used in place of instance variables whenever possible. Although using instance variables is a valid way of doing things, by agreeing to prefer properties our code will be more consistent.

Direct access to instance variables that 'back' properties should be avoided except in initializer methods (`init`, `initWithCoder:`, etc…), `dealloc` methods and within custom setters and getters. For more information on using Accessor Methods in Initializer Methods and dealloc, see [here](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmPractical.html#//apple_ref/doc/uid/TP40004447-SW6).

**Preferred:**

{% highlight objc %}
@interface MXTutorial : NSObject

@property (strong, nonatomic) NSString *tutorialName;

@end
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
@interface MXTutorial : NSObject {
  NSString *tutorialName;
}
{% endhighlight %}


## Property Attributes

Property attributes should be explicitly listed, and will help new programmers when reading the code.  The order of properties should be storage then atomicity, which is consistent with automatically generated code when connecting UI elements from Interface Builder.

**Preferred:**

{% highlight objc %}
@property (weak, nonatomic) IBOutlet UIView *containerView;
@property (strong, nonatomic) NSString *tutorialName;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
@property (nonatomic, weak) IBOutlet UIView *containerView;
@property (nonatomic) NSString *tutorialName;
{% endhighlight %}

Properties with mutable counterparts (e.g. NSString) should prefer `copy` instead of `strong`.
Why? Even if you declared a property as `NSString` somebody might pass in an instance of an `NSMutableString` and then change it without you noticing that.

**Preferred:**

{% highlight objc %}
@property (copy, nonatomic) NSString *tutorialName;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
@property (strong, nonatomic) NSString *tutorialName;
{% endhighlight %}

## Dot-Notation Syntax

Dot syntax is purely a convenient wrapper around accessor method calls. When you use dot syntax, the property is still accessed or changed using getter and setter methods.  Read more [here](https://developer.apple.com/library/ios/documentation/cocoa/conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

Dot-notation should **always** be used for accessing and mutating properties, as it makes code more concise. Bracket notation is preferred in all other instances.

**Preferred:**
{% highlight objc %}
NSInteger arrayCount = [self.array count];
view.backgroundColor = [UIColor orangeColor];
[UIApplication sharedApplication].delegate;
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
NSInteger arrayCount = self.array.count;
[view setBackgroundColor:[UIColor orangeColor]];
UIApplication.sharedApplication.delegate;
{% endhighlight %}

## Literals

`NSString`, `NSDictionary`, `NSArray`, and `NSNumber` literals should be used whenever creating immutable instances of those objects. Pay special care that `nil` values can not be passed into `NSArray` and `NSDictionary` literals, as this will cause a crash.

**Preferred:**

{% highlight objc %}
NSArray *names = @[@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul"];
NSDictionary *productManagers = @{@"iPhone": @"Kate", @"iPad": @"Kamal", @"Mobile Web": @"Bill"};
NSNumber *shouldUseLiterals = @YES;
NSNumber *buildingStreetNumber = @10018;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
NSArray *names = [NSArray arrayWithObjects:@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul", nil];
NSDictionary *productManagers = [NSDictionary dictionaryWithObjectsAndKeys: @"Kate", @"iPhone", @"Kamal", @"iPad", @"Bill", @"Mobile Web", nil];
NSNumber *shouldUseLiterals = [NSNumber numberWithBool:YES];
NSNumber *buildingStreetNumber = [NSNumber numberWithInteger:10018];
{% endhighlight %}

## Constants

Constants are preferred over in-line string literals or numbers, as they allow for easy reproduction of commonly used variables and can be quickly changed without the need for find and replace. Constants should be declared as `static` constants and not `#define`s unless explicitly being used as a macro.

**Preferred:**

{% highlight objc %}
static NSString * const MXAboutViewControllerCompanyName = @"Meniny.cn";

static CGFloat const MXImageThumbnailHeight = 50.0;
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
#define CompanyName @"Meniny.cn"

#define thumbnailHeight 2
{% endhighlight %}

## Enumerated Types

When using `enum`s, it is recommended to use the new fixed underlying type specification because it has stronger type checking and code completion. The SDK now includes a macro to facilitate and encourage use of fixed underlying types: `NS_ENUM()`

**For Example:**

{% highlight objc %}
typedef NS_ENUM(NSInteger, MXLeftMenuTopItemType) {
  MXLeftMenuTopItemMain,
  MXLeftMenuTopItemShows,
  MXLeftMenuTopItemSchedule
};
{% endhighlight %}

You can also make explicit value assignments (showing older k-style constant definition):

{% highlight objc %}
typedef NS_ENUM(NSInteger, MXGlobalConstants) {
  MXPinSizeMin = 1,
  MXPinSizeMax = 5,
  MXPinCountMin = 100,
  MXPinCountMax = 500,
};
{% endhighlight %}

Older k-style constant definitions should be **avoided** unless writing CoreFoundation C code (unlikely).

**Not Preferred:**

{% highlight objc %}
enum GlobalConstants {
  kMaxPinSize = 5,
  kMaxPinCount = 500,
};
{% endhighlight %}


## Case Statements

Braces are not required for case statements, unless enforced by the complier.
When a case contains more than one line, braces should be added.

{% highlight objc %}
switch (condition) {
  case 1:
    // ...
    break;
  case 2: {
    // ...
    // Multi-line example using braces
    break;
  }
  case 3:
    // ...
    break;
  default:
    // ...
    break;
}

{% endhighlight %}

There are times when the same code can be used for multiple cases, and a fall-through should be used.  A fall-through is the removal of the 'break' statement for a case thus allowing the flow of execution to pass to the next case value.  A fall-through should be commented for coding clarity.

{% highlight objc %}
switch (condition) {
  case 1:
    // ** fall-through! **
  case 2:
    // code executed for values 1 and 2
    break;
  default:
    // ...
    break;
}

{% endhighlight %}

When using an enumerated type for a switch, 'default' is not needed.   For example:

{% highlight objc %}
MXLeftMenuTopItemType menuType = MXLeftMenuTopItemMain;

switch (menuType) {
  case MXLeftMenuTopItemMain:
    // ...
    break;
  case MXLeftMenuTopItemShows:
    // ...
    break;
  case MXLeftMenuTopItemSchedule:
    // ...
    break;
}
{% endhighlight %}


## Private Properties

Private properties should be declared in class extensions (anonymous categories) in the implementation file of a class. Named categories (such as `MXPrivate` or `private`) should never be used unless extending another class.   The Anonymous category can be shared/exposed for testing using the <headerfile>+Private.h file naming convention.

**For Example:**

{% highlight objc %}
@interface MXDetailViewController ()

@property (strong, nonatomic) GADBannerView *googleAdView;
@property (strong, nonatomic) ADBannerView *iAdView;
@property (strong, nonatomic) UIWebView *adXWebView;

@end
{% endhighlight %}

## Booleans

Objective-C uses `YES` and `NO`.  Therefore `true` and `false` should only be used for CoreFoundation, C or C++ code.  Since `nil` resolves to `NO` it is unnecessary to compare it in conditions. Never compare something directly to `YES`, because `YES` is defined to 1 and a `BOOL` can be up to 8 bits.

This allows for more consistency across files and greater visual clarity.

**Preferred:**

{% highlight objc %}
if (someObject) {}
if (![anotherObject boolValue]) {}
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
if (someObject == nil) {}
if ([anotherObject boolValue] == NO) {}
if (isAwesome == YES) {} // Never do this.
if (isAwesome == true) {} // Never do this.
{% endhighlight %}

If the name of a `BOOL` property is expressed as an adjective, the property can omit the “is” prefix but specifies the conventional name for the get accessor, for example:

{% highlight objc %}
@property (assign, getter=isEditable) BOOL editable;
{% endhighlight %}
Text and example taken from the [Cocoa Naming Guidelines](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingIvarsAndTypes.html#//apple_ref/doc/uid/20001284-BAJGIIJE).

## Conditionals

Conditional bodies should always use braces even when a conditional body could be written without braces (e.g., it is one line only) to prevent errors. These errors include adding a second line and expecting it to be part of the if-statement. Another, [even more dangerous defect](https://programmers.stackexchange.com/a/16530) may happen where the line "inside" the if-statement is commented out, and the next line unwittingly becomes part of the if-statement. In addition, this style is more consistent with all other conditionals, and therefore more easily scannable.

**Preferred:**
{% highlight objc %}
if (!error) {
  return success;
}
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
if (!error)
  return success;
{% endhighlight %}

or

{% highlight objc %}
if (!error) return success;
{% endhighlight %}

### Ternary Operator

The Ternary operator, `?:` , should only be used when it increases clarity or code neatness. A single condition is usually all that should be evaluated. Evaluating multiple conditions is usually more understandable as an `if` statement, or refactored into instance variables. In general, the best use of the ternary operator is during assignment of a variable and deciding which value to use.

Non-boolean variables should be compared against something, and parentheses are added for improved readability.  If the variable being compared is a boolean type, then no parentheses are needed.

**Preferred:**
{% highlight objc %}
NSInteger value = 5;
result = (value != 0) ? x : y;

BOOL isHorizontal = YES;
result = isHorizontal ? x : y;
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
result = a > b ? x = c > d ? c : d : y;
{% endhighlight %}

## Init Methods

Init methods should follow the convention provided by Apple's generated code template.  A return type of 'instancetype' should also be used instead of 'id'.

{% highlight objc %}
- (instancetype)init {
  self = [super init];
  if (self) {
    // ...
  }
  return self;
}
{% endhighlight %}

See [Class Constructor Methods](#class-constructor-methods) for link to article on instancetype.

## Class Constructor Methods

Where class constructor methods are used, these should always return type of 'instancetype' and never 'id'. This ensures the compiler correctly infers the result type.

{% highlight objc %}
@interface Airplane
+ (instancetype)airplaneWithType:(MXAirplaneType)type;
@end
{% endhighlight %}

More information on instancetype can be found on [NSHipster.com](https://nshipster.com/instancetype/).

## CGRect Functions

When accessing the `x`, `y`, `width`, or `height` of a `CGRect`, always use the [`CGGeometry` functions](https://developer.apple.com/library/ios/#documentation/graphicsimaging/reference/CGGeometry/Reference/reference.html) instead of direct struct member access. From Apple's `CGGeometry` reference:

> All functions described in this reference that take CGRect data structures as inputs implicitly standardize those rectangles before calculating their results. For this reason, your applications should avoid directly reading and writing the data stored in the CGRect data structure. Instead, use the functions described here to manipulate rectangles and to retrieve their characteristics.

**Preferred:**

{% highlight objc %}
CGRect frame = self.view.frame;

CGFloat x = CGRectGetMinX(frame);
CGFloat y = CGRectGetMinY(frame);
CGFloat width = CGRectGetWidth(frame);
CGFloat height = CGRectGetHeight(frame);
CGRect frame = CGRectMake(0.0, 0.0, width, height);
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
CGRect frame = self.view.frame;

CGFloat x = frame.origin.x;
CGFloat y = frame.origin.y;
CGFloat width = frame.size.width;
CGFloat height = frame.size.height;
CGRect frame = (CGRect){ .origin = CGPointZero, .size = frame.size };
{% endhighlight %}

## Golden Path

When coding with conditionals, the left hand margin of the code should be the "golden" or "happy" path.  That is, don't nest `if` statements.  Multiple return statements are OK.

**Preferred:**

{% highlight objc %}
- (void)someMethod {
  if (![someOther boolValue]) {
	return;
  }

  //Do something important
}
{% endhighlight %}

**Not Preferred:**

{% highlight objc %}
- (void)someMethod {
  if ([someOther boolValue]) {
    //Do something important
  }
}
{% endhighlight %}

## Error handling

When methods return an error parameter by reference, switch on the returned value, not the error variable.

**Preferred:**
{% highlight objc %}
NSError *error;
if (![self trySomethingWithError:&error]) {
  // Handle Error
}
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
NSError *error;
[self trySomethingWithError:&error];
if (error) {
  // Handle Error
}
{% endhighlight %}

Some of Apple’s APIs write garbage values to the error parameter (if non-NULL) in successful cases, so switching on the error can cause false negatives (and subsequently crash).


## Singletons

Singleton objects should use a thread-safe pattern for creating their shared instance.
{% highlight objc %}
+ (instancetype)sharedInstance {
  static id sharedInstance = nil;

  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedInstance = [[self alloc] init];
  });

  return sharedInstance;
}
{% endhighlight %}
This will prevent [possible and sometimes prolific crashes](https://cocoasamurai.blogspot.com/2011/04/singletons-your-doing-them-wrong.html).


## Line Breaks

Line breaks are an important topic since this style guide is focused for print and online readability.

For example:
{% highlight objc %}
self.productsRequest = [[SKProductsRequest alloc] initWithProductIdentifiers:productIdentifiers];
{% endhighlight %}
A long line of code like this should be carried on to the second line adhering to this style guide's Spacing section (two spaces).
{% highlight objc %}
self.productsRequest = [[SKProductsRequest alloc]
  initWithProductIdentifiers:productIdentifiers];
{% endhighlight %}


## Smiley Face

Smiley faces are a very prominent style feature of the Meniny.cn site!  It is very important to have the correct smile signifying the immense amount of happiness and excitement for the coding topic.  The end square bracket is used because it represents the largest smile able to be captured using ascii art.  A half-hearted smile is represented if an end parenthesis is used, and thus not preferred.

**Preferred:**
{% highlight objc %}
:]
{% endhighlight %}

**Not Preferred:**
{% highlight objc %}
:)
{% endhighlight %}


## Xcode project

The physical files should be kept in sync with the Xcode project files in order to avoid file sprawl. Any Xcode groups created should be reflected by folders in the filesystem. Code should be grouped not only by type, but also by feature for greater clarity.

When possible, always turn on "Treat Warnings as Errors" in the target's Build Settings and enable as many [additional warnings](https://boredzo.org/blog/archives/2009-11-07/warnings) as possible. If you need to ignore a specific warning, use [Clang's pragma feature](https://clang.llvm.org/docs/UsersManual.html#controlling-diagnostics-via-pragmas).

***

# 中文版本

## 介绍

关于这个编程语言的所有规范, 如果这里没有写到, 那就在苹果的文档里:

* [Objective-C 编程语言][Introduction_1]
* [Cocoa 基本原理指南][Introduction_2]
* [Cocoa 编码指南][Introduction_3]
* [iOS 应用编程指南][Introduction_4]

[Introduction_1]:https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html

[Introduction_2]:https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CocoaFundamentals/Introduction/Introduction.html

[Introduction_3]:https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CodingGuidelines/CodingGuidelines.html

[Introduction_4]:https://developer.apple.com/library/ios/#documentation/iphone/conceptual/iphoneosprogrammingguide/Introduction/Introduction.html


## 目录

* [点语法](#点语法)
* [间距](#间距)
* [条件判断](#条件判断)
* [三目运算符](#三目运算符)
* [错误处理](#错误处理)
* [方法](#方法)
* [变量](#变量)
* [命名](#命名)
* [注释](#注释)
* [Init 和 Dealloc](#init-和-dealloc)
* [字面量](#字面量)
* [CGRect 函数](#CGRect-函数)
* [常量](#常量)
* [枚举类型](#枚举类型)
* [位掩码](#位掩码)
* [私有属性](#私有属性)
* [图片命名](#图片命名)
* [布尔](#布尔)
* [单例](#单例)
* [导入](#导入)
* [Xcode 工程](#Xcode-工程)

## 点语法

应该 **始终** 使用点语法来访问或者修改属性, 访问其他实例时首选括号。

**推荐: **

```objc
view.backgroundColor = [UIColor orangeColor];
[UIApplication sharedApplication].delegate;
```

**反对: **

```objc
[view setBackgroundColor:[UIColor orangeColor]];
UIApplication.sharedApplication.delegate;
```

## 间距

* 一个缩进使用 4 个空格, 永远不要使用制表符 (tab) 缩进。请确保在 Xcode 中设置了此偏好。
* 方法的大括号和其他的大括号 (`if`/`else`/`switch`/`while` 等等) 始终和声明在同一行开始, 在新的一行结束。

**推荐: **

```objc
if (user.isHappy) {
    // Do something
} else {
    // Do something else
}
```

**反对: **

```objc
if(user.isHappy){
    //Do something
}else{
    //Do something else
}

if(user.isSad)
{
    //Do something
}
else
{
    //Do something else
}
```

* 方法之间应该正好空一行, 这有助于视觉清晰度和代码组织性。在方法中的功能块之间应该使用空白分开, 但往往可能应该创建一个新的方法。
* `@synthesize` 和 `@dynamic` 在实现中每个都应该占一个新行。

**推荐: **

```objc
+ (void)someMethod {
     //Do something
}

+ (void)anotherMethod {
     //Do something
}
```

## 条件判断

条件判断主体部分应该始终使用大括号括住来防止[出错][Condiationals_1], 即使它可以不用大括号 (例如它只需要一行) 。这些错误包括添加第二行 (代码) 并希望它是 if 语句的一部分时。还有另外一种[更危险的][Condiationals_2], 当 if 语句里面的一行被注释掉, 下一行就会在不经意间成为了这个 if 语句的一部分。此外, 这种风格也更符合所有其他的条件判断, 因此也更容易检查。

**推荐: **

```objc
if (!error) {
    return success;
}
```

或

```objc
return !error;
```

**反对: **

```objc
if (!error)
    return success;
```

或

```objc
if (!error) return success;
```


[Condiationals_1]:(https://github.com/MXimes/objective-c-style-guide/issues/26#issuecomment-22074256)
[Condiationals_2]:https://programmers.stackexchange.com/a/16530

### 三目运算符

三目运算符 `?` 只在当它可以增加代码清晰度或整洁时才使用。

单一的条件都应该优先考虑使用。

多条件时通常使用 if 语句会更易懂, 或者重构为实例变量。

**推荐: **

```objc
result = a > b ? x : y;
```

或

```objc
result = ((a > b) ? x : y);
```

**反对: **

```objc
result = a > b ? x = c > d ? c : d : y;
```

## 错误处理

当引用一个返回错误参数 (error parameter) 的方法时, 如果可以, 应该针对返回值, 而非错误变量。

**推荐: **

```objc
NSError *error;
if (![self trySomethingWithError:&error]) {
    // 处理错误
}
```

**反对: **

```objc
NSError *error;
[self trySomethingWithError:&error];
if (error) {
    // 处理错误
}
```

一些苹果的 API 在成功的情况下会写一些垃圾值给错误参数 (如果非空) , 所以针对错误变量可能会造成虚假结果 (以及接下来的崩溃) 。

## 方法

在方法声明中, 在 `-`、`+` 符号后应该有一个空格。方法片段之间也应该有一个空格。

**推荐: **

```objc
- (void)setExampleText:(NSString *)text image:(UIImage *)image;
```

## 变量

变量名应该尽可能命名为描述性的。除了 `for()` 循环外, 其他情况都应该避免使用单字母的变量名。
星号表示指针属于变量, 例如: `NSString *text` 不要写成 `NSString* text` 或者 `NSString * text` , 常量除外。
尽量定义属性来代替直接使用实例变量。除了初始化方法 (`init`,  `initWithCoder:`, 等) ,  `dealloc` 方法和自定义的 setters 和 getters 内部, 应避免直接访问实例变量。更多有关在初始化方法和 dealloc 方法中使用访问器方法的信息, 参见[这里][Variables_1]。


**推荐: **

```objc
@interface MXSection: NSObject

@property (nonatomic) NSString *headline;

@end
```

**反对: **

```objc
@interface MXSection : NSObject {
    NSString *headline;
}
```

[Variables_1]:https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmPractical.html#//apple_ref/doc/uid/TP40004447-SW6

#### 变量限定符

当涉及到[在 ARC 中被引入][Variable_Qualifiers_1]变量限定符时,
限定符 (`__strong`, `__weak`, `__unsafe_unretained`, `__autoreleasing`) 应该位于星号和变量名之间, 如: `NSString * __weak text`。

[Variable_Qualifiers_1]:(https://developer.apple.com/library/ios/releasenotes/objectivec/rn-transitioningtoarc/Introduction/Introduction.html#//apple_ref/doc/uid/TP40011226-CH1-SW4)

对于可空性, 可用的风格有 `nullable`、`_Nullable`、`__nullable` 三种, 应保持使用统一风格。

**推荐: **

```objc
@property (nonatomic, copy) NSString * _Nullable status;

- (NSNumber * _Nullable)resultForFun;
- (NSNumber * _Nullable)result;
- (NSNumber * __Nonnull)randomNumber;
- (void)compute:(NSError * _Nullable * _Null_unspecified)error;
- (void)executeWithCompletion:(void (^ _Nullable)())handler;
- (void)convertObject:(id __nonnull (^ _Nullable)())handler;
```

**反对: **

```objc
- (nullable NSNumber *)resultForFun;
- (NSNumber * __nullable)result;
- (NSNumber * _Nonnull)randomNumber;
- (void)compute:(NSError *  __nullable * _Null_unspecified)error;
- (void)executeWithCompletion:(void (^ __nullable)())handler
- (void)convertObject:(id _Nonnull (^ __nullable)())handler
```

## 命名

尽可能遵守苹果的命名约定, 尤其那些涉及到[内存管理规则][Naming_1],  ([NARC][Naming_2]) 的。

长的和描述性的方法名和变量名都不错。

**推荐: **

```objc
UIButton *settingsButton;
```

**反对: **

```objc
UIButton *setBut;
```
类名和常量应该始终使用英文字母的前缀 (例如 `MX`) , 通常为两个字母, 依据情况也可以增加个数。

Core Data 实体名称可以省略前缀。

为了代码清晰, 常量应该使用相关类的名字作为前缀并使用驼峰命名法。

**推荐: **

```objc
static const NSTimeInterval MXArticleViewControllerNavigationFadeAnimationDuration = 0.3;
```

**反对: **

```objc
static const NSTimeInterval fadetime = 1.7;
```

属性和局部变量应该使用驼峰命名法并且首字母小写。

为了保持一致, 实例变量应该使用驼峰命名法命名, 并且首字母小写, 以下划线为前缀。这与 LLVM 自动合成的实例变量相一致。
**如果 LLVM 可以自动合成变量, 那就让它自动合成。**

**推荐: **

```objc
@synthesize descriptiveVariableName = _descriptiveVariableName;
```

**反对: **

```objc
id varnm;
```

[Naming_1]:https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html

[Naming_2]:https://stackoverflow.com/a/2865194/340508

## 注释

当需要的时候, 注释应该被用来解释 **为什么** 特定代码做了某些事情。所使用的任何注释必须保持最新否则就删除掉。

除声明外, 通常应该避免一大块注释, 代码就应该尽量作为自身的文档, 只需要隔几行写几句说明。当然, 这并不适用于那些用来生成文档的注释。

对于声明和宏定义, 注释中应使用注释语法:

**推荐: **

```objc
/**
 * @brief this is a string
 */
#define SOME_MACRO @"String"

/**
 * If A is equal to B, the next argument list is expanded; otherwise, the
 * argument list after that is expanded. A and B must be numbers between zero
 * and twenty, inclusive. Additionally, B must be greater than or equal to A.
 *
 * @code

 // expands to true
 MX_META_MACRO_IF_EQ(0, 0)(true)(false)

 // expands to false
 MX_META_MACRO_IF_EQ(0, 1)(true)(false)

 * @endcode
 *
 * This is primarily useful when dealing with indexes and counts in
 * metaprogramming.
 */
#define MX_META_MACRO_IF_EQ(A, B) \
MX_META_MACRO_CONCAT(MX_META_MACRO_IF_EQ, A)(B)
```

```objc
/**
 * @brief generate random NSUInteger value
 *
 * @param __upper_bound upper bound
 *
 * @return a random NSUInteger value
 */
FOUNDATION_EXPORT NSUInteger arc4random_uinteger(NSUInteger __upper_bound) __OSX_AVAILABLE_STARTING(__MAC_10_7, __IPHONE_4_3);
```

## init 和 dealloc

`dealloc` 方法应该放在实现文件的最上面, 并且刚好在 `@synthesize` 和 `@dynamic` 语句的后面。在任何类中, `init` 都应该直接放在 `dealloc` 方法的下面。

`init` 方法的结构应该像这样:

```objc
- (instancetype)init {
    self = [super init]; // 或者调用指定的初始化方法
    if (self) {
        // Custom initialization
    }

    return self;
}
```

## 字面量

每当创建 `NSString`,  `NSDictionary`,  `NSArray`, 和 `NSNumber` 类的不可变实例时, 都应该使用字面量。要注意 `nil` 值不能传给 `NSArray` 和 `NSDictionary` 字面量, 这样做会导致崩溃。

**推荐: **

```objc
NSArray *names = @[@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul"];
NSDictionary *productManagers = @{@"iPhone" : @"Kate", @"iPad" : @"Kamal", @"Mobile Web" : @"Bill"};
NSNumber *shouldUseLiterals = @YES;
NSNumber *buildingZIPCode = @10018;
```

**反对: **

```objc
NSArray *names = [NSArray arrayWithObjects:@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul", nil];
NSDictionary *productManagers = [NSDictionary dictionaryWithObjectsAndKeys: @"Kate", @"iPhone", @"Kamal", @"iPad", @"Bill", @"Mobile Web", nil];
NSNumber *shouldUseLiterals = [NSNumber numberWithBool:YES];
NSNumber *buildingZIPCode = [NSNumber numberWithInteger:10018];
```

## CGRect 函数

当访问一个 `CGRect` 的 `x`,  `y`,  `width`,  `height` 时, 应该使用[`CGGeometry` 函数][CGRect-Functions_1]代替直接访问结构体成员。苹果的 `CGGeometry` 参考中说到:

> All functions described in this reference that take CGRect data structures as inputs implicitly standardize those rectangles before calculating their results. For this reason, your applications should avoid directly reading and writing the data stored in the CGRect data structure. Instead, use the functions described here to manipulate rectangles and to retrieve their characteristics.

**推荐: **

```objc
CGRect frame = self.view.frame;

CGFloat x = CGRectGetMinX(frame);
CGFloat y = CGRectGetMinY(frame);
CGFloat width = CGRectGetWidth(frame);
CGFloat height = CGRectGetHeight(frame);
```

**反对: **

```objc
CGRect frame = self.view.frame;

CGFloat x = frame.origin.x;
CGFloat y = frame.origin.y;
CGFloat width = frame.size.width;
CGFloat height = frame.size.height;
```

[CGRect-Functions_1]:https://developer.apple.com/library/ios/#documentation/graphicsimaging/reference/CGGeometry/Reference/reference.html

## 常量

常量首选内联字符串字面量或数字, 因为常量可以轻易重用并且可以快速改变而不需要查找和替换。常量应该声明为 `static` 常量而不是 `#define` , 除非非常明确地要当做宏来使用。

**推荐: **

```objc
static NSString * const MXAboutViewControllerName = @"Elias's Blog";

static const CGFloat MXImageThumbnailHeight = 50.0;
```

```objc
FOUNDATION_EXTERN static NSString * const MXAboutViewControllerName;

CG_EXTERN static const CGFloat MXImageThumbnailHeight;
```

**反对: **

```objc
#define CompanyName @"Elias's Blog"

#define thumbnailHeight 2
```

## extern

根据情况, 使用 `FOUNDATION_EXTERN`、`UIKIT_EXTERN`、`CG_EXTERN` 等宏代替 `extern` 关键字。

**推荐: **

```objc
FOUNDATION_EXTERN BOOL SystemVersionLessThanOrEqualTo(NSString * _Nonnull version);
FOUNDATION_EXTERN BOOL VersionCheckEqualTo(NSString * _Nonnull version, NSString * _Nonnull equalTo);
```

**反对: **

```objc
extern BOOL SystemVersionLessThanOrEqualTo(NSString *version);
BOOL VersionCheckEqualTo(NSString *version, NSString *equalTo);
```

## 枚举类型

当使用 `enum` 时, 建议使用新的基础类型规范, 因为它具有更强的类型检查和代码补全功能。现在 SDK 包含了一个宏来鼓励使用使用新的基础类型 - `NS_ENUM()`

**推荐: **

```objc
typedef NS_ENUM(NSInteger, MXAdRequestState) {
    MXAdRequestStateInactive,
    MXAdRequestStateLoading
};
```

## 位掩码

当用到位掩码时, 使用 `NS_OPTIONS` 宏。

**举例: **

```objc
typedef NS_OPTIONS(NSUInteger, MXAdCategory) {
    MXAdCategoryAutos      = 1 << 0,
    MXAdCategoryJobs       = 1 << 1,
    MXAdCategoryRealState  = 1 << 2,
    MXAdCategoryTechnology = 1 << 3
};
```


## 私有属性

私有属性应该声明在类实现文件的延展 (匿名的类目) 中。

**推荐: **

```objc
@interface MXAdvertisement ()

@property (nonatomic, copy) NSString * _Nonnull adContentString;
@property (nonatomic, assign) NSString page;

@end

@implementation MXAdvertisement
@end
```

## 图片命名

图片名称应该被统一命名以保持组织的完整。它们应该被命名为一个说明它们用途的驼峰式字符串, 其次是自定义类或属性的无前缀名字 (如果有的话) , 然后进一步说明颜色 和/或 展示位置, 最后是它们的状态。

**推荐: **

* `RefreshBarButtonItem` / `RefreshBarButtonItem@2x` 和 `RefreshBarButtonItemSelected` / `RefreshBarButtonItemSelected@2x`
* `ArticleNavigationBarWhite` / `ArticleNavigationBarWhite@2x` 和 `ArticleNavigationBarBlackSelected` / `ArticleNavigationBarBlackSelected@2x`.

图片目录中被用于类似目的的图片应归入各自的组中。


## 布尔

因为 `nil` 解析为 `NO`, 所以没有必要在条件中与它进行比较。

永远不要直接和 `YES` 进行比较, 因为 `YES` 被定义为 1, 而 `BOOL` 可以多达 8 位。

这使得整个文件有更多的一致性和更大的视觉清晰度。

**推荐: **

```objc
if (!someObject) {
}
```

**反对: **

```objc
if (someObject == nil) {
}
```

-----

**对于 `BOOL` 来说, 这有两种用法:**

```objc
if (isAwesome) {

}
if (![someObject boolValue]) {

}
```

**反对: **

```objc
if ([someObject boolValue] == NO) {

}
if (isAwesome == YES) {
    // 永远别这么做
}
```

-----

如果一个 `BOOL` 属性名称是一个形容词, 属性可以省略 “is” 前缀, 但为 get 访问器指定一个惯用的名字, 例如:

```objc
@property (assign, getter=isEditable) BOOL editable;
```

内容和例子来自 [Cocoa 命名指南][Booleans_1] 。

[Booleans_1]:https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingIvarsAndTypes.html#//apple_ref/doc/uid/20001284-BAJGIIJE

## 单例

单例对象应该使用线程安全的模式创建共享的实例。

```objc
+ (instancetype)sharedInstance {
    static id sharedInstance = nil;

    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });

    return sharedInstance;
}
```

这将会预防[有时可能产生的许多崩溃][Singletons_1]。

[Singletons_1]:https://cocoasamurai.blogspot.com/2011/04/singletons-your-doing-them-wrong.html

## 导入

如果有一个以上的 import 语句, 就对这些语句进行[分组][Import_1]。每个分组的注释是可选的。
注: 对于模块使用 [@import][Import_2] 语法。

```objc
// Frameworks
@import QuartzCore;

// Models
#import "MXUser.h"

// Views
#import "MXButton.h"
#import "MXUserView.h"
```


[Import_1]: https://ashfurrow.com/blog/structuring-modern-objective-c
[Import_2]: https://clang.llvm.org/docs/Modules.html#using-modules

## Xcode 工程

为了避免文件杂乱, 物理文件应该保持和 Xcode 项目文件同步。Xcode 创建的任何组 (group) 都必须在文件系统有相应的映射。为了更清晰, 代码不仅应该按照类型进行分组, 也可以根据功能进行分组。

* Sections
  * [Section Name]
    * Controllers
      * Secondary
    * Models
    * Views
      * Cells
* Resources
* Common
* Libraries
* Categories
* Basic
* Vendors

如果可以的话, 尽可能一直打开 target Build Settings 中 "Treat Warnings as Errors" 以及一些[额外的警告][Xcode-project_1]。如果你需要忽略指定的警告,使用 [Clang 的编译特性][Xcode-project_2] 。


[Xcode-project_1]:https://boredzo.org/blog/archives/2009-11-07/warnings

[Xcode-project_2]:https://clang.llvm.org/docs/UsersManual.html#controlling-diagnostics-via-pragmas
