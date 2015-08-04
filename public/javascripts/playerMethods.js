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
}

Player.prototype.payRent = function(owner, deed, dieRoll, allPlayers) {

  var rentDue;
  if(deed.color === "#a19a9a") {
    var railroadsOwned = 1;
    for (var i = 0; i < owner.deeds.length; i++) {
      if(owner.deeds[i].color === "#a19a9a") {
        railroadsOwned++;
      }
    }
    // owner.deeds.forEach(function (checkedDeed) {
    //   if(checkedDeed.color === "#a19a9a") {
    //     railroadsOwned++;
    //   }
    // });
    rentDue = 25 * railroadsOwned;
  }
  else if(deed.color === "#FFa500") {
    var utilitiesOwned = 1;
    owner.deeds.forEach(function (checkedDeed) {
      if(checkedDeed.color === "#FFa500") {
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
