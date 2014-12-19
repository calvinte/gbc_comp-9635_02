console.log(jQuery);
console.log(google);

$(document).ready(function() {
	var mapElement = $('#google-map')[0];
	var lat = 51.5072;
	var lng = -0.1275;
	var url = 'https://api.instagram.com/v1/media/search'
		+ '?lat=' + lat
		+ '&lng=' + lng
		+ '&distance=500'
		+ '&client_id=585d00be2af34a26b0e1caa6995cf19f'; //Calvin's User ID (this should me mine)
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
			response.data.forEach(function(photo) {
				var pLatLng, pMarker, pInfoWindow, pUrl;
				pLatLng = new google.maps.LatLng(
					photo.location.latitude,
					photo.location.longitude
					);
				console.log(response);

				pMarker =  new google.maps.Marker({
					position: pLatLng,
					map: map,
				});
				pUrl = photo.images.low_resolution.url;
				pName = photo.location.name;
				pUser = photo.user.username;
				pInfoWindow = new google.maps.InfoWindow({
					content: '<h2>' + pName + '</h2>' + '<br>' + '<img src="' + pUrl + '" />' + '<br>' + '<h3>' + pUser + '</h3>',
				});
				google.maps.event.addListener(pMarker, 'mouseover', function(){
					if (openInfoWindow) openInfoWindow.close();
					openInfoWindow = pInfoWindow;
					pInfoWindow.open(map, pMarker);
				});
			});
		},
	});
});
