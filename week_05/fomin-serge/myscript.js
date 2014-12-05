$(document).ready(function(){
	var latLng = new google.maps.LatLng('43.653226', '-79.383184');
	var options = {
		center: latLng,
		zoom: 11
	}

	var infoWindow;
	

	var map = new google.maps.Map($('#map')[0], options);
		

	var items = [
		{
			Lat: '43.669494',
			Long: '-79.389802',

			Name: '<h2>Harry Rosen, Central Office</h2>',
			Desc: "<p>Harry Rosen's Central Office is located at 77 Bloor Street West, Toronto, ON M5S 2B4</p>",
			Image: '<img src="http://www.ledcor.com/getmedia/1c42dc5a-7921-40e9-b16c-651d64739683/CON-Toronto-ON-Morguard-77Bloor-Street-West-(COMM_414)_1449-2_CC.jpg.aspx?width=960&height=600&ext=.jpg&maxsidesize=960"></img>'
		},
		{
			Lat: '43.669553',
			Long: '-79.390310',
			Name: '<h2>Harry Rosen, Flagship store on Bloor Street</h2>',
			Desc: "<p>Harry Rosen's Flagship store is located at 82 Bloor Street West. Toronto, ON. M5S 1L9</p>",
			Image: '<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/82_BloorStreet_West.jpg/220px-82_BloorStreet_West.jpg"></img>'
			
		},
		{
			Lat: '43.727537',
			Long: '-79.457692',
			Name: '<h2>Harry Rosen, Flagship store at Yorkdale Mall</h2>',
			Desc: "<p>Harry Rosen's Flagship store at Yorkdale Mall is located at 3401 Dufferin St, Toronto, ON M6A 2T9</p>",
			Image: '<img src="http://eventscape.net/images/ed_imageresizer_cache/b243544e7d295edc10fb8bd86e76b668c2a3792a.jpg"></img>'
		},
		{
			Lat: '43.592873',
			Long: '-79.642984',
			Name: '<h2>Harry Rosen, store at Square One Mall, Mississauga</h2>',
			Desc: "<p>Harry Rosen's store at Square One Mall is located at 100 City Centre Dr, Mississauga, ON L5B 2C9</p>",
			Image: '<img src="http://wpmedia.business.financialpost.com/2013/08/harry_rosen_carrefour_laval_opening.jpg?w=620"></img>'
		},
		{
			Lat: '43.612391',
			Long: '-79.557658',
			Name: '<h2>Harry Rosen, store at Sherway Gardens</h2>',
			Desc: "<p>Harry Rosen's store at Sherway Gardens is located at 25 The West Mall, Toronto, ON M9C 1B8</p>",
			Image: '<img src="http://www.harryrosen.com/medias/sys_master/he9/h24/8845794770974.jpg"></img>'
		},
		{
			Lat: '43.653537',
			Long: '-79.379973',
			Name: '<h2>Harry Rosen, store at Eaton Centre</h2>',
			Desc: "<p>Harry Rosen's store at Eaton Centre is located at 218  Yonge Street Toronto, ON M5B 2H6</p>",
			Image: '<img src="http://wss.wholesite.com/lTYzJQcS3/CF5lnDKl4/www.toromagazine.com-Harry-Rosen_Opening.jpg"></img>'
		}
	]

		/* Code for EI and older browsers
		for (var item in items) {
			alert(items[item].Name)
		}*/

	items.forEach(function (item) {
		var markerPt = new google.maps.LatLng(item.Lat,item.Long);
		var marker = new google.maps.Marker({position:markerPt, map:map});
		
		

		google.maps.event.addListener(marker,'click',function(){

			if (infoWindow)
				infoWindow.close();
				

			infoWindow = new google.maps.InfoWindow({content: item.Name + item.Desc + item.Image});

			infoWindow.open(map,marker);
			map.setCenter(marker.position),
			map.setZoom(12);
			
		});

		google.maps.event.addListener(marker,'mouseover',function(){
			
			if (infoWindow)
				infoWindow.close();
				

			infoWindow = new google.maps.InfoWindow({content: item.Name})

			infoWindow.open(map,marker);
		});


	});

});
