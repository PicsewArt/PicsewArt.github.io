---
title: "Cocoa: Change Cursor"
category: "OS X"
copy: true
tags: [OS X, Cocoa]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0028.jpg'
---
The way to change the cursor when it's over an `NSButton`:

* First, you should subclass `NSButton` first, then add the code below:

```objc
@property (strong) NSCursor *cursor;

- (void)resetCursorRects {
    if (self.cursor) {
        [self addCursorRect:[self bounds] cursor: self.cursor];
    } else {
        [super resetCursorRects];
    }
}
```
* Now, set cursor as you like:

```objc
[self.button setCursor:[NSCursor pointingHandCursor]];
```
