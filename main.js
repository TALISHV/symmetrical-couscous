function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is loaded")
}

function draw(){
    image(video,0,0,400,400)
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
    }
}