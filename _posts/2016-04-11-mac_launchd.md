---
title: "OS X: launchd"
category: "OS X"
copy: true
tags: [OS X, launchd]
cave: true
hero:
  format: 'jpeg'
  url: 'post/macintosh.jpg'
---
I would like to create a service to execute a task automatically, and starting and stopping it on demand. In Windows, it is possible to create an application that can be installed as a service (`Windows Service`). So what would be the equivalent of services on Mac OS X? How are they implemented and where to start to learn about it?

Well, let's meet [launchd](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/Introduction.html).

You need to create launchd configuration files (in the form of a property list) that are placed in one of five locations:

* `~/Library/LaunchAgents`: Per-user agents provided by the user.
* `/Library/LaunchAgents`: Per-user agents provided by the administrator.
* `/Library/LaunchDaemons`: System-wide daemons provided by the administrator.
* `/System/Library/LaunchAgents`: Per-user agents provided by Mac OS X.
* `/System/Library/LaunchDaemons`: System-wide daemons provided by Mac OS X.

A `daemon` is a system-wide service of which there is one instance for all clients. An agent is a service that runs on a per-user basis.

The syntax of the configuration files is simple but it's easy to get it wrong. The [Wikipedia article](https://en.wikipedia.org/wiki/Launchd) has a good summary of the options if the man page is not to your liking.

Essentially, what you do is install your actual command-line tool (your service) somewhere and then create a `launchd` configuration plist and place it in one of the above locations. You can configure the plist so that `launchd` runs your service at launch or periodically, or in response to various actions (such as the contents of a folder changing).

## FAQs

> Q: The items in `/Library` (as opposed to a single user's `~/Library`) will run for every user who logs in, correct?
>
> A: Yes, that's right.

> Q: Is there a way to have this app run as root on startup using `launchd`?
>
> A: Yes, you need to use the `/Library/LaunchDaemons` location for your configuration file.

> Q: Can you share some Mac `launchd` examples (also written as `launchd` plist examples, or `launchctl` examples)?
>
> A: This launch plist script does the following things:
>
> * Runs a Unix shell script named `/Users/al/bin/crontab-test.sh`.
> * Runs that script every minute, as given by the StartInterval tag.
> * Assigns the label `com.devdaily.pingwebsites` to this script. This is helpful when you use the `launchctl` command, as discussed in the earlier tutorial.

```xml
<?xml version="1.0" encoding="UTF-8"?>
https://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
        <key>label</key>
        <string>com.devdaily.pingwebsites</string>

        <key>ProgramArguments</key>
        <array>
                <string>/Users/al/bin/crontab-test.sh</string>
        </array>

        <key>OnDemand</key>
        <false/>

        <key>Nice</key>
        <integer>1</integer>

        <key>StartInterval</key>
        <integer>60</integer>

        <key>StandardErrorPath</key>
        <string>/tmp/AlTest1.err</string>

        <key>StandardOutPath</key>
        <string>/tmp/AlTest1.out</string>
</dict>
</plist>
```
