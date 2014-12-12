console.log(jQuery);
console.log(google);
$(document).ready(function(){
	var mapElement= $('#google-map')[0];
	var lat = 40.7615;
	var lng = -73.9777;
	var url = 'https://api.instagram.com/v1/media/search' 
			+ '?lat=' + lat
			+ '&lng=' + lng
			+ '&distance=150'
			+ '&client_id=585d00be2af34a26b0e1caa6995cf19f';
	var openInfoWindow;
			var map = new google.maps.Map(mapElement, {
				zoom: 16,
				center: new google.maps.LatLng(lat,lng),
	})

	$.ajax({
		type:'GET',
		dataType: 'jsonp',
		url: url,
		success: function(response){
			console.log(response);
			response.data.forEach(function(photo){
				var pLatLng, pMarker, pTitle, pThumb, infowindow;
				pThumb=photo.images.low_resolution.url;
				pLink = photo.link;
				pLatLng = new google.maps.LatLng(
						photo.location.latitude,
						photo.location.longitude
					);
				pMarker = new google.maps.Marker({
					position: pLatLng,
					map: map
				});
				infowindow = new google.maps.InfoWindow({
					content: '<a href="' + pLink + '"><img src="' + pThumb + '"></a>' });
				google.maps.event.addListener(pMarker, 'click', function() {
					if (openInfoWindow) openInfoWindow.close();
					openInfoWindow = infowindow;
					infowindow.open(map, pMarker);
				});
				console.log(photo.location);
			})
				
		}
});

});
