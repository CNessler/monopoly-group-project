var Card = function (name, type, caption, cardAction, amount) {
  this.name = name;
  this.type = type;
  this.caption = caption;
  this.cardAction = cardAction;
  this.amount = amount;
}

var Deck = function () {
  this.counter = 0;
}

var addMoney = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.balance += amount;
}

var loseMoney = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.balance -= amount;
}

var payOtherPlayers = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  for (var i = 0; i < allPlayers.length; i++) {
    if(allPlayers[i] != player){
      player.balance -= 50;
      allPlayers[i] += 50
    }
  }
}

var payPerHouseHotel = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  var houses=4;
  var hotels=1;
  for (var i = 0; i < player.deeds.length; i++) {
    houses += player.deeds[i].houses
    hotels += player.deeds[i].hotels
  }
  var amount = (houses * 25) + (hotels * 100);
  player.balance -= amount;
}

var advanceToNearestUtility = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  if( 12 < player.location < 28){
    player.location = 28;
  }
  else if (0 <player.location < 12){
    player.location = 12;
  }
  else {
    player.location = 12;
    player.balance +=  200;
  }
}

var goBack = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.location -= 3;
}

var advanceToCorner = function (player, allPlayers, amount, location, spaces, bank, corner, allDeeds) {
  if(corner === 0){
    player.location = 0;
    player.balance += 200;
  }

  else if (corner === 10){
    player.location = 10;
  }

  else if (corner === 20) {
    player.location = 20;
    player.balance += bank.freeParking;
    bank.freeParking = 0;
  }

  else {
    player.location = 10;
    player.inJail = true;
  }
}

var goTo = function (player, allPlayers, amount, location, spaces, bank, corner, allDeeds, deedName) {
  var deedLocation;
  for (var i = 0; i < allDeeds.length; i++) {
    if(allDeeds[i].name === deedName){
      deedLocation === allDeeds[i].boardIndex;
    }
  }
  if(deed.location <= player.location){
    player.balance += 200;
    player.location = deedLocation;
  }
  else {
    player.location = deedLocation;
  }
}

var getOutOfJail = function(player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.getOutOfJailFree = true;
}

var goToPivotal = function(player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.location = 39;
  if(owner.name != player.name) {
    var rentDue = allDeeds[26].rent;
    player.balance -= rentDue;
    owner.balance += rentDue;
  }
}

var goToJail = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
    player.location = 10;
    player.inJail = true;
}

var advanceToGo = function (player, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.location = 0;
  player.balance += 200;
}

Deck.prototype.shuffleDeck = function () {
  var shuffledDeck = [];

  while(shuffledDeck.length < this.cards.length) {
    var randomIndex = Math.floor(Math.random()*this.cards.length);
    if(shuffledDeck.indexOf(this.cards[randomIndex]) === -1) {
      shuffledDeck.push(this.cards[randomIndex]);
    }
  }
  return shuffledDeck;
}

Deck.prototype.drawCard = function () {
 if(this.counter < this.cards.length - 1) {
   outputCard = this.cards[this.counter];
   return [outputCard, this.counter];
 }
 else {
   outputCard = this.cards[this.counter];
   this.cards = this.shuffleDeck(this.cards);
   return [outputCard, this.cards];
 }
}

communityChestArray =
  [
    new Card("pay15", "cc", "pay 15", loseMoney, 15),
    new Card("get50", "cc", "get 50", addMoney, 50),
    new Card("get150", "cc","get 150", addMoney, 150),
    new Card("payPerHH", "cc", "pay 25 per house and 100 per hotel", payPerHouseHotel, 0),
    new Card("payEachPlayer50", "cc", "pay each player 50", payOtherPlayers, 0),
    new Card("advancetoUtil", "cc", "go to nearest util and pay 10 times die roll to owner (if owner exists)", advanceToNearestUtility, 0),
    new Card("goback3", "cc", "go back 3 spaces", goBack, 0),
    new Card("advanceToGo", "cc", "advance to go", advanceToGo, 0),
    new Card("gotoPivotal", "cc", "Go to Pivotal", goToPivotal, 0),
    new Card("getoutofjail", "cc", "Get out jail free", getOutOfJail, 0),
    new Card("gotojail", "cc", "Go directly to Jail", goToJail, 0)
  ],
chanceArray =
  [
    new Card("pay15", "chance", "pay 15", loseMoney, 15),
    new Card("get50", "chance", "get 50", addMoney, 50),
    new Card("get150", "chance","get 150", addMoney, 150),
    new Card("payPerHH", "chance", "pay 25 per house and 100 per hotel", payPerHouseHotel, 0),
    new Card("payEachPlayer50", "chance", "pay each player 50", payOtherPlayers, 0),
    new Card("advancetoUtil", "chance", "go to nearest util and pay 10 times die roll to owner (if owner exists)", advanceToNearestUtility, 0),
    new Card("goback3", "chance", "go back 3 spaces", goBack, 0),
    new Card("advanceToGo", "chance", "advance to go", advanceToCorner, 0),
    new Card("gotoPivotal", "chance", "Go to Pivotal", goToPivotal, 0),
    new Card("getoutofjail", "chance", "Get out jail free", getOutOfJail, 0),
    new Card("gotojail", "chance", "Go directly to Jail", goTo, 0)
  ]

var communityChestDeck = new Deck();
communityChestDeck.cards = communityChestArray;

var chanceDeck = new Deck();
chanceDeck.cards = chanceArray;
