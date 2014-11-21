var user_id = 350817045;
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
}

function drawPhotos(response){
	next_url = response.pagination.next_url;
	for(var i=0; i < response.data.length; i++){
		var src = response.data[i].images.thumbnail.url;
		$('<div class="image-container"><div class="placeholder"></div><img src="blank-polaroid-frame.jpg" alt="polaroid"></div>').appendTo('section');
		$('.placeholder').append('<img src= "' + src + '">');
	
	}
	loading = false;
}

$(document).ready(function() {
	
	getNextPage();
	$('#next-page').click(function() {
		getNextPage();
	});
});

$(window).scroll(function(scrollEvent) {
	
	var scrollDistance = document.body.scrollTop + window.innerHeight;
	var scrollTarget = $('#insta-photos').height() - window.innerHeight;

	if (scrollDistance > scrollTarget) {
		getNextPage();
	}
});

