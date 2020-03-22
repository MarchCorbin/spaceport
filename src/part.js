class Part {
  constructor(partDetails){
    this.name = partDetails.name;
    this.type =
    partDetails.type === 'shell' ||
    partDetails.type === 'hyperdrive' ||
    partDetails.type === 'computer' ||
    partDetails.type === 'life support' ||
    partDetails.type === 'landing gear' ? partDetails.type : undefined;
    this.value = partDetails.value
    this.broken = false
  }

  isValid(){
    if(this.name === undefined){
      return false
    }
    if(this.type === undefined){
      return false
    }
    if(this.value === undefined){
      return false
    } else {
      return true
    }
    }

}







module.exports = Part;
