(function($){
	$(document).ready(function(){

		//nav bar show/hide
		$('.navbar').NavStrap().ShowOrHideOnScroll({
		  	shadow: true,
		    delta: 5,
  			speed: 250
		});

		// menu click to scroll section
		$('#nav').onePageNav({
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing'
		});

		//Scroll to section
		var areaHeight = $('.hero').height();
		$('#heroScroll').click(function(e){
			e.preventDefault();
			$('html').animate({
				scrollTop: areaHeight
			}, 1000);
		});

		//icon
		$('.project-child .pr-after-hover .pr-icon a').click(function(e){
			e.preventDefault();
			$(this).addClass('active');
		});

		//scroll to top
		$(window).scroll(function() {
		    if ($(this).scrollTop()) {
		        $('.scrollToTop').fadeIn(500);
		    } else {
		        $('.scrollToTop').fadeOut();
		    }
		});
		$(".scrollToTop").click(function() {
		    $("html, body").animate({scrollTop: 0}, 500);
		 });

		//aos animation
		AOS.init();

		//counter
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		});

	});
})(jQuery);