var main = function() {

	$('.open-menu').click(function(){

		$('.sidenav').animate({
			left:"0"
		},200);

		$('body').animate({
			left:"250px"
		},200);
	});

	$('.close-menu').click(function(){

		$('.sidenav').animate({
			left:"-250px"
		},200);

		$('body').animate({
			left:"0"
		},200);
	});
};

$(document).ready(main);