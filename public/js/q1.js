$(document).ready(function() {
    var collegeData = [];
    var collegeNames = [];
    var finalData = [];
    $.ajax({
        url: "/api/q1",
        success: function(data) {
            async.forEach(data,
                function(college, callback) {
                    collegeData.push(college.enrollment);
                    collegeNames.push(college.name);
                    callback();
                },
                function(err) {
                    if (err) throw err;
                    finalData.push({
                        name: 'Enrollments',
                        data: collegeData
                    });
                    $('#container').highcharts({
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Top 10 colleges by enrollment'
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        },
                        xAxis: {
                            categories: collegeNames
                        },
                        yAxis: {
                            title: {
                                text: 'Colleges'
                            }
                        },
                        series: finalData
                    });
                });
        }
    })
});
