


// window.onload = function(){
//     let input = document.getElementById('button');
//     input.addEventListener('play', draw);

//const cv = require("../HTML/OpenCV");

  
// }

//Access to camera

navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
}).then(function(stream){
    let video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.play();
    };
}).catch((err)=>{
    console.log('navigator.MediaDevices.getUserMedia error: ',err.message,err.name);
});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');


function draw(video, canvas, ctx, framerate){
    ctx.drawImage(video,10,10);
    setTimeout(draw, 1000/60);
}

function play(){
    let vid = document.getElementById("myVideo");
    if(vid.paused){
        vid.play();
    }
    else{
        vid.pause();
    }
}
function change(){
    let vid = document.getElementById("button");
    if(vid.value=="Pause"){
        vid.value = "Play";
    }
    else{
        vid.value = "Pause";
    }
}

canvas.onload = function(){
    let src = new cv.imread('imgdata');
    let dst = new cv.Mat();
    let rect = new cv.Rect(0,0,100,80);
    dst = src.roi(rect);
    cv.imshow('myCanvas',dst);
    src.delete();
    dst.delete();
}


