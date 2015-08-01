module.exports = function () {

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

  allDeeds = [
  sp1 = new Deed('Colfax', 60, 'brown', 2, null, 0, 0, 30, 1),
  sp3 = new Deed('38th', 60,'brown', 4, null, 0, 0, 30, 3),
  sp5 = new Deed('Couch', 200, 'black', 25, null, 0,0,100,5),
  // sp5.railroad = true
  sp6 = new Deed('Littleton', 100,'yellow',6,null,0,0,50,6),
  sp8 = new Deed('Stapleton', 100, 'yellow', 6, null, 0,0,50,8),
  sp9 = new Deed('Wheat Ridge', 120, 'yellow', 8, null, 0, 0, 50,9),
  sp11 = new Deed('Breckendridge', 140, 'green', 10, null, 0,0,70,11),
  sp12 = new Deed('Wifi', 200, 'orange', 0, null, 0,0,75,12),
  sp13 = new Deed('Vail', 140, 'green', 10, null, 0, 0, 70, 12,13),
  sp14 = new Deed('Copper', 160, 'green', 12, null, 0, 0,80,14),
  sp15 = new Deed('Natural Grocers', 200, 'black', 25, null, 0, 0, 100, 15),
  // sp15.railroad = true;
  sp16 = new Deed('Silverton', 180, 'gray', 14,null, 0, 0, 90, 16),
  sp17 = new Deed('Grand Junction', 200, 'gray', 16, null, 0, 0, 100, 17),
  sp18 = new Deed('Aspen', 220, 'gray', 16, null, 0, 0, 100, 18),
  sp21 = new Deed('Colorado River', 220, 'red', 18, null, 0, 0, 110, 21),
  sp23 = new Deed('Fish', 220, 'red', 18, null, 0, 0, 110, 23),
  sp24 = new Deed('Capitol', 240, 'red', 20, null, 0, 0, 120,24),
  sp25 = new Deed('Pong', 200, 'black', 25, null, 0, 0, 100, 25),
  // sp25.railroad = true;
  sp26 = new Deed('Mint', 260, 'blue', 22, null, 0, 0, 130, 26),
  sp27 = new Deed('Red Rocks', 260, 'blue', 22, null, 0, 0, 130, 27),
  sp28 = new Deed('Wifi', 200, 'orange', 0, null, 0,0,75,28),
  sp29 = new Deed('Rockies', 260, 'blue', 24, null, 0, 0, 140, 29),
  sp31 = new Deed('Nuggets', 300, 'navy', 26, null, 0, 0, 150, 31),
  sp32 = new Deed('Broncos', 300, 'navy', 26, null, 0, 0, 150, 32),
  sp34 = new Deed('Crested Butte', 320, 'navy', 28, null, 0, 0, 160, 34),
  sp35 = new Deed('Cornhole', 200, 'black', 25, null, 0, 0, 100, 35),
  // sp35.railroad = true;
  sp37= new Deed('Evergreen', 350, 'purple', 35, null, 0, 0, 175, 37),
  sp37 = new Deed('Winter Park', 400, 'purple', 50, null, 0, 0, 200, 39)
  ]
  return allDeeds

}
