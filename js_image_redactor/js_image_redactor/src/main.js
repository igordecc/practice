/*
canvas html picture.
*/ 
'use strict';
var SRC= "\download.jpg";
// Note: no background and layers mean NO IMAGE OBJECT for now - delete image object. Use var image.

function ActionStack(){
  this.stack = []
  this.add = (action) => this.stack = action
  this.cancel = () => this.stack.pop()
  return this
};


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
  document.getElementById('img').innerHTML = `<img src=${SRC} width=100;>`;
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" width="600" height="400" style="border:1px solid #d3d3d3;"> </canvas>`;

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

  var Pencil = function(){
    this.state = "0";
    this.changeState = ()=>{
      if (this.state =="0") {
        this.state = "1"
      }
      else {
        this.state = "0"
      }
    }
    this.mount = ()=>{
      if (this.state=="1"){
        ctx.fillStyle = "#FF0000";
        var drawState = "0";
        var pressPoint = [0,0]
        canvas.onmousedown = (e)=>{
          drawState = "1";
          pressPoint = [e.offsetX, e.offsetY];
        }
        canvas.onmousemove =(e)=>{
          if (drawState == "1" ) {
            ctx.strokeStyle = 'red';
            ctx.fill();
          ctx.beginPath();
          ctx.lineWidth = 10;
          ctx.lineCap = "round";
          ctx.moveTo(pressPoint[0], pressPoint[1])
          ctx.lineTo(e.offsetX, e.offsetY);
          pressPoint = [e.offsetX, e.offsetY];
          
          ctx.stroke();
          } 
        };
        canvas.onmouseup = (e) => {
          drawState = "0";
        }
      }
      else {
        canvas.onmousedown = null;
        canvas.onmousemove = null;
        canvas.onmouseup = null;
      }
    }
  }
   

  let tool = new Pencil()
  console.log("tool state: "+tool.state)
  toolPencil.onclick = (e) => {
    tool.changeState()
    tool.mount()
  }

  // TODO write outer function for Pencil
  // when chosen: add Event listener
  // when desposed: remove Event listener




}
  
  


initUI();


var inputElement = document.getElementById("inputId");

inputElement.oninput = (e)=>{ 
  SRC = inputElement.files[0].name;
  document.getElementById('img').innerHTML = `<img src=${SRC} width=100;>`;  
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" width=100;> </canvas>`;  
}

function initTools(){
  

}
initTools();
