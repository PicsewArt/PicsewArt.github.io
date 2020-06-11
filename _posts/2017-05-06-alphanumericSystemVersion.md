---
title: "iOS: Get Alphanumeric System Version"
category: "iOS"
copy: true
tags: [iOS, sysctl, Swift]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
This is the way to get the alphanumeric system version like `16E195` in `10.3(16E195)`.

## Objective-C Way

```objc
#import <sys/sysctl.h>

- (NSString *)alphanumericSystemVersion {
    int mib[2] = {CTL_KERN, KERN_OSVERSION};
    u_int namelen = sizeof(mib) / sizeof(mib[0]);
    size_t bufferSize = 0;

    NSString *alphanumeric = nil;

    // Get the size for the buffer
    sysctl(mib, namelen, NULL, &bufferSize, NULL, 0);

    u_char buildBuffer[bufferSize];
    int result = sysctl(mib, namelen, buildBuffer, &bufferSize, NULL, 0);

    if (result >= 0) {
        alphanumeric = [[NSString alloc] initWithBytes:buildBuffer length:bufferSize encoding:NSUTF8StringEncoding];
    }

    return alphanumeric;
}
```

## Swift 3 Way

First, we need:

```swift
public enum SysctlError: Error {
    case unknown
    case malformedUTF8
    case invalidSize
    case posixError(POSIXErrorCode)
}

public func sysctl(levels: [Int32]) throws -> String {
    let temp = try levels.withUnsafeBufferPointer() { levelsPointer throws -> [Int8] in
        // Preflight the request to get the required data size
        var requiredSize = 0
        let preFlightResult = Darwin.sysctl(UnsafeMutablePointer<Int32>(mutating: levelsPointer.baseAddress), UInt32(levels.count), nil, &requiredSize, nil, 0)
        if preFlightResult != 0 {
            throw POSIXErrorCode(rawValue: errno).map { SysctlError.posixError($0) } ?? SysctlError.unknown
        }

        // Run the actual request with an appropriately sized array buffer
        let data = Array<Int8>(repeating: 0, count: requiredSize)
        let result = data.withUnsafeBufferPointer() { dataBuffer -> Int32 in
            return Darwin.sysctl(UnsafeMutablePointer<Int32>(mutating: levelsPointer.baseAddress), UInt32(levels.count), UnsafeMutableRawPointer(mutating: dataBuffer.baseAddress), &requiredSize, nil, 0)
        }
        if result != 0 {
            throw POSIXErrorCode(rawValue: errno).map { SysctlError.posixError($0) } ?? SysctlError.unknown
        }

        return data
    }
    let str = temp.withUnsafeBufferPointer() { dataPointer -> String? in
        dataPointer.baseAddress.flatMap {
            String(validatingUTF8: $0)
        }
    }
    guard let s = str else {
        throw SysctlError.malformedUTF8
    }
    return s
}
```

Then:

```swift
public extension UIDevice {
    public var alphanumericSystemVersion: String? {
        retrun try? sysctl(levels: [CTL_KERN, KERN_OSVERSION])
    }
}
```

## Other

If you want a full string like `Version 10.2.1 (Build 14D27)`, use this:

```swift
let os = ProcessInfo.processInfo.operatingSystemVersionString
```
