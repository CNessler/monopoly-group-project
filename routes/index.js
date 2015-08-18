var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH)

var library = require('../library/playerConstructor.js')
  var tokens = library.tokens;
  var Player = library.Player;

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);
playersCollection = monopolyDB.get('players');
deedsCollection = monopolyDB.get('deeds');
banksCollection = monopolyDB.get('banks');
gamesCollection = monopolyDB.get('games');

var sendSMS = function (aMessage, callback) {
  client.messages.create({
    body: aMessage,
    to: process.env.JAYLYN,
    to: process.env.CLAIRE,
    from: process.env.SOURCE
  }, function (err, sms) {
    if(err) {
      console.log(err);
    }
  });
}


router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/', function(req, res, next) {
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
      console.log(list[i].name);
      list[i].name = errorList[i].name
      list[i].token = errorList[i].token
    }
  }
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      console.log(i, list[i].token, j, list[j].token);
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
  var player1 = req.cookies.player1
  var token1 = req.cookies.token1

  playersCollection.find({})
  .then(function (allPlayers) {
    console.log(allPlayers);
    res.render('game', {playerName:player1, allPlayers: allPlayers})
  })
});

router.get('/logout', function (req, res, next) {
  res.clearCookie('name');
  playersCollection.remove({});
  res.redirect('/');

})

router.post('/gamedata', function (req, res, next) {
  newMessage = req.body.message;
  console.log(newMessage, typeof newMessage, "json message from client side");
  sendSMS(newMessage);
  message = req.body;
  console.log(message, "json message from client side");
})


module.exports = router;
