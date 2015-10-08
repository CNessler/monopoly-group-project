var express = require('express');
var router = express.Router();

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);

  playersCollection = monopolyDB.get('players');
  deedsCollection = monopolyDB.get('deeds');
  banksCollection = monopolyDB.get('banks');
  gamesCollection = monopolyDB.get('games');

var library = require('../library/constructors.js')
  var tokens = library.tokens;
  var Player = library.Player;

router.use('/home', function (req, res, next) {
  if(req.cookies.active){
    res.redirect('/game');
  }
  else {
    next();
  }
});

router.use('/game', function (req, res, next) {
  if(!req.cookies.active){
    res.redirect('/home');
  }
  else {
    next();
  }
});

router.get('/', function(req, res, next) {
  res.redirect('/home')
});

router.get('/home', function(req, res, next) {
  res.render('index')
});

router.post('/home', function(req, res, next) {
  res.cookie('active', 'on')
  var errorMsg = false;
  var list = [
    {name: req.body.playername1, token: req.body.chosentoken1},
    {name: req.body.playername2, token: req.body.chosentoken2},
    {name: req.body.playername3, token: req.body.chosentoken3},
    {name: req.body.playername4, token: req.body.chosentoken4}
  ]
  var errorList = [
    {name: "Jeff", token: "iron"},
    {name: "Martha", token: "thimble"},
    {name: "Evan", token: "shoe"},
    {name: "Zack", token: "wheelbarrow"}
  ]

  for (var i = 0; i < list.length; i++) {
    if (list[i].name === '') {
      list[i].name = errorList[i].name
      list[i].token = errorList[i].token
    }
  }

  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[i].token === list[j].token) {
        errorMsg = "Each player must have a different token"
      }
    }
  }

  if (errorMsg) {
    res.render('index', {errorMsg: errorMsg, name1: list[0].name, name2: list[1].name, name3: list[2].name, name4: list[3].name});
  } else {
    var insertedPlayersPromises = list.map(function (player) {
      var newPlayer = new Player(player.name, player.token);
      playersCollection.insert(newPlayer);
    })
    Promise.all(insertedPlayersPromises)
    .then(function () {
      res.redirect('/game');
    })
  }
});

router.get('/game', function(req, res, next) {
  res.cookie('active', 'on');
  playersCollection.find({})
  .then(function (allPlayers) {
    console.log(allPlayers, "allPlayers");
    res.render('game', {playerName: allPlayers[0].name, allPlayers: allPlayers})
  })
});

router.get('/logout', function (req, res, next) {
  res.clearCookie('active');
  playersCollection.remove({});
  res.redirect('/home');
})


module.exports = router;
