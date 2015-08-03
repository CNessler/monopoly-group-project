// var shuffleDeck = function (deck) {
//
//  var shuffledDeck = [];
//
//  while(shuffledDeck.length < deck.length) {
//    var randomIndex = Math.floor(Math.random()*deck.length);
//    if(shuffledDeck.indexOf(deck[randomIndex]) === -1) {
//      shuffledDeck.push(deck[randomIndex]);
//    }
//  }
//  return shuffledDeck;
// }
//
// var drawCard = function (deck, counter) {
//   if(counter < deck.length - 1) {
//     outputCard = deck[counter];
//     return [outputCard, counter];
//   }
//   else {
//     outputCard = deck[counter];
//     deck = shuffleDeck(deck);
//     return [outputCard, deck];
//   }
// }
//
// var deck = ['a', 'b', 'c', 'd', 'e'];
//
// var counter = 0;
// for (var i = 0; i < 20; i++) {
//   var output = drawCard(deck, counter);
//   console.log(output);
//   if (typeof output[1] === "object") {
//     counter = 0;
//     deck = output[1];
//   }
//   else{
//     counter++;
//   }
// }

var logX = function (y) {
  console.log(y);
}

var x = 5;
for (var i = 0; i < 5; i++) {
  logX(x);
  x++;
}
