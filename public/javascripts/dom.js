var rollButton = document.getElementById('roll');
var index = 0;

var tokens = [
  {name: "hat", url: 'http://www.worldofmonopoly.com/fansite/images/tokens/monopoly_token_hat.png'},
  {name: "ship", url: 'http://www.worldofmonopoly.com/fansite/images/tokens/monopoly_token_ship.png'},
  {name: "dog", url: 'https://gobeyondphotography.files.wordpress.com/2013/01/monopoly_token_dog.png'},
  {name: "car", url: 'http://4.bp.blogspot.com/-ogjy-t9xq1E/UQGnaJbui8I/AAAAAAAAB-k/OPDG4YAI2Yk/s1600/monopoly_token_car.png'}
]

<<<<<<< HEAD
var players = [];
var data = document.getElementById('playerData').childNodes;
for (var i = 0; i < data.length; i++) {
 var singlePlayer = data[i].innerHTML.split(';');
 var player = new Player(singlePlayer[0], singlePlayer[1])
 players.push(player);
=======
function getToken(player) {
  for (var i = 0; i < tokens.length; i++) {
    if (player.token === tokens[i].name) {
      player.tokensrc = tokens[i].url
    }
  }
  return player
}

var players = [];
var data = document.getElementById('playerData').childNodes;
for (var i = 0; i < data.length; i++) {
  var singlePlayer = data[i].innerHTML.split(';');
  var player = new Player(singlePlayer[0], singlePlayer[1])
  getToken(player);
  player.location = 0;
  players.push(player);
>>>>>>> a0ef7a68442b1787dd8bdd4a061ad798c63e9a14
}

console.log(players);

// var atts = ["name", "token", "balance", "inJail", "getOut", "active", "turn", "deeds", "location"]
// var players = [];
// var data = document.getElementById('playerData').childNodes;
// for (var i = 0; i < data.length; i++) {
//   var info = data[i].innerHTML.split(";");
//   var player = {};
//   console.log(info);
//   for (var j = 0; j < info.length; j++) {
//     player[atts[j]] = info[j];
//   }
//   player.location = 0;
//   player.inJail = false;
//   for (var k = 0; k < tokens.length; k++) {
//     if (player.token === tokens[k].name) {
//       player.tokensrc = tokens[k].url;
//     }
//   }
//   players.push(player)
// }
// console.log(players, "players");

function getMove(player) {
  //var move = Math.floor(Math.random()*10) + 2;
  var move = 7;
  if (player.location + move < 40) {
    player.location += move;
  } else {
    player.location = player.location + move - 40;
    player.balance += 200;
    bank.balance -= 200;
  }
  return move;
}

function nextPlayer() {
  if (index <= 2) {
    index += 1
  } else if (index === 3) {
    index = 0
  }
}

rollButton.addEventListener("click", function() {
  console.log("event listener fires");
  var player = players[index]
  var current = document.getElementById('sp' + player.location)
  current.style.backgroundImage = null;
  var dieRoll = getMove(player);
  var moveTo = document.getElementById('sp' + player.location)
  console.log(moveTo);
  moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);
  console.log("selectPlayerFunction");

  nextPlayer()
});
