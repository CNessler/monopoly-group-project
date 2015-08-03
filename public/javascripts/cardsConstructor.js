var Card = function (name, type, caption) {
  this.name = name;
  this.type = type;
  this.caption = caption;
}

communityChestDeck =
  [
    new Card("pay15", "cc", "pay 15"),
    new Card("get50", "cc", "get 50"),
    new Card("get150", "cc","get 150"),
    new Card("payPerHH", "cc", "pay 25 per house and 100 per hotel"),
    new Card("payEachPlayer50", "cc", "pay each player 50"),
    new Card("advancetoUtil", "cc", "go to nearest util and pay 10 times die roll to owner (if owner exists)" ),
    new Card("goback3", "cc", "go back 3 spaces"),
    new Card("advanceToGo", "cc", "advance to go"),
    new Card("gotoPivotal", "cc", "Go to Pivotal"),
    new Card("getoutofjail", "cc", "Get out jail free"),
    new Card("gotojail", "cc", "Go directly to Jail")
  ],

chanceDeck =
  [
    new Card("pay15", "chance", "pay 15"),
    new Card("get50", "chance", "get 50"),
    new Card("get150", "chance","get 150"),
    new Card("payPerHH", "chance", "pay 25 per house and 100 per hotel"),
    new Card("payEachPlayer50", "chance", "pay each player 50"),
    new Card("advancetoUtil", "chance", "go to nearest util and pay 10 times die roll to owner (if owner exists)" ),
    new Card("goback3", "chance", "go back 3 spaces"),
    new Card("advanceToGo", "chance", "advance to go"),
    new Card("gotoPivotal", "chance", "Go to Pivotal"),
    new Card("getoutofjail", "chance", "Get out jail free"),
    new Card("gotojail", "chance", "Go directly to Jail")
  ]

Card.prototype.addMoney = function (player, bank, amount) {
  player.balance += amount;
  bank.balance -= amount;
}

Card.prototype.loseMoney = function (player, bank, amount) {
  player.balance -= amount;
  bank.balance += amount;
}

Card.prototype.payOtherPlayers = function (allPlayers, player) {
  for (var i = 0; i < allPlayers.length; i++) {
    if(allPlayers[i] != player){
      player.balance -= 50;
      allPlayers[i] += 50
    }
  }
}

Card.prototype.payPerHouseHotel = function (player, bank) {
  var houses=0;
  var hotels=0;
  for (var i = 0; i < player.deeds.length; i++) {
    houses += player.deeds[i].houses
    hotels += player.deeds[i].hotels
  }
  var amount = (houses * 25) + (hotels * 100);
  player.balance -= amount;
  bank.balance += amount;
}

Card.prototype.advanceToNearestUtility = function (location, allPlayers, player, bank) {
  if( 12 < player.location < 28){
    player.location = 28;
  } else if (0 <player.location < 12){
    player.location = 12;
  } else {
    player.location = 12;
    player.balance +=  200;
    bank.balance -= 200;
  }
}

Card.prototype.goBack = function (player, spaces) {
  player.location -= spaces;
}

Card.prototype.advanceToCorner = function (player, bank, corner) {
  if(corner === 0){
    player.location = 0;
    player.balance += 200;
    bank.balance -= 200;
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

Card.prototype.goTo = function (player, allDeeds, deedName) {
  var deedLocation;
  for (var i = 0; i < allDeeds.length; i++) {
    if(allDeeds[i].name === deedName){
      deedLocation === allDeeds[i].boardIndex;
    }
  }
  if(deed.location <= player.location){
    player.balance += 200;
    player.location = deedLocation;
  } else {
    player.location = deedLocation;
  }

Card.prototype.getOutOfJail = function(player) {
  player.getOutOfJailFree = true;
}

var shuffleDeck = function (deck) {

  var shuffledDeck = [];

  while(shuffledDeck.length < deck.length) {
    var randomIndex = Math.floor(Math.random()*deck.length);
    if(shuffledDeck.indexOf(deck[randomIndex]) === -1) {
      shuffledDeck.push(deck[randomIndex]);
    }
  }
  return shuffledDeck;
}

var drawCard = function (deck, discardedCardDeck) {
  if(deck.length > 0) {
    topCard = deck[0]
    outputCard = topCard;
    discardedCard = topCard;
    deck.splice(0,1);
  }
  else {
    deck = shuffleDeck(discardedCards);
    topCard = deck[0];
    outputCard = topCard;
    discardedCard = topCard;
    deck.splice(0,1);
  }
  return (outputCard, discardedCard);
}
