//var user_id=232192182; //The Rock's ID
var user_id=212411488; //Breaking Bad's ID
var next_url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f'; //Calvin's User ID (this should me mine)
var loading = false;

function getNextPage(){
	if (loading) return;
	loading = true;
	$.ajax({
		type: 'GET',
		dataType: 'jsonp',
		url: next_url,
		success: getPhotos,
	});

	function getPhotos (response){
		console.log(response);
		next_url = response.pagination.next_url;
		for (var i = 0; i < response.data.length; i++) {
			var src = response.data[i].images.thumbnail.url;
			$('#insta-photos').append('<img src="' + src + '">');
		}
		loading = false;
	}
}

$(document).ready(function(){
	getNextPage();
	$('#next-page').click(function(){
		getNextPage();
		console.log('ouch! why\'d you do that?');
	});
});

$(window).scroll(function(scrollEvent){
	var scrollDistance = document.body.scrollTop + window.innerHeight;
	var scrollTarget = $('#insta-photos').height() - window.innerHeight;

	if (scrollDistance > scrollTarget ) {
		getNextPage();
	}
	console.log('scrollEvent');
	console.log(document.body.scrollTop);
	console.log(window.innerHeight);
//	console.log($('#insta-photos').height();
});