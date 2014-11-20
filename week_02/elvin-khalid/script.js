$.ajax({
	type: 'GET',
	dataType: 'jsonp',
	url: 'https://api.instagram.com/v1/media/popular?client_id=585d00be2af34a26b0e1caa6995cf19f',
	success: function(response) {
		console.log(response);
		for (i=0; i<response.data.length; i++){
			$('#photo-background').append(
				'<div class="photo-box">'
				+ '<img src= " ' 
				+ response.data[i].images.standard_resolution.url 
				+ ' " >'
				+ '</div>'
			);
		}
		
	},
});
