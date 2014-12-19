$(document).ready(function() {
				var openInfoWindow;
				var map = new google.maps.Map($('#map-canvas')[0], {
					zoom: 17,
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
						animation: google.maps.Animation.BOUNCE
					});
					
					$.ajax({
						type: 'GET',
						dataType: 'jsonp',
						url: 'https://api.instagram.com/v1/media/search'
							+ '?distance=300'
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
									icon: {url: 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-xpa1/t39.2365-6/851582_417171855069447_55288290_n.png',
									size: new google.maps.Size(32, 32),
    								origin: new google.maps.Point(0, 0),
								    anchor: new google.maps.Point(16, 16),
								    scaledSize: new google.maps.Size(32, 32)
								},
									map: map,
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
										+ '<br>' + media.caption.text 
										+ '</a>'
										+ '</div>'
										,
								});
								google.maps.event.addListener(marker, 'click', function() {
									if (openInfoWindow) openInfoWindow.close();
									openInfoWindow = infowindow;
									infowindow.open(map, marker);
								});
								
							});
						},
					});
				}
				
});
			
		