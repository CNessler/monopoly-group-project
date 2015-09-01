var Player= function(name, token) {
    this.name = name;
    this.token = token;
    this.balance = 29;
    this.inJail = false;
    this.getOutOfJailFree = false;
    this.active = true;
    this.turn = false;
    this.deeds = [];
    this.location = 0;
    this.jailCounter = 0;
}
