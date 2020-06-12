---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0008.jpg'
tags: [iOS, Quote]
title: Pebble Smart-watch, Xcode 5 and OS X Mavericks
---

After stumbling a few times while setting up my development environment  for the Pebble Smart-watch, I decided to write a step-by-step guide on the topic to save time and sanity to other developers coding their first application for Pebble using Xcode 5 under OS X Mavericks and iOS.

## Things You'll Will Need In Your iOS Device

0. Update to iOS 7 just to be sure.

1. **Don't bother downloading the Pebble app from the App Store (v1.x)**. You need to [submit a form](https://docs.google.com/a/pulse-dev.net/forms/d/14r3MHPsdH5ha-BCkfuquQuAKuQSEJLmxm--XXpBA8mg/viewform) to receive an .ipa with the 2.x version.

2. After receiving the .ipa file with the Pebble app v2.x, install it.
	Open your device's *Settings* app, select *Pebble* and enable 'Developer Mode'.

3. Return to the home screen and open the Pebble app.
	Select 'Developer Connection' and enable it.

## Things You Need In Your Pebble Smart-Watch

0. Be sure you have opened the iOS Pebble app v2.x at least once.

1. Put your Pebble in Recovery Mode: Press the Back button, the Up button and the Select button for at least 30 seconds until you see 'Loading…' on the screen.

	Don't let that 'Pebble' screen fool you! Keep pressing those buttons until you can read 'Loading...'.

2. Re-pair your Pebble with your iOS device's bluetooth.

3. If your device suggests that an upgrade is available, refuse the upgrade.

4. Open one of the following links from your iOS device, your phone will start upgrading your Pebble:

	If your serial number starts with a number, [download Pebble Firmware 2.0-BETA2 for ev2_4.](https://developer.getpebble.com/2/download/Pebble-2.0-BETA2-ev2_4.pbz).

	If your serial number starts with the letter *Q*, [download Pebble Firmware 2.0-BETA2 for v1_5](https://developer.getpebble.com/2/download/Pebble-2.0-BETA2-v1_5.pbz).

## Things You Need In Your Computer

1. Install the Xcode Command Line Tools by typing the following command in the Terminal:

	```
	xcode-select --install
	```

	If you have problems installing them via this command (*'Can't install the software because it is not currently available from the Software Update server'* error), download the installer manually from the [Developer Center](https://developer.apple.com/downloads/index.action).

	**Don't skip this step!** The Command Line Tools are not installed by default in Xcode 5.

2. Download the latest version of the Pebble SDK. Go and grab it from the *[Getting Started Guide](https://developer.getpebble.com/2/getting-started/)*, there is big orange button that reads 'PEBBLE SDK'.

3. Create a directory for all Pebble tools:

	```
	mkdir ~/pebble-dev/
	```

4. Unzip the Pebble SDK inside that directory. You should end with something like:  ```~/pebble-dev/PebbleSDK-2.0-BETA2```.

5. Add the Pebble tool to your command line:

	```
	echo 'export PATH=~/pebble-dev/PebbleSDK-2.0-BETA2/bin:$PATH' >> ~/.bash_profile
	```

6. Reload your shell configuration to make it available immediately

	```
	source ~/.bash_profile
	```

7. Download the toolchain for OS X ([arm-cs-tools-macos-universal-static.tar.gz](https://assets.getpebble.com.s3-website-us-east-1.amazonaws.com/sdk/arm-cs-tools-macos-universal-static.tar.gz)).

8. Extract that compressed file inside ```~/pebble-dev/PebbleSDK-2.0-BETA2```.  Be sure you end with something like: ```~/pebble-dev/PebbleSDK-2.0-BETA2/arm-cs-tools```.

9. Install the Python packet manager, pip:

	```
	sudo easy_install pip
	```

10. And all the Python dependencies used by Pebble:

	```
	 pip install --user -r ~/pebble-dev/PebbleSDK-2.0-BETA2/requirements.txt
	 ```

	 If this last step fails, it is probably because you don't have the Xcode Command Line Tools installed.


## Things You Need In Your Xcode Project

1. Include ```PebbleKit.framework``` and  ```PebbleVendor.framework``` in your Xcode project.

2. Link ```ExternalAccessory.framework```, ```libz.dylib```, ```CoreBluetooth.framework```, ```CoreMotion.framework```, ```CFNetwork.framework``` and ```MessageUI.framework```.

3. Add ```-ObjC``` to *Other Linker Flags* of your target's Build Settings.

4. In your Info.plist file, add the value ```com.getpebble.public``` to the *Supported external accessory protocols* array.

5. Also in the Info.plist file,  add the value *App communicates with an accessory* to the *Required background modes* array.

6. In the Build Settings of your project, change Architecture's value from  ```$(ARCHS_STANDARD_INCLUDING_64_BIT)``` to ```$(ARCHS_STANDARD)```.

	Otherwise, you will bump with the following error:

	````
	Undefined symbols for architecture x86_64:
	  "_OBJC_CLASS_$_PBPebbleCentral", referenced from:
    	  objc-class-ref in NPViewController.o
	ld: symbol(s) not found for architecture x86_64
	```

After all those steps, your watch, Mac, iPhone and Xcode should be ready to start coding.

Did somebody said '[Hello World](https://developer.getpebble.com/2/getting-started/hello-world/)'?

Happy coding!
