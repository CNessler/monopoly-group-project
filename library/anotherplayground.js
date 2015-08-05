
function makeFunc() {
  var checkboxes  = [];
  for(var i = 0; i < players.deeds.length; i++) {
   checkboxes[i] = document.createElement('input');
   var label = document.createElement('label');
   label.innerHTML = players.deeds[i].name
   checkboxes[i].type = "checkbox";

   label.appendChild(checkboxes[i]);
   myDialog4.appendChild(label)
  }
  function displayName() {
    
  }
  return displayName;
};

var myFunc = makeFunc();
myFunc();
