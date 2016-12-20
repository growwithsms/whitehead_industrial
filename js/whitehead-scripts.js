$(function() {

	////////////////////////////////
	// Mobile Navigation
	////////////////////////////////
	$('.mobile-nav-toggle').on('click', function(){
		$('body').toggleClass('mobile-nav-active')
	});

	// moves navigation items to and from mobile div
	checkSize();
	$(window).resize(checkSize);
	function checkSize(){
	    if ( $(".mobile-nav-toggle").css("display") == "block" ){
	        // Move all the things to off-canvas mobile menu
	        $('.site-pages').appendTo('.primary-mobile-items');
	        $('.main-nav').appendTo('.primary-mobile-items');
	        $('.account-pages').appendTo('.secondary-mobile-items');
	    } else {
	        // Move all the things back on resize 
	        $('.primary-mobile-items .site-pages').appendTo('.site-pages-wrapper');
	        $('.primary-mobile-items .main-nav').appendTo('.nav-wrapper');
	        $('.secondary-mobile-items .account-pages').appendTo('.account-pages-wrapper');
	    }
	}



	////////////////////////////////
	// Home Page Carousels
	////////////////////////////////
	$('.hero-carousel').flickity({
		imagesLoaded: true,
		pageDots: false,
		wrapAround: true,
		cellSelector: '.hero-carousel-cell',
		adaptiveHeight: true
	});

	$('.featured-products').flickity({
		cellAlign: 'center',
		contain: true,
		imagesLoaded: true,
		pageDots: false,
		prevNextButtons: false,
		cellSelector: '.product',
		wrapAround: true,
		autoPlay: true
	});

	$('.testimonial-carousel').flickity({
		cellAlign: 'center',
		contain: true,
		imagesLoaded: true,
		prevNextButtons: false,
		cellSelector: '.testimonial-cell'
	});

	$('.brands-carousel').flickity({
		cellAlign: 'left',
		contain: true,
		imagesLoaded: true,
		pageDots: false,
		prevNextButtons: false,
		wrapAround: true,
		autoPlay: 3500
	});

});