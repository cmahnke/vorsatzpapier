#!/bin/sh

./themes/projektemacher-base/scripts/cleanup.sh
find content/post/ -name preview.png | xargs rm
