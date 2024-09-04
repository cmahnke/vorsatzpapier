import IIIF from 'ol/source/IIIF';
import IIIFInfo from 'ol/format/IIIFInfo';
import Draw from 'ol/interaction/Draw.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { Traverse } from '@iiif/parser';

const patternCollection = "https://vorsatzpapier.projektemacher.org/patterns/collection.json";

function addMap(element, url, rotation, baseURL, hdr) {
    var initialRotation = 0;
    if (rotation !== undefined && rotation != 0) {
        initialRotation = rotation * Math.PI / 180;
    }
    if (hdr === undefined) {
        hdr = false;
    }
    // Languages
    var lang = 'en';
    if (document.documentElement.lang !== undefined) {
        /* See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language */
        const locale = new Intl.Locale(document.documentElement.lang);
        lang = locale.language;
    }
    var toolTips = { 'de': {'zoomIn': 'Vergrößern', 'zoomOut': 'Verkleinern', 'fullscreen': 'Vollbildansicht', 'rotate': 'Rotation zurücksetzen', 'rotateLeft': '90° nach links drehen', 'rotateRight': '90° nach rechst drehen'},
                     'en': {'zoomIn': 'Zoom in', 'zoomOut': 'Zoom out', 'fullscreen': 'Toggle full-screen', 'rotate': 'Reset rotation', 'rotateLeft': 'Rotate 90° left', 'rotateRight': 'Rotate 90° right'}};

    console.log('Setting up ' + lang);


    var layer = new TileLayer(),
        map = new Map({
            layers: [layer],
            target: element,
        });

    fetch(url)
        .then(function(response) {
            response
                .json()
                .then(function(imageInfo) {
                    var options = new IIIFInfo(imageInfo).getTileSourceOptions();
                    if (options === undefined || options.version === undefined) {
                        console.log('Data seems to be no valid IIIF image information.')
                        return;
                    }
                    options.zDirection = -1;
                    if (baseURL !== undefined && baseURL != '') {
                        options.url = baseURL;
                    }
                    var iiifTileSource = new IIIF(options);
                    layer.setSource(iiifTileSource);
                    map.setView(
                        new View({
                            resolutions: iiifTileSource.getTileGrid().getResolutions(),
                            extent: iiifTileSource.getTileGrid().getExtent(),
                            constrainOnlyCenter: true,
                            rotation: initialRotation
                        })
                    );
                    map.getView().fit(iiifTileSource.getTileGrid().getExtent());
                })
                .catch(function(body) {
                    console.log('Could not read image info json. ' + body);
                });
        })
        .catch(function() {
            console.log('Could not read data from URL.');
        });
    return map;
}


function getPatterns (collection: URL) {
  var manifests = [];
  var services = [];
  const extractManifests = new Traverse({
    manifest: [(manifest) => {
      if (manifest?.items?.[0]) {
        return manifest?.items?.[0]
      }
      manifests.push(manifest.id);
    }],
    service: [(service) => {
      services.push(service.id)
    }]
  });

  fetch(collection).then((response) => {
    response.json().then((json) => {
      extractManifests.traverseUnknown(json);
    })
    .then(() => {

      for (const id of manifests) {
        console.log(id);
        fetch(id).then((response) => {
          response.json().then((json) => {
            let canvas = extractManifests.traverseManifest(json);
            extractManifests.traverseAnnotationBody(canvas);
          })
        })
      }

    })
  });





  return manifests;
}

/*
TODO: snippet for slider changes

sliders[channel].oninput = function() {
  var label = document.querySelector(`label[for=${this.id}] span`);
  label.innerText = this.value + '%';
  colors[channel] = this.value;
*/

console.log(await getPatterns(patternCollection));

const canvas = document.querySelector("#renderer");
