---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS, Quote]
title: Integrating Xcode Bots and Crashlytics Beta
---

If you have already setup Xcode Bots for your iOS project, you can step up your Continuos Integration game even more by hooking-up Xcode Bots to [Crashlytics Beta](https://try.crashlytics.com/beta/) distribution.

This guide assumes you have a Crashlytics account and that  already have a working Bot outputting signed IPA files. This means, your Integrations should have 'Build Results' and they should contain an .ipa artifact:

![Build Results]({{ site.url }}/assets/images/posts/content/2015-02-13-00.png)

## Keys for the Ride

1. First, you will need your **API Key** and your **Build Secret**.
From the Crashlytics dashboard, you can find them in Settings > Organizations > Your Organization.

    They are hidden right at the top of the screen:

    ![Crashlytics Organization]({{ site.url }}/assets/images/posts/content/2015-02-13-01.png)

## Tinkering the Bot

1. Open your Bot  and click on **Edit Bot...** (top right of the screen).

    ![Crashlytics Organization]({{ site.url }}/assets/images/posts/content/2015-02-13-02.png)

3. Click **Next** until you arrive to the screen **Configure Bot Triggers** and  add a **Run Script** trigger from the **+ Add Trigger** menu.

    ![Crashlytics Organization]({{ site.url }}/assets/images/posts/content/2015-02-13-03.png)

5. Then, write the script that submits your signed IPA to Crashlytics:

    ```
    "${XCS_SOURCE_DIR}/<CRASHLYTICS_PATH>/Crashlytics.framework/submit"  <API_KEY> <BUILD_SECRET> -ipaPath "${XCS_OUTPUT_DIR}/${XCS_PRODUCT}"
    ```

    About the command and its arguments:

    `"${XCS_SOURCE_DIR}/<CRASHLYTICS_PATH>/Crashlytics.framework/submit"`:

    If the Crashlytics framework is somewhere in your repository (it should), this is the way to get it.
    Avoid  accessing it directly from your User's path, the Bot user will most likely not have execute permissions to run it (that's why we want the 'checked out' version from the repo).

    Example: if the framework is under a *source/vendor* path of your repo, the path in your script would look like `"${XCS_SOURCE_DIR}/source/vendor/Crashlytics.framework/submit"`.

   `API_Key` and `BUILD_SECRET` are the keys from your account.

    `-ipaPath "${XCS_OUTPUT_DIR}/${XCS_PRODUCT}"`: This will point to the .ipa artifact of your build located in the output directory of the Bot.

6. Make a new integration! Your build should be available in Crashlytics now.


The `submit` command has a few other parameters that may be of use to you.
Check the complete list in their [Support Article](https://support.crashlytics.com/knowledgebase/articles/370383-beta-distribution-with-ios-build-servers).
