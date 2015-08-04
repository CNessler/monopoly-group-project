var deedContainer = document.getElementById('deedContainer');

function playerDash() {
  document.getElementById('name').innerHTML = players[index].name;
  document.getElementById('balance').innerHTML = players[index].balance;
  var deeds = players[index].deeds;
  console.log(deeds);
  for (var i = 0; i < deeds.length; i++) {
    console.log(deeds[i].name)
    var property = document.createElement('div');
    property.setAttribute("class", "property");
    var header = document.createElement('p');
    header.setAttribute("class", "header")
    console.log(deeds[i].color);
    header.style.backgroundColor = deeds[i].color;
    var text = document.createTextNode(deeds[i].name);
    header.appendChild(text);
    property.appendChild(header);
    deedContainer.appendChild(property);
  }

  if (players[index].getOutOfJailFree) {
    document.getElementById('getOut').innerHTML = players[index].getOutOfJailFree;
  }
}
playerDash()

function clearCont(div){
  deedContainer.removeChild(div);
}

rollButton.addEventListener('click', function () {
  var x = deedContainer.children;
  for (var i = 0; i < x.length; i++) {
    clearCont(x[i]);
  }
  playerDash()
})
