---
title: "Kassel und Wilhelmshöhe."
date: 2020-12-21T19:26:53+02:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
view: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
itemDescription: 'This endpaper is taken from the portfolio "Kassel und Wilhelmshöhe.", published between 1890 and 1910 by Max Siering, Cassel. <a class="worldcat" href="http://www.worldcat.org/oclc/10159187">&nbsp;</a>'
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
- src: "end-recto.jpg"
  name: preview
  params:
    iiif: end-recto/info.json
    class: order-1
    cropWidth: 2000
    cropHeight: 2000
---
This is the endpaper for a portfolio with pictures from Kassel around 1900.

<!--more-->
<div class="source">
Found at <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°1.
</div>
