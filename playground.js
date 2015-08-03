var a = 'akhil'
var b = 'sankar'
var c = 'derek'
var d = 'vance'

var logger = function (w,e,q,r) {
  console.log(q, e);
}

var anotherLogger = function (q,w,e,r) {
  console.log(w,r);
}

logger(a,b,c,d);
anotherLogger(a,b,c,d);
