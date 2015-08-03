var rollButton = document.getElementById('roll');
var index = 0

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
console.log(player);
console.log(players[0].name);

function getMove(player) {
  var move = Math.floor(Math.random()*10) + 2;
  if (player.location + move < 40) {
    player.location += move;
  } else {
    player.location = player.location + move - 40;
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
  var player = players[index]
  console.log(player, "INDEX");
  var current = document.getElementById('sp' + player.location)
  current.style.backgroundImage = null;
  var dieRoll = getMove(player);
  var moveTo = document.getElementById('sp' + player.location)
  moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);


  nextPlayer()
});
