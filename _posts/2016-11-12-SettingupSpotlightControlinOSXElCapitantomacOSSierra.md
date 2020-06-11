---
title: "OS X: Setting up Spotlight Control in OS X El Capitan to macOS Sierra"
category: "OS X"
quote: true
tags: [Spotlight Control]
cave: true
hero:
  format: 'jpeg'
  url: 'post/macintosh.jpg'
---
OS X El Capitan introduced a new Security Feature called System Integrity Protection. With System Integrity Protection Bartender 2 needs additional setup steps performed before it can control Spotlight. Bartender 2 can control all other Apple menu items without these additional steps.

Unfortunately we cannot automate all of the setup and Bartender 2 will need you to temporarily disable System Integrity Protection to allow it to install its System Item control component, System integrity Protection can then be re-enabled.

> Apple have made the steps to temporarily disable SIP quite difficult, so we recommend only performing these steps if you really must control Spotlight with Bartender 2.

Please follow the instructions below to allow Bartender 2 to control Spotlight.

(You may wish to print these instructions or open them on another device as you will be restarting OS X).

First you will need to Reboot into OS X's Recovery Mode to Disable System Integrity Protection, to do this:

* Restart your Mac, and as soon as the screen turns black hold down `⌘` + `R`  until the Apple logo appears on your screen. You will know you if you have successfully entered Recovery Mode when the desktop looks like the screenshot below.

![step1](https://www.macbartender.com/B2/system-item-setup/recovery-mode.png)

* Now click on the "Utilities" menu, and then "Terminal".

![step2](https://www.macbartender.com/B2/system-item-setup/utilities-terminal.png)

* In the Terminal Window that opens type:

```console
csrutil disable
```

It may be worth writing the above command down to remember it when in Recovery Mode.

Then press the return key, you should then see the following message

![step3](https://www.macbartender.com/B2/system-item-setup/terminal-disabled.png)

* Restart OS X, your Mac should then restart as normal with SIP disabled, login and launch Bartender 2, if System Integrity Protection is turned off as it should now be it will ask to install its System Component, press "Continue", you will be prompted for your password.

![step4](https://www.macbartender.com/B2/system-item-setup/bartender-system-control-install.png)

You can now re-enable System Integrity Protection, to do this:

* Restart OS X, as soon as the screen turns black hold down `⌘` + `R` until the Apple logo appears on your screen.
* Now click on the "Utilities" menu, and then "Terminal".
* In the Terminal Window that opens type:

```console
csrutil enable
```

It may be worth writing the above command down to remember it when in Recovery Mode.

Then press the return key, you should then see the following message

![re1](https://www.macbartender.com/B2/system-item-setup/terminal-enable.png)

* Restart OS X, Your Mac should then restart as normal.

Congratulations, Bartender 2 can now control Spotlight and System Integrity Protection is enabled.
