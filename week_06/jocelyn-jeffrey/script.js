console.log(jQuery);
console.log(google);

$(document).ready(function() {
	var mapElement = $('#google-map')[0];
	var lat = 55.9531;
	var lng = -3.1889;
	var url = 'https://api.instagram.com/v1/media/search'
		+ '?lat=' + lat
		+ '&lng=' + lng
		+ '&distance=500'
		+ '&client_id=585d00be2af34a26b0e1caa6995cf19f';
	var openInfoWindow;

	var map = new google.maps.Map(mapElement, {
		zoom: 16,
		center: new google.maps.LatLng(lat,lng),
	})

		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: url,
			success: function(response) {
				console.log(response);
				
				response.data.forEach(function(photo){
				var pLatLng, pMarker, pInfoWindow, pUrl;
					pLatLng = new google.maps.LatLng(
						photo.location.latitude,
						photo.location.longitude
					);
					pMarker = new google.maps.Marker({
						position: pLatLng,
						map: map,
					});
					pUrl = photo.images.low_resolution.url;
					title = photo.location.name;
					pInfoWindow = new google.maps.InfoWindow({
						content: '<img src="' + pUrl + '"/>' +
						'<h3>' + title + '</h3>' 
					});

			google.maps.event.addListener(pMarker, 'click', function(){
				if (openInfoWindow) openInfoWindow.close();
				openInfoWindow = pInfoWindow;
				pInfoWindow.open(map, pMarker);		
		});
	});

				
			},

		})

});

