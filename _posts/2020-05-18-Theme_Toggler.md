---
title: "The Theme Toggler"
category: "Technology"
tags: ["HTML", "CSS", "JavaScript", "JQuery"]
date: 20200518T120000+08:00
hero:
  format: 'jpeg'
  url: 'HERO_0031.jpg'
---
So, I am trying to add in a very simple method of switching between 2 stylesheets/themes.

# Switch Theme by Changing Classes

Say we have this:

```html
<body class="dark">
  <button id="theme-toggle" title="I'm a tooltip!">Switch</button>
  <div class="sq">Foo</div>
</body>
```

and this:

```css
body {
  background-color: #F7F7F7;
}

body.dark .sq {
  border: 1px solid #000;
  background: #ffd43b;
}   

body.light .sq {
  background-color: #fff;
  border: 2px dotted #000;
}

.sq {
  margin: 10px 0 0;
  height: 200px;
}
```

## Save Status

now add `JQuery`:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```

toggle and save:

```js
function toggleTheme() {
  $('body').toggleClass('dark').toggleClass('light');
  if($('body').hasClass('dark')) {
    localStorage.setItem('theme','dark');
  } else {
    localStorage.setItem('theme','light');
  }
}

$('#theme-toggle').click(function() {
  toggleTheme();
});
```

## Load Status

```js
function loadTheme() {
  var themeSet = localStorage.getItem('theme');
  if (themeSet == 'dark') {
    $('body').removeClass('light').addClass('dark');
  } else {
    $('body').removeClass('dark').addClass('light');
  }
}
```

```html
<body class="dark">
  <!-- ... -->
  <script>
    loadTheme();
  </script>
  <!-- ... -->
</body>
```

## `localStorage` Between Pages from Different Sites

But, do note that the `localStorage` isn't per page, it's by domain. That means `www.abc.com` and `abc.com` aren't considered as the same domain.

Best trick I know is to use `iframes` and `postMessage` API do get access to `localStorage` from external domain.

This technique is quite simple:

* on you page you must create `iframe` to a domain from which you want to get data
* your data domain need listen to `message` event: `document.addEventListener ("message", handler, useCapture);`
* `handler` will be responsible for accessing `localStorage` and posting its content to source domain
* your source domain may call `handler` function on data domain with [`postMessage` API](https://developer.mozilla.org/en-US/docs/DOM/window.postMessage)

For security of your data you can use [`HTTP header X-Frame-Options ALLOW-FROM` uri](https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options?redirectlocale=en-US&redirectslug=The_X-FRAME-OPTIONS_response_header)

# Switch Different Stylesheets

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<link rel="stylesheet" href="http://localhost:8888/demo/assets/themes/css/style1.css" type="text/css" media="all">

<button id="theme-toggle" title="I'm a tooltip!">Switch</button>
```

```js
var defaultSS = '/assets/themes/css/style1.css',
    altSS = '/assets/themes/css/style2.css',
    hrefAttr;

$('#theme-toggle').click(function () {

  $('link').each(function(){
    hrefAttr = $(this).attr('href');
    if (hrefAttr.indexOf(defaultSS) >= 0) {
      $(this).attr('href', altSS);

      console.log('Was:',hrefAttr);
      console.log('Now:',$(this).attr('href'));

    } else if (hrefAttr.indexOf(altSS) >= 0) {
      $(this).attr('href', defaultSS);

      console.log('Was:',hrefAttr);
      console.log('Now:',$(this).attr('href'));  
    }
  });
});
```
