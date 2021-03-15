---
title: "New file types to Win10 Context Menu"
category: "Technology"
tags: ["Windows 10"]
date: 20201024T143030+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0011.jpg'
---
You can add a new file type to the New item section of the Windows 10 Context Menu, but you will have to edit the Windows Registry. Here is how you do it.

I have never counted, but there are probably over a dozen ways to start a new file in an application in Microsoft Windows 10. You can click or tap an icon on the desktop, or on the Taskbar, or off the Start Menu, or just click an existing file associated with the application from File Explorer--just to name a few. However, for many users the best way to start a new file is with the Windows 10 Context Menu.

If you right-click on the empty space of an open window in File Explorer or on the Desktop itself, you will be presented with a set of context-sensitive menu items. Besides the common commands like Share, View, and Control Panel there will be an expandable menu item for creating New files (Figure A). The new files you can create from this menu are limited to a few of the more common types, all of which are familiar to experienced users of Windows.

![aaddnewmenuitem.png](aaddnewmenuitem.png)

While you might think adding items to the New section of the Context Menu in Windows 10 would be easy, it is not. The addition, and the subtraction for that matter, of items from this menu requires a manual edit of the Windows Registry. Here are the steps to follow when adding items to the Context Menu.

## Add to the New Context Menu

**Warning**: As such things go, this edit of the Windows Registry is straightforward and simple, but all edits of this file are potentially dangerous and should be approached with great caution. As always, you should create a valid restore point before you make any changes to the Windows Registry.

To start the process, type regedit into the Cortana search box on the Windows 10 Desktop. The first result from the search should be the Windows Registry editor, click it to load the app.

Once in the editor, navigate to this section in the left navigation screen and expand it, as shown in Figure B:

`HKEY_CLASSES_ROOT`

![baddnewmenuitem.png]({{ site.url }}/assets/images/posts/win10_new_file_menu/baddnewmenuitem.png)

Scroll down the long list of file types until you find the one you are looking to add to the New menu. For this example, I choose .dotx, which is the file type associated with Word Document Templates (Figure C).

![caddnewmenuitem.png]({{ site.url }}/assets/images/posts/win10_new_file_menu/caddnewmenuitem.png)

Right-click on the .dotx entry and then select the New | Key item. Give the newly created key the name ShellNew.

Right-click the ShellNew key and then select the New | String Value item. Name the new value NullFile. Right-click the NullFile item you just created and give it the Value of 1. After you complete these steps you should be looking at Figure D.

![daddnewmenuitem.png]({{ site.url }}/assets/images/posts/win10_new_file_menu/daddnewmenuitem.png)

Exit the editor and the next time you bring up the Windows 10 Context Menu | New item you should see a new entry in the list, as shown in Figure E.

![eaddnewmenuitem.png]({{ site.url }}/assets/images/posts/win10_new_file_menu/eaddnewmenuitem.png)

## Major caveats to this technique

While you can add practically any file type to the New menu using this technique, it will not always work as expected. For example, file types associated with Google Docs will create new files, but they will not function because they require the services of a web browser. Other file types that operate as viewers of files will also fail since they are not designed to create a file from scratch.

These problems and others greatly limit the usefulness of the New item section of the Windows 10 Context Menu. Fortunately for us, there are other better and less dangerous ways to create a new file or start an application in Microsoft Windows 10. I will explore some of those better options in future articles.
