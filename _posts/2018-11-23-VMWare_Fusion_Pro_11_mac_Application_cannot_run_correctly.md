---
category: "OS X"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0062.jpg'
title:  "VMWare Fusion Pro 11: Application cannot run correctly."
tags: [OS X, macOS, VMWare]
---
If you cannot get `VMWare Fusion Pro 11 for macOS` to launch properly with this error message:

![error]({{ site.url }}/assets/images/posts/content/vmware_001.png)

![settings]({{ site.url }}/assets/images/posts/content/vmware_002.png)

Please open a terminal and execute the following commands:

```sh
xattr -l ~/Downloads/VMware-Fusion-11.0.0-10120384.dmg
```

If you get output from that command that includes a line like:

```sh
com.apple.quarantine: 0083;5bb201c7;Safari;BA97FMORENUMBERSANDMUMBOJUMBO
```

then run the following to remove the quarantaine flags:

```sh
xattr -dr com.apple.quarantine ~/Downloads/VMware-Fusion-11.0.0-10120384.dmg
```

After that try to install again.
