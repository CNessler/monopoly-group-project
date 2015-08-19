var Bank = require('./bankConstructor.js').Bank;
var allDeeds = require('./deedConstructor.js');

var bank = new Bank(allDeeds);

var selectPlayerFunction = function (location, player, bank, dieRoll, allPlayers, chanceDeck) {

  var owner = getOwner(allPlayers);
  var deed = checkForDeedAtCurrentLocation(location, bank);
  var allConditionals = {
    locationIsOnTax:
      location === 4 || location === 38,
    locationIsOnChanceOrCC:
      location === 2  || location === 7  || location === 17 ||
      location === 22 || location === 33 || location === 36,



  if(player.balance > 0){
    if(player.inJail === false) {

      var myDialog = document.getElementById('myDialog');
      var caption = document.createElement('p')
      var closeModal = document.createElement('button');
      var closeModal2 = document.createElement('button');

      if(allConditions.locationIsOnTax) {
        if(location ===4){
          var tax = 30;
        }
        else {
          var tax = 75;
        }
        if(player.balance < tax) {
          checkMaxBalance(player, location, tax)
        }
        else {
        myDialog.appendChild(caption).innerHTML = "Pay Fine ($" + tax + ")";
        myDialog.appendChild(closeModal).innerHTML = "Pay Fine ($" + tax + ")";

        myDialog.showModal();

        closeModal.addEventListener('click', function () {
          player.payTax(bank);
          updatePlayerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
        }
      }
      else if(allConditionals.locationIsChanceOrCC){
        if(location === 7 || location === 22 || location === 36) {
          var drawnCard = chanceDeck.drawCard()[0];
          var amount = drawnCard.amount;
          var spaces = 3;

          myDialog.appendChild(caption).innerHTML = drawnCard.caption;
          myDialog.appendChild(closeModal).innerHTML = 'Ok';

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            drawnCard.cardAction(player, owner, allPlayers, amount, location, spaces, bank, allDeeds);
            playerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })

          if (typeof drawnCard[1] === "object") {
            chanceDeck.counter = 0;
          }
          else {
            chanceDeck.counter += 1;
          }
        }
        else {
          var drawnCard = communityChestDeck.drawCard()[0];
          var amount = drawnCard.amount;
          var spaces = 3;

          myDialog.appendChild(caption).innerHTML = drawnCard.caption;
          myDialog.appendChild(closeModal).innerHTML = 'Ok';

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            drawnCard.cardAction(player, owner, allPlayers, amount, location, spaces, bank, allDeeds);
            updatePlayerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })
          if (typeof drawnCard[1] === "object") {
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
        updatePlayerDash(player);
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
            if(player.balance < deed.rent){
              checkMaxBalance(player, location, deed.rent)
            }
            else {
              player.payRent(owner, deed, dieRoll, allPlayers)
              updatePlayerDash(player);
              myDialog.close();
              myDialog.innerHTML = '';
              nextPlayer();
            }
          })
        }
        else {
          if(player.balance < deed.price){
            myDialog.appendChild(caption).innerHTML = 'You do not have enought money for this property';
            myDialog.appendChild(closeModal).innerHTML = 'Sorry about ya';

            myDialog.showModal();

            closeModal.addEventListener('click', function () {
              updatePlayerDash(player);
              myDialog.close();
              myDialog.innerHTML = '';
              nextP
          }
          else {
          myDialog.appendChild(caption).innerHTML = 'Property Available: ' + deed.name
          myDialog.appendChild(closeModal).innerHTML = 'Do Nothing'
          myDialog.appendChild(closeModal2).innerHTML = 'Buy Property ($' + deed.price + ')'

          myDialog.showModal();

          closeModal.addEventListener('click', function () {
            updatePlayerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })

          closeModal2.addEventListener('click', function () {
            player.buyDeed(location, bank);
            updatePlayerDash(player);
            myDialog.close();
            myDialog.innerHTML = '';
            nextPlayer();
          })
          }
        }

      }
    }
    else {
      var myDialog = document.getElementById('myDialog');
      var caption = document.createElement('p')
      var closeModal = document.createElement('button');
      var closeModal2 = document.createElement('button');

      if(player.jailCounter === 3){
        myDialog.appendChild(caption).innerHTML = "You're FREE!";
        myDialog.appendChild(closeModal).innerHTML = 'Now Roll The Dice...';
        redirectToken(10, player)
        player.location = 10;

        myDialog.show();

        closeModal.addEventListener('click', function () {
          updatePlayerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
        })
        player.inJail = false;
      }
      else if(player.getOutOfJailFree === true) {
        myDialog.appendChild(caption).innerHTML = "You're FREE!";
        myDialog.appendChild(closeModal).innerHTML = 'Now Roll The Dice...';
        redirectToken(10, player)
        player.location = 10;
        myDialog.show();

        closeModal.addEventListener('click', function () {
          updatePlayerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
        })
        player.inJail = false;
        player.getOutOfJailFree = false;
      }
      else {
        myDialog.appendChild(caption).innerHTML = "Uh oh! You're stuck in the elevator.";
        myDialog.appendChild(closeModal).innerHTML = 'Miss turn';
        redirectToken(10, player)

        myDialog.show();

        player.jailCounter ++;
        player.location = 10;
        closeModal.addEventListener('click', function () {
          updatePlayerDash(player);
          myDialog.close();
          myDialog.innerHTML = '';
          nextPlayer();
        })
      }
    }
  }
  else {
    if(locationIsOnTax || locationIsOnOwnedDeed)
      checkMaxBalance(player, location)
    }
  }
}
