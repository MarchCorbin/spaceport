var Part = require('../src/part');
class Shop {
  constructor(shopDetails){
    this.name = shopDetails.name
    this.inventory = shopDetails.inventory || {}

  }
  addInventory(item){
    if(item instanceof Part){
    this.inventory[item.type] = item
    }
  }
  
  outfitShip(ship, item){
    if(!ship.captain){
      return 'cannot outfit a ship without a captain'
    } else if (ship.captain.credits < this.inventory[item].value){
      var shortFunds = this.inventory[item].value - ship.captain.credits;
        return `you require ${shortFunds} more credits to make this purchase`
    } else if (ship.captain.credits > this.inventory[item].value){
      var capCharge = ship.captain.credits - this.inventory[item].value
      ship.captain.credits = capCharge;
      ship.parts[item] = this.inventory[item]
      delete this.inventory[item]
    return `${item} added to ship`
  }
}


}




module.exports = Shop;
