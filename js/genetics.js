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
/*quirshiPopulation = [];
for (var i = 0; i <1; i ++){
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
*/
  var canvas=document.getElementById("quirshi1");
  var ctx=canvas.getContext("2d");

  var imageURLs=[];
   var imagesOK=0;
   var imgs=[];
   imageURLs.push("imgs/QuirshiBase.png");
   imageURLs.push("imgs/QuirshiColour.png");


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
        colour=imgs[1];
        overlay=imgs[1];
        console.log("imagesAllLoaded");
        start();
     }
   };

   function start(){

        // save the context state
        ctx.save();

        // draw the overlay
        ctx.drawImage(overlay,150,35);

        // change composite mode to source-in
        // any new drawing will only overwrite existing pixels
        ctx.globalCompositeOperation="source-in";

        // draw a purple rectangle the size of the canvas
        // Only the overlay will become purple
        //ctx.fillStyle="red";
        //ctx.fillRect(0,0,canvas.width,canvas.height);

        // change the composite mode to destination-atop
        // any new drawing will not overwrite any existing pixels
        ctx.globalCompositeOperation="destination-atop";

        // draw the full colour
        // This will NOT overwrite any existing purple overlay pixels
        ctx.drawImage(colour,150,35);

        // draw the base
        // This will NOT replace any existing pixels
        // The purple overlay will not be overwritten
        // The blue colour will not be overwritten
        ctx.drawImage(base,0,0);

        // restore the context to it's original state
        ctx.restore();
          console.log("here2")
    }
   loadAllImages();
