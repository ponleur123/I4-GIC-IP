


// window.onload = function(){
//     let input = document.getElementById('button');
//     input.addEventListener('play', draw);

  
// }

//Access to camera

navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true
}).then(function(stream){
    let video = document.querySelector('video');
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





