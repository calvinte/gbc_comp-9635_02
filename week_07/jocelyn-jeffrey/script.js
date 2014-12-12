console.log(jQuery);
console.log(google);

$(document).ready(function(){
	var openInfoWindow;
	var map = new google.maps.Map($('#google-map') [0], {
		zoom:16,
	});
	google.maps.event.addListener(map, 'click', function(event) {
		
		searchPhotos(event.latLng);

	});

	navigator.geolocation.getCurrentPosition(function(position) {
		var latLng = new google.maps.LatLng (
			position.coords.latitude, 
			position.coords.longitude
			);
		searchPhotos(latLng);
	});

	function searchPhotos(latLng){
		map.setCenter(latLng);
		new google.maps.Marker({
			position: latLng,
			map: map,
			animation: google.maps.Animation.DROP
		});

		$.ajax({
			type: 'GET',
		dataType:'jsonp',
			url:'https://api.instagram.com/v1/media/search'
			+ '?distance=500'
			+'&lat='+ latLng.lat() 
			+'&lng='+ latLng.lng() 
			+'&client_id=585d00be2af34a26b0e1caa6995cf19f',
			success: function (response){
				console.log(response);

			var image = {
			    url: 'insta.png',
			  };

				response.data.forEach (function(media){
					var latlng = new google.maps.LatLng(media.location.latitude, media.location.longitude);
					var marker = new google.maps.Marker ({
						position: latlng,
						icon: image,
						map: map,
					});
					
					var infowindow = new google.maps.InfoWindow({
						content: 
						'<div class="pics">'
							+'<a target="blank" href="'
							+ media.link
							+'"><img src="' + media.images.low_resolution.url + '" ></a>'
							+'<br/>'										
							+ '<h2>'
							+ 'USER: '
							+ media.user.username
							+ '</h2>'
							+ '<h3>'
							+ media.tags
							+ '</h3>'
					});
					var clicked = latlng;
					google.maps.event.addListener(marker, 'click', function(){
						if (openInfoWindow)openInfoWindow.close();
						openInfoWindow = infowindow;
						map.setCenter(clicked);
						infowindow.open(map, marker);
					});
				});
			},

			});
	}
});
