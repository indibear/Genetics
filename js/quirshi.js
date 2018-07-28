
var baseAlleles = ['coal', 'bark', 'cork'];
var dilutionAlleles = ['dense', 'dilute'];

var spottingAlleles = ["high", "low", "off"];
var whiteAlleles = [true, false]

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
    var white = QuirshiGenome.selectRandomElementPair(whiteAlleles);
    return new QuirshiGenome(base, dilution, spotting, white);
  }

  constructor(base, dilution, spotting, white) {
    this.base = base;
    this.dilution = dilution;
    this.spotting = spotting;
    this.white = white;
  }
}

class Quirshi {
  constructor(genome){
    this.genome = genome;
  }
}
