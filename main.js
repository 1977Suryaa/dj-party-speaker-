left_wrist_y=0
left_wrist_x=0
rigth_wrist_y=0
rigth_wrist_x=0
left_score=0
status_1=""
status_2=""
function preload(){
    song1=loadSound("coffin.mp3")
    song2=loadSound("Pablo.mp3")
    
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.position(500,125)
    webcam=createCapture(VIDEO)
    webcam.hide()
    webcam.size(300,300)
    pose=ml5.poseNet(webcam,modelloded)
    pose.on("pose",gotResult)
}
function draw(){
    image(webcam,0,0,300,300)
    fill("red")
    stroke("black")
    status_1=song1.isPlaying()
    status_2=song2.isPlaying()
    if(left_score>0.2){
        circle(left_wrist_x,left_wrist_y,20)
        if(status_2==true){
            song2.stop()
        }
        else{
            song2.play()
        }
    }
    if(right_score>0.2){
        circle(right_wrist_x,right_wrist_y,20)
        if(status_1==true){
            song1.stop()
        }
        else{
            song1.play()
        }
    }
    
}
function pause(){
    song.pause()
}
function stop(){
    song.stop()
}
function modelloded(){
    console.log("hai i am working")
}
function gotResult(results){
    if(results.length>0){
        console.log(results)
        left_wrist_y=results[0].pose.leftWrist.y
        left_wrist_x=results[0].pose.leftWrist.x
        right_wrist_y=results[0].pose.rightWrist.y
        right_wrist_x=results[0].pose.rightWrist.x
        left_score=results[0].pose.keypoints[9]
    }

}