---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
tags:
- book end paper
resources:
- src: "img001.jpg"
  name: page
  params:
    iiif: img001/info.json
---
