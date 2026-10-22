---
title: "Hundert Schnurrpfeifereinen"
date: 2020-12-14T07:37:53+02:00
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  view: endpaper
  itemType: book
  itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Hundert Schnurrpfeifereinen" von Sophus Tromholt, 14. Auflage, erschienen ca. 1908 bei Reclam, Leipzig. <a class="worldcat" href="http://www.worldcat.org/oclc/255740370"><span class="screen-reader-text">WorldCat</span></a>'
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
- src: "end-verso.jpg"
  name: preview
  params:
    iiif: end-verso/info.json
    class: order-1
- src: "end-recto.jpg"
  params:
    iiif: end-recto/info.json
    class: order-2
---

From my collection of children's books.

<!--more-->
