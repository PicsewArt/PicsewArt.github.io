---
title: "Kotlin : Syntax"
category: "Kotlin"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0048.jpg'
tags: [Kotlin]
---
前面对 Kotlin 的情况做了简单介绍，这一篇再来说说它的基本语法。

## 分号

首先可喜可贺的是，Kotlin 中语句末尾并不需要分号结尾。

## 基本类型

Kotlin 中的基本数据类型有:

<table>
<tr><th>类型</th><th>位宽</th></tr>
<tr><th>Double</th><th>	64</th></tr>
<tr><th>Float</th><th>32</th></tr>
<tr><th>Long</th><th>64</th></tr>
<tr><th>Int</th><th>32</th></tr>
<tr><th>Short</th><th>16</th></tr>
<tr><th>Byte</th><th>8</th></tr>
</table>

## 位操作符

用于 `Int` 和 `Long` 类型的位操作符:

* `shl(bits)` : Java `<<`

* `shr(bits)` : Java `>>`

* `ushr(bits)` : Java `>>>`

* `and(bits)` : 位与

* `or(bits)` : 位或

* `xor(bits)` : 位异或

* `inv()` : 倒转

## 转义符

可以使用的转义符有:

* `\t`

* `\b`

* `\n`

* `\r`

* `\'`

* `\"`

* `\\`

* `\$`

## 包

包定义应该出现在文件最顶端:

```swift

package mine.demo

import java.util.*

// ...

```



这并不要求匹配目录，源文件可以放置在任意位置。

```swift

import foo.Bar
import foo.*
import foo.Bar
import bar.Bar as bBar

```



## 函数

Kotlin 中的函数使用 `fun` 关键字来定义，格式为:

```swift

fun 函数名(参数名一: 参数一类型, 参数名二: 参数二类型, 参数名三: 参数三类型 = 参数三默认值): 返回值类型 {
	// ...
	return ...
}

```



举个栗子，我们要计算两个数的和，于是我们定义一个返回 `Int` 值、接收两个 `Int` 参数的函数:

```swift

fun sum(a: Int, b: Int): Int {
  return a + b
}

```



返回值的类型还可以通过推断来确定:

```swift

fun sum(a: Int, b: Int) = a + b

```



或者返回无意义的值:

```swift

fun printSum(a: Int, b: Int): Unit {
  print(a + b)
}

```



当然，既然是无意义的，那么 `Unit` 也是可以省略的:

```swift

fun printSum(a: Int, b: Int) {
  print(a + b)
}

```



调用函数也很简单:

```swift

val a = sum(1, 2)

```



也可以使用点符号(`.`):

```swift

Sample.foo()

```



对于只有一个参数的、使用 `infix` 关键字修饰的成员函数或扩展函数，还可以通过中缀形式，例如:

```swift

infix fun Int.shl(x: Int): Int {
	// ...
}

```


在使用时，下面这两行代码是等价的:

```swift

1 shl 2
1.shl(2)

```



## 本地变量

定义只读的单次赋值本地变量使用 `val` 关键字:

```swift

val a: Int = 1

```



同样可以使用类型推导:

```swift

val b = 1

```



定义时若没有初始化则必须指明类型:

```swift

val c: Int
c = 1

```



可变变量:

```swift

var x = 5
x += 1

```



## 属性

完整的属性定义语法是:

```swift

权限修饰 var 属性名称: 属性类型 = 初始化值
  [<getter>]
  [<setter>]

```



举个栗子:

```swift

public class Address {
  public var name: String = ...
  public var street: String = ...
  public var city: String = ...
  public var state: String? = ...
  public var zip: String = ...
}

fun copyAddress(address: Address): Address {
  val result = Address() // 实例化类时并不需要 new 关键字，事实上，Kotlin 中也不存在 new 这个关键字
  result.name = address.name
  result.street = address.street
  // ...
  return result
}

```



对于 getter 和 setter:

```swift

var stringRepresentation: String
  get() = this.toString()
  set(value) { // 如果你喜欢的话，也可以使用 value 意外的标识符
    setDataFromString(value)
  }

```



```swift

private var _table: Map<String, Int>? = null
public val table: Map<String, Int>
  get() {
    if (_table == null)
      _table = HashMap()
    return _table ?: throw AssertionError("Set to null by another thread")
  }

```



## 注释

Kotlin 中的注释与主流的其他语言类似，比如 C、Java、JavaScript:

```swift

// 单行注释，到行尾失效

/* 多行注释

	可以换行的哟 */

```



和 Java 不同的是，Kotlin 的多行注释是可以嵌套的。

注释还有一个重要的用途就是文档标记，例如

```swift

/**
 * A group of *members*.
 *
 * This class has no useful logic; it's just a documentation example.
 *
 * @param T the type of a member in this group.
 * @property name the name of this group.
 * @constructor Creates an empty group.
 */
class Group<T>(val name: String) {
    /**
     * Adds a [member] to this group.
     * @return the new size of the group.
     */
    fun add(member: T): Int { ... }
}

```



可以使用的标签有:

* `@param <name>`

* `@return`

* `@constructor`

* `@property <name>`

* `@throws <class>`、`@exception <class>`

* `@sample <identifier>`

* `@see <identifier>`

* `@author`

* `@since`

* `@suppress`

对于行内标记，Kotlin 使用 [标准 Markdown 语法](https://daringfireball.net/projects/markdown/syntax)。

## 字符串模板

```swift

fun main(args: Array<String>) {
  if (args.size == 0) return

  print("First argument: ${args[0]}")

	val i = 10
	val s = "i = $i"

	val s = "abc"
	val str = "$s.length is ${s.length}"

	val price = """
	${'$'}9.99
	"""
}

```



## if 判断

通常我们会这样使用:

```swift

fun max(a: Int, b: Int): Int {
  if (a > b)
    return a
  else
    return b
}

```



在 Kotlin 中，上面的代码还可以这样写:

```swift

fun max(a: Int, b: Int) = if (a > b) a else b

```



## 可空类型

当一个值可能为 `null` 时，要明确的标明，例如:

```swift

fun parseInt(str: String): Int? {
  // ...
}

```


## 类型判断

使用 `is` 关键字可以判断一个表达式的值是否为某个类型的实例。

```swift

fun getStringLength(obj: Any): Int? {
  if (obj is String) {
    // 此处 `obj` 被自动转换为 `String`
    return obj.length
  }

  // `obj` 在类型检查分支外依然为 `Any`
  return null
}

```



对于 `is` 关键字，你还可以使用 `!` 操作符达到 "is not" 的效果:

```swift

fun getStringLength(obj: Any): Int? {
  if (obj !is String)
    return null

  return obj.length
}

```



## for in 循环

你可以这样使用 `for in` 循环:

```swift

fun main(args: Array<String>) {
  for (arg in args)
    print(arg)
}

```



```swift

for ((index, value) in array.withIndex()) {
    println("the element at $index is $value")
}

```



当然，你可以在遍历内容时额外添加类型:

```swift


for (item: Int in ints) {
  // ...
}

```





## while 循环

```swift

fun main(args: Array<String>) {
  var i = 0
  while (i < args.size)
    print(args[i++])
}

```



## do while 循环

```swift

do {
  val y = retrieveData()
} while (y != null) // y 在这里是可以使用的!

```



## 范围

范围(`range`)使用 `起始值..结尾值` 的格式书写，例如:

```swift

if (x in 1..y-1)
  print("OK")

```



你还可以使用 `downTo`、`step` 关键字做更多限定:

```swift

for (i in 1..4 step 2) print(i) // 输出 "13"
for (i in 4 downTo 1 step 2) print(i) // 输出 "42"

```



## when 匹配

```swift

fun cases(obj: Any) {
  when (obj) {
    1          -> print("One")
    0, 2 		 -> print("x == 0 or x == 1")
    in 1..10 	 -> print("x is in the range")
    foo(s) 		 -> print("foo")
    "Hello"    -> print("Greeting")
    is Long    -> print("Long")
    !is String -> print("Not a string")
    else       -> print("Unknown")
  }
}


```







