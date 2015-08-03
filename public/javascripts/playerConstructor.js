var Player= function(name, token) {
    this.name = name;
    this.token = token;
    this.balance = 1500;
    this.inJail = false;
    this.getOutOfJailFree = false;
    this.active = true;
    this.turn = false;
    this.deeds = [];
    this.location = 0;
}
