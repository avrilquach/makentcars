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
	$('input[name="pickup"]').daterangepicker();
	$('input[name="return"]').daterangepicker();
	$('input[name="pickup"]').val("");
	$('input[name="pickup"]').attr("placeholder", "Pickup");
	$('input[name="return"]').val("");
	$('input[name="return"]').attr("placeholder", "Return");
});
