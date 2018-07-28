var baseColours = ['#2f3030', '#4c3e33', '#aa815f' ]
var diluteColours = ['#83898c', '#8e847c', '#d8c5b6' ]


quirshiPopulation = [];
var imgs=[];

for (var i = 0; i <50; i ++){
  genome = QuirshiGenome.randomGenotype();
  quirshiPopulation.push(genome);
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
    renderQuirshi(canvas, 0, 0, quirshi);   //image size is 700x and 387y
    span.appendChild(canvas);
    var textSpan = document.createElement("SPAN");
    span.classList.add("quirshiTextPanel");
    textSpan.innerText= "[" + baseAlleles[quirshi.base[0]]+
                        " "+ baseAlleles[quirshi.base[1]]+ "]\n"+
                        spottingAlleles[quirshi.spotting[0]] + " " +
                        spottingAlleles[quirshi.spotting[1]] + "\n" +
                        "[" + dilutionAlleles[quirshi.dilution[0]]+
                        " "+ dilutionAlleles[quirshi.dilution[1]]+ "]\n"+
                        "[" + whiteAlleles[quirshi.white[0]]+
                        " "+ whiteAlleles[quirshi.white[1]]+ "]";
    span.appendChild(textSpan);

  }
}

function renderQuirshi(canvas, x, y, quirshi){

  width=200;
  height=110;

  var ctx=canvas.getContext("2d");
  ctx.save();

  ctx.drawImage(base,0, 0, width, height);

  var backgroundColour = '#DEDEDE';
  if(quirshi.white[0] == 1 && quirshi.white[1] == 1){
    if(quirshi.dilution[0] == 0){
      backgroundColour = baseColours[quirshi.base[0]];
    }else{
      backgroundColour = diluteColours[quirshi.base[0]];
    }
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
