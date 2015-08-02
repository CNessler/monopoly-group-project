Player.prototype.buyDeed= function (location, bank) {
  var deed;
  bank.deeds.forEach(function (checkedDeed) {
    if(checkedDeed.boardIndex === location) {
      deed = checkedDeed;
    }
  })
  this.deeds.push(deed);
  this.balance -= deed.price;
  bank.balance += deed.price;
  deed.owner += this.name;
  for (var i = 0; i < bank.deeds.length; i++) {
    if(bank.deeds[i].boardIndex === deed.boardIndex){
      bank.deeds.splice(i, 1)
    }
  }
}

Player.prototype.payRent = function(ownerName, deed, dieRoll, allPlayers) {
  var owner;
  allPlayers.forEach(function (player) {
    player.deeds.forEach(function (checkedDeed) {
      if(checkedDeed.owner === ownerName){
        owner = player;
      }
    })
  })

  var rentDue;

  if(deed.color === "black") {
    var railroadsOwned = 1;
    owner.deeds.forEach(function (checkedDeed) {
      if(checkedDeed.color === "black") {
        railroadsOwned++;
      }
    });
    rentDue = 25 * railroadsOwned;
  }
  else if(deed.color === "orange") {
    var utilitiesOwned = 1;
    owner.deeds.forEach(function (checkedDeed) {
      if(checkedDeed.color === "orange") {
        utilitiesOwned++;
      }
    });
    if(utilitiesOwned === 1) {
      rentDue = 4 * dieRoll;
    }
    else {
      rentDue = 10 * dieRoll;
    }
  }
  else {
    rentDue = deed.rent;
  }
this.balance -= rentDue;
owner.balance += rentDue;
}

Player.prototype.payTax = function (bank) {
  if(this.location === 4){
    bank.freeParking += 30;
    this.balance -= 30;
  } else{
    bank.freeParking += 75;
    this.balance -= 75;
  }
}

// Player.prototype.addHouseHotel = function () {
//
// }
