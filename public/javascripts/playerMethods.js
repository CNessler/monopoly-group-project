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
  deed.owner = this.name;
  console.log(deed.owner, "Deed Owner");
}

Player.prototype.payRent = function(owner, deed, dieRoll, allPlayers) {

  console.log("now this happens", owner, "owner should be logged");
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

Player.prototype.buyHouse = function (deed, allDeeds, houses) {
  var monopolyColor = deed.color;
  if (monopolyColor != "black" || monopolyColor != "orange") {
    var monopolyCounter = 0;
    allDeeds.forEach(function (eachDeed) {
      if(eachDeed.color = monopolyColor) {
        monopolyCounter++;
      }
    });
    var playerMonopolyCounter = 0;
    this.deeds.forEach(function (playerDeed) {
      if(playerDeed.color === monopolyColor) {
        playerMonopolyCounter++;
      }
    })
    if(playerMonopolyCounter === monopolyCounter) {
      playerPurchaseCapacity = this.balance - houses*50;
      if(player.hotels === 0 && playerPurchaseCapacity >= 0) {
        this.houses += houses;
        this.balance -= houses*50;
      }
      if (player.hotels > 0) {
        console.log('you already have a hotel here')
      }
      if (playerPurchaseCapacity < 0) {
        for (var i = houses; i >= 0; i--) {
          if(this.balance - (i*50) > 0) {
            console.log("you can afford "+ houses + " houses");
          }
          else {
            i--;
          }
        }
      }
    }
  }
}
