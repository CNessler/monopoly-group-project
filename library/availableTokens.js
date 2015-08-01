module.exports = function(allPlayers, tokens) {

  var usedTokens = [];

  allPlayers.forEach(function (player) {
    usedTokens.push(player.token);
  });

  var availableTokens = [];

  tokens.forEach(function (checkedToken) {
    if(usedTokens.indexOf(checkedToken.name) === -1) {
      availableTokens.push(checkedToken.name);
    }
  });
  return availableTokens;
}
