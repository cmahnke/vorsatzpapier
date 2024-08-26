---
title: "Kochkunst 1906"
date: 2024-05-09T08:26:53+02:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
preview: endpaper
itemType: book
outputs:
  - iiif-manifest
  - html
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Jahrgang 1906 der Zeitschrift "Kochkunst", vom Internationaler Verband der Köche, erschienen 1906 in Frankfurt am Main. <a class="worldcat" href="http://www.worldcat.org/oclc/277227987">&nbsp;</a>'
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
Eine gebundener Jahrgang der Zeitschrift "Kochkunst".
