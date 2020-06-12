---
title: "OS X: How to get the path of Home directory"
category: "OS X"
copy: true
tags: [OS X, NSHomeDirectory]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
---
We all know that `NSHomeDirectory()` is retuning the sandbox root (not the home directory),  `[@"~" stringByExpandingTildeInPath]` is doing the same thing.

This `/Users/username/Library/Containers/appID/Data` is what's being returned.

The only thing its really good for is setting a sane default to the file open/save dialogs. Right now, if we set it to `NSHomeDirectory()` its not very user friendly. Most people don't even know what the `Library` folder is.

So, how do we get `/Users/username/`?

Here's a example:

```objc
// MXCocoaHelper.m
#include <unistd.h>
#include <sys/types.h>
#include <pwd.h>
#include <assert.h>

NSString * NSRealHomeDirectory(void) {
    struct passwd *pw = getpwuid(getuid());
    assert(pw);
    return [NSString stringWithUTF8String:pw->pw_dir];
}
```
This gives you the path to the user's home, but does not automatically give you access to that folder. You can use this path for:

* Providing a sane default folder for the open/save dialogs
* Detecting whether you are in a sandbox, by comparing the result to `NSHomeDirectory()`
