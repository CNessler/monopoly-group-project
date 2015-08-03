var deeds = require('./deedConstructor.js')();
module.exports = function () {
  function Bank() {
    this.deeds = deeds;
    this.balance = 15140;
    this.houses = 32;
    this.hotels = 12;
    this.freeParking = 0;
  }
  var bank = new Bank();
  return bank;
}
