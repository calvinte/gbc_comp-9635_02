//console.log(jQuery);
//console.log(google);

$(document).ready(function(){

	var mapElement = $('#google-map')[0];
	var lat = 32.7150;
	var lng = -117.1625;
	var url = 'https://api.instagram.com/v1/media/search'
	+ '?lat=' + lat
	+ '&lng=' + lng
	+ '&distance=500'
	+ '&client_id=585d00be2af34a26b0e1caa6995cf19f'
	
	var map = new google.maps.Map(mapElement, {
		zoom: 16,
		center: new google.maps.LatLng(lat,lng),
	})

	var infoWindow;

	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: url,
		success: function(response){
			console.log(response);
			response.data.forEach(function(photo){
				var pLatLng, pMarker, pUser, pFilter, pCaption;
				
				pLatLng = new google.maps.LatLng(
					photo.location.latitude,
					photo.location.longitude
				);
				
				pMarker = new google.maps.Marker({
					position: pLatLng,
					map: map,
				})
				
				google.maps.event.addListener(pMarker, 'click', function(){
					pUser = photo.user.full_name;
					pFilter = photo.filter;
					pCaption = photo.caption.text;

					if(infoWindow){
						infoWindow.close();
					}

					infoWindow = new google.maps.InfoWindow({
						content: 						
						'<img src="' + photo.images.standard_resolution.url + '"/>' +
						'<div><h4>Uploaded By: </h4>' + pUser + '</div>' +
						'<div><h4>Filter Used: </h4>' + pFilter + '</div>' +
						'<div><h4>Description: </h4>' + pCaption + '</div>'  
					});

					map.setCenter(pMarker.position);

					map.setZoom(18);

					infoWindow.open(map, pMarker);
				});				
				//console.log(photo.location);
			})
		},
	})

	
});