---
title: "Berlin halb und halb"
date: 2023-10-15T16:22:53+01:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
view: endpaper
outputs:
  - iiif-manifest
  - html
itemType: book
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Berlin halb und halb" von Werner Kruse und Hans Rauschning, erschienen 1959 bei Lothar Blanvalet Verlag, Berlin. <a class="worldcat" href="https://search.worldcat.org/de/title/250786300">&nbsp;</a>'
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
    cropWidth: 2000
    cropHeight: 2000   
- src: "end-recto.jxl"
  params:
    iiif: end-recto/info.json
    class: order-2
---

Nicht nur das Vorsatzpapier, sondern auch die Illustrationen sind sehenswert!

<!--more-->
<div class="source">
Gekauft im <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°1.
</div>
