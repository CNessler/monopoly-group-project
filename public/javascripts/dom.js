var weatherXHR = new XMLHttpRequest;

weatherXHR.open('get', 'http://api.wunderground.com/api/4d5eeb69540ad8e6/conditions/q/CO/Denver.json');
weatherXHR.addEventListener('load', function() {
var response = weatherXHR.response;
var weatherData = JSON.parse(response);
var temperature = weatherData.current_observation.temp_f;
var feelsLike = weatherData.current_observation.feelslike_f;
var weatherDescription = weatherData.current_observation.weather;
console.log(temperature, "temp", feelsLike, weatherDescription);
console.log(weatherData.current_observation);
})
weatherXHR.send(null);

var rollButton = document.getElementById('roll');
var index = 0;
var turn = document.getElementById('turn')
var misc = [12, 28, 5, 15, 25, 35]



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

 var goEl = player.location + move
 if (goEl === 30){
   player.location = 10;
   player.inJail = true;
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
  window.setTimeout(function () {
    playerDash(players[index])
  }, 2500)
  window.setTimeout(function () {
   turn.innerHTML = players[index].name + "'s Turn!";
  }, 2500)
}

rollButton.addEventListener("click", function() {

  var sentObjectExample = {name: "Akhil", message: "my twilio test"}

  var player = players[index]
  var current = document.getElementById('sp' + player.location)
  current.style.backgroundImage = null;
  var dieRoll = getMove(player);
  console.log(player.location, "LOCATION");
  var moveTo = document.getElementById('sp' + player.location)
  moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);

 var player = players[index]
 var current = document.getElementById('sp' + player.location)
 current.style.backgroundImage = null;


 current.style.color = "black";
 for (var i = 0; i < misc.length; i++) {
   var loc = "sp" + misc[i].toString()
   if (current.id === loc) {
     current.style.color = "white";
   }
 }
 var dieRoll = getMove(player);
 console.log(player.location, "LOCATION");
 var moveTo = document.getElementById('sp' + player.location)
 moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

 moveTo.style.color = "transparent";
 selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);

});

var sendGameDataBtn = document.getElementById('twilioCall');
sendGameDataBtn.addEventListener('click', function() {

  var xhr = new XMLHttpRequest();
  xhr.open('post', "/gamedata", true);
  xhr.setRequestHeader('Content-type', "application/json");

  var sentObjectExample = {name: "Akhil", message: "final twilio test"};
  sentObjectString = JSON.stringify(sentObjectExample);

  xhr.send(sentObjectString);
})
