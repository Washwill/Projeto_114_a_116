bigodeX = 0;
bigodeY = 0;
oculosX = 0;
oculosY = 0;
function preload(){
bigode = loadImage('https://i.postimg.cc/sgyMbTkT/index.png');
oculos = loadImage('https://i.postimg.cc/Dwyk7y89/oculos.webp');
}

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("modelo carregado");
}

function gotPoses(results){
console.log(results);
if(results.length > 0){
  bigodeX = results[0].pose.nose.x;
  bigodeY = results[0].pose.nose.y;
  if(results.length > 0){
    oculosX = results[0].pose.rightEye.x;
    oculosY = results[0].pose.leftEye.y;
  }
}
}

function draw(){
image(video,0,0,500,500);
image(bigode,bigodeX - 70,bigodeY - 20,140,140);
image(oculos,oculosX - 40,oculosY - 70,170,140);
}

function takeSnapshot(){
    save('foto.png');
}
