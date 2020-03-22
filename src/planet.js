var Shop = require('../src/shop');
class Planet {
  constructor(planetDetails){
    this.name = planetDetails.name
    this.shop = planetDetails.shop
    this.currentShip = planetDetails.currentShip
    this.coordinates = planetDetails.coordinates

  }
landShip(ship){
this.currentShip = ship
}

calculateDistance(){
  
}

}









module.exports = Planet;
