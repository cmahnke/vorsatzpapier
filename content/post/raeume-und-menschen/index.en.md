---
title: "Räume und Menschen"
date: 2023-11-15T16:22:53+01:00
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  view: book
  itemType: book
  itemDescription: 'Book "Räume und Menschen" by August Trueb und Heinz Josten, published 1923 by Walter Hädecke, Stuttgart. <a class="worldcat" href="https://search.worldcat.org/de/title/602250607"><span class="screen-reader-text">WorldCat</span></a>'
tags:
- Book
- bookEndPaper
- Wallpaper
outputs:
  - iiif-manifest
  - html
resources:
- src: "front.jxl"
  name: front
  params:
    iiif: front/info.json
    class: front
- src: "title.jxl"
  name: title
  params:
    iiif: title/info.json
    class: title
- src: "page027.jxl"
  params:
    iiif: page027/info.json
    class: order-1
- src: "page035.jxl"
  params:
    iiif: page035/info.json
    class: order-2
- src: "page050.jxl"
  params:
    iiif: page050/info.json
    class: order-3
- src: "page051.jxl"
  params:
    iiif: page051/info.json
    class: order-4
---

No book on interior design should be without wallpaper!
