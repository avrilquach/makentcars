$(document).ready(function () {
	$(".js-show-how-it-works").click(function (e) {
		$(".how-it-works").show();
	})
	$(".js-close-how-it-works").click(function (e) {
		$(".js-how-it-works").hide();
	})
	$(".host_banner_slides").responsiveSlides();
	$("#bottom_slider").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks",
		before: function () {
			$('.events').append("<li>before event fired.</li>");
		},
		after: function () {
			$('.events').append("<li>after event fired.</li>");
		}
	});
	$('.class_date1').click(function(e){
		$(".class_date1").hide();
		$('input[name="pickup"]').daterangepicker();
	})
	$('.class_date2').click(function(e){
		$(".class_date2").hide();
		$('input[name="return"]').daterangepicker();
	})
});
