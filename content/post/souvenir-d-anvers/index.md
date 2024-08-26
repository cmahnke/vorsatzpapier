---
title: "Souvenir d'Anvers"
date: 2020-09-21T18:08:28+02:00
iiifContext: http://iiif.io/api/image/2/context.json
view: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Souvenir d''Anvers", erschienen um 1900 in Antwerpen. <a class="worldcat" href="http://www.worldcat.org/oclc/647827191">&nbsp;</a>'
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
- src: "end-verso.jpg"
  name: preview
  params:
    iiif: end-verso/info.json
    class: order-1
    cropWidth: 2000
    cropHeight: 2000
- src: "end-recto.jpg"
  params:
    iiif: end-recto/info.json
    class: order-2
---

Ein schönes altes Fotobuch vom Flohmarkt.

<!--more-->
