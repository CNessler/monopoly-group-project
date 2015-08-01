module.exports = {
  buyDeed: function (player, deed, bank) {
    player.deeds.push(deed);
    player.balance -= deed.price;
    bank.balance += deed.price;
    for (var i = 0; i < bank.deeds.length; i++) {
      if(bank.deeds[i].boardIndex === deed.boardIndex){
        bank.deeds.splice(i, 1)
      }
    }
  },

}
