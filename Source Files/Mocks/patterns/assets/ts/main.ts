import IIIF from 'ol/source/IIIF';
import IIIFInfo from 'ol/format/IIIFInfo';
import Draw from 'ol/interaction/Draw.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { Traverse } from '@iiif/parser';
import { Canvas, Image } from 'fabric';

const patternCollection = "https://vorsatzpapier.projektemacher.org/patterns/collection.json";
let patternOptions = []

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


//See https://openlayers.org/en/latest/examples/layer-clipping-vector.html

// traverseDescriptive for thumbnail

async function getPatterns (collection: URL) {
  var manifests = {};
  var services = [];
  const extractManifests = new Traverse({
    manifest: [(manifest) => {
      if (manifest?.items?.[0]) {
        return manifest?.items?.[0]
      }
      let label = manifest.label['de'][0]
      if (label in manifests) {
        let max = 1;
        for (const l in manifests) {
          if (l.startsWith(label)) {
            let count = l.substring(label.length);
            if (!isNaN(parseInt(count)) && max < parseInt(count) ) {
              max = parseInt(count);
            }
          }
        }
        max++;
        manifests[`${label} ${max}`] = manifest.id;
      } else {
        manifests[label] = manifest.id;
      }
    }],
    imageservice2: [(service) => {
      return service.id;
      console.log("=>",service.id);
    }]
  });

  /*
  fetch(collection).then((response) => {
    response.json().then((json) => {
      extractManifests.traverseUnknown(json);
    })
    .then(() => {

      for (const label in manifests) {
        var id = manifests[label];
        fetch(id).then((response) => {
          response.json().then((json) => {
            let thumbService = extractManifests.traverseDescriptive(json);
            services.push(thumbService);
            //console.log(canvas);
            //extractManifests.traverseAnnotationBody(canvas);
          })
        })
      }

    })
  });
  */

  const response = await fetch(collection);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  extractManifests.traverseUnknown(json);

  for (const label in manifests) {
    var id = manifests[label];
    const manifestResp = await fetch(id);
    const manifestJson = await manifestResp.json();

    let thumbService = extractManifests.traverseDescriptive(manifestJson);
    services.push(thumbService);

  }

  return services;
}

/*
function selectBoxData(collection) {
  let items = []
  collection.forEach(endpoint => {
    console.log(endpoint)
    items.push({manifest: endpoint.id, title: endpoint.label, thumbnail: endpoint.thumbnail[0]})
  });
  return items
}
*/
/*
TODO: snippet for slider changes

See also:
* https://codepen.io/iangilman/pen/beJaGQ
* https://codepen.io/iangilman/pen/PqxvgN

sliders[channel].oninput = function() {
  var label = document.querySelector(`label[for=${this.id}] span`);
  label.innerText = this.value + '%';
  colors[channel] = this.value;
*/

async function setupCuttingTable(collection) {

  function loadCanvas(manifest) {
    //const canvas = document.querySelector("#cutting-table-canvas");
    const canvas = new Canvas('cutting-table-canvas');
    const entry = patternOptions.filter((select) => select.manifest == manifest)[0];
/*
    const ctx = canvas.getContext('2d');
    console.log(entry)
    var img = new Image;
    img.onload = function(){
      ctx.drawImage(img,0,0);
    };
    img.src = entry.preview.id;
    console.log(img)
    */


    Image.fromURL(entry.preview.id, function(img) {
        img.set({
            id : 'image_'+index,
            width : canvas.width / 2,
            height : canvas.height / 2
        });
        canvas.add(img).renderAll().setActiveObject(img);
    });

  }


  const patterns = await getPatterns(collection);


  const select = document.querySelector("#base-pattern");

  patterns.forEach(manifest => {

    const option = document.createElement("option");
    option.value = manifest.id;
    option.text = manifest.label["de"];
    const thumb = manifest.thumbnail[0]
    const preview = manifest.thumbnail[1]
    select.appendChild(option);

    patternOptions.push({manifest: manifest.id, smallThumb: manifest.thumbnail[0], preview: manifest.thumbnail[1], title: manifest.label["de"]})
  });

  const cuttingTable = document.querySelector("#cutting-table-canvas");

  select.addEventListener("change", (e) => {
    console.log("Got select change", e)
    loadCanvas(e.target.value)
    //addMap(preview, url)
  })

}

setupCuttingTable(patternCollection);
