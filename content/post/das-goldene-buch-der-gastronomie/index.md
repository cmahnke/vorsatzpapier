---
title: "Das goldene Buch der Gastronomie"
date: xxx
draft: true
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
preview: endpaper
outputs:
  - iiif-manifest
  - html
itemType: book
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Das goldene Buch der Gastronomie", von Günther Müller, erschienen 1908 im Selbstverlag, Leipzig. <a class="worldcat" href="http://www.worldcat.org/oclc/1390124628">&nbsp;</a>'
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
- src: "front-recto.jxl"
  params:
    iiif: front-recto/info.json
    class: order-2
---
Wieder ein Stück aus der eigenen Sammlung.
<!--more-->
<div class="source">
Gekauft im <a target="_blank" href="https://fairkauf-hannover.de/einkaufen/standorte-oeffnungszeiten/#city">fairKauf Kaufhaus Hannover City</a>.
</div>
