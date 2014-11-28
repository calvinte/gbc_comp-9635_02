$(document).ready(function(){

console.log(google)

google.maps.event.addDomListener(window, 'load', function(){
	
		navigator.geolocation.getCurrentPosition(function (position) {
		console.log(position);

		//same as $('#map-canvas')
		var map_canvas = document.getElementById('map-canvas');
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var myLatLng = new google.maps.LatLng(lat, lng)
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 11,
			center: myLatLng,
		});
		new google.maps.Marker({
			position: new google.maps.LatLng(43.6733422, -79.4974157),
			map: myMap,
		})
		new google.maps.Marker({
			position: myLatLng,
			map: myMap,
		})
	});
});

$('#map-canvas').hover(function(){
	$('#map-canvas').animate({
		width: '900px',
		height: '580px',
		});
	},
	function(){
		$('#map-canvas').animate({
		width: '600px',
		height: '400px',
		});
	});
});
