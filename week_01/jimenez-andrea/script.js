$(document).ready(function(){

	$(".descriptions").hide();

	$("li").click(function(){
		$(this).siblings().removeClass("selected");
		$(this).toggleClass("selected"); //highlight the image
	
	
		var x = $(this).index();
		$(".descriptions").eq(x).siblings().hide();
		$(".descriptions").eq(x).fadeToggle(600);

	
	})

	
})