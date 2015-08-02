module.exports = function() {
var Player = require('./playerConstructor.js').Player

  Player.prototype.buyDeed= function (deed, bank) {
    this.deeds.push(deed);
    this.balance -= deed.price;
    bank.balance += deed.price;
    for (var i = 0; i < bank.deeds.length; i++) {
      if(bank.deeds[i].boardIndex === deed.boardIndex){
        bank.deeds.splice(i, 1)
      }
    }
  }

  Player.prototype.payRent = function(owner, deed, dieVal) {

    var rentDue;

    if(deed.color === "black") {
      var railroadsOwned = 1;
      owner.deeds.forEach(function (checkedDeed) {
        if(checkedDeed.color === "black") {
          railroadsOwned++;
        }
      })
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
        rentDue = 4 * dieVal;
      }
      else {
        rentDue = 10 * dieVal;
      }
    }

    else {
      rentDue = deed.rent;
    }

  this.balance -= rentDue;
  owner.balance += rentDue; 

  }

  return Player.prototype;
}
