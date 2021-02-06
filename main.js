nosex=0
nosey=0
difference=0
rightwristx=0
leftwristx=0

function preload(){
}

function setup(){
 video = createCapture(VIDEO);
 video.size(500 , 500)

canvas = createCanvas(400,400)
canvas.position(550,200)

 posenet = ml5.poseNet(video , modelloaded)
 posenet.on("pose" , gotPoses)
}
function draw(){
  background("#1a5fa1")
  fill("#ff0000")
  stroke("red")
  square(nosex,nosey,difference)
}
function modelloaded(){
    console.log("pose net is working do not worry!!!")
}
function gotPoses(results) {
    if (results.length > 0){
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log("nosex ="+nosex+ "nosey ="+nosey)
        leftwristx = results[0].pose.leftWrist.x
        rightwristx=results[0].pose.rightWrist.x
        difference = floor(leftwristx - rightwristx)
    }
}