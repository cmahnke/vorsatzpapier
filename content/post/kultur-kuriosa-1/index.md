---
title: "Kultur-Kuriosa - Erster Band"
date: 2021-06-22T19:57:53+01:00
params:
  iiifContext: http://iiif.io/api/image/2/context.json
  view: endpaper
  itemType: book
  itemDescription: 'Dieses Vorsatzpapier stammt aus dem Buch "Kultur-Kuriosa", erster Band von Max Kemmerich, erschienen 1910 bei Albert Langen, München. <a class="worldcat" href="http://www.worldcat.org/oclc/923684466"><span class="screen-reader-text">WorldCat</span></a>'
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
  params:
    iiif: end-verso/info.json
    class: order-1
- src: "end-recto.jpg"
  name: preview
  params:
    iiif: end-recto/info.json
    class: order-2
---
Dies ist der erste Band, der zweite folgt nächste Woche. Mehr über den [Autor](https://de.wikipedia.org/wiki/Max_Kemmerich) hat die Wikipedia.

<!--more-->
Gefunden im [Antiquariat Pretzsch](https://antiquariat-pretzsch.de/) N°1.
