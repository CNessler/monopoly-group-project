

function redirectToken(boardIndex, player) {
  var current = document.getElementById('sp' + player.location)
  current.style.backgroundImage = null;
  var moveTo = document.getElementById('sp' + boardIndex)
  moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";
}
