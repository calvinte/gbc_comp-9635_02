$(document).ready(function() {
		
	var latLng = new google.maps.LatLng('43.653671', '-79.382894');

	var opts = {
		center: latLng,
		zoom:18
	}

	var infoWindow;

	var items = [
		{
			Lat: '43.653283',
			Long: '-79.385104',
			Name: '<h2>Toronto City Hall</h2>',
			Image: '<img src="http://turismo.culturamix.com/blog/wp-content/gallery/toronto-city-hall/toronto-city-hall-9.jpg"',
			Desc: '<p>The Toronto City Hall or New City Hall is the home of the municipal government of Toronto, Ontario, Canada, and one of the city\'s most distinctive landmarks.</p>'
		},

		{
			Lat: '43.652305',
			Long: '-79.383388',
			Name: '<h2>Nathan Phillips Square</h2>',
			Image: '<img src="http://upload.wikimedia.org/wikipedia/commons/3/3f/Nathan_Phillips_Square_from_above.jpg"',
			Desc: '<p>Nathan Phillips Square is an urban plaza in Toronto, Canada. It forms the forecourt to Toronto City Hall, or New City Hall, at the intersection of Queen Street West and Bay Street</p>'
		},

		{
			Lat: '43.654417',
			Long: '-79.380405',
			Name: '<h2>Toronto Eaton Centre</h2>',
			Image: '<img src="http://media-cdn.tripadvisor.com/media/photo-s/01/c6/74/8e/toronto-eaton-centre.jpg"',
			Desc: '<p>The Toronto Eaton Centre is a shopping mall and office complex in downtown Toronto, Ontario, Canada, named after the now-defunct Eaton\'s department store chain that once anchored it.</p>'
		},

		{
			Lat: '43.655038',
			Long: '-79.379718',
			Name: '<h2>Ed Mirvish Theatre</h2>',
			Image: '<img src="http://toronto.ctvnews.ca/polopoly_fs/1.977458!/httpImage/image.jpeg_gen/derivatives/landscape_960/image.jpeg"',
			Desc: '<p>The Ed Mirvish Theatre is a historic film and play theatre in Downtown Toronto, Ontario, Canada. It was initially known as the Pantages Theatre, then became the Imperial Theatre and later the Canon Theatre, before it was renamed in honour of Ed Mirvish, a popular businessman and theatre impresario.</p>'
		},

		{
			Lat: '43.653848',
			Long: '-79.379214',
			Name: '<h2>Massey Hall</h2>',
			Image: '<img src="http://www.blogto.com/upload/2013/06/20130622-Massey-Interior-90s.jpg"',
			Desc: '<p>Massey Hall is a performing arts theatre in the Garden District of downtown Toronto. The theatre originally was designed to seat 3,500 patrons, but after extensive renovations in the 1940s it now seats up to 2,765.</p>'
		}
	]

	var map = new google.maps.Map($('#map')[0], opts)

	items.forEach(function (item) {

		// Alt. Method for Looping

		// for(var item in items){
		// 	alert(items[items].Name);
		// }
		
		var markerPT = new google.maps.LatLng(item.Lat, item.Long);
		
		var marker = new google.maps.Marker({position: markerPT, map: map});

		

		google.maps.event.addListener(marker, 'click', function(){

			if(infoWindow)
			infoWindow.close();

			infoWindow = new google.maps.InfoWindow({content: item.Name + item.Image + item.Desc, width: 2000});

			map.setCenter(marker.position);

			map.setZoom(18);

			infoWindow.open(map, marker);
		});
	});
});	