// earth data
$.getJSON("http://127.0.0.1:8000/api/earthData", function (data) {
    // Object data
    var datas = data.data;

    // Fungsi untuk mengambil data VHI berdasarkan tahun dan bulan
    function getVHIByYearAndMonth(datas, year, month) {
        var vhiData = [];

        $.each(datas, function (index, entry) {
            if (entry.Year === year && entry.Month === month) {
                vhiData.push(entry.VHI);
            }
        });

        return vhiData;
    }

    var dataVHIByYear = {};

    for (var year = 2020; year <= 2023; year++) {
        var dataVHI = [];

        for (var month = 1; month <= 12; month++) {
            var vhiData = getVHIByYearAndMonth(datas, year, month);

            var totalWholeNumberPart = 0;
            for (var i = 0; i < vhiData.length; i++) {
                var wholeNumberPart = Math.floor(vhiData[i]);
                totalWholeNumberPart += wholeNumberPart;
            }

            var averageWholeNumberPart = totalWholeNumberPart / vhiData.length;
            dataVHI.push(averageWholeNumberPart);
        }

        dataVHIByYear[year] = dataVHI;
    }

    // console.log(dataVHIByYear[2020]);

    // Data untuk grafik
    var dataChartVhi = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: '2020',
                data: dataVHIByYear[2020],
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2021',
                data: dataVHIByYear[2021],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2022',
                data: dataVHIByYear[2022],
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2023',
                data: dataVHIByYear[2023],
                backgroundColor: 'orange',
                borderColor: 'orange',
                borderWidth: 1,
                pointStyle: false
            },
        ]
    };

    // Membuat grafik menggunakan Chart.js
    var ctx = document.getElementById('chartVHI').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: dataChartVhi,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    maxTicksLimit: 12, // Ini akan memastikan semua label bulan terlihat
                },
                y: {
                    min: 0,   // Mulai dari 0
                    max: 100, // Maksimal 100
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'VHI',
                    position: 'left'
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        pointRadius: 8,
                    }
                }
            }
        }
    });

    // Fungsi untuk mengambil data VCI berdasarkan tahun dan bulan
    function getVCIByYearAndMonth(datas, year, month) {
        var vciData = [];

        $.each(datas, function (index, entry) {
            if (entry.Year === year && entry.Month === month) {
                vciData.push(entry.VCI);
            }
        });

        return vciData;
    }

    var dataVCIByYear = {};

    for (var year = 2020; year <= 2023; year++) {
        var dataVCI = [];

        for (var month = 1; month <= 12; month++) {
            var vciData = getVCIByYearAndMonth(datas, year, month);

            var totalWholeNumberPart = 0;
            for (var i = 0; i < vciData.length; i++) {
                var wholeNumberPart = Math.floor(vciData[i]);
                totalWholeNumberPart += wholeNumberPart;
            }

            var averageWholeNumberPart = totalWholeNumberPart / vciData.length;
            dataVCI.push(averageWholeNumberPart);
        }

        dataVCIByYear[year] = dataVCI;
    }

    // console.log(dataVCIByYear[2020]);

    // Data untuk grafik
    var dataChartVci = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: '2020',
                data: dataVCIByYear[2020],
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2021',
                data: dataVCIByYear[2021],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2022',
                data: dataVCIByYear[2022],
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2023',
                data: dataVCIByYear[2023],
                backgroundColor: 'orange',
                borderColor: 'orange',
                borderWidth: 1,
                pointStyle: false
            },
        ]
    };

    // Membuat grafik menggunakan Chart.js
    var ctx = document.getElementById('chartVCI').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: dataChartVci,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    maxTicksLimit: 12, // Ini akan memastikan semua label bulan terlihat
                },
                y: {
                    min: 0,   // Mulai dari 0
                    max: 100, // Maksimal 100
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'VCI',
                    position: 'left'
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        pointRadius: 8,
                    }
                }
            }
        }
    });

    // Fungsi untuk mengambil data TCI berdasarkan tahun dan bulan
    function getTCIByYearAndMonth(datas, year, month) {
        var tciData = [];

        $.each(datas, function (index, entry) {
            if (entry.Year === year && entry.Month === month) {
                tciData.push(entry.TCI);
            }
        });

        return tciData;
    }

    var dataTCIByYear = {};

    for (var year = 2020; year <= 2023; year++) {
        var dataTCI = [];

        for (var month = 1; month <= 12; month++) {
            var tciData = getTCIByYearAndMonth(datas, year, month);

            var totalWholeNumberPart = 0;
            for (var i = 0; i < tciData.length; i++) {
                var wholeNumberPart = Math.floor(tciData[i]);
                totalWholeNumberPart += wholeNumberPart;
            }

            var averageWholeNumberPart = totalWholeNumberPart / tciData.length;
            dataTCI.push(averageWholeNumberPart);
        }

        dataTCIByYear[year] = dataTCI;
    }

    // console.log(dataTCIByYear[2020]);

    // Data untuk grafik
    var dataChartTci = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: '2020',
                data: dataTCIByYear[2020],
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2021',
                data: dataTCIByYear[2021],
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2022',
                data: dataTCIByYear[2022],
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                pointStyle: false
            },
            {
                label: '2023',
                data: dataTCIByYear[2023],
                backgroundColor: 'orange',
                borderColor: 'orange',
                borderWidth: 1,
                pointStyle: false
            },
        ]
    };

    // Membuat grafik menggunakan Chart.js
    var ctx = document.getElementById('chartTCI').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: dataChartTci,
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    maxTicksLimit: 12, // Ini akan memastikan semua label bulan terlihat
                },
                y: {
                    min: 0,   // Mulai dari 0
                    max: 100, // Maksimal 100
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'TCI',
                    position: 'left'
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        pointRadius: 8,
                    }
                }
            }
        }
    });

}).fail(function (jqXHR, textStatus, error) {
    console.log("Error: " + error);
});