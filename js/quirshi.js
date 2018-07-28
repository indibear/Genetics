
var baseAlleles = ['coal', 'bark', 'cork'];
var dilutionAlleles = ['dense', 'dilute'];

var spottingAlleles = ["high", "low", "off"];

class QuirshiGenome {
  static selectRandomElementPair(arr){
    var elementPair = [Math.floor(Math.random() * arr.length),Math.floor(Math.random() * arr.length)];
    elementPair.sort();
    return elementPair;
  }
  static randomGenotype(){
    var base = QuirshiGenome.selectRandomElementPair(baseAlleles);
    var dilution = QuirshiGenome.selectRandomElementPair(dilutionAlleles);
    var spotting = QuirshiGenome.selectRandomElementPair(spottingAlleles);
    return new QuirshiGenome(base, dilution, spotting);
  }

  constructor(base, dilution, spotting) {
    this.base = base;
    this.dilution = dilution;
    this.spotting = spotting;
  }
}

class Quirshi {
  constructor(genome){
    this.genome = genome;
  }
}
