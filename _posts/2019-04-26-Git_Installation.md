---
title: "Git Installation for Linux and Unix"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0060.jpg'
tags: ["Git"]
---
It is easiest to install Git on Linux using the preferred package manager of your Linux distribution. If you prefer to build from source, you can find tarballs on kernel.org. The latest version is 2.26.2.

## Debian/Ubuntu

For the latest stable version for your release of Debian/Ubuntu

```sh
# apt-get install git
```

For Ubuntu, this PPA provides the latest stable upstream Git version

```sh
# add-apt-repository ppa:git-core/ppa
# apt update; apt install git
```
## Fedora

```sh
# yum install git (up to Fedora 21)
```

```sh
# dnf install git (Fedora 22 and later)
```

## Gentoo

```sh
# emerge --ask --verbose dev-vcs/git
```

## Arch Linux

```sh
# pacman -S git
```

## openSUSE

```sh
# zypper install git
```

## Mageia

```sh
# urpmi git
```

## Nix/NixOS

```sh
# nix-env -i git
```

## FreeBSD

```sh
# pkg install git
```

## Solaris 9/10/11 (OpenCSW)

```sh
# pkgutil -i git
```

## Solaris 11 Express

```sh
# pkg install developer/versioning/git
```

## OpenBSD

```sh
# pkg_add git
```

## Alpine

```sh
$ apk add git
```

## Red Hat Enterprise Linux, Oracle Linux, CentOS, Scientific Linux, et al.

`RHEL` and derivatives typically ship older versions of git. You can download a tarball and build from source, or use a 3rd-party repository such as the IUS Community Project to obtain a more recent version of git.

## Slitaz

```sh
$ tazpkg get-install git
```
