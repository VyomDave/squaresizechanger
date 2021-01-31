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
}
function modelloaded(){
    console.log("pose net is working do not worry!!!")
}
function gotPoses(results) {
    if (results.length > 0){
        console.log(results)
    }
}