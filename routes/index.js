var express = require('express');
var router = express.Router();

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);
playersCollection = monopolyDB.get('players');
deedsCollection = monopolyDB.get('deeds');
banksCollection = monopolyDB.get('banks');
gamesCollection = monopolyDB.get('games');

var getAvailableTokens = require('../library/availableTokens.js');
var library = require('../library/playerConstructor.js')
  var tokens = library.tokens;
  var Player = library.Player;
var getAllDeeds = require('../library/deedConstructor.js')

router.get('/', function(req, res, next) {
  if(req.cookies.name) {
      res.redirect('/game');
    }
  else {
    playersCollection.find({})
    .then(function (allPlayers) {
        var availableTokens = getAvailableTokens(allPlayers, tokens);
        res.render('index', {availableTokens: availableTokens});
    });
  }
});

router.post('/', function(req, res, next) {

  var name = req.body.playername;
  var token = req.body.chosentoken;
  res.cookie('name', name);

  playersCollection.findOne({name: name})
  .then(function (foundPlayer) {
    if(foundPlayer) {
      res.redirect('/game');
    }
    else {
      var player = new Player(name, token);
      playersCollection.insert(player)
      .then(function() {
        res.redirect('/game');
      });
    }
  });
});

router.get('/game', function(req, res, next) {
  playerName = req.cookies.name
  getAllDeeds();
playersCollection.find({}, function (err, records) {
  console.log(records[0]);
  var player1 = records[0];
  res.render('game', {playerName: playerName, player1: player1})
})
})

router.get('/logout', function (req, res, next) {
  res.clearCookie('name');
  res.redirect('/');
})

module.exports = router;
