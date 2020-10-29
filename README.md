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


## Upate dependencies

```
yarn add ProjectMirador/mirador
```

## Add this to `package.json`

```
    "build-mirador": "cd node_modules/mirador && yarn install && yarn run build:es",
```

## Change the patching machanism

```
"postinstall": "patch-package"
```

to:

```
"patch-mirador": "patch-package"
```

## Update `scripts/setup.sh`

Append the following line

```
yarn run build-mirador patch-mirador
```

# Running hugo

## Without watching

This might be needed if there are to many sub directories (with IIIF structures) generated, since watching might not work in this setup.

```
hugo serve -F --debug --disableFastRender  --disableLiveReload --watch=false --renderToDisk

```
