$(document).ready(function() {
	
	// $('#container').highcharts({
	// 	    chart: {
	// 	        type: 'bar'
	// 	    },
	// 	    title: {
	// 	        text: 'Fruit Consumption'
	// 	    },
	// 	    xAxis: {
	// 	        categories: ['Apples', 'Bananas', 'Oranges']
	// 	    },
	// 	    yAxis: {
	// 	        title: {
	// 	            text: 'Fruit eaten'
	// 	        }
	// 	    },
	// 	    series: [{
	// 	        name: 'Jane',
	// 	        data: [1, 0, 4]
	// 	    }, {
	// 	        name: 'John',
	// 	        data: [5, 7, 3]
	// 	    }]
	// 	});

	

	

	var test = {
			data: [{
	            studentName: 'John',
	            data: [5, 3, 4]
	        }, {
	            studentName: 'Jane',
	            data: [2, 2, 3]
	        }, {
	            studentName: 'Joe',
	            data: [3, 4, 4]
	        }]
		};
		series = [],
		len = test.data.length,
		i = 0;
	for(i; i<len;i++){
		console.log(i);
		series.push({
			name: test.data[i].studentName,
			data: test.data[i].data
		});
	}
		$('#container').highcharts({
		    chart: {
		        type: 'bar'
		    },
		    title: {
		        text: 'Students'
		    },
		    xAxis: {
		        categories: ['Apples', "Oranges", "Pairs"]
		    },
		    yAxis: {
		        title: {
		            text: 'Number of students'
		        }
		    },
		    series: series

		    //test.data
		    // series: [{
		    //     name: 'Males',
		    //     //data: [test.students.male]
		    //     data: [1200]
		    // }, {
		    //     name: 'Females',
		    //     //data: [test.students.female]
		    //     data: [500]
		    // }]
		});
});
