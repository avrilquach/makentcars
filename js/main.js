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
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	});
	$('.experience-slider').owlCarousel({
		items: 5,
		lazyLoad: true,
		margin: 20,
		nav: true,
		navText: ['<i class="icon icon-chevron-right custom-rotate" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	});
	$('#community-slider').owlCarousel({
		items: 5,
		lazyLoad: true,
		margin: 20,
		nav: true,
		navText: ['<i class="icon icon-chevron-right custom-rotate" aria-hidden="true"></i>', '<i class="icon icon-chevron-right" aria-hidden="true"></i>'],
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	});
	$('input[name="daterange"]').daterangepicker();
	
});
