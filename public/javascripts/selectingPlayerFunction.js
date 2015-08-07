

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


function Bank() {
  this.deeds = allDeeds;
  this.balance = 15140;
  this.houses = 32;
  this.hotels = 12;
  this.freeParking = 0;
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

var bank = new Bank();

var selectPlayerFunction = function (location, player, bank, dieRoll, allPlayers, chanceDeck) {
    // console.log(allDeeds.length-1, "alldeeds length ", allDeeds[allDeeds.length-1], "pivotal");
    console.log(player, player.token, player.tokensrc, "PLAYER INFO");
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

  if(player.balance > 0){
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
        // console.log("tax");
        if(location ===4){
          var tax = 30;
        }
        else {
          var tax = 75;
        }
        if(player.balance < tax) {
          checkBalance(player, boardIndex, expenditure)
          // myDialog.appendChild(caption).innerHTML = 'You must mortgage properties'
          // myDialog.appendChild(closeModal).innerHTML = 'see properties'
          //
          // myDialog.showModal();
          //
          // closeModal.addEventListener('click', function () {
          //   playerDash(player);
          //   // checkBalance(player, location, tax)
          //   myDialog.close();
          //   myDialog.innerHTML = '';
          //   nextPlayer();
          // })
        }
        else {
        myDialog.appendChild(caption).innerHTML = "Pay Fine ($" + tax + ")";
        myDialog.appendChild(closeModal).innerHTML = "Pay Fine ($" + tax + ")";

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          player.payTax(bank);
          playerDash(player);
          // checkBalance(player, location, deed.price)
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
        }
      }

      else if( location === 2  || location === 7  || location === 17 || location === 22 || location === 33 || location === 36){
        if(location === 7 || location === 22 || location === 36) {
          var outputCard = chanceDeck.drawCard()[0];
          // console.log(outputCard);
          var amount = outputCard.amount;
          var spaces = 3;

          myDialog.appendChild(caption).innerHTML = outputCard.caption;
          myDialog.appendChild(closeModal).innerHTML = 'Ok';

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            outputCard.cardAction(player, owner, allPlayers, amount, location, spaces, bank, allDeeds);
            playerDash(player);
            myDialog.close();
            // checkBalance(player, location, deed.price)
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
            // checkBalance(player, location, deed.price)
            outputCard.cardAction(player, owner, allPlayers, amount, location, spaces, bank, allDeeds);
            playerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })

          if (typeof outputCard[1] === "object") {
            communityChestDeck.counter = 0;
          }
          else {
            communityChestDeck.counter += 1;
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
          if(location === 12 || location === 28){
            myDialog.appendChild(caption).innerHTML = "Pay Rent";
            myDialog.appendChild(closeModal).innerHTML = "Pay Rent";
          }
          else {
          myDialog.appendChild(caption).innerHTML = "Pay Rent ($" + deed.rent + ")";
          myDialog.appendChild(closeModal).innerHTML = "Pay Rent ($" + deed.rent + ")";
          }

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            checkBalance(player, location, deed.price)
            player.payRent(owner, deed, dieRoll, allPlayers)
            console.log(allPlayers, "allPlayer`s");
            playerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })
        }
        else if (player.balance < deed.price){
          myDialog.appendChild(caption).innerHTML = 'You cannot afford this property'
          myDialog.appendChild(closeModal).innerHTML = 'Sorry bout ya'

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            playerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })

        }
        else {
          myDialog.appendChild(caption).innerHTML = 'Property Available: ' + deed.name
          myDialog.appendChild(closeModal).innerHTML = 'Do Nothing'
          myDialog.appendChild(closeModal2).innerHTML = 'Buy Property ($' + deed.price + ')'

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            playerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })

          closeModal2.addEventListener('click', function () {
            console.log(checkBalance(player, location, deed.price), 'WORKING');
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
      // console.log("IN JAIL");
      var myDialog = document.getElementById('myDialog');
      var caption = document.createElement('p')
      var closeModal = document.createElement('button');
      var closeModal2 = document.createElement('button');
      // console.log(player.jailCounter, "JAIL COUNT");
      // redirectToken(10, player)

      if(player.jailCounter === 3){
        myDialog.appendChild(caption).innerHTML = "You're FREE!";
        myDialog.appendChild(closeModal).innerHTML = 'Now Roll The Dice...';
        redirectToken(10, player)
        player.location = 10;

        myDialog.show();

        closeModal.addEventListener('click', function () {
          // player.timeInJail()
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          // nextPlayer();
        })
        player.inJail = false;
        // var dieRoll = getMove(player)
        // var moveTo = document.getElementById('sp' + player.location)
        // moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";
        //
        // selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);
      }
      else if(player.getOutOfJailFree === true) {
        myDialog.appendChild(caption).innerHTML = "You're FREE!";
        myDialog.appendChild(closeModal).innerHTML = 'Now Roll The Dice...';
        redirectToken(10, player)
        player.location = 10;
        myDialog.show();

        closeModal.addEventListener('click', function () {
          // player.timeInJail()
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          // nextPlayer();
        })

        player.inJail = false;
        player.getOutOfJailFree = false;
        // var dieRoll = getMove(player)
        // var moveTo = document.getElementById('sp' + player.location)
        // moveTo.style.backgroundImage = "url('" + player.tokensrc + "')";

        // selectPlayerFunction(player.location, player, bank, dieRoll, players, chanceDeck);
      }
      else {
        myDialog.appendChild(caption).innerHTML = "Uh oh! You're stuck in the elevator.";
        myDialog.appendChild(closeModal).innerHTML = 'Miss turn';
        redirectToken(10, player)

        myDialog.show();

        player.jailCounter ++;
        player.location = 10;
        closeModal.addEventListener('click', function () {
          // player.timeInJail()
          playerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
      }

      // console.log("IN JAIL");
      // var myDialog = document.getElementById('myDialog');
      // var caption = document.createElement('p')
      // var closeModal = document.createElement('button');
      // var closeModal2 = document.createElement('button');
      // console.log(player.jailCounter, "JAIL COUNT");
      // // console.log("youre in jail, suckaa");
      // myDialog.appendChild(caption).innerHTML = "In Jail";
      // myDialog.appendChild(closeModal).innerHTML = 'Miss Turn';
      // redirectToken(10, player)
      // myDialog.show();
      //
      // closeModal.addEventListener('click', function () {
      //   player.timeInJail()
      //   playerDash(player);
      //   myDialog.close();
      //   myDialog.innerHTML = '';
      //   nextPlayer();
      // })
    }
  }
  else {
    var myDialog4 = document.getElementById('myDialog4');
    var caption = document.createElement('p')
    myDialog4.appendChild(caption).innerHTML = 'You are short $' + balanceShort;
    var mortgageBtn = document.createElement('button')
    mortgageBtn.disabled = true;
    myDialog4.appendChild(mortgageBtn).innerHTML = "mortgage properties";

    var balanceShort = expenditure - player.balance

    var property  = [];
    for(var i = 0; i < player.deeds.length; i++) {
       property[i] = document.createElement('input');
       var label = document.createElement('label');
       label.innerHTML = player.deeds[i].name
       property[i].type = "checkbox";
       property[i].value = player.deeds[i].mortgageValue;

       label.appendChild(property[i]);
       myDialog4.appendChild(label)
      }

      myDialog4.showModal();

      for(var j = 0; j < property.length; j++) {
         property[j].addEventListener('click', function () {
           if(this.checked){
           balanceShort -= this.value;
           this.mortgaged = true;
           caption.innerHTML = 'You are short $' + balanceShort;
           if(balanceShort <= 0){
             caption.innerHTML = 'You now have ' + balanceShort;
             mrtgageBtn.disabled = false;
           }
         }
         else {
           balanceShort += Number(this.value);
           this.mortgaged = false;
           mrtgageBtn.disabled = true;
           caption.innerHTML = 'You are short $' + balanceShort;
         }
      });
    }
  }
}
