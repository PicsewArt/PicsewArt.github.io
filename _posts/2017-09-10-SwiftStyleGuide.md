---
title: "Swift 代码规范"
cave: true
hero:
  format: 'jpeg'
  url: 'post/swift.jpg'
category: "iOS"
tags: [iOS, macOS, Swift, StyleGuide]
---

# 这是什么

这是一份 Swift 代码规范和约定, 它存在的目的是:

* 提高代码明确性, 避免意外错误
* 减少冗余
* 增强美感及可读性

#### 留白和空行

 * 行首空白用 Tabs 而非 空格
 * 文件结束时留一行空行
 * 用足够的空行把代码分割成合理的块
 * 不要在一行结尾留下空白, 更不要在空行留下缩进

#### let/var

在意图明确的情况下尽量使用 `let foo = ...` 而非 `var foo = ...`, 因为 `let` 可以产生安全清晰的代码。

#### return/break 与 条件判断

在条件判断中, `return`/`break` 应尽早被使用, 也就是说, 你应该使用:

```swift
guard n.available else {
    return
}
// ...
```

而不是:

```swift
if n.available {
    // ...
} else {
    return
}
```

#### 可选类型

避免对可选类型 `Type?` 进行不安全的强制解包, 例如:

```swift
var opt: String?
foo(opt!)
```

更好的做法是:

```swift
if let opt = opt {
    foo(opt)
} else {
    print("opt is nil")
}
```

或者, 使用可选链 (Optional Chaining):

```swift
opt?.callSomeFunctionIfOptIsNotNil()
```

此外如果 opt 可能为 `nil`, 尽可能使用 `let opt: SomeType?` 而非 `let opt: SomeType!`

#### 只读属性与下标

如果可以, 省略只读计算属性和只读下标的 `get` 关键字。

也即:

```swift
var myGreatProperty: Int {
	return 4
}

subscript(index: Int) -> T {
  return objects[index]
}
```

… not these:

```swift
var myGreatProperty: Int {
	get {
		return 4
	}
}

subscript(index: Int) -> T {
  get {
    return objects[index]
  }
}
```

#### 顶级定义与权限控制

顶级函数、类型和变量等定义声明, 应有详尽的权限控制修饰符:

```swift
public var whoopsGlobalState: Int
private func doTheThings(things: [Thing]) {}
```

当然, 其内部定义使用隐式的权限控制也是恰当的:

```swift
private struct TheFez {
	var owner: Person = Elias()
}
```

#### 标识符与冒号

在声明标示符的类型时, 冒号紧跟标示符, 然后空格后再写类型:

```swift
class SmallBatchSustainableFairtrade: Coffee { ... }

let timeToCoffee: NSTimeInterval = 2

func makeCoffee(type: CoffeeType) -> Coffee { ... }
```

对于字典类型, 冒号紧跟键类型/键值, 接着空格后再写值:

```swift
let capitals: [Country: City] = [Sweden: Stockholm]
```

不要出现这样的情况:

```swift
var thing : Double?
class SomeWrongStyleClass :NSObject { ... }
func drinkWine(wine:WineType) -> Void { ... }
let student:[Sring:String] = ["name"   : "Abel"]
```

#### 其它符号

常见的符号、运算符 `=`/`+`/`-`/`>`/`<`/`>=`/`<=`/`&&`/`||` 等, 左右两端应各自保留一个空格:

`let type = TypeEnum.numberType`

在定义运算符/操作符时, 左右两侧也应保留一个空格:

```swift
func <| (lhs: Int, rhs: Int) -> Int
func <|< <A>(lhs: A, rhs: A) -> A
```

#### self

使用 self 更明显的区分作用域:

```swift
private class History {
	var events: [Event]

	func rewrite() {
		self.events = []
	}

  var whenVictorious: () -> () {
		return {
			self.rewrite()
		}
	}
}
```

#### struct/class

尽量选择结构体 (struct) 而非类 (class), 因为值类型更简单, 更易推断。除非, 你需要只有类才能提供的功能, 例如 identity、deinitializers 等, 但是, 通常继承**并不是**是使用类的理由, 因为 __多态__ 可以通过 __协议__ 实现, __重用__ 可以通过 __组合__ 实现。

例如你有这样一份代码:

```swift
class Vehicle {
    let numberOfWheels: Int

    init(numberOfWheels: Int) {
        self.numberOfWheels = numberOfWheels
    }

    func maximumTotalTirePressure(pressurePerWheel: Float) -> Float {
        return pressurePerWheel * Float(numberOfWheels)
    }
}

class Bicycle: Vehicle {
    init() {
        super.init(numberOfWheels: 2)
    }
}

class Car: Vehicle {
    init() {
        super.init(numberOfWheels: 4)
    }
}
```

更好的实现方式是:

```swift
protocol Vehicle {
    var numberOfWheels: Int { get }
}

func maximumTotalTirePressure(vehicle: Vehicle, pressurePerWheel: Float) -> Float {
    return pressurePerWheel * Float(vehicle.numberOfWheels)
}

struct Bicycle: Vehicle {
    let numberOfWheels = 2
}

struct Car: Vehicle {
    let numberOfWheels = 4
}
```

#### final

类的定义应默认使用 `final` 关键字修饰, 并且只在需要被继承的需求明确后, 才做出改变, 但即便在这种情况下, 该类内部的定义也应尽量先使用 `final` 修饰, 这一规则与类相同。

#### 类型参数

对于参数化的类型的方法, 当其接受类型的类型参数已被接受者指明时, 应当省略, 这样看起来更清晰明了。

例如, 你有这段代码

```swift
struct Composite<T> {
  ...
	func compose(other: Composite<T>) -> Composite<T> {
		return Composite<T>(self, other)
	}
}
```

更好的写法是:

```swift
struct Composite<T> {
	...
	func compose(other: Composite) -> Composite {
		return Composite(self, other)
	}
}
```
