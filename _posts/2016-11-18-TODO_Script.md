---
title: "Xcode: Showing TODO as a warnig in a Swift Xcode project"
category: "Xcode"
quote: false
tags: [iOS, Xcode, Script]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0019.jpg'
---
I rarely use comments when I’m coding1. I do make one exception though; using `// TODO:` and `// FIXME:` to highlight pieces of code I need to revisit at a later date. The advantage of doing this is that the lines then show up in the jump bar popover in bold text with one-click access to the exact line.

The issue I have with this is that it is very easy to forget about them unless you are using the jump bar frequently. I used to log them in my todo manager, Things, but that duplicates the workload. It would be much more useful if those errors were flagged in some way…

Jeffrey Sambells wrote a post on how to flag these comments as Xcode warnings but that only applies for Objective-C. With a slight tweak, here is a run script build phase for flagging `TODO:` and `FIXME:` as warnings in a Swift project:

```sh
TAGS="TODO:|FIXME:"
echo "searching ${SRCROOT} for ${TAGS}"
find "${SRCROOT}" \( -name "*.swift" \) -print0 | xargs -0 egrep --with-filename --line-number --only-matching "($TAGS).*\$" | perl -p -e "s/($TAGS)/ warning: \$1/"
```

The result is an unmissable warning whenever you run your project.

I don’t know about you, but I feel more compelled to clean up these yellow warnings than ticking things off in a todo list.
