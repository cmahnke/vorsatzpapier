---
title: "Das Gastmahl"
date: 2024-03-06T08:26:53+02:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
view: endpaper
outputs:
  - iiif-manifest
  - html
itemType: book
itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Das Gastmahl", von Xenophon, übersetzt von Benno von Hagen, erschienen 1911 bei Eugen Diedrichs in Jena. <a class="worldcat" href="https://search.worldcat.org/de/title/230724161">&nbsp;</a>'
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
Sieht ein wenig aus wie das [Logo von "Einstürzende Neubauten"](https://en.wikipedia.org/wiki/Einst%C3%BCrzende_Neubauten#Band_name_and_logo)...
