---
title: "Kochkunst 1906"
date: xxx
draft: true
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
preview: endpaper
itemType: book
itemDescription: 'This endpaper comes from a volume of the magazine "Kochkunst", published by the Internationaler Verband der Köche in Frankfurt am Main in 1906. <a class="worldcat" href="http://www.worldcat.org/oclc/277227987">&nbsp;</a>'
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
A bound volume of the "Kochkunst" magazine.