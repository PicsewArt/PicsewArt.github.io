---
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0017.jpg'
title:  "iOS 小知识: KVC 与 简单集合运算符"
tags: [iOS]
---
介绍一些 iOS 小知识。

### KVC 与简单集合运算

也就是 `@sum`、`@avg`、`@count`、`@max`、`@min` 这五个家伙，分别表示和、平均值、计数、最大值，最小值。

举个栗子:

```objc

NSArray *array = [NSArray arrayWithObjects:@"1.0", @(2.0), @(3.4), @(4.5), @10, nil];

CGFloat sum = [[array valueForKeyPath:@"@sum.doubleValue"] doubleValue];
NSLog(@"sum = %lf", sum);

CGFloat avg = [[array valueForKeyPath:@"@avg.doubleValue"] doubleValue];
NSLog(@"avg = %lf", avg);

CGFloat max =[[array valueForKeyPath:@"@max.doubleValue"] doubleValue];
NSLog(@"max = %lf", max);

CGFloat min =[[array valueForKeyPath:@"@min.doubleValue"] doubleValue];
NSLog(@"min = %lf", min);

```


再举个栗子:

```objc

#import <Foundation/Foundation.h>

@interface Thing: NSObject
@property (nonatomic, assign) NSUInteger serial;
@end

@implementation Thing
- (instancetype)initWithSerial:(NSUInteger)serial {
	self = [super init];
	if (self) {
		self.serial = serial;
	}
	return self;
}
@end

int main(int argc, char *argv[]) {
	@autoreleasepool {
		NSArray *array = @[
							[[Thing alloc] initWithSerial:1],
							[[Thing alloc] initWithSerial:2],
							[[Thing alloc] initWithSerial:3],
							[[Thing alloc] initWithSerial:4],
							[[Thing alloc] initWithSerial:5],
							];

		NSNumber* sum = [array valueForKeyPath:@"@sum.serial"];
		NSLog(@"sum = %zd", sum.unsignedIntegerValue);

		NSNumber* avg = [array valueForKeyPath:@"@avg.serial"];
		NSLog(@"avg = %zd", avg.unsignedIntegerValue);

		NSNumber* min = [array valueForKeyPath:@"@min.serial"];
		NSLog(@"min = %zd", min.unsignedIntegerValue);

		NSNumber* max = [array valueForKeyPath:@"@max.serial"];
		NSLog(@"max = %zd", max.unsignedIntegerValue);

		NSNumber* count = [array valueForKeyPath:@"@count"];
		NSLog(@"count = %zd", count.unsignedIntegerValue);
	}
}
```




