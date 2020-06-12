---
title: "Python: 构建包的那些事"
category: "Python"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0060.jpg'
tags: [Python]
---
一般来说构建一个包是很简单的事情，许多人只把一堆模块都放进一个有 `__init__.py ` 文件的目录里面，但是，随着对包的修改越来越多，糟糕的设计就会变得臃肿、脆弱，甚至带来循环依赖问题。

## `__init__.py` 该做什么

格式良好的 `__init__.py` 有一个重要作用: 导入子模块。

它应该像这样:

```python

# 导入顺序很重要 —— 有些模块依赖于其他模块

from exceptions import MXError, MXEnvError, MXEncodeError,\
                       MXTimeFmtError, MXMalformedEntryError,\
                       MXCoerceError, MXEnqueueError, MXConfigError,\
                       MXPathError, MXInstallError, MXCannotLockError,\
                       MXWorkItemError, MXTTLExpiredError,\
                       MXMaxTriesError, MXScanError, MXDownError,\
                       MXDoneError, MXFailError, MXTriggerPullError,\
                       MXHostsError, MXReenqueueError, MXPushError

# constants 依赖于：exceptions，internal

import constants
# const 依赖于：constants，exceptions，internal

from const import const, set_const
# has tests# path 依赖于：exceptions，constants，internal

import path
 # has tests# lists 依赖于：path

from lists import hosts, queues
 #...

```

由此解决了两个问题:

* 在包的作用域中暴露方法和类，用户不必深入到包的内部结构，即可轻松使用包

* 协调导入顺序的唯一位置

如果运用得当，`__init__.py` 可以让你灵活地再组织包的内部结构，而不需要担心内部导入顺序带来的副作用，并且，也很容易被其他开发者理解。

在包这一级，一个文档字符串以及 `__all__` 属性赋值，就是你的 `__init__.py` 中唯一的非导入代码:

```python

__all__ = [ 'MXError', 'MXEnvError', 'MXEncodeError', 'MXTimeFmtError',
                   'MXMalformedEntryError', 'MXCoerceError', 'MXEnqueueError',
                   'MXConfigError', 'MXCannotLock', 'MXWorkItemError',
                    'MXTTLExpiredError', 'MXMaxTriesError', 'MXScanError',
                    'MXDownError', 'MXDoneError', 'MXFailError', 'MXInstallError',
                    'MXTriggerPullError', 'MXCannotLockError', 'MXPathError',
                    'path', 'constants', 'const', 'set_const', 'down', 'up',
                     # ...
          ]

```

## 高颗粒度异常定义

大多数的包会在抛出异常的代码附近来定义异常。虽然这可以使得模块更加紧密，但是当包足够复杂的时候，则会出现问题。因此，你应该定义足够多的异常，并且要有充足的颗粒度:

```python

# from mx

class MXEnvError(MXError):
    '''An error if something cannot be loaded from env, or env has an invalid
       value'''
    pass

class MXEncodeError(MXError):
      '''An error occured while encoding or decoding an argument'''
    pass

# ... and 20 or so more

```

异常的粒度越高，`try` / `except` 可以包裹的代码块越大:

```python

# 像这样
try:
   item = mx.senqueue('queue', 'str', 'arg', 'arg')
   scanner = mx.scan('queue')
except MXScanError:
   '''do something'''

except MXEnqueueError:
      '''do something else'''

```

```python

# 而不是这样
try:
    item = mx.senqueue('queue', 'str', 'arg', 'arg')
except MXEnqueueError:
    '''do something else'''

try:
    scanner = mx.scan('queue')
except MXScanError:
    '''do something'''

```

```python

# 更不要这样
try:
    item = mx.senqueue('queue', 'str', 'arg', 'arg')
        try:
        scanner = mx.scan('queue')
        except MXScanError:
                '''do something'''
except MXEnqueueError:
          '''do something else'''

```

异常定义中的高粒度使得错误处理更简单易懂，方便理解和维护。

## 相对导入

在子模块中最容易犯的错误就是，使用包自身的名字来导入包:

```python

# within a sub-module

from a_package import APackageError

```

这会产生两个问题:

* 只有当这个包安装在 `Python` 环境变量路径 `PYTHONPATH` 中的时候才会正常运行

* 只有当包的名字是 `a_package` 的时候才会正常运行

为了避免这些不必要的问题，你应该采用相对导入:

```python

# within a sub-module

from . import MXEnqueueError, MXCoerceError, MXError, MXReenqueueError,\
              constants as _c, path as mx_path, construct,\
              hosts as mx_hosts, MXWorkItem

from . internal import rationalize_file, wrap_io_os_err, fmt_time,\
                      coerce_unicode, uid_gid

# you can also use ../... etc. in sub-packages.

```

## 保持模块小巧

模块应该尽量小巧。一个很好的经验是，在每个模块中只定义一个类，以及所需要的任何辅助方法和工厂方法:

```python

class APackageClass(object):
    '''One class'''

def apackage_builder(how_many):
    for i in range(how_many):
            yield APackageClass()

```

如果模块中有要暴露出来的方法，那么就将相互依赖的方法放到一个模块中，将不相互关联的方法移到其他模块:

```python

####### EXPOSED METHODS #######

def enqueue(trg_queue, item_f, *args, **kwargs):
    '''Enqueue the contents of a file, or file-like object, file-descriptor or
       the contents of a file at an address (e.g. '/my/file') queue with
       arbitrary arguments, enqueue is to venqueue what printf is to vprintf
    '''
    return venqueue(trg_queue, item_f, args, **kwargs)

def senqueue(trg_queue, item_s, *args, **kwargs):
    '''Enqueue a string, or string-like object to queue with arbitrary
       arguments, senqueue is to enqueue what sprintf is to printf, senqueue
       is to vsenqueue what sprintf is to vsprintf.
    '''
    return vsenqueue(trg_queue, item_s, args, **kwargs)

def venqueue(trg_queue, item_f, args, user=None, group=None, mode=None):
    '''Enqueue the contents of a file, or file-like object, file-descriptor or
       the contents of a file at an address (e.g. '/my/file') queue with
       an argument list, venqueue is to enqueue what vprintf is to printf
       if entropy is passed in, failure on duplicates is raised to the caller,
       if entropy is not passed in, venqueue will increment entropy until it
       can create the queue item.
    '''
    # setup defaults
    trg_fd = name = None
    # ...

```

上面的例子 `mx/enqueue.py` 暴露了一组函数，它们提供了同一功能的不同接口 (类似于 `simplejson` 中的 `load`/`loads` ) 。虽然这个例子很简单直白，但是要保持模块小巧，还需要一定的判断力。





