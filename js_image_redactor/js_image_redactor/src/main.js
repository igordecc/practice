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
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" width="600" height="400" style="border:1px solid #d3d3d3;  background: #ABABAB;"> </canvas>`;
  
  var canvas = document.getElementById('canvasId');
  var ctx = canvas.getContext('2d');
  var inputElement = document.getElementById("inputId");
  
  inputElement.oninput = (e)=>{ 
    SRC = inputElement.files[0].name;
    document.getElementById('img').innerHTML = `<img id="imgPreviewId" src=${SRC}>`; 
    var inputImage = new Image ()
    inputImage.src = SRC 
    console.log(inputImage)
    console.log(ctx)
    ctx.drawImage(inputImage, 10, 10, 256, 256);
    console.log(ctx)  
    console.log(ctx.drawImage)  
  }

  document.getElementById('toolBox').innerHTML = `
    <button id="pencil">pencil</button><br>
    <button id="text">text</button><br>
    <button id="color">color</button><br>
    <button id="undo">undo</button><br>
    <button id="eraser">eraser</button><br>
    <button id="rectangle">rectangle</button><br>
    `;

  var toolPencil = document.getElementById('pencil');
  var toolText = document.getElementById('text');
  var toolColor = document.getElementById('color');
  var toolUndo = document.getElementById('undo');
  var toolEraser = document.getElementById('eraser');
  var toolRectangle = document.getElementById('rectangle');


// --- global tool chosen
var chosenTool = "";
// ----- tools object definition
  var Pencil = function(){
    
    this.changeState = ()=>{
    	chosenTool = "pencil";
    }
    
    this.mount = ()=>{
      // add Event listener
      ctx.fillStyle = "#FF0000";
      let drawState = "0";
      let pressPoint = [0,0]

      canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY];
      }

      canvas.onmousemove =(e)=>{
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.moveTo(pressPoint[0], pressPoint[1])
        ctx.lineTo(e.offsetX, e.offsetY);
        pressPoint = [e.offsetX, e.offsetY];
        if (drawState == "1" ) {
          ctx.strokeStyle = 'red';
          ctx.fill();
          ctx.stroke();
        } 
      };

      canvas.onmouseup = (e) => {
        drawState = "0";
      }
    }
  }
  
  var Rectangle = function() {

    this.changeState = ()=>{
    	chosenTool = "rectangle"; 
    }
    
    this.mount = ()=>{
      // add Event lister
      let color = "#3333ff";
      ctx.fillStyle = color;
      ctx.strokeStyle = color
      ctx.lineWidth = 10;
      let drawState = "0";
      let pressPoint = [0,0]

      canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY,1,1];
      } 

      canvas.onmousemove =(e)=>{
        // TODO: create move animation
      };

      canvas.onmouseup = (e) => {
        if (drawState == "1" ) {
          ctx.beginPath();
          ctx.rect(pressPoint[0], pressPoint[1], e.offsetX-pressPoint[0], e.offsetY-pressPoint[1]);
          ctx.stroke();
        }
        drawState = "0";
      }
      
     }
  };
  
  var Eraser = function() {
  // TODO make centered on cursor
    this.changeState = ()=>{
        chosenTool = "eraser"; 
    }
    
    this.mount = ()=>{
      // add Event listener
      let pressPoint = [0,0];
      let size = [50,50];
      ctx.lineWidth = 0;
      var drawState = "0"

      canvas.onmousedown = (e)=>{
      	drawState = "1"
        pressPoint = [e.offsetX, e.offsetY];
        ctx.clearRect(e.offsetX, e.offsetY, size[0], size[1])
      }

      canvas.onmousemove =(e)=>{
      	if (drawState=="1"){
        	ctx.clearRect(e.offsetX, e.offsetY, size[0], size[1])
        };
      };

      canvas.onmouseup = (e) => {
      drawState = "0";
      }
    }
  }
  
// ---------
  let toolPencilInstance = new Pencil()
  toolPencil.onclick = (e) => {
    toolPencilInstance.changeState()
    toolPencilInstance.mount()
  }
  
  let toolRectangleInstance = new Rectangle()
  toolRectangle.onclick = (e) => {
    toolRectangleInstance.changeState()
    toolRectangleInstance.mount()
  }
  
  let toolEraserleInstance = new Eraser()
  toolEraser.onclick = (e) => {
    toolEraserleInstance.changeState()
    toolEraserleInstance.mount()
  }
  
  
  
//----------
  // TODO write outer function for Pencil
  // when chosen: add Event listener
  // when desposed: remove Event listener

}
  
initUI();
