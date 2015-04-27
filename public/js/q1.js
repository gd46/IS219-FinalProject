$(document).ready(function() {
    var collegeData = [];
    var enrollmentData = [];
    var collegeNames = [];
    $.ajax({
        url: "/api/q1",
        success: function(data) {
            async.forEach(data,
                function(item, callback) {
                    var jsonData = {};
                    collegeNames.push(item.name);
                    enrollmentData.push(item.enrollment);
                    jsonData['name'] = item.name;
                    jsonData.push(enrollmentData);
                    callback();
                },
                function(err) {
                    if (err) throw err;

                });
            /*$('#container').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Students'
                },
                yAxis: {
                    title: {
                        text: 'Number of students'
                    }
                },
                series: data
            });*/
        }
    })
});
