  class Being {
    constructor(name, species){
      this.isAlive = true
      this.name = name
      this.species = species
      this.credits = 0
      this.captain = true
    }
    updateCredits(credit){
      this.credits += credit
    }
  }
}

module.exports = Being;
