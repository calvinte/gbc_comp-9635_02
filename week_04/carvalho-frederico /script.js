
//console.log(google);
google.maps.event.addDomListener(window, 'load', function(){
	
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
		
		var image = 'images/newone.jpg';
		var map_canvas = document.getElementById('map-canvas');
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var myLatLng = new google.maps.LatLng (43.653607,-79.392512)
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 18,
			center: myLatLng,

		});

		new google.maps.Marker({
			position: new google.maps.LatLng(43.653607,-79.392512),
			map: myMap,
			icon: image
		});
	});
});


google.maps.event.addDomListener(window, 'load', function(){
	
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
		
		var image = 'images/newone1.jpg';
		var map_canvas = document.getElementById('map1-canvas');
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var myLatLng = new google.maps.LatLng (43.66771,-79.394777)
		var myMap = new google.maps.Map(map_canvas, {
			zoom: 18,
			center: myLatLng,

		});

		new google.maps.Marker({
			position: new google.maps.LatLng(43.66771,-79.394777),
			map: myMap,
			icon: image
		
		});
	});
});