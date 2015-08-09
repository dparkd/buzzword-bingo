var express = require('express');
var router = express.Router();

var buzzwords = require('../buzzword.json');

// Grab user list
router.get('/', function(req, res, next) {
	var wordData = buzzwords[0].words;
	var wordList = [];

	var player = Math.floor(Math.random() * 100);

	// Get unique array of words
	while(wordList.length < 24){
	  var randomWord = wordData[Math.floor(Math.random() * wordData.length)];
	  var found=false;

	  for (var i=0;i<wordList.length;i++) {
			if (wordList[i]==randomWord){
				found=true;break
			}
	  }
	  if(!found)wordList[wordList.length]=randomWord;
	}

	// Get the user and the room db
  res.render('bingo', { buzzwords: wordList, player: player });
});

module.exports = router;


