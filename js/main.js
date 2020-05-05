$(document).ready(function () {
	$(".js-show-how-it-works").click(function (e) {
		$(".how-it-works").show();
	})
	$(".js-close-how-it-works").click(function (e) {
		$(".js-how-it-works").hide();
	})
	$("#sm-search-field").click(function(e){
		$(".search-modal-container").show();
	})
	$(".search-modal-container .modal-close").click(function(e){
		$(".search-modal-container").hide();
	})
	$(".host_banner_slides").responsiveSlides();
	$("#bottom_slider").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks",
	});
	$('input[name="pickup"]').daterangepicker();
	$('input[name="return"]').daterangepicker();
	$('input[name="pickup"]').val("");
	$('input[name="pickup"]').attr("placeholder", "Pickup");
	$('input[name="return"]').val("");
	$('input[name="return"]').attr("placeholder", "Return");
	
});
