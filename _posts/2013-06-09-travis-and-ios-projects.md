---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
tags: [iOS, Quote]
title: Travis CI and iOS Projects
---

[Travis](https://travis-ci.org) is a Continuos Integration platform targeted to the Open Source Community. Among many other languages, it now supports Objective-C projects, but its lack of documentation can give the impression that it is a difficult task to achieve while in fact it quite simple. Find out how simple it is to configure your iOS Xcode project hosted in Github in 3 steps:

### 1. Configuration File

All Travis projects start with a YAML configuration file named **travis.yml**. An iOS project actually requires a very simple one:

```yaml
language:objective-c
before_script:
  - cd TwinkleStarExample   # in case your project resides in a sub-directory
xcode_sdk: iphonesimulator
```

The ```xcode_sdk:``` line is important to avoid the error:

```console
Code Sign error: The identity 'iPhone Developer' doesn't match any valid, non-expired certificate/private key pair in your keychains
```

### 2. Shared Schemes

Ensure the schemes of your target are **Shared**. This option makes a scheme visible to anyone using that project.
To enable it, go to the menu: *Product > Scheme > Manage Schemes*.

![Xcode's Manage Schemes]({{ site.url }}/assets/images/posts/content/2013-06-09-travis-00.png)

This prevents the following error:

```console
xcodebuild: error: The project 'PROJECT_NAME' does not contain a scheme named 'SCHEME_NAME'.
```

### 3. Success

Writing a configuration file and making a few clicks in Xcode are for sure exhausting!

Reward yourself by opening a can of Cola and start enjoying the benefits of continuous integrated builds. :)

For some examples, refer to some of my iOS repositories in Github:

* [TwinkleStar](https://github.com/Hecktorzr/TwinkleStar)
