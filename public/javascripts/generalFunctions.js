

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


// function checkBalance(player, boardIndex, expenditure) {
//   if(player.balance < expenditure){
//     var maxMoney = player.balance;
//     for (var i = 0; i < player.deeds.length; i++) {
//       maxMoney += player.deeds[i].mortgageValue + ((player.deeds[i].hotels * 100) + (player.deeds[i].houses * 50)*0.5)
//     }
//     if(maxMoney < expenditure){
//       alert('YOU ARE BROKE')
//       //remove or skip player from game
//     }
//     else {
//         var myDialog4 = document.getElementById('myDialog4');
//         var caption = document.createElement('p')
//         var balanceShort = expenditure - player.balance
//         myDialog4.appendChild(caption).innerHTML = 'You are short $' + balanceShort;
//
//         var property  = [];
//         for(var i = 0; i < player.deeds.length; i++) {
//            property[i] = document.createElement('input');
//            var label = document.createElement('label');
//            label.innerHTML = player.deeds[i].name
//            property[i].type = "checkbox";
//            property[i].value = player.deeds[i].mortgageValue;
//
//            label.appendChild(property[i]);
//            myDialog4.appendChild(label)
//           }
//
//           btn.addEventListener('click', function() {
//            myDialog4.showModal();
//           })
//
//           for(var j = 0; j < property.length; j++) {
//              property[j].addEventListener('click', function () {
//                balanceShort -= this.value;
//                alert(balanceShort);
//                caption.innerHTML = 'You are short $' + balanceShort;
//           });
//           }
//     }
//
//         // var checkboxes  = [];
//         // for(var i = 0; i < players.deeds.length; i++) {
//         //  checkboxes[i] = document.createElement('input');
//         //  var label = document.createElement('label');
//         //  label.innerHTML = players.deeds[i].name
//         //  checkboxes[i].type = "checkbox";
//         //  checkboxes[i].value = players.deeds[i].mortgageValue;
//         //
//         //  label.appendChild(checkboxes[i]);
//         //  myDialog4.appendChild(label)
//         // }
//         //
//         // for(var j=0; j<checkboxes.length; j++){
//         //   checkboxes[j].addEventListener('click', function () {
//         //     balanceShort -= this.value
//         //   })
//         // }
//
//
//       myDialog.appendChild(caption).innerHTML = "Pay Fine";
//       myDialog.appendChild(closeModal).innerHTML = 'Pay Fine';
//   }
//   //tax
//
//   //rent
// }
// checkBalance()

// function purchaseCheck() {
//   //property check
// }
