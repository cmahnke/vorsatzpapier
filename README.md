Vorsatzpapier
=============

# Batch conversion

```
find . -name '*.tif' -depth 1 -print -exec tiff2rgba {} {}-uc.tif \;
find . -name '*-uc.tif' -depth 1 -print -exec convert {} -quality 95 {}.jpg \;
find . -name '*-uc.tif' -print -exec rm "{}" \;
find . -name '*.tif.jpg' -print -exec bash -c 'mv "{}"  $(dirname "{}")/$(basename -s .tif-uc.tif.jpg "{}").jpg' \;
```

# Remove generated IIIF directories

```
find content/post/ -name info.json -exec dirname {} \; | xargs rm -r
```

# Using a development version of Mirador from GitHub

See [https://womanonrails.com/adding-yarn-package-from-github](https://womanonrails.com/adding-yarn-package-from-github) on how to add a specific revision.

## Provided patches

Mirador 3 is not really feature complete, even though it's tagged as a Release Candidate. The following changes need to be applied to make Mirador usable.

* Thumbnails won't be displayed if they're static [#3330](https://github.com/ProjectMirador/mirador/issues/3330)
* Mirador fails to load Minifests if bundled [#3311](https://github.com/ProjectMirador/mirador/issues/3311)
* Mirador can't display non-paged viewing hints [3029](https://github.com/ProjectMirador/mirador/pull/3029)

These patches are combined in one file in `patches`.

Currently yarn will will pull Mirador directly from GitHub, not NPM. It applies the patches and rebuilds the viewer with these patches applied.

## Update `scripts/setup.sh`

Append the following line

```
yarn run build-mirador patch-mirador
```

# Generating Tiles

We start to use [LibVIPS]https://github.com/libvips/libvips(), since it's very fast:

On Mac OS X just run:

```
brew install vips
```

## Generate tiles for a single file

```
vips dzsave front.jpg front -t 512 --layout iiif --id '.'
```

## Generating tiles for IIIF Presentation API

```
URL_PREFIX=http://localhost:1313/ ./scripts/iiif.sh
```

# Running hugo

## Without watching

This might be needed if there are to many sub directories (with IIIF structures) generated, since watching might not work in this setup.

```
hugo serve -F --debug --disableFastRender  --disableLiveReload --watch=false --renderToDisk

```
