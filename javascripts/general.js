// Global jQuery wrapper for general scripts
(function ($) {
	
	// Window size variables
	var windowWidth;
	var windowHeight;
	
	// Get window dimensions
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	// Window size vars
	var itemHeight;
	
	$(window).load(function() {
		
	    // Get gallery item width dimensions
		itemHeight = $(".image-container img").actual( 'height' );
				
		// Set height to full screen galleries and gallery content on window resize
		$(".gallery-container, .project-detail .information-container .container, .project-detail .item").css({
			"max-height": (windowHeight) - 80 + "px",
			"height": (itemHeight) + "px"
		});
		
	});
	
	$(document).ready(function() {		
		
		// On devices show and hide capabilities 
		$('.alpha-section h3').click(function(){
			$('.alpha-section h3').removeClass('active');
			
			if ($(this).parent().find('p').css("display") == "none") {
				
				$(this).addClass('active');
				$('.a .capabilities-item p').slideUp('fast');
				$(this).parent().find('p').slideDown('fast');
				
    		} else {
				
				$(this).parent().find('p').slideUp('fast');
				
			}
		});
		
		// Hide site wide messages 
		$('#message-container .hide').click(function(){
			$("#message-container").animate({ height: 0, opacity: 0 }, 'slow');
			$('#message-container .hide').hide();
		});
		
		// On divice device show and hide  
		$('[data-fade]').each(function() {
			$(this).css('opacity', 0).delay($(this).data('fade')).animate({'opacity': 1});
		});
		
		// Charlie fade content effect
		$('.tile img.media-insert').each(function() {
			$(this).css('opacity', 0).delay('3000').animate({'opacity': 1});
		});
		
		// Charlie fade content effect
		$('.tile img#background-hero').each(function() {
			$(this).css('opacity', 0).delay('2000').animate({'opacity': 1});
		});

		// Charlie late load of images
		$('.c .container img').hide().load(function(){
			$(this).show();
		});

		 // Get gallery item width dimensions
		itemHeight = $(".image-container img").actual( 'height' );
				
		// Set height to full screen galleries and gallery content on window resize
		$(".gallery-container, .project-detail .information-container .container, .project-detail .item").css({
			"max-height": (windowHeight) - 80 + "px",
			"height": (itemHeight) + "px"
		});
		
		// Clone contact form and append to man nav
		$('#item-id-11').clone().appendTo('#contact-container');
		
		// Alpha team photo toggle 
		$('.team-section .slider-control em').on( "click", function() {
			$('.team-section').toggleClass('active');
		});
		
		// Alpha (Ejection Seat) Toggle main site section navigation on click contact nav
		$('.toggle-contact span, .b a.toggle-contact').click(function(){
			
			if ($('#site-sections .nav-container').css("display") == "none") {
				
				$('.toggle.site-nav').toggleClass('active');
				$('.toggle.site-contact').toggleClass('active')
				$('#contact-container').fadeIn();
				$('#site-sections .nav-container').fadeIn();
				return false;
				
    		} else {
	
				// Fade out of nav/contact content
				$('#contact-container').hide();
				$('#site-sections .nav-container').hide();
				$('.toggle.site-contact').removeClass('active');
				$('.toggle.site-nav').removeClass('active');
				return false;
				
			}
		});

		
		// (Ejection Seat) Toggle main site section navigation
		$('.toggle.site-nav').click(function(){
			if ($('#site-sections .nav-container').css("display") == "none") {
				
				$('.toggle.site-nav').toggleClass('active');
				$('#site-sections .nav-container').fadeIn();
				$('.contact-message').toggleClass('active');
				
    		} else {
	
				// Fade out of nav/contact content
				$('#contact-container').hide();
				$('#site-sections .nav-container').hide();
				$('.contact-message').removeClass('active');
				$('.toggle.site-contact').removeClass('active');
				$('.toggle.site-nav').removeClass('active');
			}
		});
		
		// (Ejection Seat) Toggle main site section navigation contact form
		$('.toggle.site-contact').click(function(){
			$(this).toggleClass('active');
			$('#contact-container').fadeToggle();
		});
		

				
	});
	
	$(window).bind('scroll',function(e){
		// ALPHA parallax backgrounds
	    parallaxScroll();
	});

	function parallaxScroll(){
		// ALPHA parallax backgrounds
	    var scrolled = $(window).scrollTop();
	    $('#page-hero-20 .hero-bg').css('bottom',(0-(scrolled*-.200))+'px');
		$('#page-hero-20 .hero-bg').css('left',(0-(scrolled*.3000))+'px');
		$('#page-hero-20 .hero-title').css('top',(0-(scrolled*-.1000))+'px');
	    $('#page-hero-20 .hero-title').css('right',(0-(scrolled*.1000))+'px');
	}
	
	$(window).resize(function () {	
		
		// Get window dimensions
		windowWidth = $(window).width();
		windowHeight = $(window).height();	
		
		 // Get gallery item width dimensions
		itemHeight = $(".image-container img").actual( 'height' );
				
		// Set height to full screen galleries and gallery content on window resize
		$(".gallery-container, .project-detail .information-container .container, .project-detail .item").css({
			"max-height": (windowHeight) - 80 + "px",
			"height": (itemHeight) + "px"
		});

	});
})(jQuery);
