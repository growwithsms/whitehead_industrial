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
	// Smooth Scrolling to Anchors
	////////////////////////////////
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000);
		    return false;
		  }
		}
	});

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

	////////////////////////////////
	// Variable Product Page
	////////////////////////////////

	// Calculates Total Quantity on Hand
	var totalQOH = 0;
	$('td[data-title="QOH"]').each(function(){
		totalQOH += Number($(this).text());
	});
	$('#quantity-on-hand').text(totalQOH);

	if(totalQOH > 0) {
		$('#quantity-on-hand').parent().addClass('green');
	} else {
		$('#quantity-on-hand').parent().addClass('hidden');
	}

	// Calculates Total Quantity on Order
	var totalQOO = 0;
	$('td[data-title="QOO"]').each(function(){
		totalQOH += Number($(this).text());
	});
	$('#quantity-on-order').text(totalQOO);

	if(totalQOO > 0) {
		$('#quantity-on-order').parent().addClass('green');
	} else {
		$('#quantity-on-order').parent().addClass('hidden');
	}

});