var express = require('express');
var router = express.Router();

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);
playersCollection = monopolyDB.get('players');
deedsCollection = monopolyDB.get('deeds');
banksCollection = monopolyDB.get('banks');
gamesCollection = monopolyDB.get('games');

var getAvailableTokens = require('../library/availableTokens.js');
var library = require('../library/constructors.js')
  var tokens = library.tokens;
  var Player = library.Player;

router.get('/', function(req, res, next) {
  playersCollection.find({})

  .then(function (allPlayers) {
    if(allPlayers.length < 4) {
      var availableTokens = getAvailableTokens(allPlayers, tokens);
      res.render('index', {availableTokens: availableTokens});
    }
    else {
      res.send("4 player max has been reached!")
    }
  });
});

router.post('/', function(req, res, next) {

  var name = req.body.playername;
  var token = req.body.chosentoken;
  var player = new Player(name, token);

  playersCollection.insert(player)
  .then(function() {
    res.send('success!')
  });
});

module.exports = router;
