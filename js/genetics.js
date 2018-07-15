var baseAlleles = ['black', 'brown', 'cinnamon'];
var dilutionAlleles = ['off', 'on'];

class QuirshiGenome {
  static selectRandomElementPair(arr){
    return [Math.floor(Math.random() * arr.length),Math.floor(Math.random() * arr.length)];
  }
  static randomGenotype(){
    var base = QuirshiGenome.selectRandomElementPair(baseAlleles);
    var dilution = QuirshiGenome.selectRandomElementPair(dilutionAlleles);
    return new QuirshiGenome(base, dilution);
  }

  constructor(base, dilution) {
    this.base = base;
    this.dilution = dilution;
  }
}

class Quirshi {
  constructor(genome){
    this.genome = genome;
  }
}

genome = QuirshiGenome.randomGenotype();
div = document.getElementById('quirshi');
div.innerText = baseAlleles[genome.base[0]]
                +' '
                + baseAlleles[genome.base[1]] + ' '
                + dilutionAlleles[genome.dilution[0]]
                +' '
                + dilutionAlleles[genome.dilution[1]]
