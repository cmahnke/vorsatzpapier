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
find content/post/ -mindepth 2 -maxdepth 2 -type d -print -exec rm -r {} \;
```

# Running hugo

## Without watching

This might be needed if there are to many sub directories (with IIIF structures) generated, since watching might not work in this setup.

```
hugo serve -F --debug --disableFastRender  --disableLiveReload --watch=false --renderToDisk

```
