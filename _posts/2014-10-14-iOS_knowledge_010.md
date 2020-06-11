---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0024.jpg'
title:  "iOS 小知识: 汉字转拼音"
tags: [iOS]
---
介绍一些 iOS 小知识。

### 汉字转拼音

```objc

@interface NSString (MandarinLatin)
- (NSString *)stringByReplacingMandarinToLatinWithDiacritics:(BOOL)diacritics firstLetterCapitalizes:(BOOL)capitalizes;
@end

@implementation NSString (MandarinLatin)
- (NSString *)stringByReplacingMandarinToLatinWithDiacritics:(BOOL)diacritics firstLetterCapitalizes:(BOOL)capitalizes {
	NSMutableString *original = [NSMutableString stringWithString:self];
	// 转换为带变声符的拼音
	CFStringTransform((CFMutableStringRef)original, NULL, kCFStringTransformMandarinLatin, NO);
	if (!diacritics) {
		// 去除变音符
		CFStringTransform((CFMutableStringRef)original, NULL, kCFStringTransformStripDiacritics, NO);
	}

	if (capitalizes) {
		return [original capitalizedString];
	} else {
		return [original copy];
	}
}
@end

```




