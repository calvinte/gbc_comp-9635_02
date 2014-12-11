	$(function (){
		var latLng = new google.maps.LatLng('18.466334', '-66.105722');
		var options = {
			center: latLng,
			zoom: 14
		}
		var infoWindow;
		var items = [
		{
			Lat: '18.466667',
			Long: '-66.108056',
			Name: '<h2>Old San Juan</h2>',
			Image:'<img src="http://media-cdn.tripadvisor.com/media/photo-s/01/64/bd/19/old-san-juan.jpg"></src>',
			Desc: '<p>Old San Juan is the oldest settlement within Puerto Rico and is the historic colonial section of San Juan, Puerto Rico.<p>'
		},
		{
			Lat: '18.465627',
			Long: '-66.118002',
			Name: '<h2>Cathedral of San Juan Bautista</h2>',
			Image:'<img src="http://media-cdn.tripadvisor.com/media/photo-s/00/11/e4/52/san-juan-cathedral-on.jpg"></src>',
			Desc: '<p>The Cathedral of San Juan Bautista is the Roman Catholic cathedral of the Archdiocese of San Juan de Puerto Rico. The cathedral is one of the oldest buildings in San Juan, located in Old San Juan, and is the second oldest cathedral in the Americas.<p>'
		},
		{
			Lat: '18.466334',
			Long: '-66.105722',
			Name: '<h2>San Juan National Historic Site</h2>',
			Image:'<img src="http://media-cdn.tripadvisor.com/media/photo-s/05/44/07/68/san-juan-national-historic.jpg"></src>',
			Desc: '<p>San Juan National Historic Site in the Old San Juan section of San Juan, Puerto Rico, is a National Park Service-managed historic site which protects and interprets colonial-era forts such as Castillo San Felipe del Morro, bastions, powder houses, and three fourths of the old city wall.<p>'
		},
		{
			Lat: '18.470935',
			Long: '-66.123506',
			Name: '<h2>Castillo San Felipe del Morro</h2>',
			Image:'<img src="http://www.carols-cruise-port-itineraries.com/PR-FortElMorro.jpg"></src>',
			Desc: '<p>Castillo San Felipe del Morro also known as Fort San Felipe del Morro or Morro Castle, is a 16th-century citadel located in San Juan, Puerto Rico.<p>'
		},
		{
			Lat: '18.459945',
			Long: '-66.077944',
			Name: '<h2>Condado Beach</h2>',
			Image:'<img src="http://media-cdn.tripadvisor.com/media/photo-s/00/11/12/4e/condado-beach.jpg"></src>',
			Desc: '<p>Condado Bridge Beach is a beach effervescence located at the end of Ashford Avenue in Condado, Puerto Rico.<p>'
		}

		];

		var map = new google.maps.Map($("#map")[0], options);

		// Code for looping through and is readable with older browsers
		// for (var item in items){
		// 	alert(items[item].Name);
		// }

		items.forEach(function(item) {

			var markerPt = new google.maps.LatLng(item.Lat, item.Long);

			var marker = new google.maps.Marker({position:markerPt, map: map });

			google.maps.event.addListener(marker, 'mouseover', function(){

				if (infoWindow)
					infoWindow.close();

				infoWindow = new google.maps.InfoWindow({ content: item.Name + item.Image + item.Desc });

				infoWindow.open(map, marker);

				map.setCenter(marker.position);

				map.setZoom(15);



			});

		});
	});
