---
title: "Für junge Mütter"
date: 2021-01-28T07:00:00+02:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
view: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
itemDescription: 'This endpaper is taken from the book "Für junge Mütter ", 5th edition, by Dr. med. Fischer, published ca. 1905 by Wilhelm Möller, Berlin.'
resources:
- src: "front.jpg"
  name: front
  params:
    iiif: front/info.json
    class: front
- src: "title.jpg"
  name: title
  params:
    iiif: title/info.json
    class: title
- src: "front-verso.jpg"
  name: preview
  params:
    iiif: front-verso/info.json
    class: order-1
- src: "front-recto.jpg"
  params:
    iiif: front-recto/info.json
    class: order-2
---

Another book from my collection.
<!--more-->
<div class="source">
Found at <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°1.
</div>
