// document.getElementById("button").onchange = function(e){
//     var img = new Image();
//     img.onload = draw;
   
//     img.src = URL.createObjectURL(this.files[0]);
// };

// function draw(){
//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(this,0,0);
// }

const canvas = document.getElementById("myCanvas");

const IMG = canvas.getContext('2d');

window.onload = function(){
    var input = document.getElementById("button");
    input.addEventListener('change',handleImage);
}

function handleImage(uploadedImgFile){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            IMG.drawImage(img,10,10);
        }
        img.src = event.target.result
    }
    reader.readAsDataURL(uploadedImgFile.target.files[0]);
}