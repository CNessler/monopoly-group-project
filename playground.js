var deeds = require('./library/deedConstructor.js')()
var playerFunctions = require('./library/playerOption.js')
var bank = require('./library/bankConstructor.js')()

function Deed(name, price, color,  rent, owner, houses, hotels, mortgage, boardIndex) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.rent = rent;
  this.owner = owner;
  this.houses = houses;
  this.hotels = hotels;
  this.mortgage = mortgage;
  this.boardIndex = boardIndex;
}
var sp1 = new Deed('Colfax', 60 , 'brown', 2, null, 0, 0, 30, 1)

 function Player(name, token) {
  this.name = name;
  this.token = token;
  this.balance = 1500;
  this.inJail = false;
  this.active = true;
  this.turn = false;
  this.deeds = [];
}

var player = new Player('you', 'ship')
// console.log(bank, 'HHHHHHH');
var buyDeed = playerFunctions.buyDeed(player, sp1, bank);
console.log(buyDeed);
