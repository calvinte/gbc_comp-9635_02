/*$(document).ready(function(){
	console.log(1);
});
console.log(2);*/

$.ajax({
	type: 'GET',
	dataType: 'jsonp',
	url: 'https://api.instagram.com/v1/users/1337707163/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
	success: function(response){
		console.log(response);
		for (var i = 0; i < response.data.length; i++){
		$('body').append(
		'<div>'
		+'<img class="photo" src="' 
		+ response.data[i].images.standard_resolution.url 
		+'">'
		+'</div>'
	);
	}
	},
});

/*$(document).ready(function(){
	$('body').append(
		'<img src="; + response.data[0].images.standard_resolution.url +'">'');
	});*/

/*1337707163*/