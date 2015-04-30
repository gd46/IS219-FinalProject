$(document).ready(function() {
    var collegeData = [];
    var collegeNames = [];
    var males = [];
    var females = [];
    $.ajax({
        url: "/api/q2:id",
        success: function(data) {
            async.forEach(data,
                function(college, callback) {
                    console.log(data);
                    collegeData.push(college.enrollment);
                    collegeNames.push(college.name);
                    callback();
                },
                function(err) {
                    if (err) throw err;
                    $('#container').highcharts({
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false
                        },
                        title: {
                            text: 'Enrollment breakdown'
                        },
                        // tooltip: {
                        //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        // },
                        // plotOptions: {
                        //     pie: {
                        //         allowPointSelect: true,
                        //         cursor: 'pointer',
                        //         dataLabels: {
                        //             enabled: true,
                        //             format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        //             style: {
                        //                 color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        //             }
                        //         }
                        //     }
                        // },
                        series: [{
                            type: 'pie',
                            name: 'Enrollment Breakdown',
                            data: [
                                ['Firefox', 45.0],
                                ['IE', 26.8], {
                                    name: 'Chrome',
                                    y: 12.8,
                                    sliced: true,
                                    selected: true
                                },
                                ['Safari', 8.5],
                                ['Opera', 6.2],
                                ['Others', 0.7]
                            ]
                        }]
                    });
                });
        }
    })
});
