---
title: "Swift: Generate values collection of Enum types"
category: "Swift"
quote: true
tags: [Swift, Enum]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0048.jpg'
---
Have you ever done this before:

```swift
public enum SomeEnumType: Int {
    case a, b, c

    public var allValues: [SomeEnumType] {
        return [.a, .b, .c]
    }
}
```

It's very annoying when you have to enter the cases twice, so I stumbled around in the bits and bytes and created an extension usable like this:

```swift
let all = SomeEnumType.allValues
// [SomeEnumType.a, SomeEnumType.b, SomeEnumType.c]
```

Remarkable is that it's usable on any enum without associated values.

But, do **NOTE** that this does not work for enums that have no cases.

```swift
import Foundation

public protocol EnumCollection: Hashable {}

public extension EnumCollection {
    /// Sequence of all cases
    public static var allCases: AnySequence<Self> {
        typealias S = Self
        return AnySequence { () -> AnyIterator<S> in
            var raw = 0
            return AnyIterator {
                let current: Self = withUnsafePointer(to: &raw) {
                    $0.withMemoryRebound(to: S.self, capacity: 1) {
                        $0.pointee
                    }
                }
                guard current.hashValue == raw else {
                    return nil
                }
                raw += 1
                return current
            }
        }
    }
}

public extension EnumCollection {
    /// Array of all cases
    public static var allValues: [Self] {
        return Self.allCases.map({ (e) -> Self in
            return e
        })
    }

}
```

Want to do more?

```swift
public extension EnumCollection where Self: RawRepresentable {
    /// Array of all raw values
    public static var allRaws: [Self.RawValue] {
        return Self.allValues.map({ (e) -> Self.RawValue in
            return e.rawValue
        })
    }

    /// Dictionary of all cases and raw values
    public static var allContents: [[Self: Self.RawValue]] {
        return Self.allValues.map({ (e) -> [Self: Self.RawValue] in
            return [e: e.rawValue]
        })
    }
}

public extension Array where Element: RawRepresentable {
    /// Array of all raw values
    public var rawValues: [Element.RawValue] {
        return map({ (e) -> Element.RawValue in
            return e.rawValue
        })
    }
}
```

If you prefer `CocoaPods`:

```ruby
pod 'EnumCollection'
```

Github Repo: [https://github.com/Meniny/EnumCollection](https://github.com/Meniny/EnumCollection)
