var deedContainer = document.getElementById('deedContainer');
var utils = [12, 28, 0, 0];
var rr = [5, 15, 25, 35];


playerDash(players[index])
//click on player link and generate player deed info and display
var otherPlayers = document.getElementsByName('dashLink')
var name = document.getElementById('name')
for (var i = 0; i < otherPlayers.length; i++) {
  otherPlayers[i].addEventListener('click', function(){
    clearCont();
    for (var j = 0; j < players.length; j++) {
      if (players[j].name === this.id) {
        name.innerHTML = players[j].name
        playerDash(players[j])
      }
    }
  })
}

  clearCont();
  playerDash(players[index])
