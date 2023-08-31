// START JS SIDEBAR RIGHT
// Menyeseuaikan posisi control sidebar
function adjustPositionControlSidebarRight(sidebarClass) {
    var sidebarWidth = document.querySelector(sidebarClass + '.active') ? 250 : 0; // Adjust the width based on sidebar visibility

    // Atur posisi control leaflet
    var controlContainersLeaflet = document.querySelectorAll('.leaflet-control-zoom, .leaflet-control-attribution');
    controlContainersLeaflet.forEach(function (controlContainerLeaflet) {
        controlContainerLeaflet.style.right = sidebarWidth + 'px';
    });

    // Atur posisi control basemap, layer, dan legend
    var controlContainers = document.querySelectorAll('.container-control-basemap, .container-control-layer, .container-control-legend,.container-control-street-view');
    controlContainers.forEach(function (controlContainer) {
        controlContainer.style.right = sidebarWidth + 'px';
    });
}

function closeBasemapSidebar() {
    var basemapSidebar = document.getElementById("sidebar-basemap");
    if (basemapSidebar.classList.contains("active")) {
        basemapSidebar.classList.remove("active");
        adjustPositionControlSidebarRight('.sidebar-basemap'); // Call the function to adjust control positions
        var basemapButton = document.querySelector('.container-control-basemap button');
        basemapButton.classList.remove("active"); // Remove active class from the button
    }
}

// Function to close layer sidebar and adjust icons
function closeLayerSidebar() {
    var layerSidebar = document.getElementById("sidebar-layer");
    if (layerSidebar.classList.contains("active")) {
        layerSidebar.classList.remove("active");
        adjustPositionControlSidebarRight('.sidebar-layer'); // Call the function to adjust control positions
        var layerButton = document.querySelector('.container-control-layer button');
        layerButton.classList.remove("active"); // Remove active class from the button
    }
}

// Function to close legend sidebar and adjust icons
function closeLegendSidebar() {
    var layerSidebar = document.getElementById("sidebar-legend");
    if (layerSidebar.classList.contains("active")) {
        layerSidebar.classList.remove("active");
        adjustPositionControlSidebarRight('.sidebar-legend'); // Call the function to adjust control positions
        var layerButton = document.querySelector('.container-control-legend button');
        layerButton.classList.remove("active"); // Remove active class from the button
    }
}

// Control button basemaps
var customControlBasemap = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-basemap');
        var button = L.DomUtil.create('button', 'button-control-basemap', container);
        var image = document.createElement('img');
        image.src = 'assets/icons/icon-control/icon-basemap.png'; // Ganti dengan path gambar Anda
        image.className = 'custom-image'; // Optional: Atur kelas untuk gambar jika diperlukan

        button.appendChild(image);

        container.addEventListener("click", function () {
            closeLayerSidebar(); // Close layer sidebar if open
            closeLegendSidebar(); // Close layer sidebar if open
            document.getElementById("sidebar-basemap").classList.toggle("active");
            adjustPositionControlSidebarRight('.sidebar-basemap'); // Call the function to adjust control positions
            var basemapButton = document.querySelector('.container-control-basemap button');
            basemapButton.classList.toggle("active"); // Toggle active class on the button
        });

        return container;
    }
});
// Add the custom button to the map
map.addControl(new customControlBasemap());

// Control button layer
var customControlLayer = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-layer');
        var button = L.DomUtil.create('button', 'button-control-layer', container);
        var image = document.createElement('img');
        image.src = 'assets/icons/icon-control/icon-layer.png'; // Ganti dengan path gambar Anda
        image.className = 'custom-image'; // Optional: Atur kelas untuk gambar jika diperlukan

        button.appendChild(image);


        container.addEventListener("click", function () {
            closeBasemapSidebar(); // Close basemap sidebar if open
            closeLegendSidebar(); // Close basemap sidebar if open
            document.getElementById("sidebar-layer").classList.toggle("active");
            adjustPositionControlSidebarRight('.sidebar-layer'); // Call the function to adjust control positions
            var layerButton = document.querySelector('.container-control-layer button');
            layerButton.classList.toggle("active"); // Toggle active class on the button
        });

        return container;
    }
});

// Add the custom button to the map
map.addControl(new customControlLayer());

// Control button legend
var customControlLegend = L.Control.extend({
    options: {
        position: 'topright'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-legend');
        var button = L.DomUtil.create('button', 'button-control-legend', container);
        var icon = L.DomUtil.create('i', 'fa-solid fa-list fa-xl');
        button.appendChild(icon);

        container.addEventListener("click", function () {
            closeBasemapSidebar(); // Close basemap sidebar if open
            closeLayerSidebar(); // Close basemap sidebar if open
            document.getElementById("sidebar-legend").classList.toggle("active");
            adjustPositionControlSidebarRight('.sidebar-legend'); // Call the function to adjust control positions
            var layerButton = document.querySelector('.container-control-legend button');
            layerButton.classList.toggle("active"); // Toggle active class on the button
        });

        return container;
    }
});
// Add the custom button to the map
map.addControl(new customControlLegend());

// Control button legend
var controlStreetView = L.Control.extend({
    options: {
        position: 'bottomright'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-street-view');
        var button = L.DomUtil.create('button', 'button-control-street-view', container);
        var icon = L.DomUtil.create('i', 'fa-solid fa-person fa-lg');
        button.appendChild(icon);

        button.addEventListener("click", function () {
            // Add a click event listener to the map only after the button is clicked
            map.on('click', function (e) {
                let lat = e.latlng.lat.toPrecision(8);
                let lon = e.latlng.lng.toPrecision(8);
                const point = L.marker([lat, lon]).addTo(map)
                    .bindPopup('<a href="http://maps.google.com/maps?q=&layer=c&cbll=' + lat + ',' + lon + '&cbp=11,0,0,0" target="_blank"><b>View</b></a>').openPopup();
            });
        });

        return container;
    }
});

// Add the custom button to the map
map.addControl(new controlStreetView());

// END SIDEBAR RIGTH

// START SIDEBAR LEFT
// Menyeseuaikan posisi control sidebar basemap
function adjustPositionControlSidebarLeft(sidebarClass) {
    var sidebarWidth = document.querySelector(sidebarClass + '.active') ? 450 : 0; // Adjust the width based on sidebar visibility

    // Atur posisi control leaflet
    var controlContainersLeaflet = document.querySelectorAll('.leaflet-control-scale, .leaflet-control-geocoder, .leaflet-control-navbar, .leaflet-draw ');
    controlContainersLeaflet.forEach(function (controlContainerLeaflet) {
        controlContainerLeaflet.style.left = sidebarWidth + 'px';
    });

    // Atur posisi control basemap, layer, dan legend
    var controlContainers = document.querySelectorAll('.container-control-analisis');
    controlContainers.forEach(function (controlContainer) {
        controlContainer.style.left = sidebarWidth + 'px';
    });
}

// adjustPositionControlSidebarLeft('.sidebar-analisis.active');


// Function to close basemap sidebar and adjust icons
function closeAnalisisSidebar() {
    var basemapSidebar = document.getElementById("sidebar-analisis");
    if (basemapSidebar.classList.contains("active")) {
        basemapSidebar.classList.remove("active");
        adjustPositionControlSidebarLeft('.sidebar-analisis.active'); // Call the function to adjust control positions
        var basemapButton = document.querySelector('.container-control-analisis button');
        basemapButton.classList.remove("active"); // Remove active class from the button
    }
}


// Control button legend
var customControlAnalisis = L.Control.extend({
    options: {
        position: 'topleft'
    },

    onAdd: function () {
        var container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-analisis');
        var button = L.DomUtil.create('button', 'button-control-analisis', container);
        var icon = L.DomUtil.create('i', 'fa-solid fa-info fa-xl');
        button.appendChild(icon);

        container.addEventListener("click", function () {

            document.getElementById("sidebar-analisis").classList.toggle("active");
            adjustPositionControlSidebarLeft('.sidebar-analisis.active'); // Call the function to adjust control positions
            var layerButton = document.querySelector('.container-control-analisis button');
            layerButton.classList.toggle("active"); // Toggle active class on the button
        });

        return container;
    }
});
// Add the custom button to the map
map.addControl(new customControlAnalisis());

// navigasi bar
L.control.navbar().addTo(map);

// hash
var hash = new L.Hash(map);

// skala
L.control.scale().addTo(map);
