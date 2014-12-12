// console.log(jQuery);
// console.log(google);

$(document).ready(function(){
	var mapElement = $('#google-map')[0];
	var lat = 51.5322;
	var lng = - 0.1567;
	var url = 'https://api.instagram.com/v1/media/search'
				+ '?lat=' + lat
				+ '&lng=' + lng
				+ '&distance=500'
				+ '&client_id=585d00be2af34a26b0e1caa6995cf19f'
	var openInfoWindow;			
	

	var map = new google.maps.Map(mapElement, {
		zoom: 16,
		center: new google.maps.LatLng(lat, lng)


	})





	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: url, 
		success: function(response) {
	
			response.data.forEach(function(photo){

				var pLatLng, pMarker, pInfoWindow, src;
			
				pLatLng = new google.maps.LatLng(
					photo.location.latitude,
					photo.location.longitude
				);
				pMarker = new google.maps.Marker({
					position: pLatLng,
					map: map,
				});

				src = photo.images.low_resolution.url;
				pInfoWindow = new google.maps.InfoWindow({content: '<img src="' + src  + '">'});
				
				google.maps.event.addListener(pMarker, 'click', function(){
					if (openInfoWindow) openInfoWindow.close();
					openInfoWindow = pInfoWindow;
					pInfoWindow.open(map, pMarker);
					// map.setCenter(pMarker.position);
					// map.setZoom(16);
				});	

			});	

		},

	});			


});

