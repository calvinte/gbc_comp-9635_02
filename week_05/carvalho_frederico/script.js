$(function () {
	var items = [
	{
		Lat:'43.642566',
		Long:'-79.387057',
		Name:'<h2>CN Tower</h2>',
		Image:'<img src = "img/cn.jpg">',
		Desc:'<p>A Place to See From the Top</p>'
	},

	{
		Lat:'43.667710',
		Long:'-79.394777',
		Name:'<h2>Royal Museum Ontario</h2>',
		Image:'<img src = "img/rom.jpg">',
		Desc:'<p>A Place to Watch</p>'
	},

	{
		Lat:'43.646548',
		Long:'-79.463690',
		Name:'<h2>High Park</h2>',
		Image:'<img src = "img/hp.jpg">',
		Desc:'<p>A Place to Relax</p>'
	},

	{
		Lat:'43.817699',
		Long:'-79.185890',
		Name:'<h2>Toronto Zoo</h2>',
		Image:'<img src = "img/zoo.jpg">',
		Desc:'<p>A Place to Discover</p>'
	},

	{
		Lat:'43.660008',
		Long:'-79.305775',
		Name:'<h2>The Beaches Toronto</h2>',
		Image:'<img src = "img/beaches.jpg">',
		Desc:'<p>A Place to Have Fun</p>'
	}

	];


	var latLng = new google.maps.LatLng('43.653226','-79.383184');
	var options = {
		center: latLng,
		zoom:9
	}

	
	var map = new google.maps.Map($("#map")[0],options);



	items.forEach(function(item){

		var markerPt = new google.maps.LatLng(item.Lat, item.Long);
		var marker = new google.maps.Marker({position:markerPt, map: map, icon:'img/icones.png'});
		var infoWindow = new google.maps.InfoWindow({content:item.Name + item.Image + item.Desc });
		google.maps.event.addListener(marker,'click',function(){
			map.setCenter(marker.position);
			map.setZoom(12);
			infoWindow.open(map,marker);
		});
	});



});