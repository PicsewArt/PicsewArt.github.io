---
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'post/unix.jpg'
quote: true
title:  "UNIX/Linux Command: When should I not kill 9 a process"
tags: [UNIX, Linux, Quote]
summary: "UNIX/Linux Command: When should I not kill 9 a process"
excerpt: "When should I not kill 9 a process"
---
Q:

	I am always very hesitant to run kill -9, but I see other admins do it almost routinely.

	I figure there is probably a sensible middle ground, so:

	When and why should kill -9 be used? When and why not?
	What should be tried before doing it?
	What kind of debugging a "hung" process could cause further problems?

A:

	Randal Schwartz used to frequently post "Useless use of (x)" on lists. One such post was about kill -9. It includes reasons and a recipe to follow. Here is a reconstructed version (quoted below).

	(Quote abomination)

	No no no. Don't use kill -9.

	It doesn't give the process a chance to cleanly:

	1) shut down socket connections

	2) clean up temp files

	3) inform its children that it is going away

	4) reset its terminal characteristics

	and so on and so on and so on.

	Generally, send 15, and wait a second or two, and if that doesn't work, send 2, and if that doesn't work, send 1. If that doesn't, REMOVE THE BINARY because the program is badly behaved!

	Don't use kill -9. Don't bring out the combine harvester just to tidy up the flower pot.

	Just another Useless Use of Usenet,

	(.signature)

***
**[原文链接](https://unix.stackexchange.com/questions/8916/when-should-i-not-kill-9-a-process)**
