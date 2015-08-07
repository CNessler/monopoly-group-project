var weatherXHR = new XMLHttpRequest;

weatherXHR.open('get', 'https://api.wunderground.com/api/4d5eeb69540ad8e6/conditions/q/CO/Denver.json');
weatherXHR.addEventListener('load', function() {
var response = weatherXHR.response;
var weatherData = JSON.parse(response);
var temperature = weatherData.current_observation.temp_f;
var feelsLike = weatherData.current_observation.feelslike_f;
var weatherDescription = weatherData.current_observation.weather;


// console.log(temperature, "temp", feelsLike, weatherDescription);
// console.log(weatherData.current_observation);
var good = ''
var bad = ''
goodWeather = ['sunnny', 'clear', 'cloudy']
badWeather = ['rain', 'snow', 'storm']
for (var i = 0; i < goodWeather.length; i++) {
var weatherContain = weatherDescription.toLowerCase().includes(goodWeather[i])
// console.log(weatherContain);
if(weatherContain === true)
good = 'Go play outside!'
}
for (var i = 0; i < badWeather.length; i++) {
  var weatherContain = weatherDescription.toLowerCase().includes(badWeather[i])
  if(weatherContain === true)
  bad = 'Better stay inside and play Monopoly.'
}
// console.log(good, bad);
var weatherID = document.getElementById('weatherAPI');
weatherID.innerHTML = 'The current forecast for today is ' + weatherDescription + '.  It feels like ' + feelsLike + '\xB0' + '. ' + good + bad;


})


weatherXHR.send(null);
var rollButton = document.getElementById('roll');
var index = 0;
var turn = document.getElementById('turn')
var misc = [12, 28, 5, 15, 25, 35]

var tokens = [
 {name: "hat", url: '../stylesheets/images/monopoly_token_hat.png'},
 {name: "ship", url: '../stylesheets/images/ship.png'},
 {name: "dog", url: '../stylesheets/images/dog.png'},
 {name: "car", url: '../stylesheets/images/car.png'},
 {name: "shoe", url: '../stylesheets/images/shoe.png'},
 {name: "thimble", url: '../stylesheets/images/thimble.png'},
 {name: "wheelbarrow", url: '../stylesheets/images/wheelbarrow.png'},
 {name: "iron", url: '../stylesheets/images/iron.png'}
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
function startGame() {
  var data = document.getElementById('playerData').childNodes;
  for (var i = 0; i < data.length; i++) {
    var singlePlayer = data[i].innerHTML.split(';');
    var player = new Player(singlePlayer[0], singlePlayer[1])
    getToken(player);
    player.location = 0;
    players.push(player);
  }
  turn.innerHTML = players[index].name + "'s Turn!"
}


function getMove(player) {

 var move = Math.floor(Math.random()*10) + 2;
// var move = 7;
 var goEl = player.location + move
 if (goEl === 30){
  //  alert('Head to the elevator');
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

startGame();

rollButton.addEventListener("click", function() {

  var sentObjectExample = {name: "Akhil", message: "my twilio test"}

  var player = players[index]
  var current = document.getElementById('sp' + player.location)
  var dieRoll = getMove(player);

  var existing = current.childNodes;
  console.log(existing, "EXISTING BEFORE");
  for (var i = 0; i < existing.length; i++) {
    if (existing[i].id === players[index].name) {
      existing[i].remove();
    }
  }
  // console.log(existing, "EXISTING AFTER");

  var moveTo = document.getElementById('sp' + player.location)
  var token = document.createElement('div');
  token.setAttribute("class", "token");
  token.setAttribute("id", player.name);
  token.style.backgroundImage = "url('" + player.tokensrc + "')";
  moveTo.appendChild(token)

  selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);
});

var sendGameDataBtn = document.getElementById('twilioCall');
sendGameDataBtn.addEventListener('click', function() {

  var xhr = new XMLHttpRequest();
  xhr.open('post', "/gamedata", true);
  xhr.setRequestHeader('Content-type', "application/json");

  var sentObjectExample = {name: "Akhil", message: "HI CLAIRE!!!!"};
  sentObjectString = JSON.stringify(sentObjectExample);

  xhr.send(sentObjectString);
})
