$(document).ready(function () {
	$('.home-banner-slider').owlCarousel({
		items: 1,
		lazyLoad: true,
	});
	$('.lazy').lazy();
	$('.explore-slider').owlCarousel({
		items: 5,
		lazyLoad: true,
		margin: 20,
		nav: true,
		navText: ['<i class="icon icon-chevron-right custom-rotate" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
		dots: true,
	});
	$('.experience-slider').owlCarousel({
		items: 5,
		lazyLoad: true,
		margin: 20,
		nav: true,
		navText: ['<i class="icon icon-chevron-right custom-rotate" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
		dots: true,
	});
	$('#community-slider').owlCarousel({
		items: 3,
		lazyLoad: true,
		margin: 20,
		nav: true,
		navText: ['<i class="icon icon-chevron-right custom-rotate" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
		dots: true,
	});
	$('input[name="daterange"]').daterangepicker();
	
});
