---
category: "Swift"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
title:  "Swift struct type recursion"
tags: [Swift]
---
the `enum`s in Swift support recursive types using the `indirect` keyword so you can do something like:

```swift
indirect enum Tree<T> {
    case node(left: Tree?, right: Tree?, element: T)
}
```

and the `class`es in Swift also support recursive types:

```swift
class TreeNode<E> {
  var leftNode:TreeNode<E>
  var rightNode:TreeNode<E>
  var element:E
}
```

It's feels like that the ability to declare a binary tree node as a struct with recursive types in it to be the most natural implementation:

```swift
struct TreeNode<E>{
  var leftNode:TreeNode<E>
  var rightNode:TreeNode<E>
  var element:E
}
```

But you just can't do it with `struct`s:

```console
Value type 'TreeNode<E>' cannot have a stored property that recursively contains it.
```

Why can't `struct`s have recursive value types in Swift? Is this a temporary limit of the language or is it as intended?

The answer is in the question: `struct`s are value types. If you include a substruct `B` into a struct `A`, it means, that one object of type `A` will have a size `sizeof(all_other_fields_of_A) + sizeof(B)`. So, a value type can not be recursive: it would have infinite size.
