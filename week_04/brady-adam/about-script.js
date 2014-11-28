/*Hey Calvin, thanks for your help getting the directions to work. Now, if I was doing something like this for a real client, and we were trying to write clean code, I would try to find a way to write both the origin and destination maps as one function, passing the coordinates as variables, right? How would this look if written by a real developer?*/
console.log(google)
google.maps.event.addDomListener(window, 'load', function(){
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
	var pizza_canvas = document.getElementById('pizza-map');
	var pizzaLat = 43.657626;
	var pizzaLng = -79.401439;
	var pizzaLatLng = new google.maps.LatLng(pizzaLat,pizzaLng);
	var pizzaMap = new google.maps.Map(pizza_canvas,{
														zoom: 17,
														center: pizzaLatLng,
													});
		new google.maps.Marker({
								position: pizzaLatLng,
								map: pizzaMap,
							});

	
	var user_canvas = document.getElementById('user-map');
	var userLat = position.coords.latitude;
	var userLng = position.coords.longitude;
	var userLatLng = new google.maps.LatLng(userLat,userLng);
	var userMap = new google.maps.Map(user_canvas,{
													zoom: 17,
													center: userLatLng,
												});
		new google.maps.Marker({
								position: userLatLng,
								map: userMap,
							});
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
/*var haight = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);*/
var ashbury = new google.maps.LatLng(pizzaLatLng);
var map = new google.maps.Map(document.getElementById("directions-map"), {
	zoom: 14,
	center: userLatLng
});

directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map);
calcRoute()

function calcRoute() {
  var request = {
      origin: userLatLng,
      destination: pizzaLatLng,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
};
});
});