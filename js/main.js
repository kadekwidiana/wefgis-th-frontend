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

// geoserver layer
const chachoengsao_prov = L.layerGroup();
const river_chachoengsao = L.layerGroup();
const crops_chachoengsao = L.layerGroup();
const water_body = L.layerGroup();
const building_polygon = L.layerGroup();

// earth_engine layer
const tci = L.layerGroup();
const vci = L.layerGroup();
const vhi = L.layerGroup();

// earth data
$.getJSON("http://127.0.0.1:8000/api/earthData", function (data) {
    let tciUrl = data.map.tci;
    let vciUrl = data.map.vci;
    let vhiUrl = data.map.vhi;

    // LAYER GOOGLE EART ENGINE
    const tileLayer_tci = L.tileLayer(tciUrl, {
    });
    tileLayer_tci.addTo(tci);

    const tileLayer_vci = L.tileLayer(vciUrl, {
    });
    tileLayer_vci.addTo(vci);

    const tileLayer_vhi = L.tileLayer(vhiUrl, {
    });
    tileLayer_vhi.addTo(vhi);

}).fail(function (jqXHR, textStatus, error) {
    console.log("Error: " + error);
});

// Event listener untuk checkbox Crop
document.getElementById('tci').addEventListener('change', function () {
    if (this.checked) {
        tci.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        tci.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('vci').addEventListener('change', function () {
    if (this.checked) {
        vci.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        vci.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});
// Event listener untuk checkbox Crop
document.getElementById('vhi').addEventListener('change', function () {
    if (this.checked) {
        vhi.addTo(map); // Menampilkan lapisan marker Crop
    } else {
        vhi.removeFrom(map); // Menghilangkan lapisan marker Crop
    }
});

// // WATER GEE
// $.getJSON("http://127.0.0.1:8000/api/water-occurrences", function (data_map) {
//     console.log(data_map.map.IGBP);

//     const tileLayer_changeIntensity = L.tileLayer(data_map.map.ChangeIntensity, {
//     });
//     tileLayer_changeIntensity.addTo(change_intensity);

//     const tileLayer_igbp = L.tileLayer(data_map.map.IGBP, {
//     });
//     tileLayer_igbp.addTo(igpb);

//     const tileLayer_lst = L.tileLayer(data_map.map.LST, {
//     });
//     tileLayer_lst.addTo(lst);

//     const tileLayer_occurrence = L.tileLayer(data_map.map.Occurrence, {
//     });
//     tileLayer_occurrence.addTo(occurrence);

//     const tileLayer_water = L.tileLayer(data_map.map.Water, {
//     });
//     tileLayer_water.addTo(water_gee);

//     const tileLayer_waterSeason = L.tileLayer(data_map.map.WaterSeason, {
//     });
//     tileLayer_waterSeason.addTo(water_season);

// }).fail(function (jqXHR, textStatus, error) {
//     console.log("Error: " + error);
// });

// const change_intensity = L.layerGroup();
// const igpb = L.layerGroup();
// const lst = L.layerGroup();
// const occurrence = L.layerGroup();
// const water_gee = L.layerGroup();
// const water_season = L.layerGroup();

// // Change Intensity
// document.getElementById('change_intensity').addEventListener('change', function () {
//     if (this.checked) {
//         change_intensity.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         change_intensity.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });
// // IGBP
// document.getElementById('igbp').addEventListener('change', function () {
//     if (this.checked) {
//         igpb.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         igpb.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });
// // LST
// document.getElementById('lst').addEventListener('change', function () {
//     if (this.checked) {
//         lst.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         lst.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });
// // Occurence
// document.getElementById('occurrence').addEventListener('change', function () {
//     if (this.checked) {
//         occurrence.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         occurrence.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });
// // Water
// document.getElementById('water').addEventListener('change', function () {
//     if (this.checked) {
//         water_gee.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         water_gee.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });
// // Water Season
// document.getElementById('water_season').addEventListener('change', function () {
//     if (this.checked) {
//         water_season.addTo(map); // Menampilkan lapisan marker Crop
//     } else {
//         water_season.removeFrom(map); // Menghilangkan lapisan marker Crop
//     }
// });


$(document).ready(function () {
    $("#getInfoBtn").click(function () {
        // Mengambil nilai dari input geometry dan type
        var geometryValue = $("#geometry").val();
        var typeValue = 'point';

        // Data yang akan dikirim dalam permintaan POST
        var postData = {
            geometry: geometryValue,
            type: typeValue,
            startYear: '2022',
            endYear: '2022'
        };

        // URL tujuan
        var url = "http://127.0.0.1:8000/api/water-preception";

        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(postData),
            contentType: "application/json",
            success: function (response) {
                console.log("Berhasil:", response);
            },
            error: function (error) {
                console.log("Gagal:", error);
            }
        });
    });
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

// Custom zoom control
var customZoomControl = L.control.zoom({
    position: 'bottomright'  // Set the position to bottom right
});
// Add the custom zoom control to the map
map.addControl(customZoomControl);


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
