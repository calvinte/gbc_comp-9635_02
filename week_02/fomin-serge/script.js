$.ajax({
	type: 'GET',
	dataType: 'jsonp',
	url: 'https://api.instagram.com/v1/users/230199680/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f',
	success: function(response) {
		console.log(response);
		for (var i = 0; i < response.data.length; i++) {
			$('.main-container').append('<div class="photodiv">'
				+ '<img class="insta-photo" src="' 
				+ response.data[i].images.standard_resolution.url 
				+ '">'
				+ '</div>'

			);
		}
		
	},

});

/*$(document).ready(function() {
	$('body').append(
		'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2LDuq2an450g_mYYPs1azNsW9jkmbHf3ntxIZUBEDtpgcuftr">'
		);
	
});*/
