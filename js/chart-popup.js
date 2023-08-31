
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
        // Membuat objek untuk memetakan kelas dengan ikon dan grupnya
        var classToIcon = {
            'Baresoil': { icon: baresoilIcon, group: baresoil },
            'Cassava': { icon: cassavaIcon, group: cassava },
            'Crop': { icon: cropIcon, group: crop },
            'Eucalyptus': { icon: eucalyptusIcon, group: eucalyptus },
            'Forest': { icon: forestIcon, group: forest },
            'Grassland': { icon: grasslandIcon, group: grassland },
            'Palm': { icon: palmIcon, group: palm },
            'Rubber': { icon: rubberIcon, group: rubber },
            'Settlement': { icon: settlementIcon, group: settlement },
            'Sugarcane': { icon: sugarcaneIcon, group: sugarcane },
            'Water': { icon: waterIcon, group: water }
        };

        // Loop melalui data untuk semua kelas
        $.each(data, function (index) {
            var currentClass = data[index].class;

            if (classToIcon.hasOwnProperty(currentClass)) {
                var icon = classToIcon[currentClass].icon;
                var group = classToIcon[currentClass].group;

                L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: icon })
                    .addTo(group)
                    .bindPopup('Class : ' + data[index].class + '<br>  Coordinat : ' + data[index].latitude + ',' + data[index].longitude);
            }
        });

        // loop class Paddy	
        $.each(data, function (index) {

            if (data[index].class === 'Paddy') {
                var marker = L.marker([parseFloat(data[index].latitude), parseFloat(data[index].longitude)], { icon: paddyIcon });

                var popupContent = '<div class="popup-container">';
                popupContent += '<div class="popup-header">Class: ' + data[index].class + '</div>';
                popupContent += '<div class="popup-coordinates">Coordinates: ' + data[index].latitude + ',' + data[index].longitude + '</div>';
                popupContent += '<div class="popup-address mb-2">Address: <span id="address-placeholder">Loading...</span></div>';
                popupContent += '<div class="popup-address mb-2"><a style="text-decoration: none;" href="http://maps.google.com/maps?q=&layer=c&cbll=' + data[index].latitude + ',' + data[index].longitude + '&cbp=11,0,0,0" target="_blank"><b>Street View</b></a></div>';
                popupContent += '<div id="loading-overlay"><div class="loading-spinner"></div></div>';
                popupContent += '<div id="failed">Data not found</div>';

                // Add Bootstrap tabs
                popupContent += '<ul class="nav nav-tabs justify-content-center" role="tablist">';
                popupContent += '<li class="nav-item"><a class="nav-link active" href="#chart1-' + data[index].id + '" role="tab" data-toggle="tab">Cumulative Rainfall</a></li>';
                popupContent += '<li class="nav-item"><a class="nav-link" href="#chart2-' + data[index].id + '" role="tab" data-toggle="tab">VCI</a></li>';
                popupContent += '</ul>';

                popupContent += '<div class="tab-content">';
                popupContent += '<div role="tabpanel" class="tab-pane active" id="chart1-' + data[index].id + '"><canvas id="myChart1' + data[index].id + '" width="600" height="400"></canvas></div>';
                popupContent += '<div role="tabpanel" class="tab-pane" id="chart2-' + data[index].id + '"><canvas id="myChart2' + data[index].id + '" width="600" height="400"></canvas></div>';
                popupContent += '</div>';

                popupContent += '</div>';
                var popup = L.popup().setContent(popupContent);

                marker.addTo(paddy).bindPopup(popup);

                marker.on('click', function () {
                    var addressPlaceholder = document.getElementById('address-placeholder');

                    $.getJSON(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${data[index].latitude}&lon=${data[index].longitude}&zoom=18&addressdetails=1`, function (data) {
                        var address = data.display_name;
                        addressPlaceholder.textContent = address;
                    });
                    $('#loading-overlay').show();
                    $('#failed').hide();

                    var postData = {
                        geometry: '[' + data[index].longitude + ',' + data[index].latitude + ']',
                        type: 'point',
                        startYear: 2020,
                        endYear: 2022
                    };

                    var responses = [];

                    $.ajax({
                        type: "POST",
                        url: "http://127.0.0.1:8000/api/water-preception",
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        success: function (response) {
                            // console.log("Success:", response.data);
                            $('#loading-overlay').hide();
                            responses.push(response.data);
                            var monthlyRainfallData = response.data;
                            var rainfallArray = []; // Array untuk menyimpan curah hujan

                            // Loop melalui array respons untuk mengumpulkan data curah hujan
                            for (var i = 0; i < monthlyRainfallData.length; i++) {
                                var precipitation = monthlyRainfallData[i].precipitation;
                                rainfallArray.push(precipitation); // Menambahkan nilai curah hujan ke array
                            }

                            // console.log("Rainfall Array:", rainfallArray);

                            // Loop through the response to group data by year
                            var yearlyRainfallData = {}; // Object to store data by year

                            for (var i = 0; i < monthlyRainfallData.length; i++) {
                                var year = monthlyRainfallData[i].year;
                                var precipitation = monthlyRainfallData[i].precipitation;

                                // If the year is not in the object, create an array for it
                                if (!yearlyRainfallData.hasOwnProperty(year)) {
                                    yearlyRainfallData[year] = [];
                                }

                                // Add the precipitation value to the appropriate year's array
                                yearlyRainfallData[year].push(precipitation);
                            }

                            // console.log("Yearly Rainfall Data:", yearlyRainfallData);

                            var datasets = []; // Array to store datasets

                            // Loop through the yearlyRainfallData object
                            for (var year in yearlyRainfallData) {
                                if (yearlyRainfallData.hasOwnProperty(year)) {
                                    var color = getRandomColor();
                                    datasets.push({
                                        label: year,
                                        data: yearlyRainfallData[year], // Use the array of precipitation values for this year
                                        backgroundColor: color, // You can create a function to generate random colors
                                        borderColor: color, // You can create a function to generate random colors
                                        borderWidth: 1,
                                    });
                                }
                            }

                            // Function to generate a random color
                            function getRandomColor() {
                                var letters = '0123456789ABCDEF';
                                var color = '#';
                                for (var i = 0; i < 6; i++) {
                                    color += letters[Math.floor(Math.random() * 16)];
                                }
                                return color;
                            }

                            var markerIndex = data[index].id;

                            var ctx = document.getElementById('myChart1' + markerIndex).getContext('2d');
                            var myChart1 = new Chart(ctx, {
                                type: 'line',
                                data: {
                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                    datasets: datasets,
                                },
                                options: {
                                    responsive: true,
                                    scales: {
                                        x: {
                                            beginAtZero: true,
                                            maxTicksLimit: 12,
                                        },
                                        y: {
                                            min: 0,
                                            max: Math.max(...rainfallArray) + 100,
                                            beginAtZero: true,
                                        }
                                    },
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'Cumulative Rainfall (mm)',
                                            position: 'top'
                                        },
                                        legend: {
                                            display: true,
                                            position: 'bottom',
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: 'circle',
                                                pointRadius: 8,
                                            }
                                        }
                                    }
                                }
                            });
                        },
                        error: function (error) {
                            console.log("Fail:", error);
                            $('#loading-overlay').hide();
                            $('#failed').show();
                        }

                    });

                    var responses2 = [];

                    $.ajax({
                        type: "POST",
                        url: "http://127.0.0.1:8000/api/vci",
                        data: JSON.stringify(postData),
                        contentType: "application/json",
                        success: function (response) {
                            // console.log("Success:", response.data);
                            $('#loading-overlay').hide();
                            responses2.push(response.data);
                            var monthlyRainfallData = response.data;
                            var rainfallArray = []; // Array untuk menyimpan curah hujan

                            // Loop melalui array respons untuk mengumpulkan data curah hujan
                            for (var i = 0; i < monthlyRainfallData.length; i++) {
                                var vci = monthlyRainfallData[i].VCI;
                                rainfallArray.push(vci); // Menambahkan nilai curah hujan ke array
                            }

                            // console.log("Rainfall Array:", rainfallArray);

                            // Loop through the response to group data by year
                            var yearlyRainfallData = {}; // Object to store data by year

                            for (var i = 0; i < monthlyRainfallData.length; i++) {
                                var year = monthlyRainfallData[i].Year;
                                var vci = monthlyRainfallData[i].VCI;

                                // If the year is not in the object, create an array for it
                                if (!yearlyRainfallData.hasOwnProperty(year)) {
                                    yearlyRainfallData[year] = [];
                                }

                                // Add the vci value to the appropriate year's array
                                yearlyRainfallData[year].push(vci);
                            }

                            // console.log("Yearly Rainfall Data:", yearlyRainfallData);

                            var datasets = []; // Array to store datasets

                            // Loop through the yearlyRainfallData object
                            for (var year in yearlyRainfallData) {
                                if (yearlyRainfallData.hasOwnProperty(year)) {
                                    datasets.push({
                                        label: year,
                                        data: yearlyRainfallData[year], // Use the array of vci values for this year
                                        borderColor: getRandomColor(), // You can create a function to generate random colors
                                        borderWidth: 1,
                                    });
                                }
                            }

                            // Function to generate a random color
                            function getRandomColor() {
                                var letters = '0123456789ABCDEF';
                                var color = '#';
                                for (var i = 0; i < 6; i++) {
                                    color += letters[Math.floor(Math.random() * 16)];
                                }
                                return color;
                            }

                            var markerIndex = data[index].id;

                            var ctx = document.getElementById('myChart2' + markerIndex).getContext('2d');
                            var myChart2 = new Chart(ctx, {
                                type: 'line',
                                data: {
                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                                    datasets: datasets,
                                },
                                options: {
                                    responsive: true,
                                    scales: {
                                        x: {
                                            beginAtZero: true,
                                            maxTicksLimit: 12,
                                        },
                                        y: {
                                            min: 0,
                                            max: Math.max(...rainfallArray) + 100,
                                            beginAtZero: true,
                                        }
                                    },
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: 'VCI (mm)',
                                            position: 'top'
                                        },
                                        legend: {
                                            display: true,
                                            position: 'bottom',
                                            labels: {
                                                usePointStyle: true,
                                                pointStyle: 'circle',
                                                pointRadius: 8,
                                            }
                                        }
                                    }
                                }
                            });
                        },
                        error: function (error) {
                            console.log("Fail:", error);
                            $('#loading-overlay').hide();
                        }

                    });
                });
            }
        });
    });
});