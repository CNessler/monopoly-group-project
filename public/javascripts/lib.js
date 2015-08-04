var deedContainer = document.getElementById('deedContainer');

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
  line1.innerHTML = "With 1 house: " + (deed.baseRent * 5);
  line2.innerHTML = "With 2 houses: " + (deed.baseRent * 15);
  line3.innerHTML = "With 3 houses: " + (deed.baseRent * 25);
  line4.innerHTML = "With 4 houses: " + (deed.baseRent * 40);
  line5.innerHTML = "With hotel: " + (deed.baseRent * 50);
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

function playerDash(player) {
  getOutFree(player)
  document.getElementById('name').innerHTML = player.name;
  document.getElementById('balance').innerHTML = "Money in account: $" + player.balance;
  var deeds = player.deeds;
  clearCont();
  for (var i = 0; i < deeds.length; i++) {
    createCard(deeds[i]);
  }
}
