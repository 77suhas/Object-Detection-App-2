img = "";
status = "";
function preload() {
  img = loadImage("dog_cat.jpg")
  img_1 = loadImage("img_1.jpg")
  img_2 = loadImage("img_2.jpg")
  img_3 = loadImage("img_3.jpg")
}
function setup() {
  canvas = createCanvas(600, 500)
  canvas.center()
  
  objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}
function draw() {
  image(img, 0, 0, 600, 500)  

  fill("#FF0000")
  text("dog", 100, 100)
  textSize(25)
  noFill()
  stroke("#FF0000")
  strokeWeight(2)
  rect(80, 80, 370, 400)

  fill("#FF0000")
  text("cat", 280, 110)
  noFill()
  stroke("#FF0000")
  rect(260, 90, 280, 400)
}
function modelLoaded() {
  console.log("model is loaded")
  status = true;
  objectDetector.detect(img, gotResults)
}
function gotResults(error, results) {
  if (error) {
    console.log(error)
  }
  else {
    console.log(results)
  }
}