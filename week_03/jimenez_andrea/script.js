
var user_id = 232192182; //user id of instagram profile you are using - you can find this in the console
var next_url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?client_id=585d00be2af34a26b0e1caa6995cf19f';
var loading = false; // how to load only once if clicking multiple times - this means we're not loading 

	function getNextPage(){
		if(loading) return; // basically - if loading true, don't hit a new page, otherwise contine
		loading = true; //true when start loading page
		$.ajax({
			type: 'GET',
			dataType: 'jsonp',
			url: next_url,
			success: drawPhotos,

		});
	}

	function drawPhotos(response){
		console.log(response)
		next_url = response.pagination.next_url;
		for (var i=0; i<response.data.length; i++){
			var src = response.data[i].images.thumbnail.url;
			$('#insta-photos').append('<img src="' + src  + '">')

		}
		loading = false; // false whe page stops loading
	}



$(document).ready(function(){
	
	getNextPage();// call this function as soon as the page loads

	$('#next-page').click(function(){
		// console.log('do something');
		getNextPage();	// call this a second time, third, etc.
	});

});


//scrolling event
$(window).scroll(function(scrollEvent){ 
	var scrollDistance = document.body.scrollTop + window.innerHeight;
	var scrollTarget = $('#insta-photos').height() - window.innerHeight;


	if (scrollDistance > scrollTarget){
		getNextPage();

	};

	// console.log(scrollEvent);
	// console.log(document.body.scrollTop);
	// console.log(window.innerHeight);
	// console.log($('#insta-photos').height());

});