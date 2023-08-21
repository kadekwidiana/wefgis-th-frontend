// Basemaps
const atributeName = '© WebGIS chachoengsao';
var openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: atributeName,
});

var googleStreetMap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

var satelliteMap = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

var googleHibridMap = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    attribution: atributeName,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});

// basemap from cht gpt
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',

});
var esriSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.esri.com">Esri</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
var esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© <a href="https://www.esri.com">Esri</a>',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20
});
var googleEarth = L.tileLayer('https://storage.googleapis.com/global-surface-water/tiles2021/transitions/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.thunderforest.com/maps/landscape/">Thunderforest</a>',
});

//basemap Google Maps Label
var googleMapsLabel = L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}');

// Fungsi untuk mengatur visibilitas lapisan Google Maps Label berdasarkan checkbox
function updateGoogleMapsLabelVisibility() {
    if (document.getElementById('googleMapsLabel').checked) {
        map.addLayer(googleMapsLabel);
    } else {
        map.removeLayer(googleMapsLabel);
    }
}

// Event listener untuk mengaktifkan fungsi saat checkbox berubah
document.getElementById('googleMapsLabel').addEventListener('change', updateGoogleMapsLabelVisibility);

// Initialize the map with the default basemap
var map = L.map('map', {
    layers: [openStreetMap],
    center: [13.666790631230649, 101.35322935835381],
    zoom: 10,
    minZoom: 5,
    zoomControl: false
});

// custom marker Baresoil
var baresoilIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/baresoil.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Cassava
var cassavaIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/cassava.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Crop
var cropIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/corn.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Euscalyptus
var eucalyptusIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/eucalyptus.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Forest
var forestIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/forest.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Grassland
var grasslandIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/grassland.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Paddy
var paddyIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/paddy.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Palm
var palmIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/palm.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Rubber
var rubberIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/rubber.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Settlement
var settlementIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/gedung.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Sugarcane
var sugarcaneIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/sugarcan.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker Water
var waterIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/water.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});
// custom marker
var cornIcon = L.icon({
    iconUrl: 'assets/icons/icon-marker/corn.png',
    iconSize: [25, 32], // ukuran ikon
    iconAnchor: [16, 32], // anchor point pada ikon
    popupAnchor: [0, -32]
});

// const baresoil = L.layerGroup();
const cassava = L.layerGroup();
const baresoil = L.layerGroup();
const crop = L.layerGroup();
const eucalyptus = L.layerGroup();
const forest = L.layerGroup();
const grassland = L.layerGroup();
const paddy = L.layerGroup();
const palm = L.layerGroup();
const rubber = L.layerGroup();
const settlement = L.layerGroup();
const sugarcane = L.layerGroup();
const water = L.layerGroup();

// geoserver
const chachoengsao_prov = L.layerGroup();
const river_chachoengsao = L.layerGroup();
const crops_chachoengsao = L.layerGroup();
const water_body = L.layerGroup();
const building_polygon = L.layerGroup();

// earth_engine
const occurence = L.layerGroup();
const change_intensity = L.layerGroup();
const water_season = L.layerGroup();
const land_cover = L.layerGroup();

const overlays = {
    'Baresoil': baresoil,
    'Cassava': cassava,
    'Corn': crop,
    'Eucalyptus': eucalyptus,
    'Forest': forest,
    'Grassland': grassland,
    'Paddy': paddy,
    'Palm': palm,
    'Rubber': rubber,
    'Building': settlement,
    'Sugarcane': sugarcane,
    'Water Point': water,
};

// LAYER GOOGLE EART ENGINE
const tileLayer_occurence = L.tileLayer('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/7b278f32a53ade7f4bbabe13c6941b5e-68af052d81df7cd77787c1d760304e0b/tiles/{z}/{x}/{y}', {
});
tileLayer_occurence.addTo(occurence);

const tileLayer_change_intensity = L.tileLayer('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/096e64d44655187ed7643156a65f4a30-c95703303bb76d87c2575ce0308f0789/tiles/{z}/{x}/{y}', {
});
tileLayer_change_intensity.addTo(change_intensity);

const tileLayer_water_season = L.tileLayer('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/f483f8237d873eaf08fec49b1e38fef9-275f8d9f874c56d2156044c4c975f46f/tiles/{z}/{x}/{y}', {
});
tileLayer_water_season.addTo(water_season);

const tileLayer_land_cover = L.tileLayer('https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/0490caeb7421393379c62cb23799d80b-9dbd74a46871acbf3b1a053b6433e025/tiles/{z}/{x}/{y}', {
});
tileLayer_land_cover.addTo(land_cover);

// Event listener untuk checkbox Crop
document.getElementById('water_occurence').addEventListener('change', function () {
    if (this.checked) {
        occurence.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        occurence.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('change_intensity').addEventListener('change', function () {
    if (this.checked) {
        change_intensity.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        change_intensity.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('water_season').addEventListener('change', function () {
    if (this.checked) {
        water_season.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        water_season.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('land_cover').addEventListener('change', function () {
    if (this.checked) {
        land_cover.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        land_cover.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});


// LAYER GEOSERVER
// geo server river thailand
var wms_layer = L.tileLayer.wms("http://localhost:8080/geoserver/river_thailand/wms", {
    layers: 'river_thailand:prov_chachoengsao',
    format: 'image/png',
    transparent: true,
});
wms_layer.addTo(chachoengsao_prov);

// geo server river chachoengsao
var wms_layer = L.tileLayer.wms("http://localhost:8080/geoserver/river_thailand/wms", {
    layers: 'river_thailand:river-chachoengsao',
    format: 'image/png',
    transparent: true,
});
wms_layer.addTo(river_chachoengsao);

// geo server river thailand
var wms_layer = L.tileLayer.wms("http://localhost:8080/geoserver/river_thailand/wms", {
    layers: 'river_thailand:crops-point',
    format: 'image/png',
    transparent: true,
});
wms_layer.addTo(crops_chachoengsao);

// geo server water body thailand
var wms_layer = L.tileLayer.wms("http://localhost:8080/geoserver/geo_tiff/wms?service=WMS", {
    layers: 'geo_tiff:occurrence_100E_20Nv1_4_2021(1)',
    format: 'image/png',
    transparent: true,
});
wms_layer.addTo(water_body);

// geo server building chachoengsao
var wms_layer = L.tileLayer.wms("http://localhost:8080/geoserver/thailand_service/wms", {
    layers: 'thailand_service:building',
    format: 'image/png',
    transparent: true,
});
wms_layer.addTo(building_polygon);

// Event listener untuk checkbox Crop
document.getElementById('chachoengsao_prov').addEventListener('change', function () {
    if (this.checked) {
        chachoengsao_prov.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        chachoengsao_prov.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('river_chachoengsao').addEventListener('change', function () {
    if (this.checked) {
        river_chachoengsao.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        river_chachoengsao.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('crops_chachoengsao').addEventListener('change', function () {
    if (this.checked) {
        crops_chachoengsao.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        crops_chachoengsao.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('water_body').addEventListener('change', function () {
    if (this.checked) {
        water_body.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        water_body.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('building_polygon').addEventListener('change', function () {
    if (this.checked) {
        building_polygon.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        building_polygon.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});


// LAYER MARKER CROP
// Event listener untuk checkbox Crop
document.getElementById('point_corn').addEventListener('change', function () {
    if (this.checked) {
        crop.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        crop.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});

// Event listener untuk checkbox Paddy
document.getElementById('point_paddy').addEventListener('change', function () {
    if (this.checked) {
        paddy.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        paddy.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Baresoil
document.getElementById('point_baresoil').addEventListener('change', function () {
    if (this.checked) {
        baresoil.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        baresoil.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Cassava
document.getElementById('point_cassava').addEventListener('change', function () {
    if (this.checked) {
        cassava.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        cassava.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Eucalyptus
document.getElementById('point_eucalyptus').addEventListener('change', function () {
    if (this.checked) {
        eucalyptus.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        eucalyptus.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Forest
document.getElementById('point_forest').addEventListener('change', function () {
    if (this.checked) {
        forest.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        forest.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Grassland
document.getElementById('point_grassland').addEventListener('change', function () {
    if (this.checked) {
        grassland.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        grassland.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Palm
document.getElementById('point_palm').addEventListener('change', function () {
    if (this.checked) {
        palm.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        palm.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Rubber
document.getElementById('point_rubber').addEventListener('change', function () {
    if (this.checked) {
        rubber.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        rubber.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Building
document.getElementById('point_building').addEventListener('change', function () {
    if (this.checked) {
        settlement.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        settlement.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Sugarcane
document.getElementById('point_sugarcane').addEventListener('change', function () {
    if (this.checked) {
        sugarcane.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        sugarcane.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// Event listener untuk checkbox Sugarcane
document.getElementById('point_water').addEventListener('change', function () {
    if (this.checked) {
        water.addTo(map); // Menampilkan lapisan marker Paddy
    } else {
        water.removeFrom(map); // Menghilangkan lapisan marker Paddy
    }
});

// get data by mysql
$(document).ready(function () {
    $.getJSON('http://127.0.0.1:8000/api/pointCrop/json', function (data) {
        // loop class Baresoil
        $.each(data, function (index) {
            if (data[index].class === 'Baresoil') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: baresoilIcon }).addTo(baresoil).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude + '<br> Address : ');
            }
        });
        // loop class Cassava   
        $.each(data, function (index) {
            if (data[index].class === 'Cassava') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: cassavaIcon }).addTo(cassava).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }

        });
        // loop class Crop
        $.each(data, function (index) {
            if (data[index].class === 'Crop') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: cropIcon }).addTo(crop).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }

        });
        // loop class Eucalyptus 	
        $.each(data, function (index) {
            if (data[index].class === 'Eucalyptus') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: eucalyptusIcon }).addTo(eucalyptus).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }

        });
        // loop class Forest	
        $.each(data, function (index) {
            if (data[index].class === 'Forest') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: forestIcon }).addTo(forest).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Grassland	
        $.each(data, function (index) {
            if (data[index].class === 'Grassland') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: grasslandIcon }).addTo(grassland).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Paddy	
        $.each(data, function (index) {
            if (data[index].class === 'Paddy') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: paddyIcon }).addTo(paddy).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Palm	
        $.each(data, function (index) {
            if (data[index].class === 'Palm') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: palmIcon }).addTo(palm).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Rubber	
        $.each(data, function (index) {
            if (data[index].class === 'Rubber') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: rubberIcon }).addTo(rubber).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Settlement 		
        $.each(data, function (index) {
            if (data[index].class === 'Settlement') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: settlementIcon }).addTo(settlement).bindPopup('Class : Building<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Sugarcane 		
        $.each(data, function (index) {
            if (data[index].class === 'Sugarcane') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: sugarcaneIcon }).addTo(sugarcane).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
        // loop class Water 		
        $.each(data, function (index) {
            if (data[index].class === 'Water') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: waterIcon }).addTo(water).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });
    });
});


// search
var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing'
}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .className += ' fa-solid fa-magnifying-glass fa-xl';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .title += 'Search for a place';

// hash
var hash = new L.Hash(map);

// navigasi bar
L.control.navbar().addTo(map);

// skala
L.control.scale().addTo(map);

// Custom zoom control
var customZoomControl = L.control.zoom({
    position: 'bottomright'  // Set the position to bottom right
});
// Add the custom zoom control to the map
map.addControl(customZoomControl);

var marker1 = L.marker([51.505, -0.09]);
marker1.bindPopup("Marker 1");

var marker2 = L.marker([51.51, -0.1]);
marker2.bindPopup("Marker 2");

var markerGroup1 = L.layerGroup([marker1]);
var markerGroup2 = L.layerGroup([marker2]);

// Menambahkan event listener untuk checkbox
var checkboxes = document.querySelectorAll('.itemCheckbox');
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var layerName = this.getAttribute('data-layer');
        var layer = window[layerName];

        if (this.checked) {
            map.addLayer(layer);
        } else {
            map.removeLayer(layer);
        }
    });
});

// Fungsi untuk mengganti basemap
function changeBasemap(newBasemap) {
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    newBasemap.addTo(map);
}

// Event listener untuk pilihan basemap OpenStreetMap
document.querySelector('input[value="openStreetMap"]').addEventListener('change', function () {
    changeBasemap(openStreetMap);
});

// Event listener untuk pilihan basemap GoogleStreet
document.querySelector('input[value="googleStreetMap"]').addEventListener('change', function () {
    changeBasemap(googleStreetMap);
});

// Event listener untuk pilihan basemap Satellite
document.querySelector('input[value="satelliteMap"]').addEventListener('change', function () {
    changeBasemap(satelliteMap);
});

// Event listener untuk pilihan basemap Hibrid
document.querySelector('input[value="googleHibridMap"]').addEventListener('change', function () {
    changeBasemap(googleHibridMap);
});

// Event listener untuk pilihan basemap open topo
document.querySelector('input[value="openTopoMap"]').addEventListener('change', function () {
    changeBasemap(openTopoMap);
});
// Event listener untuk pilihan basemap open topo
document.querySelector('input[value="esriWorldStreetMap"]').addEventListener('change', function () {
    changeBasemap(esriWorldStreetMap);
});
// Event listener untuk pilihan basemap open topo
document.querySelector('input[value="esriSatelite"]').addEventListener('change', function () {
    changeBasemap(esriSatelite);
});
// Event listener untuk pilihan basemap open topo
document.querySelector('input[value="googleEarth"]').addEventListener('change', function () {
    changeBasemap(googleEarth);
});

// Memilih semua gambar basemap
var basemapImages = document.querySelectorAll('.sidebar-basemap img');

// Menambahkan event listener pada setiap gambar basemap
basemapImages.forEach(function (image) {
    image.addEventListener('click', function () {
        var radio = this.closest('label').querySelector('input[type="radio"]');
        radio.checked = true;

        var selectedBasemap = radio.value;

        map.eachLayer(function (layer) {
            map.removeLayer(layer);
        });

        switch (selectedBasemap) {
            case 'openStreetMap':
                openStreetMap.addTo(map);
                break;
            case 'googleStreetMap':
                googleStreetMap.addTo(map);
                break;
            case 'satelliteMap':
                satelliteMap.addTo(map);
                break;
            case 'googleHibridMap':
                googleHibridMap.addTo(map);
                break;
            case 'openTopoMap':
                openTopoMap.addTo(map);
                break;
            case 'esriWorldStreetMap':
                esriWorldStreetMap.addTo(map);
                break;
            case 'esriSatelite':
                esriSatelite.addTo(map);
                break;
            case 'googleEarth':
                googleEarth.addTo(map);
                break;

            default:
                break;
        }

    });
});