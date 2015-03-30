$(document).ready(function(){
	$('button[type=submit').click(function(e){
		e.preventDefault();
		var data = $('input[type=file]').prop('files')[0];
		var form_data = new FormData();
		form_data.append('file', data);
		$.ajax({
			url : '/upload',
			data : form_data,
			type : 'POST',
			processData : false,
		})
		.then(function(data, err){
			alert(data);
			window.location.href = '/colleges';
		});
	})
});