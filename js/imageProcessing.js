var imageURLs=[];
var imagesOK=0;
imageURLs.push("imgs/QuirshiBase.png");
imageURLs.push("imgs/QuirshiSpottingHigh.png");
imageURLs.push("imgs/QuirshiSpottingLow.png");
imageURLs.push("imgs/QuirshiLines.png");
imageURLs.push("imgs/QuirshiWhite.png");

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
    white=imgs[4];
    renderVillage();
 }
}
