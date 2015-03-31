$(document).ready(function(){
	$('#form').ajaxForm({
		success : function(response){
			alert(response);
			window.location.href = '/colleges';
		},
		error : function(err){
			alert('Error try again');
			window.location.reload();
		}
	})
});
