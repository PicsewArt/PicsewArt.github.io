---
title: "ImageMagick"
category: "UNIX"
cave: true
hero:
  format: 'jpeg'
  url: 'post/unix.jpg'
excerpt: "ImageMagick® is a software suite to create, edit, compose, or convert bitmap images."
tags: [Linux, UNIX, Mac, Windows, ImageMagick]
---
ImageMagick® is a software suite to create, edit, compose, or convert bitmap images. It can read and write images in a variety of formats (over 200) including PNG, JPEG, JPEG-2000, GIF, TIFF, DPX, EXR, WebP, Postscript, PDF, and SVG. Use ImageMagick to resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.

## Installation

To install ImageMagick, I recommend [MacPorts](https://www.macports.org) which custom builds ImageMagick in your environment.

[PKG installer](https://www.macports.org/install.php) is the simplest way to install MacPorts on a OS X system.

Also, you can simply type this to install [Homebrew](https://brew.sh):

```sh

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```


For me, I prefer MacPorts, just type:

```sh

sudo port install ImageMagick

```


This may take a while. The `port` command downloads ImageMagick and many of its delegate libraries and configures, builds, and installs ImageMagick automagically.

## Get Started

To get started, lets convert an image in the JPEG format to PNG:

```sh

convert rose.jpg rose.png

```


Next, we reduce the image size before it is written to the PNG format:

```sh

convert rose.jpg -resize 50% rose.png

```


You can combine multiple image-processing operations to produce complex results:

```sh

convert -size 320x85 canvas:none -font Bookman-DemiItalic -pointsize 72 \
  -draw "text 25,60 \'Magick\'" -channel RGBA -blur 0x6 -fill darkred -stroke magenta \
  -draw "text 20,55 \'Magick\'" fuzzy-magick.png

```


or here we resize an image with improved quality:

```sh

convert input.png -colorspace RGB +sigmoidal-contrast 11.6933 \
  -define filter:filter=Sinc -define filter:window=Jinc -define filter:lobes=3 \
  -resize 400% -sigmoidal-contrast 11.6933 -colorspace sRGB output.png');

```

