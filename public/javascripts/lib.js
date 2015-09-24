var deedContainer = document.getElementById('deedContainer');
var dialog3 = document.getElementById('myDialog3');
var houseInc = [1, 5, 15, 25, 40, 50];

function createCard(deed) {
  var property = document.createElement('div');
  var header = document.createElement('p');
  var text = document.createTextNode(deed.name);
  var prices = document.createElement('div');
  var line = document.createElement("p")
  var line1 = document.createElement("p")
  var line2 = document.createElement("p")
  var line3 = document.createElement("p")
  var line4 = document.createElement("p")
  var line5 = document.createElement("p")
  var mortgage = document.createElement("p")
  property.setAttribute("class", "property");
  property.setAttribute("id", deed.boardIndex)
  header.setAttribute("class", "header")
  header.style.backgroundColor = deed.color;
  prices.setAttribute("class", "prices");
  line.innerHTML = "Price: " + deed.price + " -- Rent: " + deed.rent;
  line1.innerHTML = "With 1 house: " + (deed.baseRent * houseInc[1]);
  line2.innerHTML = "With 2 houses: " + (deed.baseRent * houseInc[2]);
  line3.innerHTML = "With 3 houses: " + (deed.baseRent * houseInc[3]);
  line4.innerHTML = "With 4 houses: " + (deed.baseRent * houseInc[4]);
  line5.innerHTML = "With hotel: " + (deed.baseRent * houseInc[5]);
  mortgage.innerHTML = "Mortgage: " + deed.mortgageValue;
  for (var j = 0; j < utils.length; j++) {
    if (deed.boardIndex === utils[j]) {
      line.innerHTML = ""
      line1.innerHTML = ""
      line2.innerHTML = ""
      line3.innerHTML = ""
      line4.innerHTML = ""
      line5.innerHTML = ""
      mortgage.innerHTML = ""
      line.innerHTML = "If one Utility is owned,"
      line1.innerHTML = "rent is 4x amount on dice."
      line2.innerHTML = "If both Utilities are owned,"
      line3.innerHTML = "rent is 10x amount on dice."
      mortgage.innerHTML = "Mortgage value: $75"
    } else if (deed.boardIndex === rr[j]) {
      line.innerHTML = ""
      line1.innerHTML = ""
      line2.innerHTML = ""
      line3.innerHTML = ""
      line4.innerHTML = ""
      line5.innerHTML = ""
      mortgage.innerHTML = ""
      line.innerHTML = "Rent: $25";
      line2.innerHTML = "If 2 RR's are owned: $50";
      line3.innerHTML = "If 3 RR's are owned: $100";
      line4.innerHTML = "If 4 RR's are owned: $200";
      mortgage.innerHTML = "Mortgage value: $100";
    }
    header.appendChild(text);
    property.appendChild(header);
    prices.appendChild(line);
    prices.appendChild(line1);
    prices.appendChild(line2);
    prices.appendChild(line3);
    prices.appendChild(line4);
    prices.appendChild(line5);
    prices.appendChild(mortgage);
    property.appendChild(prices);
    deedContainer.appendChild(property);
  }
  property.addEventListener('click', function (e) {
    getProperty(e.currentTarget.id);
  })
}

function getProperty(id) {
  clearMod(dialog3);
  var prop;
  var msg;
  var caption = document.createElement('p');
  var caption2 = document.createElement('p');
  var closeButton = document.createElement('button');
  var houseButton = document.createElement('button');
  caption.setAttribute("class", "propName");
  caption2.setAttribute("class", "propDisplay");
  closeButton.setAttribute("id", "closeButton");
  houseButton.setAttribute("id", "houseButton");
  for (var i = 0; i < allDeeds.length; i++) {
    if(allDeeds[i].boardIndex == id){
      prop = allDeeds[i];
    }
  }
  var miscSpace = false;
  for (var i = 0; i < misc.length; i++) {
    if (id == misc[i]) {
      miscSpace = true;
     }
  }

  if (!prop.mortgaged) {
    msg = "";
    var mortgageButton = document.createElement('button');
    mortgageButton.setAttribute("id", "mortgageButton");
  } else {
    msg = " - MORTGAGED"
  }

  dialog3.appendChild(closeButton).innerHTML = "X";
  dialog3.appendChild(caption).innerHTML = prop.name;

  if (miscSpace === true) {
    dialog3.appendChild(caption2).innerHTML = "Mortgage Value: $" + prop.mortgageValue + msg;
    houseButton = null;
  } else {
    dialog3.appendChild(caption2).innerHTML = "Houses: " + prop.houses + " - Hotels: " + prop.hotels + msg
  }

  dialog3.showModal();
  closeButton.addEventListener('click', function () {
    dialog3.close();
    playerDash(players[index])
  })

  if (prop.owner === players[index].name) {
    if (mortgageButton) {
      dialog3.appendChild(mortgageButton).innerHTML = "Mortgage ($" + prop.mortgageValue + ")";
    }
    if (houseButton) {
      if (prop.houses <=3 && prop.hotels !== 1) {
        dialog3.appendChild(houseButton).innerHTML = "Add house ($" + prop.housePrice + ")";
      } else if (prop.hotels === 0){
        dialog3.appendChild(houseButton).innerHTML = "Add hotel ($" + prop.housePrice + ")";
      }
    }
    mortgageButton.addEventListener('click', function () {
      players[index].balance += prop.mortgageValue;
      bank.balance -= prop.mortgageValue;
      var m = document.getElementById('mortgageButton');
      m.remove();
      prop.houses = 0;
      prop.hotels = 0;
      prop.mortgaged = true;
      dialog3.close();
      playerDash(players[index])
    })
    if (houseButton) {
      houseButton.addEventListener('click', function () {
        if (prop.houses <= 2 && prop.hotels !== 1) {
          dialog3.appendChild(houseButton).innerHTML = "Add house ($" + prop.housePrice + ")";
        } else if (prop.houses === 3 && prop.hotels === 0) {
          dialog3.appendChild(houseButton).innerHTML = "Add hotel ($" + prop.housePrice + ")";
        }
        if (prop.houses <=3 && prop.hotels !== 1) {
          prop.houses ++
          prop.rent = prop.baseRent * houseInc[prop.houses];
        } else if (prop.houses === 4 && prop.hotels === 0) {
          prop.houses = 0;
          prop.hotels = 1;
          prop.rent = prop.baseRent * houseInc[5];
          var hb = document.getElementById('houseButton');
          hb.remove();
        }
        players[index].balance -= prop.housePrice;
        bank.balance += prop.housePrice;
        caption2.innerHTML = "Houses: " + prop.houses + " - Hotels: " + prop.hotels + msg
      });
    }
  }
  updatePlayerDash(players[index])
}

function getOutFree(player) {
  if (player.getOutOfJailFree) {
    document.getElementById('getOut').style.visibility = "visible";
  } else {
    document.getElementById('getOut').style.visibility = "hidden";
  }
}

function clearCont(){
  while (deedContainer.hasChildNodes()) {
    deedContainer.removeChild(deedContainer.firstChild);
  }
}

function clearMod(modal){
  while (modal.hasChildNodes()) {
    modal.removeChild(modal.firstChild);
  }
}

function updatePlayerDash (player) {
  getOutFree(player)
  document.getElementById('name').innerHTML = player.name;
  document.getElementById('balance').innerHTML = "Money in account: $" + player.balance;
  var deeds = player.deeds;
  clearCont();
  for (var i = 0; i < deeds.length; i++) {
    createCard(deeds[i]);
  }
}
