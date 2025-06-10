#!/usr/bin/env bash

npm i
npm run bundle

mkdir -p ../../assets/js/lucienne/ ../../assets/scss/lucienne/

cp build/dist/lucienne-0.1.0.js ../../assets/js/lucienne/
cp build/dist/lucienne-vorsatzpapier-0.1.0.css ../../assets/scss/lucienne/lucienne-0.1.0.css