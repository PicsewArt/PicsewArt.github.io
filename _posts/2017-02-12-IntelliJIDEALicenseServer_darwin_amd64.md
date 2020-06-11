---
title: "OS X: Problem with IntelliJ IDEA License Server on Sierra"
category: "OS X"
quote: true
tags: [Sierra, JetBrains, IDE]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0005.jpg'
---
Using `sudo ./IntelliJIDEALicenseServer_darwin_amd64` on macOS 10.12+ will be some problems like `Permission denied` and `Command not found`.

To solve this, you may need `brew install upx` and `upx -d ./IntelliJIDEALicenseServer_darwin_amd64` first.

And since `sudo spctl --master-disable` doen't work well in this case, consider use `chmod a+x ./IntelliJIDEALicenseServer_darwin_amd64` instead.
