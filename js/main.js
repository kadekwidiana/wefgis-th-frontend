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

const crop = L.layerGroup();
const paddy = L.layerGroup();

const overlays = {
    'Corn': crop,
    'Paddy': paddy,
};

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


// Create the Layer Control and add it to the map
var layerControl = L.control.layers(null, overlays, {
    position: 'topright' // Set the position to top-right
}).addTo(map);

// get data by mysql
$(document).ready(function () {
    $.getJSON('http://127.0.0.1:8000/api/pointCrop/json', function (data) {
        // loop class Crop
        $.each(data, function (index) {
            if (data[index].class === 'Crop') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)]).addTo(crop).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }

        });
        // loop class Paddy
        $.each(data, function (index) {
            if (data[index].class === 'Paddy') {
                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)]).addTo(paddy).bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
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