---
title: "Die Kaiserstadt Berlin"
date: 2020-12-07T07:07:53+02:00
iiifContext: http://iiif.io/api/image/2/context.json
tags:
- Book
- bookEndPaper
view: endpaper
outputs:
  - iiif-manifest
  - html
itemType: book
itemDescription: 'This endpaper is taken from the book "Die Kaiserstadt Berlin, Charlottenburg und Potsdam", 3rd improved edition, published around 1908 by E.H. Schroeder, Berlin. <a class="worldcat" href="http://www.worldcat.org/oclc/67823231">&nbsp;</a>'
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


<!--more-->
