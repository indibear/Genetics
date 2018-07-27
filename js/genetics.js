var baseColours = ['#2f3030', '#4c3e33', '#aa815f' ]
var diluteColours = ['#83898c', '#8e847c', '#d8c5b6' ]

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

quirshiPopulation = [];
var imgs=[];

for (var i = 0; i <50; i ++){
  genome = QuirshiGenome.randomGenotype();
  quirshiPopulation.push(genome);
}


var imageURLs=[];
var imagesOK=0;
imageURLs.push("imgs/QuirshiBase.png");
imageURLs.push("imgs/QuirshiSpottingHigh.png");
imageURLs.push("imgs/QuirshiSpottingLow.png");
imageURLs.push("imgs/QuirshiLines.png");


function loadAllImages(){
   for (var i = 0; i < imageURLs.length; i++) {
     var img = new Image();
     imgs.push(img);
     img.onload = function(){ imagesOK++; imagesAllLoaded(); };
     img.src = imageURLs[i];
   }
}

var imagesAllLoaded = function() {
 if (imagesOK==imageURLs.length ) {
    // all images are fully loaded an ready to use
    base=imgs[0];
    highSpots=imgs[1];
    lowSpots=imgs[2];
    lines=imgs[3];
    renderVillage();
 }
}


function renderVillage(){
  pop = document.getElementById("population");
  for (quirshi of quirshiPopulation) {
    var span = document.createElement("SPAN");
    span.classList.add("quirshiPanel");
    //var textnode = document.createTextNode(baseAlleles[q.base[0]] + " | " + (baseAlleles[q.base[1]]));
    //span.appendChild(textnode);
    pop.appendChild(span);
    var canvas = document.createElement("CANVAS");
    canvas.classList.add("quirshiCanvas");
    renderQuirshi(canvas, imgs, 0, 0, quirshi);   //image size is 700x and 387y
    span.appendChild(canvas);
    var textSpan = document.createElement("SPAN");
    span.classList.add("quirshiTextPanel");
    console.log(quirshi.base)
    textSpan.innerText= "[" + baseAlleles[quirshi.base[0]]+
                        " "+ baseAlleles[quirshi.base[1]]+ "]\n"+
                        spottingAlleles[quirshi.spotting[0]] + " " +
                        spottingAlleles[quirshi.spotting[1]] + "\n" +
                        "[" + dilutionAlleles[quirshi.dilution[0]]+
                                            " "+ dilutionAlleles[quirshi.dilution[1]]+ "]";
    span.appendChild(textSpan);

  }
}

function renderQuirshi(canvas, imgs, x, y, quirshi){
  base=imgs[0];
  highSpots=imgs[1];
  lowSpots=imgs[2];
  lines=imgs[3];
  width=200;
  height=110;

  var ctx=canvas.getContext("2d");
  ctx.save();

  ctx.drawImage(base,0, 0, width, height);

  var backgroundColour = "black";
  if(quirshi.dilution[0] == 0){
    backgroundColour = baseColours[quirshi.base[0]];
  }else{
    backgroundColour = diluteColours[quirshi.base[0]];
  }

  ctx.globalCompositeOperation="source-in";
  ctx.fillStyle=backgroundColour;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation="source-atop";
  switch(quirshi.spotting[0]){
    case 0:
      ctx.drawImage(highSpots, 0, 0, width, height);
    case 1:
      ctx.drawImage(lowSpots, 0, 0, width, height);
  }


  ctx.globalCompositeOperation="multiply";
  ctx.drawImage(lines, 0, 0, width, height);
  ctx.restore();

};

loadAllImages();
