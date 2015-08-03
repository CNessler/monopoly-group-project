
var sampleDeck = ["a", "b", "c", "d"];
var counter = 0;

var shuffleDeck = function (deck) {

  var shuffledDeck = [];

  while(shuffledDeck.length < deck.length) {
    var randomIndex = Math.floor(Math.random()*deck.length);
    if(shuffledDeck.indexOf(deck[randomIndex]) === -1) {
      shuffledDeck.push(deck[randomIndex]);
    }
  }
  deck = shuffledDeck;
  console.log(shuffledDeck);
  console.log(deck);
  return deck;
}

var drawCard = function (deck) {
  if(counter < deck.length - 1) {
    outputCard = deck[counter];
    counter+=1;
    console.log(outputCard);
    return [outputCard, counter]
  }
  else {
    outputCard = deck[counter];
    counter = 0;
    console.log(outputCard);
    return [outputCard, counter]
  }
}

var newDeck;
// looping through the deck and draw a card. Once it gets to the last index, it shuffles the deck.
for (var i = 0; i < sampleDeck.length; i++) {
  if (i < sampleDeck.length - 1){
    drawCard(sampleDeck);
    console.log("IF:", sampleDeck);
  } else {
    drawCard(sampleDeck)
    newDeck = shuffleDeck(sampleDeck);
    sampleDeck = newDeck;
    console.log("ELSE:", newDeck, sampleDeck);
  }
}
