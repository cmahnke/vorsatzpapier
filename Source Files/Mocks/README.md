# Lucienne - A IIIF pattern generator

# Name

The software is named after [Lucienne_Day](https://en.wikipedia.org/wiki/Lucienne_Day), a famous British textile and wallpaper designer.

# TODO

## Known issues

- Preview icon in collections, implemented but parser doesn't support it

## Next Version

- Shifts / offsets
  - Dynamic margins not clipped correctly at edges
    - insets nor working with clippings
    - check margins wit offsets in two dimensions
  - Rotation not working with offsets
- Select download area from result viewer
- Make sure everything is reset when changing the size - NTH

# Commands

## Local development

This package uses Vite for development.

```
npm run dev
```

### Test URL

[http://localhost:5173/patterns/?url=https://static.projektemacher.org/vorsatzpapier/post/tapete-47/front](http://localhost:5173/patterns/?url=https://static.projektemacher.org/vorsatzpapier/post/tapete-47/front)

## Packaging

Vite is sadly not very flexible in regard of creating distributable artifacts, thus we use Rollup for that.

```
npm run bundle
```

## Updating OpenSeadragon Types

```
 npx patch-package @types/openseadragon
```

# Experiences with OpenSeadragon

## Coordinate system

One of the biggest show stopper has been the coordinate system, especiually the fact that the required transformations (image to viewport coordinates) are throwing warnings when one tries to do them on the `world` level while working with multiple images. Even thou I came later to the conclusion that those might be ignored most of the code tries wo work around them.

From my point of view a there should be a (maybe plugable) coordinate system that would work with image coordinates and shouldn't been limited to positive coordinates. This would span the complete world regardless of the number of items in the world. I would to transaltion to the underlaying viewport coordinate system transparenty

## Asserts / Warnings

Some of the assert statements seem to be either way to restrictive or even outright bogus: By that I mean, failed assertation of a programm state, that doesn't let either the program crash or lead to unexpected results is certainly to restrictive or misplaced.
