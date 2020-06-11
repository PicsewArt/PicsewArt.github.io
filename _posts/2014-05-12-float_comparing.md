---
title: "C : 浮点数"
category: "C"
cave: true
hero:
  format: 'jpeg'
  url: 'post/c.jpg'
tags: [iOS,C,Float]
---
其实浮点数的精度缺失应该是个众所周知的问题，而我第一次注意到这件事还是在学生时代，跟随着社会的洪流涌入了 J2EE 的学习热潮中，在一次使用 JavaScript 的过程中出现曾让我无比震惊的一幕:

```js

console.log(0.2 + 0.4);
console.log(0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1);

```

这段代码的输出结果是:

```sh

0.6000000000000001
0.6

```

带着疑惑，我转而投降了 Java、Python 以及 C:

```java

class Test {
	public static void main(String[] args) {
		System.out.println(0.2 + 0.4);
		System.out.println(0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1);
	}
}

```


```python

def main():
	print(0.2+0.4)
	print(0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1)

if __name__ == "__main__":
	main()

```


```c

#include <stdio.h>

int main(int argc, char *argv[]) {
	if (0.2 + 0.4 > 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1) {
		printf("0.2 + 0.4 > 0.1 + 0.1 + 0.1 + 0.1 + 0.1 + 0.1");
	}
}

```

最后的结论惊人的一致!

事实上，浮点数的表示范围真的少的可怜，在 32 位中浮点数的表示范围是 `10^38`，也就是说它能够表示 `1/10000000000000000000000000000000` 个数，如果你不知道这个数有多大，回想一下棋盘放麦粒的故事。

那么，在这些可以表示的数中，有多少可以精确表示呢？

为了回答这个问题，首先要思考**应该怎样精确表示小数?**

答案是使用定点数。这里我们需要先将定点数与整数、浮点数与小数区分开，我们要知道在计算中不存在整数和小数，只有定点数与浮点数。用定点数表示小数，也就是将小数的整数部分与小数部分分别存储(Java 中的 BigDecimal 就是这样做的)。然而我们知道，小数分为有限小数(例如 0.1)和无限小数(例如 `π`)，于是问题又来了:

* 无限小数该如何精确表示呢？

* 有限小数都可以精确表示吗？

无限小数由于小数点后的位数无限，就算你存满整个宇宙也无法精确表示。那么有限小数呢？

在计算中，所有的数据都是用二进制来存储，小数也不例外，要存储一个小数首先也要将其转换为二进制形式。首先了解一下如何转换:

以生活中最常见的十进制为例，十进制小数转换成二进制小数，通常采用 "乘二取整，顺序排列" 的方法法。具体做法是:

1. 用 2 乘十进制小数，可以得到积

2. 将积的整数部分取出

3. 用 2 乘余下的小数部分，又得到一个积

4. 再将积的整数部分取出，回到步骤 1 继续，直到积中的小数部分为零

5. 把取出的所有整数部分按顺序排列起来，先取的整数作为二进制小数的高位有效位，后取的整数作为低位有效位

按照这种方法，我们来试着将 0.1 转换为二进制:

1. 0.1 × 2 = 0.2  取 0 得 0.0

2. 0.2 × 2 = 0.4  取 0 得 0.00

3. 0.4 × 2 = 0.8  取 0 得 0.000

4. 0.8 × 2 = 1.6  取 1 得 0.0001

5. 0.6 × 2 = 0.2  取 1 得 0.00011

6. 0.2 × 2 = 0.4  取 0 得 0.000110

7. 0.4 × 2 = 0.8  取 0 得 0.0001100

8. 0.8 × 2 = 1.6  取 1 得 0.00011001

9. 0.6 × 2 = 1.2  取 1 得 0.000110011

...

最后，我们得到的是一个无限循环的二进制小数 `0.000110011…`，也就是说，0.1 是无法用精确表示的。

而事实上，从 0.1 到 0.9 中，只有 0.5 可以精确表示。

那么，我们该如何确定一个有限小数能否使用二进制精确表示呢？我们知道有限小数和无限循环可以用分数表示，而初中数学早已告诉我们，在十进制中，当一个分数化简到最简形式，如果分母的因式分解只有 2 和 5 (也就是 10 的两个因子)，那么它便可以转化为有限小数。那么，由此我们可以得出一个结论，如果一个十进制数要用二进制精确表示，那么它的末位必然为 5。

回到一开始的例子，0.2 与 0.4 相加时，由于 0.2、0.4 和 0.6 都无法精确表示，因此在计算前后其值都不可能精确等于 0.6。而至于为什么六个 0.1 相加得到了 0.6，你只要试试三个 0.2 相加就明白了。

在更复杂是实际应用中，还要涉及到很多相关理论，例如 IEEE 754 标准、epsilon 等。

此外，在开发过程中可能遇到的类似情况也有很多，例如:

```python

def main():
	f = 1.0 / 3
	print(f * 3 == 0.1)

if __name__ == "__main__":
	main()

```

输出结果为:

```sh

False

```


```objc

#import <Foundation/Foundation.h>

int main(int argc, char *argv[]) {
	@autoreleasepool {
		float f = 0.1;
		if (f > 0.1) {
			NSLog(@"f > 0.1");
		}
		if (f == (float)0.1) {
			NSLog(@"f == (float)0.1");
		}
	}
}

```

输出结果是:
```sh

f > 0.1
f == (float)0.1

```

```c

#include <stdio.h>

int main(int argc, char *argv[]) {
	float f = 0.9;
	if (f != 0.9) {
		printf("f != 0.9");
	}
	printf("\n");
	if (f == (float)0.9) {
		printf("f == (float)0.9");
	}
}

```

输出结果是:
```sh

f != 0.9
f == (float)0.9

```

对于 C 系语言，浮点数的比较有一个貌似不错的方法: 

```c

#define fequal(a,b) ((a) - (b) < FLT_EPSILON)
#define fequal0(a) (a < FLT_EPSILON)
#define flessthan(a,b) (a < b+FLT_EPSILON)
#define flessthanorequal(a,b) (flessthan(a, b) || fequal(a, b))

```

宏 `FLT_EPSILON` 是一个足够小的浮点数，表示的是 1 与下一个最接近的浮点数的差距，它在 ANSI C 中有定义。

**但是**，这个方法却依然不完善，例如 `fequal(8.1f, 8.1)` 返回的结果即为假，因为在值传递过程中浮点数的误差越来越大，此时和直接使用 `==` 运算符没有太大区别。

事实上，在这个方法中，如果使用 `FLT_EPSILON` 作为 espilon，则不应当应用于与大于 2 的比较中。

补充一个 C++ 示例:

```cpp

#include <iostream>
#include <math.h>
#include <float.h>

using namespace std;

bool fequal (float a, float b) {
	if (a == b)
		return true;
		
	float epsilon;
	if (a > b) {
		epsilon = a * FLT_EPSILON;
	} else {
		epsilon = b * FLT_EPSILON;
	}

	return fabs (a - b) <= epsilon;
}

int main(int argc, char *argv[]) {
	cout << fequal(8.1f, 8.1) << endl;
	double f = 1.0 / 3;
	cout << fequal(f * 3, 1.0) << endl;
}

```

(注: 在 C 语言中，你也可以通过引入 `<stdbool.h>` 使用 bool 类型。)

如果你更喜欢宏，那么它等价于:

```c

#define fequal(a,b) ((a) == (b) ? true : (fabs((a) - (b)) <= (fmax((a),(b)) * FLT_EPSILON)))

```

此时我们再次计算 `fequal(8.1f, 8.1)` 就没有问题了。

进一步的，根据前面所述，我们可以通过传入一个 multiplier 在内部产生 epsilon 值。

```cpp

bool fequal (float a, float b, unsigned epsilonMultiplier) {
  if (a == b)
    return true;

  float epsilon;
  if (a > b) {
    epsilon = scalbnf(1.0f, ilogb(a)) * FLT_EPSILON * epsilonMultiplier;
  } else {
    epsilon = scalbnf(1.0, ilogb(b)) * FLT_EPSILON * epsilonMultiplier;
  }

  return fabs (a - b) <= epsilon;
}

```

<center>**最后，转载请注明。**</center>






