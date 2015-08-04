


/* 
/	Document ready interaction javascript
*/



$(document).ready(function() {

	

	$('.word-container').on('click', function () {
	  $(this).find('.word-card').toggleClass('flipped');
	});

	// Prevent Default
	$('.free-word a').click(function(e) {
		e.preventDefault();
	});
	$('.word-container a').click(function(e) {
		e.preventDefault();
	});

});