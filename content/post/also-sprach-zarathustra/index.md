---
title: "Also sprach Zarathustra"
date: 2021-03-09T16:22:53+01:00
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  view: endpaper
  itemType: book
  itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Also sprach Zarathustra: ein Buch für Alle und Keinen" von Friedrich Nietzsche, erschienen 1900 bei C. G. Naumann, Leipzig. <a class="worldcat" href="http://www.worldcat.org/oclc/864264525"><span class="screen-reader-text">WorldCat</span></a>'
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

Juhu, der Buchhandel ist wieder geöffnet!

<!--more-->
<div class="source">
Gekauft im <a target="_blank" href="https://antiquariat-pretzsch.de/">Antiquariat Pretzsch</a> N°1.
</div>
