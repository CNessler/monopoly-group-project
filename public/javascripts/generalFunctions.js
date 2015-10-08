

function redirectToken(boardIndex, player) {
  var current = document.getElementById('sp' + player.location)
  var existing = current.childNodes;
  for (var i = 0; i < existing.length; i++) {
    if (existing[i].id === players[index].name) {
      existing[i].remove();
    }
  }
  var moveTo = document.getElementById('sp' + boardIndex)
  var token = document.createElement('div');
  token.setAttribute("class", "token");
  token.setAttribute("id", player.name);
  token.style.backgroundImage = "url('" + player.tokensrc + "')";
  moveTo.appendChild(token)
}


function checkBalance(player, boardIndex, expenditure) {
  if(player.balance < expenditure){
    var maxMoney = player.balance;
    for (var i = 0; i < player.deeds.length; i++) {
      maxMoney += player.deeds[i].mortgageValue + ((player.deeds[i].hotels * 100) + (player.deeds[i].houses * 50)*0.5)
    }
    if(maxMoney < expenditure){
      player = null;
      alert('YOU ARE BROKE')
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
                 mortgageBtn.disabled = false;
               }
             }
             else {
               balanceShort += Number(this.value);
               this.mortgaged = false;
               mortgageBtn.disabled = true;
               caption.innerHTML = 'You are short $' + balanceShort;
             }
          });
          }
        }
  //tax

  //rent
  }
}


// function purchaseCheck() {
//   //property check
// }
