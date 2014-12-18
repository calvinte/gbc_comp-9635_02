console.log('hello');
			$(document).ready(function() {
				var openInfoWindow;
				var map = new google.maps.Map($('#google-map')[0], {
					zoom: 15,
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
						animation: google.maps.Animation.DROP,
						icon: 'purple-pin.png'
						
					});
					
					$.ajax({
						type: 'GET',
						dataType: 'jsonp',
						url: 'https://api.instagram.com/v1/media/search'
							+ '?distance=500'
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
									icon: 'red-pin.png'

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
										+ '<span class = "liked">' + media.likes.count + '</span>' + '<img class = "likes-icon" src = "likes-icon.png"/>'
										+ '</a>'
										+ '</div>'
										,
								});
								google.maps.event.addListener(marker, 'click', function() {
									if (openInfoWindow) openInfoWindow.close();
									openInfoWindow = infowindow;
									infowindow.open(map, marker);


									if (marker.getAnimation() != null) {
    									marker.setAnimation(null);
 									} else {
    									marker.setAnimation(google.maps.Animation.BOUNCE);
    								}
								});
								
							});
						},
					});
				}
				
			});




//https://developers.google.com/maps/documentation/javascript/examples/marker-animations try! 