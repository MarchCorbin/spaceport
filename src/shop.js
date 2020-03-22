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
    console.log(this.inventory[item].value)
    var currentCredits = ship.captain.credits
    var finalCredits = ship.captain.credits - this.inventory[item].value
    var requiredCredits = ship.captain.credits - 200
    if(ship.captain === undefined){
      return 'cannot outfit a ship without a captain'
    } else if (finalCredits > 0 && finalCredits < 200){
      return `you require ${requiredCredits} more credits to make this purchase`
    } else if (finalCredits > 200){
}
    }

}




module.exports = Shop;
