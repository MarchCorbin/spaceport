var Part = require('../src/part');
class Ship {
  constructor(shipDetails){
  this.name = shipDetails.name
  this.type =
  shipDetails.type === 'wooden' ||
  shipDetails.type === 'tin' ||
  shipDetails.type === 'plastic' ? undefined : shipDetails.type;
  this.maxCrew = shipDetails.maxCrew
  this.odometer = shipDetails.odometer || 0
  this.fuelCapacity = shipDetails.fuelCapacity || 10
  this.fuel = shipDetails.fuel || 0
  this.captain = shipDetails.captain
  this.crew = []
  this.fighter = shipDetails.fighter
  this.cargo = []
  this.parts = shipDetails.parts || {}
  this.readyToFly = false
  this.notes = shipDetails.notes
  }
  addCrew(member){
      var currentMembers = this.maxCrew - this.crew.length
      for (var i=0;i<currentMembers;i++){
        member[i].isAlive === true && this.crew.push(member[i])
    }
  }
  loadCargo(partCargo){
    if(partCargo instanceof Part){
      this.cargo.push(partCargo)
    }
  }

  updatePart(part){
    if (part.type === undefined){
      return {}
    } {
      var oldPartValue = this.parts[part.type]
      var newPartValue = oldPartValue ? oldPartValue : 0;
      this.parts[part.type] = part;
      return newPartValue.value - part.value
    }

  }
  checkReadiness(){
    if (this.captain === undefined){
      this.readyToFly = false
      this.notes = 'Cannot fly without a captain'
    } else if (this.fuel === 0){
      this.readyToFly = false
      this.notes = "Cannot fly without fuel"
    } else if (!Object.keys(this.parts).length){
      this.readyToFly = false
      this.notes = 'Cannot fly without all parts'
    } else {
        this.readyToFly = true
        this.notes = 'Good to go!'
    }
    return this
  }
}




module.exports = Ship;
