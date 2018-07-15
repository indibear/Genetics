class QuirshiGenome {
  static randomGenotype(){
    var baseAlleles = ['black', 'brown', 'cinnamon'];
    var dilutionAlleles = ['on', 'off'];
    var base = baseAlleles[Math.floor(Math.random() * baseAlleles.length)]
    var dilution = dilutionAlleles[Math.floor(Math.random() * dilutionAlleles.length)]
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
console.log(genome);
