$(document).ready(function() {
	// body...
	$('.navigate').click(function(e) {
		var linkHref = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 2000);
		e.preventDefault();
	});
});