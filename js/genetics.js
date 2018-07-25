var baseColours = ['#2f3030', '#442e09', '#89602a' ]
var diluteColours = ['#83898c', '#9e846b', '#e2bf9c' ]

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
var imgs=[];

for (var i = 0; i <10; i ++){
  genome = QuirshiGenome.randomGenotype();
  quirshiPopulation.push(genome);
}


var imageURLs=[];
var imagesOK=0;
imageURLs.push("imgs/QuirshiBase.png");
imageURLs.push("imgs/QuirshiColour.png");
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
    spots=imgs[1];
    lines=imgs[2];
    renderVillage();
 }
}


function renderVillage(){
  pop = document.getElementById("population");
  for (q of quirshiPopulation) {
    var span = document.createElement("SPAN");
    span.classList.add("quirshiPanel");
    // if(q.dilution[0] == 0){
    //   span.style.backgroundColor = baseColours[q.base[0]];
    // }else{
    //   span.style.backgroundColor = diluteColours[q.base[0]];
    // }
    //var textnode = document.createTextNode(baseAlleles[q.base[0]] + " | " + (baseAlleles[q.base[1]]));
    //span.appendChild(textnode);
    pop.appendChild(span);
    var canvas = document.createElement("CANVAS");
    renderQuirshi(canvas, imgs, 0, 0, 200, 200);
    span.appendChild(canvas);
  }
}

function renderQuirshi(canvas, imgs, x, y, width, height){
  base=imgs[0];
  spots=imgs[1];
  lines=imgs[2];
  var ctx=canvas.getContext("2d");
  ctx.save();

  ctx.drawImage(base,0, 0, width, height);

  ctx.globalCompositeOperation="source-in";
  ctx.fillStyle="#2f3030";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation="source-atop";
  ctx.drawImage(spots, 0, 0, width, height);

  ctx.globalCompositeOperation="multiply";
  ctx.globalCompositeOperation="multiply";
  ctx.drawImage(lines, 0, 0, width, height);
  ctx.restore();

};

loadAllImages();
