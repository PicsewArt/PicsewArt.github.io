---
title: "Swift: Codable not decoding properties with subclasses"
category: "Swift"
quote: false
tags: [iOS, Swift, Codable]
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
---
In this code, the groceries properties is not deserialised from JSON. The name property is, but not the groceries one.

```swift
import Foundation

let json = """
{
"name": "wow",
"groceries": [
    {
        "name": "Banana",
        "points": 200,
        "description": "A banana grown in Ecuador."
    },
    {
        "name": "Orange",
        "points": 100,
        "description": "An orange."
    }
]
}
""".data(using: .utf8)!

class BaseStore: Codable {
    var name: String!
}

class Store: BaseStore {
    var groceries: [GroceryProduct]!
}

class GroceryProduct: Codable {
    var name: String!
    var points: Int!
    var description: String!
}

let decoder = JSONDecoder()
do {
    let products = try decoder.decode(Store.self, from: json)
    print("\(products.name)")
    print("\(products.groceries)")
} catch {
    print(error)
}
```

If you flatify the `Store`/`BaseStore` class, it actually works. Is it a bug or a limitation of `Encodable`?

So this code works:

```swift
import Foundation

let json = """
{
"name": "wow",
"groceries": [
    {
        "name": "Banana",
        "points": 200,
        "description": "A banana grown in Ecuador."
    },
    {
        "name": "Orange",
        "points": 100,
        "description": "An orange."
    }
]
}
""".data(using: .utf8)!

class BaseStore: Codable {
    var name: String!
}

class Store: Codable {
    var name: String!
    var groceries: [GroceryProduct]!
}

class GroceryProduct: Codable {
    var name: String!
    var points: Int!
    var description: String!
}

let decoder = JSONDecoder()
do {
    let products = try decoder.decode(Store.self, from: json)
    print("\(products.name)")
    print("\(products.groceries)")
} catch {
    print(error)
}
```

As mentioned in person, there are a few issues here. The primary concern is that `Store` inherits its parent class's `Codable` conformance, so it only decodes the properties its parent looks for.

However, even when that is fixed, this type of behavior is not given by default. The default behavior is to do the safe thing: encapsulate parent data using a `superEncoder` and `superDecoder`. There is simply no way to know what type of container the parent class will ask for (e.g. `Store` is allowed to request a keyed encoder/decoder, but BaseStore can ask for an unkeyed encoder/decoder — those can't be shared!), so it's not safe for the compiler to do anything but use those encapsulating encoders.

The default result you'd get is

```json
{
  "super": {"name": "wow"},
  "groceries": [
    {
      "name": "Banana",
       "points": 200,
       "description": "A banana grown in Ecuador."
    },
    {
      "name": "Orange",
      "points": 100,
      "description": "An orange."
    }
  ]
}
```

If you control the parent class and know for a fact that it's safe to pass your own encoder or decoder to them directly, you can do that in a custom `encode(to` and `init(from:`:

```swift
public func encode(to encoder: Encoder) throws {
    // Ask for a container and encode into it.
    super.encode(to: encoder)
}
```
