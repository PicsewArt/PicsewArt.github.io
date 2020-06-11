---
title: "Swift : Changing the Value of Struct in an Array"
category: "Swift"
tags: [iOS,Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
---
今天帮朋友看了这样一个问题:

```swift

import UIKit

struct A {
    var a:Bool
}

struct B {
    var b : String
    var ba : A
}

struct C {
    var c : [B]
}

var cc = C(c: [
                B(b: "1", ba: A(a: true)),
                B(b: "2", ba: A(a: true)),
                B(b: "3", ba: A(a: true)),
                B(b: "4", ba: A(a: true)),
                ]
            )

for var b in cc.c {
    b.b = "22"
}
print(cc)

```

输出结果为:

```sh

C(c: [B(b: "1", ba: A(a: true)), B(b: "2", ba: A(a: true)), B(b: "3", ba: A(a: true)), B(b: "4", ba: A(a: true))])

```

很显然这个企图修改数组中结构体内容的操作失败了，为什么呢？我在代码中 `for` 部分添加了两个输出:

```swift

for var b in cc.c {
    b.b = "22"
    print(b)
    print(cc.c)
}

```

看一下输出结果:

```sh

B(b: "22", ba: A(a: true))
[B(b: "1", ba: A(a: true)), B(b: "2", ba: A(a: true)), B(b: "3", ba: A(a: true)), B(b: "4", ba: A(a: true))]
B(b: "22", ba: A(a: true))
[B(b: "1", ba: A(a: true)), B(b: "2", ba: A(a: true)), B(b: "3", ba: A(a: true)), B(b: "4", ba: A(a: true))]
B(b: "22", ba: A(a: true))
[B(b: "1", ba: A(a: true)), B(b: "2", ba: A(a: true)), B(b: "3", ba: A(a: true)), B(b: "4", ba: A(a: true))]
B(b: "22", ba: A(a: true))
[B(b: "1", ba: A(a: true)), B(b: "2", ba: A(a: true)), B(b: "3", ba: A(a: true)), B(b: "4", ba: A(a: true))]

```

这样问题就清晰了，所以我们换一种方式来试一试:

```swift

for var i = 0; i < cc.c.count; i++ {
    cc.c[i].b = "11"
}
print(cc)

```

再看一下输出结果，成功~

```sh

C(c: [B(b: "11", ba: A(a: true)), B(b: "11", ba: A(a: true)), B(b: "11", ba: A(a: true)), B(b: "11", ba: A(a: true))])

```

也就是说，我们通过 `for var b in cc.c` 遍历结构体时，我们的操作仅仅局限于 `var b`，对 `cc.c` 中的 `b : B` 没有影响，这是因为 `var b` 并不是对 `cc.c` 数组中元素的引用，而是一份拷贝，与原有元素不存在直接联系。



