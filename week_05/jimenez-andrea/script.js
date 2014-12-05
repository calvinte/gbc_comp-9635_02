console.log('hello');

$(document).ready(function(){

	var latLng = new google.maps.LatLng('43.653226', '-79.383184');
	var option = {
		center: latLng, 
		zoom: 15
	}

	var map = new google.maps.Map($('#map')[0], option);


	var items = [
		// {
		// 	Lat: '43.642566',
		// 	Long: '-79.387057',
		// 	Name: '<h2>CN Tower</h2>',
		// 	Desc: '<p>The CN Tower is...</p>',
		// 	Image: '<img src="">'
		// },

		// {
		// 	Lat: '43.676433',
		// 	Long: '-79.410127',
		// 	Name: '<h2>George Brown</h2>',
		// 	Desc: '<p>George Brown College is...</p>',
		// 	// Image: '<img src="">'
		// }

		{
			Lat: '43.648671',
			Long: '-79.373989',
			Name: '<h2>Flat Iron Building</h2>',
			Desc: '<p>The Gooderham Building is the focal point of one of Torontos most iconic vistas: looking west down Front Street towards the buildings prominent rounded corner, framed on the sides by the heritage commercial blocks along Front Street, and with the skyscrapers of the Financial District towering in the background.</p>',
			Image: '<img src="flatIron.jpg" width = "250" height="333" alt="">'
			// Image: '<img src="">'
		},

		{
			Lat: '43.650781',
			Long: '-79.372986',
			Name: '<h2>St. James Park</h2>',
			Desc: '<p>St. James Cathedral is the majestic backdrop for this site. Planned as a formal garden, there are many wedding parties taking advantage of the beautiful garden displays in the heart of downtown.</p>',
			Image: '<img src="jamesPark.jpg" alt="">'
		},

		{
			Lat: '43.648398',
			Long: '-79.373292',
			Name: "<h2>C'est What</h2>",
			Desc: "<p>C'est What is Toronto's cultural ambassador offering a diverse menu of comfort food made from scratch with real honest ingredients alongside an unsurpassed selection of local craft beer, wine, and original music. We are Toronto's 'local'.</p>",
			Image: '<img src="bar.jpg" alt="">'
		},

		{
			Lat: '43.649555',
			Long: '-79.371876',
			Name: '<h2>St. Lawrence Market</h2>',
			Desc: "<p>St. Lawrence Market is one of two major markets in Toronto, the other being Kensington Market. It was named the world's It features two buildings, both on the west side of Front St. East and Jarvis St. Each building holds different purposes: St. Lawrence Market North, on the north side of Front St, hosts weekly farmer's markets and antique markets. St. Lawrence Market South, on the south side of Front St, hosts restaurants, the St. Lawrence Market Gallery, and a variety of areas to shop for food, such as delis and bakeries, as well as meat shops.</p>",
			Image: '<img src="market.jpg"  height="333" alt="">'
		},

		{
			Lat: '43.650365',
			Long: '-79.374043',
			Name: '<h2>St. James Cathedral</h2>',
			Desc: '<p>Cathedral Church of St. James in Toronto, Ontario, Canada is the home of the oldest congregation in the city. The parish was established in 1797. </p>',
			Image: '<img src="church.jpeg" width = "250" height="333" alt="">'
		}

	]


	//or do a for loop: 
	// for (var item in items){
	// 	alert(items[item].Name);
	// }




	items.forEach(function(item){
		var markerPt = new google.maps.LatLng(item.Lat, item.Long);
		var marker = new google.maps.Marker({position:markerPt, map: map});
		var infoWindow = new google.maps.InfoWindow({content: item.Name + item.Desc + item.Image});

		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(map, marker);
			map.setCenter(marker.position);
			map.setZoom(18);
			
		});

	});

});

