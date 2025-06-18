---
title: "Der flammende Baum"
draft: true
date: 2025-12-01T15:00:00+02:00
iiifContext: http://iiif.io/api/image/2/context.json
view: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
itemDescription: 'This endpaper is taken from the book "Der flammende Baum" by Frida Schanz,published 1916 by Ullstein, Berlin & Wien. <a class="worldcat" href="https://search.worldcat.org/de/title/643697142">&nbsp;</a>'
tags:
- bookEndPaper
- Book
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
- src: "end-verso.jxl"
  name: preview
  params:
    iiif: end-verso/info.json
    class: order-1
- src: "end-recto.jxl"
  params:
    iiif: end-recto/info.json
    class: order-2
---

The endpaper from the book for the [Project Maker Christmas Hoodie 2025](https://merch.projektemacher.org/clothing/der-flammende-baum/)...
