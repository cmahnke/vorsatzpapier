# Lucienne - A IIIF pattern generator

# Name

The software is named after [Lucienne_Day](https://en.wikipedia.org/wiki/Lucienne_Day), a famous British textile and wallpaper designer.

# TODO

## Known issues

- CSS for cutting table
- Preview icon in collections, implemented but parser doesn't support it

- Changing height from top or width from left break overlaps with margins
- Margin size needs to be set dynamically depending on size, implemented but not active yet
- Rotation rect changes size on rotation

# Commands

## Local development

This package uses Vite for development.

```
npm run dev
```

## Packaging

Vite is sadly not very flexible in regard of creating distributable artifacts, thus we use Rollup for that.

```
npm run bundle
```

## Updating OpenSeadragon Types

```
 npx patch-package @types/openseadragon
```
