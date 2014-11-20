
//$(document).ready(function(){
//console.log(1);
//});
//console.log(2);
$.ajax({
	type: 'get',
	dataType: 'jsonp',
	url:'https://api.instagram.com/v1/media/popular?client_id=585d00be2af34a26b0e1caa6995cf19f',
	success: function(response){
		console.log(response);
		for (var i = 0; i<response.data.length; i++) {
			$('body').append(
				'<div>'
				+ '<img class="insta-photo" '
				+ 'src="'
				+ response.data[i].images.standard_resolution.url
				+ '"></div>'
			);
		}	
	},
});

