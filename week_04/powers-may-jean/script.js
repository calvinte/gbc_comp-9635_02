console.log(google);
// Same as $(document).ready() in Javascript
google.maps.event.addDomListener(window, 'load', function() {

	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
			// Same as $('#map-canvas').
			var map_canvas = document.getElementById('map-canvas');
			// var lat = position.coords.latitude;
			// var lng = position.coords.longitude;
			var lat = 43.841968;
			var lng = -79.026505;
			var myLatLong = new google.maps.LatLng(lat, lng);
			var myMap = new google.maps.Map(map_canvas, {
				zoom: 17,
				center: myLatLong,
			});
			new google.maps.Marker({
				position: myLatLong,
				map: myMap,
			});
	});
});