---
title: "iOS: NSString 替换 Unicode 字符"
category: "iOS"
copy: true
tags: [iOS, NSString, Unicode]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0035.jpg'
---
将 `NSString` 中的 `Unicode` 字符替换为 `UTF-8` 字符:

```objc
- (NSString *)stringByReplacingUnicodeWithUTF8 {
    NSString *tempStr1 = [self stringByReplacingOccurrencesOfString:@"\\u"withString:@"\\U"];
    if (![tempStr1 containsString:@"\\U"]) {
        return self;
    }
    NSString *tempStr2 = [tempStr1 stringByReplacingOccurrencesOfString:@"\""withString:@"\\\""];
    NSString *tempStr3 = [[@"\""stringByAppendingString:tempStr2]stringByAppendingString:@"\""];
    NSData *tempData = [tempStr3 dataUsingEncoding:NSUTF8StringEncoding];
    NSString *returnStr = [NSPropertyListSerialization propertyListWithData:tempData options:NSPropertyListImmutable format:NULL error:nil];
    return [returnStr stringByReplacingOccurrencesOfString:@"\\r\\n"withString:@"\n"];
}
```
