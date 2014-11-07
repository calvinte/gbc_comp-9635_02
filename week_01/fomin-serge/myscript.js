$(document).ready(function(){

$('iframe').hover(function(){
	$('iframe').animate({
		width: '960px',
		height: '700px',
		});
	},
	function(){
		$('iframe').animate({
		width: '600px',
		height: '400px',
		});
	});
});
