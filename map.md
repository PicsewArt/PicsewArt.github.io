---
layout: default
title: "Map"
active_title: "Map"
map:
  - title: "Home"
    url: ""
  - title: "Posts"
    url: "/posts"
    sub:
    - title: "Archives"
      url: "/archives"
    - title: "Categories"
      url: "/categories"
    - title: "Tags"
      url: "/tags"
  - title: "Gallery"
    url: "/gallery"
    sub:
      - title: "Archives"
        url: "/archives"
  - title: "Creative"
    url: "/creative"
  - title: "Utils"
    url: "/utils"
  - title: "Blogroll"
    url: "/blogroll"
  - title: "About"
    url: "/about"
  - title: "Samples"
    url: "/sample"
  - title: "Search"
    url: "/search"
---
<div>
  <style type="text/css">
    .see-through {
      float: right;
      display: block;
      max-width: 200px;
      position: absolute;
      right: 0;
    }
  </style>
  <img class="see-through" src="../assets/images/through.png" />
  <ul>
  {% for item in page.map %}
    <li><a href="{{ site.url }}{{ item.url }}">{{ item.title }}</a></li>
    {% if item.sub.size > 0 %}
      <ul>
      {% for subitem in item.sub %}
        <li><a href="{{ site.url }}{{ item.url }}{{ subitem.url }}">{{ subitem.title }}</a></li>
      {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
  </ul>
</div>
