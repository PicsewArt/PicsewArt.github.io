---
title: "Swift: Access Levels"
category: "Swift"
quote: false
tags: [iOS, Swift, Swift 4, Access Levels]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0018.jpg'
---
You may not have noticed but there was a small but important change to the `private` access level in Swift 4. After a quick recap of the five levels I cover what has changed in Swift 4, what do you need to know when migrating from Swift 3 and what is the point of `fileprivate` now?

## The Five Access Levels of Swift 4

To recap Swift 4 has the same five access levels as Swift 3. In order from most `open` to most `restricted`:

* `open` you can access `open` classes and class members from any source file in the defining module or any module that imports that module. You can subclass an `open` class or override an `open` class member both within their defining module and any module that imports that module.

* `public` allows the same access as `open` - any source file in any module - but has more restrictive subclassing and overriding. You can only subclass a `public` class within the same module. A `public` class member can only be overriden by subclasses in the same module. This is important if you are writing a framework. If you want a user of that framework to be able to subclass a class or override a method you must make it `open`.

* `internal` allows use from any source file in the defining module but not from outside that module. This is the default access level.

* `fileprivate` allows use only within the defining source file.

* `private` allows use only from the enclosing declaration and new in Swift 4, to any extensions of that declaration in the same source file.

#### Notes:

Remember that your application target is its own module and that internal access is the default. Your classes, structs, enums, properties and methods are all accessibile within the application module by default unless you choose to restrict access.

As with Swift 3 you can add `final` to any access level, except `open`, to prevent subclassing or overriding of a class method or property.

## How Did `private` Access Change?

In Swift 3 if you wanted an extension to have access to a `private` property or method you had to use `fileprivate`. Consider this Swift 3 code for a view controller with a `private` property:

```swift
class RootViewController: UIViewController {
  private var started = false
}
```

If I have an extension of the class in the same file, using Swift 3, it cannot access the `private` property:

```swift
extension RootViewController {
  func doSomething {
    if started { ... } // Error - no private access (Swift 3)
  }
}
```

Since extensions are a common Swift technique this led to the widespread use of `fileprivate` when splitting a type between a base declaration and one or more extensions:

```swift
// RootViewController.swift
class RootViewController: UIViewController {
  fileprivate var started = false
}

extension RootViewController {
  func doSomething {
    if started { ... } // fileprivate access allowed
  }
}
```

I think it is fair to say this is now considered unnecessarily complicated. Swift 4 limits the need for fileprivate by widening the scope of private access to include extensions. So this now works fine in Swift 4:

```swift
// RootViewController.swift
class RootViewController: UIViewController {
  private var started = false
}

extension RootViewController {
  func doSomething {
    if started { }     // private access allowed (Swift 4)
  }
}
```

Note that the extension still has to be in the same source file for `private` access.

```swift
// RootViewController+Extension.swift
extension RootViewController {
  func doExtra {
    if started { }     // no private access from here
  }
}
```

## So When Do I Use `fileprivate`?

So what is the point of `fileprivate` now? Well you should need it a whole lot less with Swift 4. One example, suppose I have a Widget class with `private` and `fileprivate` methods:

```swift
// Widget.swift
class Widget {
  private func privateMethod() { ... }
  fileprivate func fileprivateMethod() { ... }
}
```

Neither method is visible outside of the source file but what about a subclass in the same source file? It is not an extension of the Widget class so it cannot access the `private` method but it can access the `fileprivate` method:

```swift
// Widget.swift
class SpecialWidget: Widget {
  func start() {
//  privateMethod()      // No access to private method
    fileprivateMethod()  // fileprivate access allowed
  }
}
```

## I’m Upgrading From Swift 3 - What Should I Do?

The short answer is probably not much. You can replace `fileprivate` with `private` if you were using it for extension access - but you are not forced to. Your Swift 3 code will still work with one possible exception.

If you are unlucky enough to have used the same name for private methods in a base declaration and one or more extensions in the same source file you will get an error with Swift 4:

```swift
struct Person {
  private func helperMethod() { ... }
}

extension Person {
  private func helperMethod() { ... }
  // Invalid redeclaration
}
```

The increased scope of `private` in Swift 4 means that you will have to rename the duplicate method names.
