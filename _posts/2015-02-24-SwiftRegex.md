---
title: "Swift: RegEx"
category: "Swift"
copy: true
quote: true
tags: [iOS, Swift, Quote]
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
---
本文转自 `@OnevCat` 博客，版权归原作者所有。

作为一门先进的编程语言,Swift 可以说吸收了众多其他先进语言的优点,但是有一点却是让人略微失望的,就是 Swift 至今为止并没有在语言层面上支持 正则表达式。

大概是因为其实 app 开发并不像 Perl 或者 Ruby 那样的语言需要处理很多文 字匹配的问题,Cocoa 开发者确实不是特别依赖正则表达式。但是并不排除 有希望使用正则表达式的场景,我们是否能像其他语言一样,使用比如 =~ 这 样的符号来进行正则匹配呢?

最容易想到也是最容易实现的当然是自定义 `=~` 这个运算符。在 Cocoa 中我 们可以使用 `NSRegularExpression` 来做正则匹配,那么其实我们为它写一 个包装也并不是什么太困难的事情。因为做的是字符串正则匹配,所以 `=~` 左 右两边都是字符串。我们可以先写一个接受正则表达式的字符串,`以此生成NSRegularExpression` 对象。然后使用该对象来匹配输入字符串,并返回结果告诉调用者匹配是否成功。一个最简单的实现可能是下面这样的:

```swift
struct RegexHelper {
    let regex: NSRegularExpression?
  init(_ pattern: String) {
      var error: NSError?
      regex = NSRegularExpression(pattern: pattern, options: .CaseInsensitive, error: &error)
  }
  func match(input: String) -> Bool {
     if let matches = regex?.matchesInString(input, options: nil, range: NSMakeRange(0, count(input))) {
            return matches.count > 0
        } else {
            return false
        }
    }
}
```

在使用的时候,比如我们想要匹配一个邮箱地址,我们可以这样来使用:

```swift
let mailPattern = "^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$"
let matcher = RegexHelper(mailPattern)
let maybeMailAddress = "onev@onevcat.com"
if matcher.match(maybeMailAddress) {
  println("􏰀􏰁􏰂􏰃􏰄􏰅􏰆")
}
```

如果你想问 mailPattern 这一大串莫名其妙的匹配表达式是什么意思的 话..嘛..实在抱歉这里不是正则表达式的课堂.
现在我们有了方便的封装,接下来就让我们实现 =~ 吧。这里只给出结果了, 关于如何实现操作符和重载操作符的内容,可以参考操作符一节的内容。

```swift
infix operator =~ {
    associativity none
    precedence 130
}
func =~(lhs: String, rhs: String) -> Bool {
    return RegexHelper(rhs).match(lhs)
}
```

这下我们就可以使用类似于其他语言的正则匹配的方法了:

```swift
if "onev@onevcat.com" =~ "^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$" {
  println("􏰀􏰁􏰂􏰃􏰄􏰅􏰆")
}
```
