


// window.onload = function(){
//     let input = document.getElementById('button');
//     input.addEventListener('play', draw);

//const cv = require("../HTML/OpenCV");

  
// }

//Access to camera
let video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true 
}).then(function(stream){
    // let video = document.querySelector('video');
    video.srcObject = stream;
    video.onloadedmetadata = function(e){
        video.pause();
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
    if(vid.value=="Play"){
        vid.value = "Pause";
    }
    else{
        vid.value = "Play";
    }
}

video.onload = function(){
    let src = new cv.imread(video);
    let dst = new cv.Mat();
    let rect = new cv.Rect(0,0,100,80);
    dst = src.roi(rect);
    cv.imshow('output-canvas',dst);
    src.delete();
    dst.delete();
}


