---
title: "max-height: x% doesn't work on Chrome"
category: "CSS"
quote: true
tags: [CSS]
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0010.jpg'
---
Some times using percentages for fluidity in layouts is tricky because you have to deal with containers and border-type things.

Look in to using viewport units and learn some thing about it on [css-tricks](https://css-tricks.com/viewport-sized-typography/) and [caniuse](https://caniuse.com/#search=viewport) will show you how well it's supported.

Essentially you can say:

```html
<div style="height: 50vh;">...</div>
```
meaning a div element of 50vh height where 1vh is defined as the value of 1% of the viewport's height.
