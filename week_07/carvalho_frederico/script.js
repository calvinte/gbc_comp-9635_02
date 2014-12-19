$(document).ready(function() {
                var openInfoWindow;
                var map = new google.maps.Map($('#map-canvas') [0], {
                    zoom:17,
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
                        + '?distance=200'
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
                                
                                
                                var latlng = new google.maps.LatLng (
                                    media.location.latitude,
                                    media.location.longitude
                                );
                                
                                var image = new google.maps.MarkerImage("img/images.jpg", null, null, null, new google.maps.Size(40, 40));
                                var marker = new google.maps.Marker({
                                    position: latlng,
                                    map: map,
                                    icon:image, 
                                });
                                var infowindow = new google.maps.InfoWindow({
                                    content: ''
                                
                                        +'<div class= "insta-photo">' 
                                        + '<a target="_blank" href="'+ media.link +'">'
                                        + '<img src="'+ media.images.standard_resolution.url +'">'
                                        + '</a>'
                                        + '</div>'
                                        + '<div class="user-info">'
                                        + '<br>' + media.user.full_name
                                        + ' - ' + media.user.username
                                        + ' - ' + media.location.name
                                        + ' - ' + media.user.id
                                        + '</div>'
                                        + '<img class="picture" src="' + media.user.profile_picture + '">'
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

