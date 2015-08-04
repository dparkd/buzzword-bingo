var express = require('express');
var router = express.Router();

var buzzwords = require('../buzzword.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	var wordData = buzzwords[0].words;
	var wordList = [];

	// Get unique array of words
	while(wordList.length < 24){
	  var randomWord=wordData[Math.ceil(Math.random()*wordData.length)]
	  var found=false;

	  for (var i=0;i<wordList.length;i++) {
			if (wordList[i]==randomWord){
				found=true;break
			}
	  }
	  if(!found)wordList[wordList.length]=randomWord;
	}

  res.render('index', { buzzwords: wordList });
});

module.exports = router;


