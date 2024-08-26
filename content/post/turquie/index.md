---
title: "Turquie"
date: 2021-07-13T18:08:28+02:00
iiifContext: http://iiif.io/api/image/2/context.json
preview: endpaper
outputs:
  - iiif-manifest
  - html
itemType: book
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Turquie", herausgegeben um 1950 vom Direction Générale de la Presse, de la Radiodiffusion et du Tourisme de Turquie in Ankara. <a class="worldcat" href="http://www.worldcat.org/oclc/62137467">&nbsp;</a>'
tags:
- Book
- bookEndPaper
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
    cropWidth: 2000
    cropHeight: 2000   
- src: "front-recto.jpg"
  params:
    iiif: front-recto/info.json
    class: order-2
---

Dieses Fotobuch wurde zur Förderung des Tourismus herausgegeben.

<!--more-->
<div class="source">
Gefunden im <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°2.
</div>
