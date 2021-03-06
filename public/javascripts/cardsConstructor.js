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

var addMoney = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.balance += amount;
}

var loseMoney = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.balance -= amount;
}

var payOtherPlayers = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  for (var i = 0; i < allPlayers.length; i++) {
    if(allPlayers[i] != player){
      player.balance -= 50;
      allPlayers[i] += 50
    }
  }
}

var payPerHouseHotel = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  var houses=0;
  var hotels=0;
  for (var i = 0; i < player.deeds.length; i++) {
    houses += player.deeds[i].houses
    hotels += player.deeds[i].hotels
  }
  var amount = (houses * 25) + (hotels * 100);
  player.balance -= amount;
}

var advanceToNearestUtility = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
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

var goBack = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
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

var getOutOfJail = function(player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  player.getOutOfJailFree = true;
}

var goToPivotal = function(player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
  redirectToken(39, player);
  var myDialog2 = document.getElementById('myDialog2');
  myDialog2.innerHTML = "";
  var caption = document.createElement('p')
  var closeModal = document.createElement('button');
  var closeModal2 = document.createElement('button');
  console.log(allDeeds[27], 'deed');
  console.log(player, 'player');
  if(allDeeds[27].owner != "" && allDeeds[27].owner != player.name) {
    console.log(player.balance);
    if(player.balance < allDeeds[27].rent){
      console.log('poor poor player');
      myDialog2.appendChild(caption).innerHTML = 'You are broke'
      myDialog2.appendChild(closeModal).innerHTML = 'Mortgage'

      myDialog2.showModal();


      closeModal.addEventListener('click', function () {
        updatePlayerDash(player);
        myDialog2.close();
        // playerDash(player);
        myDialog.innerHTML = '';
      })

    }
    else {
      console.log('can pay rent');
      var rentDue = allDeeds[27].rent;
      player.balance -= rentDue;
      var pivotalOwner;
      allPlayers.forEach(function (eachPlayer) {
        eachPlayer.deeds.forEach(function (checkedDeed) {
          if(checkedDeed.boardIndex === 39) {
            pivotalOwner = eachPlayer;
          }
        })
        pivotalOwner.balance += rentDue;
      })
    }
  }
// else if{
//   redirectToken(39, player);
//   player.location = 39;
//   var myDialog2 = document.getElementById('myDialog2');
//   myDialog2.innerHTML = "";
//   var caption = document.createElement('p')
//   var closeModal = document.createElement('button');
//   var closeModal2 = document.createElement('button');
  //
  // if (player.balance < allDeeds[27].price){
  //   myDialog.appendChild(caption).innerHTML = 'You cannot afford this property'
  //   myDialog.appendChild(closeModal).innerHTML = 'Sorry bout ya'
  //
  //   myDialog.showModal();
  //
  //   closeModal.addEventListener('click', function () {
  //     playerDash(player);
  //     myDialog.close();
  //     myDialog.innerHTML = '';
  //     nextPlayer();
  //   })
  // }
  else if(allDeeds[27].owner === ""){
    console.log('can buy property');
    if(player.balance < allDeeds[27].price){
      console.log('poor poor player');
      myDialog2.appendChild(caption).innerHTML = 'You are too poor for Pivotal'
      myDialog2.appendChild(closeModal).innerHTML = 'Ok'

      myDialog2.showModal();


      closeModal.addEventListener('click', function () {
        updatePlayerDash(player);
        myDialog2.close();
        // playerDash(player);
        myDialog.innerHTML = '';
      })

    }
    else {
      myDialog2.appendChild(caption).innerHTML = 'Property Available: ' + allDeeds[27].name
      myDialog2.appendChild(closeModal).innerHTML = 'Do Nothing'
      myDialog2.appendChild(closeModal2).innerHTML = 'Buy Property ($' + allDeeds[27].price + ')'

      myDialog2.showModal();


      closeModal.addEventListener('click', function () {
        updatePlayerDash(player);
        myDialog2.close();
        // updatePlayerDash(player);
        myDialog.innerHTML = '';
      })

      closeModal2.addEventListener('click', function () {
        player.buyDeed(39, bank);
        updatePlayerDash(player);
        myDialog2.close();
        myDialog.innerHTML = '';
      })
    }
  }
  else {
    console.log('player is owner');
    myDialog2.appendChild(caption).innerHTML = 'You own this property'
    myDialog2.appendChild(closeModal).innerHTML = 'Ok'

    myDialog2.showModal();

    closeModal.addEventListener('click', function () {
      updatePlayerDash(player);
      myDialog2.close();
      // updatePlayerDash(player);
      myDialog.innerHTML = '';
    })
  }
}

var goToJail = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
    redirectToken(10, player)
    player.location = 10;
    player.inJail = true;
}

var advanceToGo = function (player, owner, allPlayers, amount, location, spaces, bank, allDeeds) {
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
    new Card("pay150", "cc", "Community Chest: You owe $15", loseMoney, 15),
    new Card("get50", "cc", "Community Chest: You win $50", addMoney, 50),
    new Card("get150", "cc","Community Chest: You win $150", addMoney, 150),
    new Card("payPerHH", "cc", "Community Chest: Pay $25 per house and $100 per hotel", payPerHouseHotel, 0),
    new Card("payEachPlayer50", "cc", "Community Chest: Pay each player $50", payOtherPlayers, 0),
    new Card("advancetoUtil", "cc", "Community Chest: Go to nearest utility and pay 10 times the amount on the dice to owner", advanceToNearestUtility, 0),
    new Card("goback3", "cc", "Community Chest: Go back 3 spaces", goBack, 0),
    new Card("advanceToGo", "cc", "Community Chest: Advance to Go!", advanceToGo, 0),
    new Card("gotoPivotal", "cc", "Community Chest: Go to Pivotal Labs", goToPivotal, 0),
    new Card("getoutofjail", "cc", "Community Chest: 'Escape from the elevator for FREE!' card", getOutOfJail, 0),
    new Card("gotojail", "cc", "Community Chest: Uh oh! You're stuck in the elevator.", goToJail, 0)
  ],

chanceArray =
  [
    new Card("gotoPivotal", "chance", "Chance: Go to Pivotal Labs", goToPivotal, 0),
    new Card("getoutofjail", "chance", "Chance: 'Escape from the elevator for FREE!' card", getOutOfJail, 0),
    new Card("gotojail", "chance", "Chance: Uh oh! You're stuck in the elevator.", goToJail, 0),
    new Card("pay15", "chance", "Chance: You owe $15", loseMoney, 15),
    new Card("get50", "chance", "Chance: You win $50", addMoney, 50),
    new Card("get150", "chance","Chance: You win $150", addMoney, 150),
    new Card("payPerHH", "chance", "Chance: Pay $25 per house and $100 per hotel", payPerHouseHotel, 0),
    new Card("payEachPlayer50", "chance", "Chance: Pay each player $50", payOtherPlayers, 0),
    new Card("advancetoUtil", "chance", "Chance: Go to nearest utility and pay 10 times the amount on the dice to owner", advanceToNearestUtility, 0),
    new Card("goback3", "chance", "Chance: Go back 3 spaces", goBack, 0),
    new Card("advanceToGo", "chance", "Chance: Advance to Go!", advanceToGo, 0)
  ]

var communityChestDeck = new Deck();
communityChestDeck.cards = communityChestArray;

var chanceDeck = new Deck();
chanceDeck.cards = chanceArray;
