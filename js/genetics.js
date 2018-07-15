var baseColours = ['#2f3030', '#442e09', '#b08258' ]
var diluteColours = ['#83898c', '#8e7443', '#e2d0ba' ]

var baseAlleles = ['coal', 'bark', 'cork'];
var dilutionAlleles = ['dense', 'dilute'];

class QuirshiGenome {
  static selectRandomElementPair(arr){
    var elementPair = [Math.floor(Math.random() * arr.length),Math.floor(Math.random() * arr.length)];
    elementPair.sort();
    return elementPair;
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
quirshiPopulation = [];
for (var i = 0; i <100; i ++){
  genome = QuirshiGenome.randomGenotype();
  quirshiPopulation.push(genome);
}
console.log(quirshiPopulation);
for (q of quirshiPopulation) {
  pop = document.getElementById("population");
  var span = document.createElement("SPAN");
  span.classList.add("quirshiPanel");
  if(q.dilution[0] == 0){
    span.style.backgroundColor = baseColours[q.base[0]];
  }else{
    span.style.backgroundColor = diluteColours[q.base[0]];
  }
  var textnode = document.createTextNode(baseAlleles[q.base[0]] + " | " + (baseAlleles[q.base[1]]));
  span.appendChild(textnode);
  pop.appendChild(span);

}
