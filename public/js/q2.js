$(document).ready(function() {
    var males = ['Males'];
    var females = ['Females'];
    var param = location.href;
    param = param.match(/\/(\d+)/);
    param = param[1];
    $.ajax({
        url: "/api/q2/" + param,
        success: function(data) {
            males.push(data.EFTOTLM);
            females.push(data.EFTOTLW);
            $('#container').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                },
                title: {
                    text: data.INSTNM + ' Enrollment breakdown'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Enrollment Breakdown',
                    data: [males, females]
                }]
            });
        }
    })
});
