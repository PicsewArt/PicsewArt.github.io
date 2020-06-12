---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0016.jpg'
tags: [iOS, Quote]
title: Optimizing NSPredicates
---

This week I'm gonna throw three strategies you can use to improve the performance of your NSPredicates — either in Core Data or while filtering a collection like ```NSArray```.

If things are *really* slow though, there are probably other places where you should be focusing, but let's assume you have already done that. ;)


Avoid Wildcards
------------------------
The convenience of throwing a star wildcard (*) to look for a prefix, suffix or substring can make your predicates slower. Instead of using ```title LIKE "The *"``` use

```console
title BEGINSWITH "The"
```
Instead of ```term LIKE *someSuffix"``` use

```console
term ENDSWITH "someSuffix"
```

If you are looking for the occurrence of a substring within a string, don't use ```term MATCHES '*anything*'```, there is a super cool keyword exactly for that:

```console
term  CONTAINS "anything"
```


Cheap Computations First
------------------------
Unlike you, your iPhone's little brain is faster crunching math than processing text.

Perform the operations with numbers first (this includes ```NSDate```) and leave the ```NSString``` comparisons at the end of the predicate.


Discard largest groups first
------------------------
Place the comparisons that will eliminate the largest group of data at the beginning of the predicate.
This leaves a smaller number of objects for the next comparisons (which should be the most expensive comparisons).
