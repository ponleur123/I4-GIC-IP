


// window.onload = function(){
//     let input = document.getElementById('button');
//     input.addEventListener('play', draw);

  
// }

//Access to camera

let video = document.querySelector('video');
navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true 
}).then(function(stream){
    video.srcObject = stream;
    
}).catch((err)=>{
    console.log('navigator.MediaDevices.getUserMedia error: ',err.message,err.name);
});

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');


function draw(video, canvas, ctx, framerate){
    if(playing)
    {
        ctx.drawImage(video,0,0,canvas.width,canvas.height);
        setTimeout(draw, 1000/60);
    }
    
}

function play(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
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





