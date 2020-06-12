---
title: "Python : 单例模式的实现"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0047.jpg'
tags: [Python,Singleton]
---
单利模式(Singleton)是大部分开发任务中常用的设计模式之一。这里我主要总结一下 Python 中的单利实现方式。

我综合了许多人的意见，主要有这样几种实现方式:

* 类实例与类变量绑定。

* 共享属性。

* 使用装饰器。

* 使用元类。

## 类实例与类变量绑定

先来看第一种方式:

```python

class Singleton(object):
    _instance = None

    def __new__(cls, *args):
        if not isinstance(cls._instance, cls):
            cls._instance = super(Singleton, cls).__new__(cls, *args)
        return cls._instance
    
```

看起来似乎不错，但却存在一个严重的问题 —— 如果某个类继承了这个 `Singleton` 类，它将可以重写了父类的 `__new__` 方法，这样就会导致其失去唯一性。

```python

class MyClass(Singleton):
    def __new__(cls, *args):
        return super(D, cls).__new__(cls, *args)

```


## 共享属性

```python

class Borg(object):  
    _state = {}  
    def __new__(cls, *args, **kw):  
        ob = super(Borg, cls).__new__(cls, *args, **kw)  
        ob.__dict__ = cls._state  
        return ob

```

使同一个类的所有实例具有相同的属性来实现单例效果。但这样做，生成的实例将是不同的对象。

## 使用装饰器

通过装饰器实现的方式，其实可以看做第一种方式的升级本版本。

```python

def singleton(_cls):
    insts = {}

    def getinstance(*args, **kwargs):
        if _cls not in insts:
            insts[_cls] = _cls(*args, **kwargs)
        return insts[_cls]
    return getinstance

@singleton
class MyClass(object):
    pass
    
```

问题显而易见，而我们也并不希望在此之外定义太多的内容。

## 使用元类

事实上，通过使用元类(`__metaclass__`)也可以达到单例效果，并且不失为一种好方法。

```python

class Singleton(type):  
    def __init__(cls, name, bases, dict):  
        super(Singleton, cls).__init__(name, bases, dict)  
        cls._instance = None  
    def __call__(cls, *args, **kw):  
        if cls._instance is None:  
            cls._instance = super(Singleton, cls).__call__(*args, **kw)  
        return cls._instance  
  
class MyClass(object):  
    __metaclass__ = Singleton 
    
```






