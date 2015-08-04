var deedContainer = document.getElementById('deedContainer');
var utils = [12, 28, 0, 0];
var rr = [5, 15, 25, 35];

playerDash(players[index])
//click on player link and generate player deed info and display
var otherPlayers = document.getElementsByName('dashLink')
for (var i = 0; i < otherPlayers.length; i++) {
  otherPlayers[i].addEventListener('click', function(){
    clearCont();
    for (var j = 0; j < players.length; j++) {
      if (players[j].name === this.id) {
        playerDash(players[j])
      }
    }
  })
}

rollButton.addEventListener('click', function () {
  clearCont();
  playerDash(players[index])
})
