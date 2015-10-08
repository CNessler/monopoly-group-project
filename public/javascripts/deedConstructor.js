function Deed(name, price, color,  rent, owner, houses, hotels, mortgageValue, boardIndex, houseMult) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.baseRent = rent;
  this.rent = rent;
  this.owner = owner;
  this.houses = houses;
  this.hotels = hotels;
  this.mortgageValue = mortgageValue;
  this.boardIndex = boardIndex;
  this.mortgaged = false;
  this.housePrice = 50 * houseMult;
}

var allDeeds = [
  sp1  = new Deed('Exit Now'            , 60, '#9A7470' , 2 , "", 0, 0, 30,   1, 1),
  sp3  = new Deed('Merdal Investments'  , 60, '#9A7470' , 4 , "", 0, 0, 30,   3, 1),
  sp5  = new Deed('The Couch'           , 200, '#a19a9a', 25, "", 0, 0, 100,  5, 2),
  sp6  = new Deed('Merx International'  , 100, '#FFD63D', 6 , "", 0, 0, 50,   6, 1),
  sp8  = new Deed('Revolar'             , 100, '#FFD63D', 6 , "", 0, 0, 50,   8, 1),
  sp9  = new Deed('RxAssurance'         , 120, '#FFD63D', 8 , "", 0, 0, 50,   9, 1),
  sp11 = new Deed('Waveland Ventures'   , 140, '#57A773', 10, "", 0, 0, 70,  11, 1),
  sp12 = new Deed('WiFi'                , 200, '#FFa500', 0 , "", 0, 0, 75,  12, 2),
  sp13 = new Deed('Third Social'        , 140, '#57A773', 10, "", 0, 0, 70,  13, 1),
  sp14 = new Deed('Silicon Valley Bank' , 160, '#57A773', 12, "", 0, 0, 80,  14, 1),
  sp15 = new Deed('Natural Grocers'     , 200, '#a19a9a', 25, "", 0, 0, 100, 15, 2),
  sp16 = new Deed('Givella'             , 180, '#EfE9F4', 14, "", 0, 0, 90,  16, 2),
  sp18 = new Deed('Drizly'              , 200, '#EfE9F4', 16, "", 0, 0, 100, 18, 2),
  sp19 = new Deed('Amplio Digital'      , 220, '#EfE9F4', 16, "", 0, 0, 100, 19, 2),
  sp21 = new Deed('E9 Data'             , 220, '#EE6352', 18, "", 0, 0, 110, 21, 3),
  sp23 = new Deed('GLC'                 , 220, '#EE6352', 18, "", 0, 0, 110, 23, 3),
  sp24 = new Deed('Tectonic'            , 240, '#EE6352', 20, "", 0, 0, 120, 24, 3),
  sp25 = new Deed('Ping Pong Table'     , 200, '#a19a9a', 25, "", 0, 0, 100, 25, 2),
  sp26 = new Deed('StatusPage'          , 260, '#08B2E3', 22, "", 0, 0, 130, 26, 3),
  sp27 = new Deed('Mozilla'             , 260, '#08B2E3', 22, "", 0, 0, 130, 27, 3),
  sp28 = new Deed('Keg'                 , 200, '#FFa500', 0 , "", 0, 0, 75,  28, 2),
  sp29 = new Deed('Quick Left'          , 260, '#08B2E3', 24, "", 0, 0, 140, 29, 3),
  sp31 = new Deed('Bitly'               , 300, '#484D6D', 26, "", 0, 0, 150, 31, 4),
  sp32 = new Deed('Staff IQ'            , 300, '#484D6D', 26, "", 0, 0, 150, 32, 4),
  sp34 = new Deed('Bowtie'              , 320, '#484D6D', 28, "", 0, 0, 160, 34, 4),
  sp35 = new Deed('Cornhole'            , 200, '#a19a9a', 25, "", 0, 0, 100, 35, 2),
  sp37 = new Deed('Artifact Uprising'   , 350, '#7441A5', 35, "", 0, 0, 175, 37, 4),
  sp39 = new Deed('Pivotal Labs'        , 400, '#7441A5', 50, "", 0, 0, 200, 39, 4)
]
console.log(allDeeds, 'these are the deeds');
