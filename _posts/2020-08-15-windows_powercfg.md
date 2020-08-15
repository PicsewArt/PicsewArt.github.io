---
title: "Windows Powercfg"
category: "Technology"
tags: ["powercfg"]
date: 20200815T170000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0045.jpg'
depends_on_includes: false
isdoc: true
---
Here's how you import/export your Power Configuration on Windows.

# List

```sh
powercfg -list
```

# Export

Export `381b4222-f694-41f0-9685-ff5bb260df2e` to `D:\powercfg.pow`:

```sh
powercfg -export d:powercfg.pow 381b4222-f694-41f0-9685-ff5bb260df2e
```

# Import

Import from `D:\powercfg.pow`:

```sh
powercfg -import d:powercfg.pow
```

# Configuration file

Here's [my configuration file]({{ site.url }}/assets/ats/powercfg.pow).
