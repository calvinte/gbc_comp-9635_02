var userId = 295980048;
var nextUrl = 'https://api.instagram.com/v1/users/' + userId + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
var loading = false;

function getNextPage(){
	if (loading) return;
	loading = true;
$.ajax({
	type:'GET',
	dataType: 'jsonp',
	url: nextUrl,
	success: getPhotos,
});
}

function getPhotos(response){
console.log(response);
nextUrl = response.pagination.next_url;
for (var i = 0; i < response.data.length; i++) {
	var src=response.data[i].images.thumbnail.url;
	var orig=response.data[i].link;
	var title=response.data[i].caption.text;
	var filter=response.data[i].filter;
	$('#insta-photos').append('<a href="' + orig + '"><img class="insta-pic" title="' + title + '" src="' + src + '"></a>');
	}
	/*$('#filters').append('<p>' + filter + '</p>')*/
	loading = false;
}

$(document).ready(function(){
	getNextPage();
$('#next-page').click(function(){
	getNextPage();
	console.log('ouch! why\'d you do that');
});
});
$(window).scroll(function(scrollEvent){
	var scrollDistance = document.body.scrollTop + window.innerHeight;
	var scrollTarget = $('#insta-photos').height() - window.innerHeight;

	if (scrollDistance > scrollTarget) {
		getNextPage();
	};
	console.log(scrollEvent);
	console.log(document.body.scrollTop);
	console.log(window.innerHeight);
	console.log($('#insta-photos').height());
});