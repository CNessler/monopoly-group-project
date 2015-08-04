// module.exports = function () {

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

//   allDeeds = [
//     sp1 = new Deed('Exit Now', 60, '#9A7470', 2, "", 0, 0, 30, 1),
//     sp3 = new Deed('Merdal Investments', 60,'#9A7470', 4, "", 0, 0, 30, 3),
//     sp5 = new Deed('The Couch', 200, '#a19a9a', 25, "", 0,0,100,5),
//     sp6 = new Deed('Merx International', 100,'#FFD63D',6,"",0,0,50,6),
//     sp8 = new Deed('Revolar', 100, '#FFD63D', 6, "", 0,0,50,8),
//     sp9 = new Deed('RxAssurance', 120, '#FFD63D', 8, "", 0, 0, 50,9),
//     sp11 = new Deed('Waveland Ventures', 140, '#57A773', 10, "", 0,0,70,11),
//     sp12 = new Deed('Wifi', 200, '#FFa500', 0, "", 0,0,75,12),
//     sp13 = new Deed('Third Social', 140, '#57A773', 10, "", 0, 0, 70, 12,13),
//     sp14 = new Deed('Silicon Valley Bank', 160, '#57A773', 12, "", 0, 0,80,14),
//     sp15 = new Deed('Natural Grocers', 200, '#a19a9a', 25, "", 0, 0, 100, 15),
//     sp16 = new Deed('Givella', 180, '#EfE9F4', 14,"", 0, 0, 90, 16),
//     sp18 = new Deed('Drizly', 200, '#EfE9F4', 16, "", 0, 0, 100, 17),
//     sp19 = new Deed('Amplio Digital', 220, '#EfE9F4', 16, "", 0, 0, 100, 18),
//     sp21 = new Deed('E9 Data', 220, '#EE6352', 18, "", 0, 0, 110, 21),
//     sp23 = new Deed('GLC', 220, '#EE6352', 18, "", 0, 0, 110, 23),
//     sp24 = new Deed('Tectonic', 240, '#EE6352', 20, "", 0, 0, 120,24),
//     sp25 = new Deed('Ping Pong', 200, '#a19a9a', 25, "", 0, 0, 100, 25),
//     sp26 = new Deed('StatusPage', 260, '#08B2E3', 22, "", 0, 0, 130, 26),
//     sp27 = new Deed('Mozilla', 260, '#08B2E3', 22, "", 0, 0, 130, 27),
//     sp28 = new Deed('Wifi', 200, '#FFa500', 0, "", 0,0,75,28),
//     sp29 = new Deed('Quick Left', 260, '#08B2E3', 24, "", 0, 0, 140, 29),
//     sp31 = new Deed('Bitly', 300, '#484D6D', 26, "", 0, 0, 150, 31),
//     sp32 = new Deed('Staff Iq', 300, '#484D6D', 26, "", 0, 0, 150, 32),
//     sp34 = new Deed('Bowtie', 320, '#484D6D', 28, "", 0, 0, 160, 34),
//     sp35 = new Deed('Cornhole', 200, '#a19a9a', 25, "", 0, 0, 100, 35),
//     sp37= new Deed('Artifact Uprising', 350, '#7441A5', 35, "", 0, 0, 175, 37),
//     sp39 = new Deed('Pivotal Labs', 400, '#7441A5', 50, "", 0, 0, 200, 39)
//   ]
// //   return allDeeds
// //
// // }
