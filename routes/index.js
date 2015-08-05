var express = require('express');
var router = express.Router();
// var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH)

var monopolyDB = require('monk')(process.env.MONGOLAB_URI);


playersCollection = monopolyDB.get('players');
deedsCollection = monopolyDB.get('deeds');
banksCollection = monopolyDB.get('banks');
gamesCollection = monopolyDB.get('games');

//var getAvailableTokens = require('../library/availableTokens.js');
var library = require('../library/playerConstructor.js')
var tokens = library.tokens;
var Player = library.Player;
// var getAllDeeds = require('../public/javascripts/deedConstructor.js')

router.get('/', function(req, res, next) {

res.render('index')
// if(req.cookies.name) {
//     res.redirect('/game');
//   }
// else {
  // playersCollection.find({})
  // .then(function (allPlayers) {
      // var availableTokens = getAvailableTokens(allPlayers, tokens);
      // res.render('index', {availableTokens: availableTokens});
  // });
// }
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
var list = [
  {name: name1, token: token1},
  {name: name2, token: token2},
  {name: name3, token: token3},
  {name: name4, token: token4}
]
// res.cookie('player1', name1);
// res.cookie('player2', name2);
// res.cookie('player3', name3);
// res.cookie('player4', name4);
// res.cookie('token1', token1);
// res.cookie('token2', token2);
// res.cookie('token3', token3);
// res.cookie('token4', token4);

list.forEach(function (player) {
  var newPlayer = new Player(player.name, player.token);
  playersCollection.insert(newPlayer);
})
res.redirect('/game');
});

router.get('/game', function(req, res, next) {
  unirest.get('api.openweathermap.org/data/2.5/weather?zip=94040,us')
  .header('key', process.env.WEATHER)
  .end(function(response) {

    var player1 = req.cookies.player1
    var token1 = req.cookies.token1

playersCollection.find({})
.then(function (allPlayers) {
  console.log(allPlayers);
  res.render('game', {playerName:player1, allPlayers: allPlayers})
})
})

router.get('/logout', function (req, res, next) {
res.clearCookie('name');
playersCollection.remove({});
res.redirect('/');
})

router.post('/gamedata', function (req, res, next) {
message = req.body;
console.log(message, "json message from client side");
})


module.exports = router;
