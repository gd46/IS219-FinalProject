$(document).ready(function() {
	var tuitionData = [];
	var finalData = [];
	var name;
    var param = location.href;
    param = param.match(/\/(\d+)/);
    param = param[1];
    $.ajax({
        url: "/api/q3/" + param,
        success: function(data) {
			name = data.INSTNM;
			tuitionData.push(data.Tuition_09);
			tuitionData.push(data.Tuition_10);
			tuitionData.push(data.Tuition_11);
			finalData.push({
				name : name,
				data : tuitionData
			});
            $('#container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                },
                xAxis : {
                	categories : ['2009', '2010', '2011']
                },
                title: {
                    text: data.INSTNM + ' Tuition Change'
                },
                series: finalData
            });
        }
    });
});
