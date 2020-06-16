'use strict';

function Image(src) {
  this.background = []
  if (src){
    this.background = src
  }
  // this.resolution = (x,y)
  this.ActionStack = new ActionStack()
}

function ActionStack(){
  this.stack = []
  this.add = (action) => this.stack = action
  this.cancel = () => this.stack.pop()
  return this
};

var SRC="\download.jpg";
var image = new Image(SRC);

function counter() {
  let seconds = 0;

  setInterval(() => {
    seconds += 1;``
    document.getElementById('timeCount').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
}

counter();


function initUI (){
  document.getElementById('file').innerHTML = `<input id="inputId" type="file">`;
  document.getElementById('img').innerHTML = `<img src=${image.background} width=100;>`;
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" width="300" height="150" style="border:1px solid #d3d3d3;"> </canvas>`;

  var canvas = document.getElementById('canvasId');
  var ctx = canvas.getContext('2d');

  document.getElementById('toolBox').innerHTML = `
    <button id="pencil">pencil</button><br>
    <button id="text">text</button><br>
    <button id="color">color</button><br>
    <button id="undo">undo</button><br>`;

  var toolPencil = document.getElementById('pencil');
  var toolText = document.getElementById('text');
  var toolColor = document.getElementById('color');
  var toolUndo = document.getElementById('undo');

  toolPencil.onchange = (e) => {
    
  }

  ctx.fillStyle = "#FF0000";
  
  canvas.onmousedown = (e)=>{

  }
  canvas.onmousemove =(e)=>{
    //switch case "0" 
    console.log("x:"+e.clientX+"  y:"+e.clientY);
    console.log("x:"+e.offsetX+"  y:"+e.offsetY);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle="red";
    ctx.fill();
  };


}


initUI();


var inputElement = document.getElementById("inputId");

inputElement.oninput = (e)=>{ 
  image.background = inputElement.files[0].name;
  document.getElementById('img').innerHTML = `<img src=${image.background} width=100;>`;  
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" src=${image.background} width=100;> </canvas>`;  
}

function initTools(){
  

}
initTools();
