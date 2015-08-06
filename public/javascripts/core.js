// // Variables
// var WC = [[0,1,2,3,4],[5,6,7,8,9],[10,11,'free',12,13],[14,15,16,17,18],[19,20,21,22,23],[0,5,10,14,19],[1,6,11,15,20],[2,7,'free',16,21],[3,8,12,17,22],[4,9,13,18,23],[0,6,'free',17,23],[4,8,'free',15,19]];
// var content;


// Variables
var content;


/* 
/	Document ready interaction javascript
*/

$(document).ready(function() {

	$('.word-card').on('click', function () {
		if($(this).hasClass('box-free')) {
			return;
		}
		
	  $(this).toggleClass('flipped');

	  if ($(this).hasClass('flipped')) {
	  	$(this).data('value', 1);
	  	checkWin();
	  } else {
	  	$(this).data('value', 0);
	  }
	});

	// Prevent Default
	$('.free-word a').click(function(e) {
		e.preventDefault();
	});
	$('.word-container a').click(function(e) {
		e.preventDefault();
	});

});


/* 
/	Client Functions
*/

// Check to see if there is a winning combination
function checkWin() {
	var row1 = ($('.box-0').data('value')+$('.box-1').data('value')+$('.box-2').data('value')+$('.box-3').data('value')+$('.box-4').data('value'));
	var row2 = ($('.box-5').data('value')+$('.box-6').data('value')+$('.box-7').data('value')+$('.box-8').data('value')+$('.box-9').data('value'));
	var row3 = ($('.box-10').data('value')+$('.box-11').data('value')+1+$('.box-12').data('value')+$('.box-13').data('value'));
	var row4 = ($('.box-14').data('value')+$('.box-15').data('value')+$('.box-16').data('value')+$('.box-17').data('value')+$('.box-18').data('value'));
	var row5 = ($('.box-19').data('value')+$('.box-20').data('value')+$('.box-21').data('value')+$('.box-22').data('value')+$('.box-23').data('value'));

	var col1 = ($('.box-0').data('value')+$('.box-5').data('value')+$('.box-10').data('value')+$('.box-14').data('value')+$('.box-19').data('value'));
	var col2 = ($('.box-1').data('value')+$('.box-6').data('value')+$('.box-11').data('value')+$('.box-15').data('value')+$('.box-20').data('value'));
	var col3 = ($('.box-2').data('value')+$('.box-7').data('value')+1+$('.box-16').data('value')+$('.box-21').data('value'));
	var col4 = ($('.box-3').data('value')+$('.box-8').data('value')+$('.box-12').data('value')+$('.box-17').data('value')+$('.box-22').data('value'));
	var col5 = ($('.box-4').data('value')+$('.box-9').data('value')+$('.box-13').data('value')+$('.box-18').data('value')+$('.box-23').data('value'));

	var dia1 = ($('.box-0').data('value')+$('.box-6').data('value')+1+$('.box-17').data('value')+$('.box-23').data('value'));
	var dia2 = ($('.box-4').data('value')+$('.box-8').data('value')+1+$('.box-15').data('value')+$('.box-19').data('value'));

	if(row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || dia1 == 5 || dia2 == 5) {
		youWin();
	}
}

// Run this function whenever the player wins
function youWin() {
	console.log('you win nigguh');
}










