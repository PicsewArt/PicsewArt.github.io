---
title: "Stop macOS updates from taking over the rEFInd boot manager"
category: "Mood"
tags: ["macOS", "rEFInd"]
date: 20200624T050000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0032.jpg'
depends_on_includes: true
---
How to stop macOS updates from taking over the rEFInd boot manager?

Well, by default, `rEFInd` is installed in the EFI partition. Another option is to install rEFInd in a new small "Mac OS Extended (Journaled)" volume. This will allow rEFInd to appear in the Startup Manager.
Below are the steps. The commands need to be entered into a Terminal application window.

1. Create the new volume. The `diskutil` command, shrinks the APFS container (121100M, i.e. 121.1 GB) by 300 MB (120800M) and creates the new 300 MB "Mac OS Extended (Journaled)" volume labeled "Macintosh HD via rEFInd".

```sh
 sudo diskutil ap resizeContainer disk1 120800M JHFS+ "rEFInd" 0
```

After the command completes, restart the Mac.

{% include alert.html type='info' title='NOTE' msg='If you get an error message which includes the phrase "perhaps caused by APFS Snapshot usage by Time Machine", then see Neil\'s own answer to the question: <a href="https://apple.stackexchange.com/questions/321533/cant-resize-apfs-container-not-enough-free-space-in-container-due-to-apfs-limi">Can\'t resize APFS Container: Not enough free space in Container due to APFS limits or tidemarks</a> .' %}

2. Download the `rEFInd Boot Manager` software from this [SourceForge web site](https://sourceforge.net/projects/refind/). Enter the following commands to install the software to the "`Macintosh HD via rEFInd`" volume. 

```sh
cd ~/Downloads/refind-bin-0.12.0
./refind-install --ownhfs /dev/disk0s3
```

{% include alert.html type='info' title='NOTE' msg='The error message <code>Could not set boot device property: 0xe00002bc</code> was expected and can be ignored.  ' %}

3. **(Optional)** Use the command below to navigate to the folder containing the `refind.conf` file. 

```sh
cd "/Volumes/rEFInd/System/Library/CoreServices"
```

Add write permissions to the CoreServices folder and the `refind.conf` file.

```sh
 sudo  chmod  a+w  .  refind.conf
```

4. Restart the Mac and immediately hold down the <kbd>option</kbd> key until the Startup Manager icons appears. Next, hold down the <kbd>control</kbd> key and select to boot from the `rEFInd` volume. 
