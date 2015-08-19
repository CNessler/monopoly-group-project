function redirectToken(boardIndex, player) {
  var current = document.getElementById('sp' + player.location);
  var existing = current.childNodes;

  for (var i = 0; i < existing.length; i++) {
    if (existing[i].id === players[index].name) {
      existing[i].remove();
    }
  }

  var moveTo = document.getElementById('sp' + boardIndex)
  var token = document.createElement('div');
  token.setAttribute("class", "token");
  token.setAttribute("id", player.name);
  token.style.backgroundImage = "url('" + player.tokensrc + "')";
  moveTo.appendChild(token)
}
