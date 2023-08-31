// Layer draw
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
    position: 'topleft',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'purple' //polygons being drawn will be purple color
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true, //the area of the polygon will be displayed as it is drawn.
            metric: false,
            repeatMode: true
        },
        polyline: false,
        circlemarker: false, //circlemarker type has been disabled.
        rect: false,
        circle: false,
        rectangle: false

    },
    edit: {
        featureGroup: drawnItems
    }
});
map.addControl(drawControl);

// create data geojson
map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;
    drawnItems.addLayer(layer);

    if (type === 'marker') {
        // Extract coordinates and altitude from the layer options
        var coordinates = layer.getLatLng();
        var lat = coordinates.lat;
        var lng = coordinates.lng;
        // var altitude = layer.options.altitude || 0; // Default to 0 if altitude not provided

        // Add coordinates and altitude to respective HTML elements
        // $('#latitude').val(lat);
        // $('#longitude').val(lng);
        // $('#altitude').val(altitude);
    }

    if (type == 'polygon') {
        $('#geometry').val(JSON.stringify(layer.toGeoJSON()));

        // Calculate and display the area
        var area = turf.area(layer.toGeoJSON());
        document.getElementById('area').value = area.toFixed(2);
    }

});

// edit data geojson
map.on('draw:edited', function (e) {
    var editedLayers = e.layers;
    editedLayers.eachLayer(function (layer) {
        var type = layer instanceof L.Marker ? 'marker' : 'polygon'; // Determine the edited shape type

        if (type === 'marker') {
            // Ambil koordinat dari titik yang baru digambar
            var coordinates = layer.getLatLng();
            var lat = coordinates.lat;
            var lng = coordinates.lng;

            // Tambahkan koordinat
            // $('#latitude').val(lat);
            // $('#longitude').val(lng);
        }

        if (type == 'polygon') {
            $('#geometry').val(JSON.stringify(layer.toGeoJSON()));

            // Calculate and display the area
            var area = turf.area(layer.toGeoJSON());
            document.getElementById('area').value = area.toFixed(2);
        }
    });
});

// delete data geojson
map.on('draw:deleted', function (e) {
    var deletedLayers = e.layers;
    deletedLayers.eachLayer(function (layer) {

        // Tambahkan koordinat
        // $('#latitude').val('');
        // $('#longitude').val('');

        // Update data geojson yang ada di elemen HTML #geom
        $('#geometry').val('');

        // Reset nilai area
        document.getElementById('area').value = "";

    });
});