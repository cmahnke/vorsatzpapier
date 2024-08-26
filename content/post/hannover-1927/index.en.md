---
title: 'Hannover die Großstadt im Grünen'
iiifContext: http://iiif.io/api/image/2/context.json
description: 'Fritz Stadelmann: Hannover die Großstadt im Grünen. Published by Verkehrs-Verein Hannover e.V., Hannover 1927. <a class="worldcat" href="https://www.worldcat.org/de/title/72612183">&nbsp;</a>'
date: 2024-06-23T20:25:07+02:00
view: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
tags:
- Book
- bookEndPaper
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
- src: "front-verso.jxl"
  name: preview
  params:
    iiif: front-verso/info.json
    class: order-1
    cropWidth: 2000
    cropHeight: 2000   
- src: "front-recto.jxl"
  params:
    iiif: front-recto/info.json
    class: order-2
---

The endpaper to the article on [Backsteinexpressionismus](https://backsteinexpressionismus.projektemacher.org/post/hannover-1927/).
