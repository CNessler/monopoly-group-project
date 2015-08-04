var deedContainer = document.getElementById('deedContainer');
var utils = [12, 28, 0, 0];
var rr = [5, 15, 25, 35];


playerDash(players[index])

var otherPlayers = document.getElementsByName('dashLink')
for (var i = 0; i < otherPlayers.length; i++) {
  otherPlayers[i].addEventListener('click', function(){
    for (var i = 0; i < players.length; i++) {
      var x = deedContainer.children;
      if (x.length >= 1) {
        for (var i = 0; i < (x.length + 1); i++) {
          clearCont(x[i]);
        }
      }
      if (players[i].name === this.id) {
        playerDash(players[i])
      }
    }
  })
}

rollButton.addEventListener('click', function () {
  var x = deedContainer.children;
  if (x.length >= 1) {
    for (var i = 0; i < (x.length + 1); i++) {
      clearCont(x[i]);
    }
  }

  playerDash(players[index])
})
