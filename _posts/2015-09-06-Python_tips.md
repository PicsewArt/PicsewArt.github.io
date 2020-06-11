---
title: "Python : Tips for Beginners"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0042.jpg'
excerpt: "Here are some useful tips and tricks in Python for beginners to the language."
tags: [Python]
---
Here are some useful tips and tricks in Python for beginners to the language who's coming from a traditional programming language like C or Java, and I assume you are using Python 3.

## Swapping Elements

Here is the way that you're probably used to swap elements:

```python

a = 1
b = 2
tmp = a
a = b
b = tmp

```

But here's a better way:
```python

a = 1
b = 2
a, b = b, a

```


## Initializing Lists

Sometime you just need a list of some integers set to zero. So you may do something like this:

```python

arr = []
for _ in range(5):
    arr.append(0)

```

Elegantly:
```python

arr = [0] * 5

```

But, do note that this will create a shallow copy if you are working with a list within a list.

For example:

```python

arr = [[0]] * 5
# [[0], [0], [0], [0], [0]]
arr[0][0] = 1
# [[1], [1], [1], [1], [1]]

```


## String building

Now, you're going to need to print strings.

```python

tom = "boy"
lucy = "girl"
string = "Tom is a " + tom + " and Lucy is a " + lucy + ".";

```

Ugh, how messy. Do this instead:
```python

tom = "boy"
lucy = "girl"
string = "Tom is a {0} and Lucy is a {1}.".format(tom, lucy)

```


## List Comprehensions

Then, suppose you have a list like this:

```python

arr = [1, 2, 3, 4, 5]

```


And you want to double each element in that list:

```python

for i in range(len(arr)):
    arr[i] = arr[i] * 2
# [2, 4, 6, 8, 10]

```

Well, I can't say it's wrong, but I do have a cleaner way:

```python

arr = [elem * 2 for elem in arr]

```


## Returning tuples

To make life easier, Python allows you to return multiple elements (which is called tuples) in a function.

```python

def getTwoNumber():
    return 1, 2

first, second = getTwoNumber()

```

And you can use an underscore if you don't need all of the elements returned, like so:

```python

_, second = getTwoNumber()

```


## Accessing Dictionaries

```python

dict = {}
keys = [1, 2, 9]

dict = {i: 100 for i in keys}

for i in range(10):
	print("value for key {} is {}".format(i, dict.get(i, "empty")))

```

Nifty, huh?

