// Variables
var content;
var currentUser;
var currentRoom;
var numUsers;
var socket = io.connect();

// Show the modal on load of the window
$(window).load(function(){
	$('#userModal').modal({
    backdrop: 'static',
    keyboard: false
	});

	$('#startGame').click(function() {
		$('#userModal').modal('hide');
		$('.bingo-card').css('opacity', '1');
	});

});

/* 
/	Document ready interaction javascript
*/

$(document).ready(function() {

	// Choose Room and username
	$('#startGame').click(function() {
		currentUser = $('.username').val();
		currentRoom = $('.bingoroom').val();

		$('.currentUser').html(currentUser + ' -');
		$('.currentRoom').html(currentRoom);

		socket.emit('join game', currentRoom);
	});

	// Word click function
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

	// Reset the game
	$('#resetGame').click(function() {
		resetGame();
	});

});

/* 
/	Socket Events
*/

// Socket function
socket.on('game state', function(data) {

	$('#winModal .winner-name').html(data.userWin);
	$('#winModal').modal({
    backdrop: 'static',
    keyboard: false
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
	var username = $('.player').text();
	$('#winModal .winner-name').html('You');
	$('#winModal').modal({
    backdrop: 'static',
    keyboard: false
	});
	socket.emit('isWinner', {winner: 'You are the winner', player: currentUser, room: currentRoom});
}


// Run this function whener a player presses reset game
function resetGame() {
	$('#winModal').modal('hide');
	$('.bingo-card .word-card').each(function() {
		if($(this).hasClass('box-free')){
			return;
		}
		else {
			$(this).data('value', '0');
			$(this).removeClass('flipped');
		}
	});
}








