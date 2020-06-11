---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS, Quote]
title: Renaming Variables in Xcode
---

For both persons and programming variables, a good name is an invitation to a prosperous life.
Luckily for your Objective-C variables, changing their name is easier than the legal trouble of changing your own name to 'Max Power'.

Find out how:

## 'Edit All In Scope'

To rename a symbol present solely inside a function, use the 'Edit All In Scope' function. As it the name implies, this will edit the symbol's name inside the current scope.

To make use of this feature:

1. Place the cursor on top of the symbol to be renamed and press ```CTRL+E```.
2. Edit your symbol's name.
3. Press ```Enter``` to finish the edit.

Alternatively, you can try placing your mouse on top of a symbol, wait until it is underlined, select the menu 'Edit All In Scope' and go on from there.

Personally, I found this approach annoying.

## Xcode's Refactor

If the symbol you intend to rename is a property of a class, a constant used across your project or any other symbol used in any scope wider than a function or method, you should use Xcode's Refactor instead:

1. Left-click the symbol to be renamed.
2. Select Refactor -> Rename from the contextual menu.
3. Finally, give that poor variable a name it can be proud of.

	If you selected the 'Rename related files' option, Xcode will look for other files using the variable and rename it there but, this method is not fail safe -- keep reading!

## Avoid Breaking Stuff: NSStringFromSelector

0. The first strategy is not to trust Xcode's refactor by a 100% and run a project-wide search for the soon-to-be-replaced identifier. Look particularly for occurrences inside strings passed to NSPredicates or used in KVO.
	It's pretty easy to miss those ones just to find them later as unexpected ```NSUndefinedKeyException```s. Not good...

1. To help Xcode's refactor tools, use the function [NSStringFromSelector()](https://developer.apple.com/library/ios/documentation/cocoa/reference/foundation/Miscellaneous/Foundation_Functions/Reference/reference.html#//apple_ref/c/func/NSStringFromSelector) every time you make reference to an object's property (instead of simply typing it inside a string)

	```
	self.name = [aDecoder decodeObjectForKey:@"name"];
	```

	**NSStringFromSelector** gives Xcode a little bit of context on what that particular string means and a hint to include that occurrence in case of refactoring.

	```
	self.name = [aDecoder decodeObjectForKey:NSStringFromSelector(@selector(name))];
	```
