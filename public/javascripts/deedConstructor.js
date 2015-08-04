
  function Deed(name, price, color,  rent, owner, houses, hotels, mortgageValue, boardIndex) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.baseRent = rent;
    this.rent = rent;
    this.owner = owner;
    this.houses = houses;
    this.hotels = hotels;
    this.mortgageValue = mortgageValue;
    this.boardIndex = boardIndex;
    this.mortgaged = false;
  }
