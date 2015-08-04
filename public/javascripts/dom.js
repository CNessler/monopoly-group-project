var rollButton = document.getElementById('roll');
var index = 0;
var turn = document.getElementById('turn')

var tokens = [
  {name: "hat", url: 'http://www.worldofmonopoly.com/fansite/images/tokens/monopoly_token_hat.png'},
  {name: "ship", url: 'http://www.worldofmonopoly.com/fansite/images/tokens/monopoly_token_ship.png'},
  {name: "dog", url: 'https://gobeyondphotography.files.wordpress.com/2013/01/monopoly_token_dog.png'},
  {name: "car", url: 'http://4.bp.blogspot.com/-ogjy-t9xq1E/UQGnaJbui8I/AAAAAAAAB-k/OPDG4YAI2Yk/s1600/monopoly_token_car.png'}
]

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
}
function getMove(player) {
  var move = Math.floor(Math.random()*10) + 2;
  // var move = 15;
  var inEl = player.location + move;
  if (inEl === 30){
    alert("You're In The Elevator!")
    player.inJail = true;
    player.location = 10;
    redirectToken(10, player);
  }
  else if (player.location + move < 40) {

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
  // console.log(players[index].name, "PLAYERS TURN");
  turn.innerHTML = players[index].name + "'s Turn!";
}

rollButton.addEventListener("click", function() {

  var player = players[index]
  var current = document.getElementById('sp' + player.location)
  // console.log(current, "CURRENT");
  current.style.backgroundImage = null;
  var dieRoll = getMove(player);
  // console.log(player.location, "LOCATION");
  var moveTo = document.getElementById('sp' + player.location)
  moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);
});
