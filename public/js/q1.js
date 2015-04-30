$(document).ready(function() {
    var collegeData = [];
    var collegeNames = [];
    $.ajax({
        url: "/api/q1",
        success: function(data) {
            async.forEach(data,
                function(college, callback) {
                    collegeData.push({
                        name: college.name,
                        data: college.enrollment
                    });
                    collegeNames.push({
                        name: college.name
                    });
                    callback();
                },
                function(err) {
                    if (err) throw err;
                    console.log(collegeNames.name);
                    $('#container').highcharts({
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: 'Top 10 colleges by enrollment'
                        },
                        xAxis: {
                            categories: collegeNames.name
                        },
                        yAxis: {
                            title: {
                                text: 'Colleges'
                            }
                        },
                        series: collegeData
                    });
                });
        }
    })
});
