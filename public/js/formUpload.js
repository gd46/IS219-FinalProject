$.ajax({
  url: "/upload",
  method: "POST",
}).done(function(data) {
	console.log(data);
});

$( "#form" ).submit(function( event ) {
  event.preventDefault();
});
