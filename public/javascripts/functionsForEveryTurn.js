function checkMaxBalance(player, boardIndex, expenditure) {

  if(player.balance < expenditure){
    var maxMoney = player.balance;
    for(var i = 0; i < player.deeds.length; i++) {
    maxMoney += player.deeds[i].mortgageValue + ((player.deeds[i].hotels * 100) + (player.deeds[i].houses * 50)*0.5)
  }

  if(maxMoney < expenditure){
    player = null;
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
          balanceShort -= Number(this.value);
          this.mortgaged = true;
          player.balance += Number(this.value)
          caption.innerHTML = 'You are short $' + balanceShort;
          if(balanceShort <= 0){
            caption.innerHTML = 'You now have ' + balanceShort;
            mortgageBtn.disabled = false;
          }
        }
        else {
          balanceShort += Number(this.value);
          this.mortgaged = false;
          player.balance -= Number(this.value);
          mortgageBtn.disabled = true;
          caption.innerHTML = 'You are short $' + balanceShort;
         }
      });

      mortgageBtn.addEventListener('click', function () {
      myDialog4.close();
      })
    }
  }
  }
}

function checkForOwner(allPlayers) {
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

function checkForDeedAtCurrentLocation(location, bank) {
  var deed;
  bank.deeds.forEach(function (checkedDeed) {
    if(checkedDeed.boardIndex === location) {
      deed = checkedDeed;
    }
  })
  return deed;
}
