/*
canvas html picture.
*/ 
'use strict';
// Note: no background and layers mean NO IMAGE OBJECT for now - delete image object. Use var image.

function initUI (){

  document.getElementById('inputImg').innerHTML = `Image URL: <input id="inputId" type="text">`;
  document.getElementById('canvas').innerHTML = `W:<input id="canvasWidth" type=text> 
  H:<input id="canvasHight" type=text>
  <canvas 
  	tabindex='1' 
    id="canvasId" 
    width="600" 
    height="400" 
    style="border:1px solid #d3d3d3;  
    background: #ABABAB;"
   ></canvas>`; // tabindex='1' to get element focusable
  
  var inputElement = document.getElementById("inputId");
  var canvas = document.getElementById('canvasId');
  var canvasW = document.getElementById('canvasWidth');
  var canvasH = document.getElementById('canvasHight');
  var ctx = canvas.getContext('2d');
  
  
  document.getElementById('toolBox').innerHTML = `
    <button class="nav__link" id="pencil">pencil</button><br>
    <button class="nav__link" id="text">text</button><br> 
    <input id="color" class="nav__link" type='color'><br>
    <button class="nav__link" id="undo">undo</button><br>
    <button class="nav__link" id="eraser">eraser</button><br>
    <button class="nav__link" id="rectangle">rectangle</button><br>
    <button class="nav__link" id="ellipse">ellipse</button><br>
    `;
    
	
  var toolPencil = document.getElementById('pencil');
  var toolText = document.getElementById('text');
  var toolColor = document.getElementById('color');
  var toolUndo = document.getElementById('undo');
  var toolEraser = document.getElementById('eraser');
  var toolRectangle = document.getElementById('rectangle');
  var toolEllipse = document.getElementById('ellipse');
  var toolText = document.getElementById('text');
  


// --- global tool chosen
var chosenTool = "";
// ----- tools object definition
  var imageInput = (e)=>{ 
    function validURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    }
    let inputURL = inputElement.value
    if (validURL(inputURL)){
      var inputImage = new Image ()
      inputImage.src = inputURL    
      ctx.drawImage(inputImage, 10, 10, 256, 256);
      /* //if input field is file*/
      let SRC = inputElement.src
      document.getElementById('img').innerHTML = `<img id="imgPreviewId" src=${SRC}>`; 
    }	    
  }

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
   
  var Ellipse = function () {
  	
    this.changeState = ()=>{
     chosenTool = "elipse";
    }
    
    this.mount = ()=>{
    	let color = "#ffcc00";
      ctx.fillStyle = color;
      ctx.strokeStyle = color
      ctx.lineWidth = 10;
      let drawState = "0";
      let pressPoint = [0,0];
      
      canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY,1,1];
      } 

      canvas.onmousemove =(e)=>{
        // TODO: create move animation
      };

      canvas.onmouseup = (e) => {
        if (drawState === "1" ) {
          ctx.beginPath();
          let yhalf = 0
          if (e.offsetY>pressPoint[1]) {
          	yhalf = e.offsetY-Math.abs(pressPoint[1]-e.offsetY)/2
          }
          else {
          	yhalf = e.offsetY+Math.abs(pressPoint[1]-e.offsetY)/2
          }
          
        ctx.moveTo(pressPoint[0],  yhalf);
        ctx.bezierCurveTo(pressPoint[0], e.offsetY, e.offsetX, e.offsetY, e.offsetX, yhalf);
        ctx.moveTo(pressPoint[0],  yhalf);
        ctx.bezierCurveTo(pressPoint[0], pressPoint[1], e.offsetX, pressPoint[1], e.offsetX, yhalf);    
        ctx.stroke();
        }
        drawState = "0";
    	}
  	}
    
  }
  
  var Text = function () {
  	
    this.changeState = ()=>{
    	chosenTool = "text";
    }
    
    this.mount = ()=>{
    	let color = "#ffcc00";
      ctx.fillStyle = color;
      ctx.strokeStyle = color
      ctx.lineWidth = 10;
      let drawState = "0";
      let pressPoint = [0,0];
      let lastDownTarget;
      ctx.font = "30px Arial";
      let charStack = "";
      
      
      
      canvas.onmousedown = (e)=>{
      	lastDownTarget = e.target;
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY];
				ctx.fillText("", pressPoint[0], pressPoint[1]);
        charStack = "";
      } 

      canvas.onmousemove =(e)=>{
        // TODO: create move animation
      };
      
      let doKeyPress = (e)=>{
      	if ((lastDownTarget == canvas)&&(drawState==="1")&&(drawState==="1")) {
          e = e || window.event;
          let charCode = e.which || e.keyCode || e.charCode;
          let pressedChar = String.fromCharCode(charCode)          
          charStack += pressedChar;  
          ctx.fillText(charStack, pressPoint[0], pressPoint[1]);
        }
      }
      
      let doKeyDown = (e)=>{
        if (e.keyCode==="8"){
        	// backspace realisation
        	charStack.pop();
          ctx.fillText(charStack, pressPoint[0], pressPoint[1]);
        }
      }
      
      canvas.removeEventListener( "keypress", doKeyPress, false);
      canvas.removeEventListener( "keydown", doKeyDown, false);
      
      canvas.addEventListener( "keypress", doKeyPress, false);
      
      canvas.addEventListener( "keydown", doKeyDown, false);
 
      canvas.onmouseup = (e) => {
    	}
  	}
  }
  
// --------- color
toolColor.addEventListener("input", (e)=>{console.log(e.srcElement)}, false);


  
  
// ---------
  inputElement.addEventListener("blur", imageInput, false);

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
  
  let toolEraserInstance = new Eraser()
  toolEraser.onclick = (e) => {
    toolEraserInstance.changeState()
    toolEraserInstance.mount()
  }
  
   let toolEllipseInstance = new Ellipse()
  toolEllipse.onclick = (e) => {
    toolEllipseInstance.changeState()
    toolEllipseInstance.mount()
  }
  
  let toolTextInstance = new Text()
  toolText.onclick = (e) => {
    toolTextInstance.changeState()
    toolTextInstance.mount()
  }
  
}
  
initUI();
