---
title: "Disable Automatic iOS Backup"
category: "Technology"
tags: ["iOS", "macOS", "Windows", "iTunes"]
date: 20200508T160000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_TECH_H_0002.jpg'
---
When you sync your iPhone or iPad with iTunes, it triggers an automatic backup. Whilst it's a sensible precaution to backup regularly, it is possible to skip iTunes backups. I don't recommend performing an iTunes sync without a backup, but here's how you can disable those backups, and re-enable them if you change your mind.

{% include alert.html type='info' no_window='true' title="Video" msg="iTunes Backup disabled." video='/assets/videos/posts/iOS_Sync.mp4' poster='/assets/videos/posts/iOS_Sync.jpg' aspect='18.18%' %}

# macOS

## Before Catalina

So, before Catalina (10.15), I use `defaults write com.apple.iTunes DeviceBackupsDisabled -bool true` to disable automatic device backup. From this point on, if you open and sync iTunes it will skip taking a backup. If you'd like to undo this, just run `defaults write com.apple.iTunes DeviceBackupsDisabled -bool false
`.

```shell
defaults write com.apple.iTunes DeviceBackupsDisabled -bool true
```

## On Catalina

On macOS Catalina (10.15), changing the `~/Library/Application Support/MobileSync/Backup` folder to being `Read-only` (`dr-xr-xr-x`) will prevent the backup being taken. However, this will also disable backups until `Read-write` permissions are restored. If your `Backup` folder is a symbolic link, you may need to delete the symbolic link and recreate a `Backup` folder at `~/Library/Application Support/MobileSync`, then set the privilege to `Read-only`.

You can also do this by run `sudo chmod 0000 ~/Library/Application\ Support/MobileSync/Backup` in Terminal.

# Windows

## Microsoft Store version of iTunes (most common since 2018)

```powershell
iTunes.exe /setPrefInt DeviceBackupsDisabled 1
```

## 64-bit version of iTunes (most common since 2015)

```powershell
"%ProgramFiles%\iTunes\iTunes.exe" /setPrefInt DeviceBackupsDisabled 1
```

## 32-bit version of iTunes

```powershell
"%ProgramFiles(x86)%\iTunes\iTunes.exe" /setPrefInt DeviceBackupsDisabled 1
```

From now on, if you open iTunes it will allow you to sync your iPhone's without triggering an automatic iTunes backup. If you'd like to undo this, follow the same steps, but instead of the `1` at the end of the command, use a `0`.
