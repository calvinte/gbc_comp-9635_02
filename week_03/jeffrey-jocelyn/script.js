var user_id = 1037233700;
var next_url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
var loading = false;

function getNextPage(){
	if (loading) return;
	loading = true;
	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: next_url,
		success: drawPhotos,
	});

	function drawPhotos(response){
		console.log(response);
		next_url = response.pagination.next_url;
		for (var i = 0; i < response.data.length; i++){
			var src = response.data[i].images.thumbnail.url;
			$('#insta-photos').append('<img src="' + src + '">');
		}
		loading=false;
	}
}

$(document).ready(function(){
	getNextPage();
	$('#next-page').click(function(){
		getNextPage();
	});

	$('body').scrollToTop({
	distance: 200,
	speed: 1000,
	easing: 'linear',
	animation: 'fade', // fade, slide, none
	animationSpeed: 500,
	 
	mobile: {
	    width: 768,
	    distance: 100,
	    speed: 1000,
	    easing: 'easeInOutElastic',
	    animation: 'slide',
	    animationSpeed: 200
	},
	 
	trigger: null, // Set a custom triggering element. Can be an HTML string or jQuery object
	target: null, // Set a custom target element for <a href="http://www.jqueryscript.net/tags.php?/Scroll/">scrolling</a> to. Can be element or number
	text: 'Scroll To Top', // Text for element, can contain HTML
	 
	skin: null,
	throttle: 250,
	 
	namespace: 'scrollToTop'
	});


});

$(window).scroll(function(scrollEvent){
	var scrollDistance = document.body.scrollTop + window.innerHeight;
	var scrollTarget = $('#insta-photos').height() - window.innerHeight;

	if (scrollDistance > scrollTarget) { 
		getNextPage();
	}

});