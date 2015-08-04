// function Deed(name, price, color,  rent, owner, houses, hotels, mortgage, boardIndex) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.rent = rent;
//   this.owner = owner;
//   this.houses = houses;
//   this.hotels = hotels;
//   this.mortgage = mortgage;
//   this.boardIndex = boardIndex;
//   this.mor
// }


  function Deed(name, price, color,  rent, owner, houses, hotels, mortgageValue, boardIndex) {
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
  }


function Bank() {
  this.deeds = allDeeds;
  this.balance = 15140;
  this.houses = 32;
  this.hotels = 12;
  this.freeParking = 0;
}

var allDeeds = [
  sp1  = new Deed('Exit Now'            , 60, '#9A7470' , 2 , "", 0, 0, 30,   1),
  sp3  = new Deed('Merdal Investments'  , 60, '#9A7470' , 4 , "", 0, 0, 30,   3),
  sp5  = new Deed('The Couch'           , 200, '#a19a9a', 25, "", 0, 0, 100,  5),
  sp6  = new Deed('Merx International'  , 100, '#FFD63D', 6 , "", 0, 0, 50,   6),
  sp8  = new Deed('Revolar'             , 100, '#FFD63D', 6 , "", 0, 0, 50,   8),
  sp9  = new Deed('RxAssurance'         , 120, '#FFD63D', 8 , "", 0, 0, 50,   9),
  sp11 = new Deed('Waveland Ventures'   , 140, '#57A773', 10, "", 0, 0, 70,  11),
  sp12 = new Deed('WiFi'                , 200, '#FFa500', 0 , "", 0, 0, 75,  12),
  sp13 = new Deed('Third Social'        , 140, '#57A773', 10, "", 0, 0, 70,  13),
  sp14 = new Deed('Silicon Valley Bank' , 160, '#57A773', 12, "", 0, 0, 80,  14),
  sp15 = new Deed('Natural Grocers'     , 200, '#a19a9a', 25, "", 0, 0, 100, 15),
  sp16 = new Deed('Givella'             , 180, '#EfE9F4', 14, "", 0, 0, 90,  16),
  sp18 = new Deed('Drizly'              , 200, '#EfE9F4', 16, "", 0, 0, 100, 18),
  sp19 = new Deed('Amplio Digital'      , 220, '#EfE9F4', 16, "", 0, 0, 100, 19),
  sp21 = new Deed('E9 Data'             , 220, '#EE6352', 18, "", 0, 0, 110, 21),
  sp23 = new Deed('GLC'                 , 220, '#EE6352', 18, "", 0, 0, 110, 23),
  sp24 = new Deed('Tectonic'            , 240, '#EE6352', 20, "", 0, 0, 120, 24),
  sp25 = new Deed('Ping Pong Table'     , 200, '#a19a9a', 25, "", 0, 0, 100, 25),
  sp26 = new Deed('StatusPage'          , 260, '#08B2E3', 22, "", 0, 0, 130, 26),
  sp27 = new Deed('Mozilla'             , 260, '#08B2E3', 22, "", 0, 0, 130, 27),
  sp28 = new Deed('Keg'                 , 200, '#FFa500', 0 , "", 0, 0, 75,  28),
  sp29 = new Deed('Quick Left'          , 260, '#08B2E3', 24, "", 0, 0, 140, 29),
  sp31 = new Deed('Bitly'               , 300, '#484D6D', 26, "", 0, 0, 150, 31),
  sp32 = new Deed('Staff IQ'            , 300, '#484D6D', 26, "", 0, 0, 150, 32),
  sp34 = new Deed('Bowtie'              , 320, '#484D6D', 28, "", 0, 0, 160, 34),
  sp35 = new Deed('Cornhole'            , 200, '#a19a9a', 25, "", 0, 0, 100, 35),
  sp37 = new Deed('Artifact Uprising'   , 350, '#7441A5', 35, "", 0, 0, 175, 37),
  sp39 = new Deed('Pivotal Labs'        , 400, '#7441A5', 50, "", 0, 0, 200, 39)
]

var bank = new Bank();

var selectPlayerFunction = function (location, player, bank, dieRoll, allPlayers, chanceDeck) {

  var getOwner = function (allPlayers) {
    var owner;
    allPlayers.forEach(function (eachPlayer) {
      eachPlayer.deeds.forEach(function (checkedDeed) {
        if(checkedDeed.owner === eachPlayer.name){
          owner = eachPlayer;
        }
      })
    })
    return owner;
  }

  var owner = getOwner(allPlayers);

  if(player.injail===true) {
    if(player.getOutOfJailFree === true) {
      player.injail = false;
      player.getOutOfJailFree = false;
    }
    else if (player.jailCounter <= 3) {
      nextPlayer();
    } else  {
      player.jailCounter = 0;
      player.injail = false;
    }
  }

  if(player.inJail === false) {

    var myDialog = document.getElementById('myDialog');
      var caption = document.createElement('p')
      var closeModal = document.createElement('button');
      var closeModal2 = document.createElement('button');

    var deed;
    bank.deeds.forEach(function (checkedDeed) {
      if(checkedDeed.boardIndex === location) {
        deed = checkedDeed;
      }
    })

    if(location === 4 || location === 38) {
      console.log("tax");
      myDialog.appendChild(caption).innerHTML = "Pay Fine";
      myDialog.appendChild(closeModal).innerHTML = 'Pay Fine';

      myDialog.showModal();

      closeModal.addEventListener('click', function () {
        player.payTax(bank);
        playerDash(player);
        myDialog.close();
        myDialog.innerHTML = '';
      })
    }

    else if( location === 2  || location === 7  || location === 17 || location === 22 || location === 33 || location === 36){
      if(location === 7 || location === 22 || location === 36) {
        var outputCard = chanceDeck.drawCard()[0];
        var amount = outputCard.amount;
        var spaces = 3;

        myDialog.appendChild(caption).innerHTML = outputCard.caption;
        myDialog.appendChild(closeModal).innerHTML = 'Ok';

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          outputCard.cardAction(player, allPlayers, amount, location, spaces, bank, allDeeds);
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })

        if (typeof outputCard[1] === "object") {
          chanceDeck.counter = 0;
        }
        else {
          chanceDeck.counter += 1;
        }
      }
      else {
        var outputCard = communityChestDeck.drawCard()[0];
        var amount = outputCard.amount;
        var spaces = 3;

        myDialog.appendChild(caption).innerHTML = outputCard.caption;
        myDialog.appendChild(closeModal).innerHTML = 'Ok';

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          outputCard.cardAction(player, allPlayers, amount, location, spaces, bank, allDeeds);
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })

        if (typeof outputCard[1] === "object") {
          communityChestDeck.counter = 0;
        }
        else {
          chanceDeck.counter += 1;
        }


      }
    }

    else if(location % 10 === 0) {
      if(location === 20) {
        player.pickUpFreeParking(bank);

      }
      else if (location === 30) {
        goToJail(player);
      }
      playerDash(player);
      nextPlayer();
    }

    else {
      if(deed.owner != "" && deed.owner != player.name){
        myDialog.appendChild(caption).innerHTML = "Pay Rent";
        myDialog.appendChild(closeModal).innerHTML = 'Pay Rent';

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          player.payRent(owner, deed, dieRoll, allPlayers)
          console.log(allPlayers, "allPlayer`s");
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
      }

      else {
        myDialog.appendChild(caption).innerHTML = 'Property Available'
        myDialog.appendChild(closeModal).innerHTML = 'Do Nothing'
        myDialog.appendChild(closeModal2).innerHTML = 'Buy Property'

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          playerDash(player);
          myDialog.close();
          playerDash(player);
          myDialog.innerHTML = '';
          nextPlayer();
        })

        closeModal2.addEventListener('click', function () {
          player.buyDeed(location, bank);
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
      }

    }
  }

  else {
    console.log("youre in jail, suckaa");
  }
}
