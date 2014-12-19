$(document).ready(function() {
	var openInfoWindow;
	var map = new google.maps.Map($('#map-canvas')[0], {
		zoom: 18,
	});
	
	google.maps.event.addListener(map, 'click', function(event) {
		searchPhotos(event.latLng);
	});
	
	navigator.geolocation.getCurrentPosition(function(position) {
		var latlng = new google.maps.LatLng(
			position.coords.latitude,
			position.coords.longitude
		);
		searchPhotos(latlng);
	});
	
	function searchPhotos(latlng) {

		var triforce = 'Triforce.png'

		map.setCenter(latlng);
		new google.maps.Marker({
			position: latlng,
			map: map,
			icon: triforce,
			animation: google.maps.Animation.BOUNCE
		});
		
		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: 'https://api.instagram.com/v1/media/search'
				+ '?distance=100'
				+ '&lat=' + latlng.lat()
				+ '&lng=' + latlng.lng()
				+ '&client_id=585d00be2af34a26b0e1caa6995cf19f',
			success: function(response) {
				console.log(response);
				response.data.forEach(function(media) {
					var rupee = 'Rupee.png'
					var latlng = new google.maps.LatLng(
						media.location.latitude,
						media.location.longitude
					);
					var marker = new google.maps.Marker({
						position: latlng,
						map: map,
						icon: rupee,
					});
					var infowindow = new google.maps.InfoWindow({
						content: ''
							+ '<div class="instagram_image">'
							+ '<a target="_blank" href="' + media.link + '">'
							+ '<img src="' + media.images.low_resolution.url + '">'
							+ '</a>'
							+ '</div>'
							+ '<div class="user-info">'
							+ '<a target="_blank" href="http://instagram.com/' + media.user.username + '">'
							+ '<span class="name">' + media.user.full_name + '</span>'
							+ '<img class="picture" src="' + media.user.profile_picture + '">'
							+ '<span class="triangle-1"></span>'
							+ '<span class="triangle-2"></span>'
							+ '<span class="triangle-3"></span>'
							+ '</a>'
							+ '</div>'
							,
					});
					google.maps.event.addListener(marker, 'mouseover', function() {
						if (openInfoWindow) openInfoWindow.close();
						openInfoWindow = infowindow;
						infowindow.open(map, marker);
					});
					
				});
			},
		});
	}

	map.set('styles', [
	  {
	    featureType: 'road',
	    elementType: 'geometry',
	    stylers: [
	      { color: 'rgb(243,205,138)' },
	      { weight: 2 }
	    ]
	  }, {
	    featureType: 'landscape',
	    elementType: 'geometry',
	    stylers: [
	      { color: '#003800' },
	      { gamma: 1.0 },
	      { saturation: 10 },
	      { lightness: 15 }
	    ]
	  }, 
	]);	
});