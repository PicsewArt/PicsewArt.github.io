---
title: "What is TIC Read Status?"
category: "iOS"
quote: false
tags: [iOS, iOS 11]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0020.jpg'
---
Apple staff gave the following answer:

>`TIC` expands to "`TCP I/O connection`", which is a subsystem within `CFNetwork` that runs a `TCP` connection.
>
> For example: `TIC Read Status [11:0x0]: 1:57`.
>
>`1` and `57` are the `CFStreamError` domain and code, respectively; a domain of `1` is `kCFStreamErrorDomainPOSIX` and, within that domain, `57` is `ENOTCONN`.
>
>In short, a `TCP` read has failed with `ENOTCONN`.
>
As the `TCP I/O connection` subsystem has no public API, you must necessarily be using it via some high-level wrapper (like `NSURLSession`).
>
> [https://forums.developer.apple.com/thread/66058](https://forums.developer.apple.com/thread/66058)
