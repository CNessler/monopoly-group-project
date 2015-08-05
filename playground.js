

var logger = function(x) {
  if(x > 0) {
    console.log(x);
    x--;
    logger(x);
  }
  else {
    console.log("done");
  }
}

logger(5)


var balanceDues = function (balance, paymentDue) {
  //if (balance < paymentDue && unmortaged deeds) {

  }
}
