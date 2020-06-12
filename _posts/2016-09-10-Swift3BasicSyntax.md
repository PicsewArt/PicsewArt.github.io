---
title: "Swift 3: Basic Syntax"
category: "Swift"
copy: true
tags: [Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0004.jpg'
---
这里是一些 Swift 3 的基本语法示例，Swift 前几个版本变化较大，所以做一个总结。

虽然目前来说选择 Swift 做为商业应用的开发语言的维护成本还是很大，但始终是一个前进的方向。

## 控制台输出

```swift
let con = "something"
print("content: \(con)")
```
## 常量和变量

常量使用 `let` 声明, 变量使用 `var` 声明。

#### 自动推导

```swift
let b = 10   //Int
let b1 = 10.0   //Double
let b2 = ""  //String
let b3 = true //Bool
```

#### 声明类型

```swift
var a: Int = 10
var a1: Float = 10
var a2: Double = 20
var a3: String = "Hello World"
var a4: Bool = true //布尔值为ture和false
```

#### 类型转换

```swift
var c = 20
var d = 10.0
var sum = Double(c) + d   //Double
var sum1 = c + Int(d)  //Int
let str = "string"
let nsstr = str as NSString
```
#### 类型别名

```swift
typealias AType = Int
typealias CustomString = String
let e: AType = 20
let _: CustomString = "ssss"//当定义的变量和常量没被用到时，系统建议你改成"_"
```

#### 可选类型

```swift
var str: String? = nil
if str == nil {
    print("str is nil")
} else {
    print("\(str!)")
}
```

#### 元组

```swift
let (x, y, w, h) = (10, 10, 50, 60) //x=10,y=10,w=50,h=60
print(x, y, w, h)
print(x)
```

## 类

#### 定义

```swift
class 类名: 父类, 协议1, 协议2, ... {
    // ...
}

class 类名 {
    // ...
}
```

例如

```swift
class SomeClass {

}

class AntoherClass: SomeClass, NSTableViewDelegate {

}

let v = AntoherClass()
```

#### 构造

构造器分为指定构造器与便利构造器。

```swift
class SomeClass {
    public var state: Int?

    init() {
        state = 0
    }

    init(withState s: Int) {
        state = s
    }
}

let v1 = SomeClass()
let v2 = SomeClass(withState: 2)

print("v1.state = \(v1.state!), v2.state = \(v2.state!)")
```

```swift
class Person: NSObject {

    open var name: String?

    init(withName n: String) {
        name = n
    }
}
```

```swift
class MXDemoViewController: NSViewController {

    public var value: Int?

    init(withParam param: Int) {
        super.init(nibName: nil, bundle: nil)!
        value = param
    }

    required init?(coder: NSCoder) {
        super.init(coder: coder)
    }
}

class MXSubViewController: MXDemoViewController {

    override init(withParam param: Int) {
        super.init(withParam: param)
        print(param)
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
```

## 析构

```swift
deinit() {

}
```

## 函数/方法

#### 对象方法

```swift
func 方法名字(标签1 参数1: 参数1类型, 标签2 参数2: 参数2类型, ...) -> 返回值 {
   // ...
}
```

#### 类方法

```swift
class func 方法名字(标签1 参数1: 参数1类型, 标签2 参数2: 参数2类型, ...) -> 返回值 {
    // ...
}
```

#### 示例

```swift
func someFunctionName(withArg argOne: Int, andArg argTwo: Int) -> Int {
    return argOne + argTwo
}

let num = someFunctionName(withArg: 1, andArg: 2)
```

```swift
func simpleFunction(_ arg: Double) {
    print("arg is \(arg)")
}

simpleFunction(2.5)
```

```swift
class SomeClass {
    class func showAlert(withTitle title: String, informative: String, sound: String? = kNSDefualtSoundName) {
        // ...
    }
}

SomeClass.showAlert(withTitle: "Notification", informative: "Hello there!")
SomeClass.showAlert(withTitle: "Notification", informative: "Hello Again!", sound: nil)
```

```swift
func getNumber() -> (Int, Int) {
    return (1, 5)
}

let v = getNumber().0
```

```swift
func debug(_ items: Any..., function: String = #function) {
    print(items)
    print(function)
}
```

## 异常处理

#### 定义异常类型

```swift
enum LoginError: Error {
    /// 用户名为空
    case usernameNull
    /// 密码为空
    case passwordNull
}
```
#### 抛出异常

```swift
func loginButtonClicked(username: String, password: String) throws {
    if username.characters.count == 0 {
        throw LoginError.usernameNull
    } else if password.characters.count == 0 {
        throw LoginError.passwordNull
    }
}
```
#### 捕获异常

```swift
do {
    try loginButtonClick(username: "Meniny", password: "1234567")
} catch LoginError.usernameNull {
    print("用户名为空")
} catch LoginError.passwordNull {
    print("密码为空")
}
```

```swift
do {
    try FileManager.default.createDirectory(atPath: fullPath, withIntermediateDirectories: true, attributes: nil)
} catch let error {
    print(error)
}
```

## 断言

```swift
func giveMeAString(_ str: String) {
    assert(str.characters.count > 0, "字符串长度不能为空")
    print(str)
}
```

## for in

```swift
for i in 1...10 { // 1 <= x <= 10
    print(i)
}

for i in 1..<10 { // 1 <= x < 10
    print(i)
}

let arr: [Int] = [1, 2, 3, 4, 5]
for number in arr {
    print(number)
}
```

## if else

```swift
if i == 0 {
    print("i == 0")
}
```

```swift
if i == 0 {

} else if i == 1 {

} else {

}
```

```swift
let b = true
if b {

}
```

```swift
let arr = [1, 2, 3]
if arr is Array {

}
```

```swift
var v1: String?
if let str = v1 {

} else {

}
```

## guard

```swift
var v1: String? = ""
guard v1 != nil else {
    print("v1 == nil")
}
print(v1!)
```

## switch

`switch` 不需要在每一个 `case` 后紧跟 `break`，如果需要顺序执行到下一个 `case` 则需要紧跟 `fallthrough`。

```swift
switch i {
case 0:
    print("i = 0")
case 1:
    print("i = 1")
case 2:
    print("i = 2")
default:
    print("default")
}
```

```swift
switch i {
case 0...5:
    print("i大于等于0 小于等于5")
case 6...10:
    print("i大于等于6 小于等于10")
default:
    print("i大于10")
}
```

```swift
let (x1, x2) = (10, 20)
switch (x1, x2) {
case (10, 20):
    print("x1 = 10, x2 = 20")
default:
    print("other")
}
```

## Array

```swift
let arr: [String] = [] //数组里面没有数据，数组元素类型是 String
let arr2: Array<String> = []
var arr3: Array<Int> = [1,2,4]
let arr4: NSMutableArray = NSMutableArray()

_ = arr3[0] // 下标为0的元素
_ = arr3.first //第一个元素
_ arr3.last //最后一个元素
arr3.append(5) // 添加元素，值为5
arr3.remove(at: 0) // 删除下标为0的元素
arr3.removeAll() // 删除所有元素
```

## Dictionary

```swift
var dic1: [String: String] = [:]
var dic2: Dictionary<String, String> = [:]
var dic3 = ["key1": "value1", "key2":"value2"]
var dic4: [String: String]?

dic3["key1"] = "Meniny"
dic3["key3"] = "value3"
dic3["key3"] = ""
dic3.removeValue(forKey: "key3")
```

## Closure

```swift
public typealias VoidBlock = () -> Swift.Void
public typealias StringBlock = (_ str: String?) -> Swift.Void
```

```swift
let numbers = [1, 4, 2, 3]
let res = numbers.sort {
    $0 < $1
}
```

```swift
// 正常写法，函数是作为 sort 的参数
arr.sort({ $0 < $1 })

// Trailing Closure 写法，更简洁明了
arr.sort { $0 < $1 }
```

## Enumeration

```swift
enum MyEnum {
    case name
    case age
    case gender
}

enum SomeEnum: Int {
    case caseOne = 0
    case caseTwo = 1
    case caseThree = 2

    func stirngValue() -> String {
        switch self {
        case .caseOne:
            return "case one"
        case .caseTwo:
            return "case two"
        default:
            return "case three"
        }
    }
}

let c = SomeEnum.caseTwo
_ = c.stringValue()

enum AntoherEnum: String {
    case iOS = "iOS"
    case macOS = "macOS"
    case watchOS = "watchOS"
}

_ = AntoherEnum.macOS.rawValue
```

```swift
public enum EncodingResult {
    case success(request: URLRequest)
    case failure(Error)
}

class NetworkStuffs {
    class func upload(_ request: URLRequest, encodingCompletion: ((EncodingResult) -> Void)?) {
        // ...
    }
}

let r: URLRequest = URLRequest(url: URL(string: "https://domain.com/test.php")!)
NetworkStuffs.upload(r) { (result) in
    switch result {
    case .success(let request):
        print(request)
    case .failure(let error):
        print(error)
    }
}
```

## Extension

```swift
import Cocoa

class ViewController: NSViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }
}

extension ViewController: NSTableViewDelegate  {

    func tableViewColumnDidMove(_ notification: Notification) {

    }

}
```

```swift
extension SomeClass where Self : NSCoding {
    // ...
}
```

## 泛型

```swift
func swapValues<T>(_ l: T, _ r: T) {
    let temporaryL = l
    l = r
    r = temporaryL
}
```

## 单例

```swift
class ImageService: NSObject {

    open var state: Int = 0

    static let shared = ImageService()
    // ...
}

_ = ImageService.shared.state
```

## 高阶函数

#### map

`map` 用于对元素进行某种转换

```swift
let arr = [1,2,3]
let maped = arr.map { (i) -> String in
    return "\(i)"
}

print(maped)
```

```swift
let arr = [1,2,3]
let maped2 = arr.map { (i) -> Int in
    return i * 2
}

print(maped2)
```

#### filter

`filter` 用于对元素进行过滤

```swift
let arr = [1,2,3]
let f = arr.filter { (i) -> Bool in
    return i % 2 > 0
}
print(f)
```

#### reduce

`reduce` 用于对元素进行计算

```swift
let arr = [1,2,3]
// 求和
let sum = arr.reduce(0) { (pre, i) -> Int in
    return pre + i
}
print(sum)
```

```swift
let arr = [1,2,3]
// 转换为一个字典
let dic = arr.reduce([:]) { (pre, i) -> [String: Int] in
    var d = pre
    d["\(i)"] = i
    return d
}
print(dic)
```
