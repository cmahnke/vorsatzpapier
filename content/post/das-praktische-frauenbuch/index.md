---
title: "Das praktische Frauenbuch"
date: 2021-02-04T07:00:00+02:00
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  view: endpaper
  itemType: book
  itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Das praktische Frauenbuch", von Wilhelm Möller, erschienen 1901 im Verlag von Wilhelm Möller, Berlin. <a class="worldcat" href="http://www.worldcat.org/oclc/249946401"><span class="screen-reader-text">WorldCat</span></a>'
tags:
- Book
- bookEndPaper
outputs:
  - iiif-manifest
  - html
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
Wieder ein Stück aus der eigenen Sammlung.
<!--more-->
<div class="source">
Gekauft im <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°1.
</div>
