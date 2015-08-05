// checkBalanceDues = function (owner, expenditure) {
//   // if(this.balance < expenditure){
//     var mortgageAvailable = this.deeds.length - 1;
//     for (var i = 0; i < this.deeds.length; i++) {
//       if(this.deeds[i].mortgaged === true){
//         mortgageAvailable --;
//       }
//     }
//   //   if(maxMoney < expenditure){
//   //     alert("Bankrupt")
//   //     //figure out how to skip player or remove
//   //   }
//     while(this.balance < expenditure && mortgageAvailable > 0){
//       alert('need to mortgage')
//
//     }


var go = function (x) {
  if(x > 30){
    console.log("HEYO");
  }
  else {
    go(x)
    x++
  }
}
go(4)
