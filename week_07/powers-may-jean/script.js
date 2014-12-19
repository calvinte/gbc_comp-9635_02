$(document).ready(function() {
	var openInfoWindow;
	var map = new google.maps.Map($('#map-canvas')[0], {
		zoom: 17
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
		map.setCenter(latlng);
		new google.maps.Marker({
			position: latlng,
			map: map,
			animation: google.maps.Animation.BOUNCE,
			icon: 'pink-pin.png'
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
					var latlng = new google.maps.LatLng(
						media.location.latitude,
						media.location.longitude
					);
					var marker = new google.maps.Marker({
						position: latlng,
						map: map,
						icon: 'Map-Marker-Bubble-Pink-icon.png'
					});
					var infowindow = new google.maps.InfoWindow({
						content: ''
							+ '<div class="insta-photo">'
							+ '<a target="_blank" href="' + media.link + '">'
							+ '<img src="' + media.images.low_resolution.url + '">'
							+ '</a>'
							+ '</div>'
							+ '<div class="user-info">'
							+ '<a target="_blank" href="http://instagram.com/' + media.user.username + '">'
							+ '<span class="name">' + media.user.full_name + '</span>'
							+ '<img class="picture" src="' + media.user.profile_picture + '">'
							+ '</a>'
							+ '<p>' + media.caption.text + '</p>'
							+ '<h3>' + "Likes: " + media.likes.count + '</h3>'
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
	
});