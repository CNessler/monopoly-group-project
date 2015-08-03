
//   var shuffledDeck = [];
//
//   while(shuffledDeck.length < deck.length) {
//     var randomIndex = Math.floor(Math.random()*deck.length);
//     if(shuffledDeck.indexOf(deck[randomIndex]) === -1) {
//       shuffledDeck.push(deck[randomIndex]);
//     }
//   }
//   return shuffledDeck;
// }
//
// var deck = ['a', 'b', 'c', 'd', 'e'];
// var counter = 0;
//
//
// var drawCard = function (deck, counter) {
//  if(counter < deck.length - 1) {
//    outputCard = deck[counter];
//    return [outputCard, counter];
//  }
//  else {
//    outputCard = deck[counter];
//    deck = shuffleDeck(deck);
//    return [outputCard, deck];
//  }
// }
//
// //

// for (var i = 0; i < 100; i++) {
//  var output = drawCard(deck, counter);
//  console.log(output[0]);
//
//  if (typeof output[1] === "object") {
//    counter = 0;
//    deck = output[1];
//  }
//  else{
//    counter++;
//  }
// }

// var shuffleDeck = function (deck) {
//
//   var shuffledDeck = [];
//
//   while(shuffledDeck.length < deck.length) {
//     var randomIndex = Math.floor(Math.random()*deck.length);
//     if(shuffledDeck.indexOf(deck[randomIndex]) === -1) {
//       shuffledDeck.push(deck[randomIndex]);
//     }
//   }
//   deck = shuffledDeck;
//   return deck;
// }
//
// var sampleDeck = ["a", "b", "c", "d"];
// var counter = 0;
//
//
// var drawCard = function (deck) {
//   if(counter < deck.length - 1) {
//     outputCard = deck[counter];
//     counter+=1;
//     return [outputCard, counter]
//   }
//   else {
//     outputCard = deck[counter];
//     counter = 0;
//     return [outputCard, counter]
//   }
// }
//
//
// //Push this into selectingPlayerFunction
// var newDeck;
// // looping through the deck and draw a card. Once it gets to the last index, it shuffles the deck.
// for (var i = 0; i < 100; i++) {
//   if (i < sampleDeck.length - 1){
//     console.log(drawCard(sampleDeck)[0]);
//   } else {
//     drawCard(sampleDeck)
//     newDeck = shuffleDeck(sampleDeck);
//   }
// }

var Card = function (name, type, caption) {
  this.name = name;
  this.type = type;
  this.caption = caption;
}

var Deck = function () {
  this.counter = 0;
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
chanceArray =
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

var communityChestDeck = new Deck();
communityChestDeck.cards = communityChestArray;

var chanceDeck = new Deck();
chanceDeck.cards = chanceArray;

for (var i = 0; i < 100; i++) {
   var output = chanceDeck.drawCard();
   console.log(output[0].name);

   if (typeof output[1] === "object") {
     chanceDeck.counter = 0;
   }
   else{
     chanceDeck.counter += 1;
   }
  }
