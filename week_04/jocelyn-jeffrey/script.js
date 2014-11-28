console.log(google)
//same as $(document).raedy() in jquery but provided for us by google maps
google.maps.event.addDomListener(window, 'load', function(){
	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);

		//same as $('#map-canvas'). stc.
		var map_canvas = document.getElementById('map-canvas');
		var lat= 43.674271;
		var lng = -79.38822;
		var myLatLng = new google.maps.LatLng(43.674271,-79.38822);
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 15,
			center: myLatLng, 
		});
	
		new google.maps.Marker({
			position: myLatLng,
			map: myMap,
		})
	});

});