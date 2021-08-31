function setup() {
  canvas = createCanvas(400, 300);
  canvas.position(500,200);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", modelLoaded);

}

function modelLoaded(){
  console.log("model is loaded");
}


function preload(){
  
}

function draw(){
  image(video, 0, 0, 400, 300);
  classifier.classify(video, gotResults);

}

function gotResults(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("Object").innerHTML=results[0].label;
    document.getElementById("Accrury").innerHTML=results[0].confidence.toFixed(3);
  }
}

