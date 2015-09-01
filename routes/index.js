var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH)

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);

  playersCollection = monopolyDB.get('players');
  deedsCollection = monopolyDB.get('deeds');
  banksCollection = monopolyDB.get('banks');
  gamesCollection = monopolyDB.get('games');

var library = require('../library/constructors.js')
  var tokens = library.tokens;
  var Player = library.Player;

var sendSMS = function (aMessage, callback) {
  client.messages.create({
    body: aMessage,
    to: process.env.JAYLYN,
    to: process.env.CLAIRE,
    from: process.env.SOURCE
  }, function (err, sms) {
    if(err) {
    }
  });
}

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
  var name1 = req.body.playername1;
  var name2 = req.body.playername2;
  var name3 = req.body.playername3;
  var name4 = req.body.playername4;
  var token1 = req.body.chosentoken1;
  var token2 = req.body.chosentoken2;
  var token3 = req.body.chosentoken3;
  var token4 = req.body.chosentoken4;
  var errorMsg = false;
  var list = [
    {name: name1, token: token1},
    {name: name2, token: token2},
    {name: name3, token: token3},
    {name: name4, token: token4}
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
    res.render('index', {errorMsg: errorMsg, name1: name1, name2: name2, name3: name3, name4: name4});
  } else {
    list.forEach(function (player) {
      var newPlayer = new Player(player.name, player.token);
      playersCollection.insert(newPlayer);
    })
    res.redirect('/game');
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

router.post('/gamedata', function (req, res, next) {
  newMessage = req.body.message;
  sendSMS(newMessage);
  message = req.body;
})


module.exports = router;
