// var playerData = document.getElementById('playerData');
// console.log(playerData);
// console.log(allDeeds);

var rollButton = document.getElementById('roll');
var index = 0
// var players = [
//   {name: "Akhil", token: "red", location: 0},
//   {name: "Claire", token: "blue", location: 0},
//   {name: "Derek", token: "yellow", location: 0},
//   {name: "Jaylyn", token: "green", location: 0}
// ]

var players =
[
  new Player("Akhil","red"),
  new Player("Claire","blue"),
  new Player("Derek", "yellow"),
  new Player("Jaylyn", "green")
]

function getMove(player) {
  //var move = Math.floor(Math.random()*10) + 2;
  var move = 7;
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
  var current = document.getElementById('sp' + player.location)
  current.style.background = "white";
  var dieRoll = getMove(player);
  var moveTo = document.getElementById('sp' + player.location)
  moveTo.style.background = player.token
  //player options function

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);


  nextPlayer()
});
