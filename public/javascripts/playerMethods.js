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
}

Player.prototype.payRent = function(owner, deed, dieRoll, allPlayers) {
  if(!deed.mortgaged) {
    var rentDue;
    if(deed.color === "#a19a9a") {
      var railroadsOwned = 1;
      for (var i = 0; i < owner.deeds.length; i++) {
        if(owner.deeds[i].color === "#a19a9a") {
          railroadsOwned++;
        }
      }
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

  if(deed.mortgaged === false) {
    var monopolyColor = deed.color;
    if (monopolyColor != "black" || monopolyColor != "orange") {
      var monopolyCounter = 0;
      allDeeds.forEach(function (eachDeed) {
        if(eachDeed.color === monopolyColor) {
          monopolyCounter++;
        }
      });
      var playerMonopolyCounter = 0;
      this.deeds.forEach(function (playerDeed) {
        if(playerDeed.color === monopolyColor && playerDeed.mortgaged === false) {
          playerMonopolyCounter++;
        }
      })
      if(playerMonopolyCounter === monopolyCounter) {
        playerPurchaseCapacity = this.balance - houses*50;
        if(deed.hotels === 0 && playerPurchaseCapacity >= 0) {
          deed.houses += houses;
          this.balance -= houses*50;

          var multiplicationFactor = 5;
          for (var i = 1; i < houses; i++) {
            multiplicationFactor+= 10;
          }

          deed.rent = deed.rent * multiplicationFactor;
        }
        if (deed.hotels > 0) {
        }
        if (playerPurchaseCapacity < 0) {
          for (var i = houses; i >= 0; i--) {
            if(this.balance - (i*50) > 0) {
            }
            else {
              i--;
            }
          }
        }
      }
    }
  }
}

Player.prototype.buyHotel = function (deed, allDeeds) {
  if(deed.mortgaged === false) {
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
        if(playerDeed.color === monopolyColor && playerDeed.mortgaged === false) {
          playerMonopolyCounter++;
        }
      })
      if(playerMonopolyCounter === monopolyCounter) {
        if(this.houses > 0) {
          this.houses = 0;
          this.hotels = 1;
          this.balance -= 300;
          deed.hotels = 1;
          deed.rent = deed.rent*60;
        }
        else {
          this.hotels = 1;
          deed.hotels = 1;
          this.balance -= 300;
          deed.rent = deed.rent*60;
        }
      }
    }
  }
}

Player.prototype.mortgageDeed = function (deed) {
  if(deed.hotels > 0 || deed.houses > 0) {
    this.balance += 0.5*(deed.hotels * 100);
    this.balance += 0.5*(deed.houses * 50);
    this.balance += deed.mortgageValue;
    deed.mortgaged = true;
  }
}

Player.prototype.liftMortgage = function (deed) {
  deed.mortgaged = false;
  player.bankBalance -= 1.1*(deed.mortgageValue);
}

Player.prototype.pickUpFreeParking = function (bank) {
  this.balance += bank.freeParking;
  bank.freeParking = 0;
}

Player.prototype.checkBalanceDues = function (owner, expenditure) {
  var mortgageAvailable = this.deeds.length - 1;
  for (var i = 0; i < this.deeds.length; i++) {
    if(this.deeds[i].mortgaged === true){
      mortgageAvailable --;
    }
  }
}
