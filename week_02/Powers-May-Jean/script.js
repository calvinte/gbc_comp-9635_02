$.ajax({
	type: 'GET',
	dataType: 'jsonp',
//	url: 'https://api.instagram.com/v1/media/popular?client_id=585d00be2af34a26b0e1caa6995cf19f',
	url: 'https://api.instagram.com/v1/users/230199680/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
	success: function(response) {
		console.log(response);
		for (var i = 0; i < response.data.length; i++){
			$('body').append(
			  '<div>'
			+ '<img class="insta-photo" src="'
			+ response.data[i].images.standard_resolution.url
			+ '">'
			+ '</div>'

			$('p').append(
			  '<div>'
			+ '<img class="insta-photo" src="'
			+ response.data[i].caption.text'
			+ '">'
			+ '</div>'
			);	
		}
	},
});

$(document).ready(function(){
	$('body').append(
		'<img src="http://melbourneer.com/wp-content/uploads/2013/11/z40kUTW.jpg">'
		);
});