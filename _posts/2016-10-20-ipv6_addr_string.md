---
title: "iOS: in6_addr to string"
category: "iOS"
copy: true
tags: [iOS, IPv6]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
---
将 `struct in6_addr` 转换为字符串:

```objc
+ (NSString *)formatIPV6Address:(struct in6_addr)ipv6Addr {
    NSString *address = nil;

    char dstStr[INET6_ADDRSTRLEN];
    char srcStr[INET6_ADDRSTRLEN];

    memcpy(srcStr, &ipv6Addr, sizeof(struct in6_addr));

    if (inet_ntop(AF_INET6, srcStr, dstStr, INET6_ADDRSTRLEN) != NULL){
        address = [NSString stringWithUTF8String:dstStr];
    }

    return address;
}
```
