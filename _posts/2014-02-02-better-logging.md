---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0015.jpg'
tags: [iOS, Quote]
title: Easier debugging using breakpoints with actions
---

If you debug solely through ```NSLog``` you are missing the better insight the debugger can provide you. Also, it is easy to forget all those logging functions, ship them into production and, depending on the industry, even introduce security risks.

On the other hand, if you are using only basic breakpoints you might find yourself typing ```po <object>``` just too often.

This is where **breakpoint actions** come handy: you can configure breakpoints that execute debugger commands like printing variables. To do so:

1. Right click on any pointer and select *Edit Breakpoint...*.

2. Then, select *Debugger Command* from the *Action* menu and type a command to some variable in the scope of the selected breakpoint. For example: ```po sender``` to print the debug description of an object identified as 'sender' or ```p selectedSegment``` to print the value of an atomic variable named 'selectedSegment'. If you feel in a verbose mood and need to output lots of stuff, you can click the '+' button and add more commands with more prints.

3. By selecting the option *Automatically continue after evaluating*, the breakpoint doesn't stop the execution of the program and behaves like an elegant version of NSLog that keeps your code clean.

![Breakpoint Actions]({{ site.url }}/assets/images/posts/content/2014-02-02-breakpoint-actions.png)
