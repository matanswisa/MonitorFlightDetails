var arrowImage = document.getElementById("arrow");
// arrowImage.addEventListener('load', e => {
//   ctx.drawImage(arrowImage, 400, 400, 200, 200);
//   console.log('inside arrow image');
// });




var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

window.onload = ()=>{
  drawClock(40);
}
// const image = new Image(50, 50); // Using optional size for image
// //image.onload = drawImageActualSize;
// image.src = './arrowUp.png'

function drawClock(his) {
  ctx.save()
  drawFace(ctx, radius,his);
  drawNumbers(ctx, radius);
  ctx.restore()
  drawCenterImage(ctx,radius)
}


// function drawImageActualSize() {
//   // Use the intrinsic size of image in CSS pixels for the canvas element
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;

//   // Will draw the image as 300x227, ignoring the custom size of 60x45
//   // given in the constructor
//   // ctx.drawImage(this, 0, 0);

//   // To use the custom size we'll have to specify the scale parameters 
//   // using the element's width and height properties - lets draw one 
//   // on top in the corner:
//   ctx.drawImage(this, 200, 200, 50, 50);
// }

function drawFace(ctx, radius,his) {
  ctx.beginPath();
  
  drawBorder(ctx,radius)
  ctx.rotate(his * Math.PI / 180)
  
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.fillStyle = '#333'
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 0; num < 360; num+=90){
    ang = num * Math.PI / (-12);
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawBorder(ctx,radius) {
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
}

function drawCenterImage(ctx)
{
  const image = new Image(50, 50); // Using optional size for image
  //image.onload = drawImageActualSize;
  image.src = './arrowUp.png'
  console.log(radius);
  ctx.drawImage(image,-image.width/2, -image.height/2,50,50); 
}