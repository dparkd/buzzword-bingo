var express = require('express');
var router = express.Router();

var buzzwords = require('../buzzword.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	var wordData = buzzwords[1].words;
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

	//why hellow there

  res.render('index', { buzzwords: wordList, player: player });
});

module.exports = router;


