---
title: "LAContext.biometryType returns LABiometryType.none in iOS 11"
category: "iOS"
quote: false
tags: [iOS, iOS 11, LABiometry]
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
---
I'm trying to support FaceID in my application.

Running `LAContect().canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error)` returns true, so I expect that the device has biometrics enabled (which it has, it is an iPhone X with iOS 11.2.1 with FaceID enrolled and working for unlock).

So I expect to get `LABiometryType.typeTouchID` when later checking `LAContext.biometryType`, but as the title says it returns `LABiometryType.none`.

Auctully, we need to first call `canEvaluatePolicy...` in order to get the biometry type. That is, if you're just doing `LAContext().biometryType` then you'll always get `none` back. You would first need to call `canEvaluatePolicy...` on that instance, and then `biometryType` should have a non-none value (assuming the device has biometry support, and the user has enabled it).
