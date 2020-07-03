/*
canvas html picture.
*/ 
'use strict';
// Note: no background and layers mean NO IMAGE OBJECT for now - delete image object. Use var image.

function ImageRedactor(customBuildSet){
  this.buildSet = {
    // important objects
    "rootElement":"envelope",
    "toolBox":true,
    // canvas itself
    "canvas":true,
  };
	// -- define builders
  this.elementPool = new Object();
  this.elementPool.rootElement = (id)=>{
    // TODO: change it to     document.getElementById(id).innerHTML += `<div class="imageRedactor" id="imageRedactor"></div>`
      document.getElementById(id).innerHTML =  `<div class="imageRedactor" id="imageRedactor"></div>`+document.getElementById(id).innerHTML;
  };
  this.elementPool.toolBox = (e)=>{
  document.getElementById('imageRedactor').innerHTML += `<div class='toolBox' id='toolBox'></div>`
  };
  this.elementPool.canvas = (e)=>{
    document.getElementById('imageRedactor').innerHTML += `
      W:<input id="canvasWidth" type=text> 
      H:<input id="canvasHight" type=text>
      <canvas 
        tabindex='1' 
        id="canvasId" 
        width="600" 
        height="400" 
        style="border:1px solid #d3d3d3;  
        background: #ABABAB;"
      ></canvas><br>
    `; // tabindex='1' to get element focusable
  // --- context and variables definition
  this.canvas = document.getElementById('canvasId');
  this.canvasW = document.getElementById('canvasWidth');
  this.canvasH = document.getElementById('canvasHight');
  this.ctx = this.canvas.getContext('2d');
  this.toolHTMLstack = "";
  };

/* this.elementPool.inputImg = (e)=>{
    document.getElementById('imageRedactor').innerHTML += `Image URL: <input id="inputId" type="text"><br>`;
  } */
  	// --- render
  for (let key in this.buildSet){    
    if (this.buildSet[key] && this.elementPool[key]){
      this.elementPool[key](this.buildSet[key]);
    }
  };

  //====================== tools init

  
  if (!customBuildSet){
    this.buildSetTools = { 
      "pencil":true,
      "undo":true,
      "redo":true,
      "inputImg":true,
      "eraser": true,
      "ellipse":true,
      "rectangle":true,
      "linew":true,
      "color":true,
      "text":true,
    }
  }else{
    this.buildSetTools = customBuildSet;
  };
  // BUG - the lust element comes with addEventListeners
  // --- tools definition
  
  // TODO: replace this. by geElementById
  // TODO: replace addEventListeners by direct addition to html 
  
  function addToolElements(customBuildSet){
    let elements = {
      inputImg : `<input class="nav__link" id="inputId" placeholder="img URL" type="text"><br>`,
      pencil :  `<button class="nav__link" id="pencil">pencil</button><br>`,
      text : `<button class="nav__link" id="text">text</button><br> `,
      color : `<input  class="nav__link" id="color"  type='color'><br>`,
      linew: `<input  class="nav__link" id="lineW" min=1 max=30 value=10 type='range'><input  class="nav__link" id="lineWValue" type='text' size="5"><br>`,
      undo: `<button class="nav__link" id="undo">undo</button><br>`,
      redo: `<button class="nav__link" id="redo">redo</button><br>`,
      eraser: `<button class="nav__link" id="eraser">eraser</button><br>`,
      rectangle: `<button class="nav__link" id="rectangle">rectangle</button><br>`,
      ellipse: `<button class="nav__link" id="ellipse">ellipse</button><br>`,
    }
    let toolStack = "";
    for (let key in elements){
      if (key in customBuildSet){
        toolStack += elements[key]
      }
    }
    return toolStack
  };

  this.toolHTMLstack = addToolElements(this.buildSetTools)

  document.getElementById('toolBox').innerHTML = this.toolHTMLstack;
   
  // get image data with canvas dimentions  
  var getI = (e)=>{return this.ctx.getImageData(0,0,this.canvas.width, this.canvas.height)}

  // --- undo
  var redoStack = []
  var undoStack = [getI(),]
  
  let undoFunc = 	(e)=>{
    if (undoStack.length>1) {redoStack.push(undoStack.pop())};
    this.ctx.putImageData(undoStack[undoStack.length-1], 0,0,0,0,this.canvas.width, this.canvas.height);      
    };
  
  // --- redo
  let redoFunc = (e)=>{
  if (redoStack.length>0){
    this.ctx.putImageData(
      redoStack[redoStack.length-1], 
      0,
      0,
      0,
      0,
      this.canvas.width, 
      this.canvas.height
      );
    undoStack.push(redoStack.pop());
    }
  }; 
  
  // undo redo super useful 
  // cause to negate performance issues and always boot undoredo stacks and hotkeys 
  var undoKeys = (e)=>{return (e.ctrlKey && !e.shiftKey &&e.code ==="KeyZ") }
  var redoKeys = (e)=>{return ((e.ctrlKey && e.shiftKey && e.code ==="KeyZ")||(e.ctrlKey && e.code ==="KeyY")||(e.ctrlKey && e.shiftKey && e.code ==="KeyY"))}
  window.addEventListener("keydown", (e)=>{if (e.ctrlKey && !e.shiftKey &&e.code ==="KeyZ"){undoFunc(e)}}, false);
  window.addEventListener("keydown", (e)=>{if ((e.ctrlKey && e.shiftKey && e.code ==="KeyZ")||(e.ctrlKey && e.code ==="KeyY")||(e.ctrlKey && e.shiftKey && e.code ==="KeyY")) {redoFunc(e)}}, false);
  
  this.elementPool.toolBox.undo = ()=>{
    this.toolUndo = document.getElementById("undo");
    this.toolUndo.addEventListener("click", undoFunc, false);
  }
  
  this.elementPool.toolBox.redo = ()=>{
    this.toolRedo = document.getElementById("redo");
    this.toolRedo.addEventListener("click", redoFunc, false);
  }
  
  this.elementPool.toolBox.linew = (e)=>{
    // --- line width
    let toolLineW = document.getElementById('lineW');
    let toolLineWValue = document.getElementById('lineWValue');
    console.log(toolLineW.value)
    this.ctx.lineWidth = toolLineW.value;
    toolLineWValue.value = toolLineW.value;
    toolLineW.addEventListener(
      "input", 
      (e)=>{
          this.ctx.lineWidth = toolLineW.value; 
          toolLineWValue.value = toolLineW.value;
        }, 
      false
    )
  }

  this.elementPool.toolBox.color = (e)=>{
      // --- color 
      let toolColor = document.getElementById('color');
      this.ctx.fillStyle = toolColor.value; 
      this.ctx.strokeStyle = toolColor.value;
      toolColor.addEventListener("change", 
        (e)=>{
        this.ctx.fillStyle = toolColor.value; 
        this.ctx.strokeStyle = toolColor.value;
        }, 
      false);
  }
  
  this.elementPool.toolBox.inputImg = ()=>{
    let input =  document.getElementById('inputId')
    input.addEventListener(
      "blur", 
      (e)=>{	
        function validURL(str) {
          var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
          return !!pattern.test(str);
        };
        let inputURL = input.value      
        if (validURL(inputURL)){
          var inputImage = new Image ()
          inputImage.src = inputURL   
          this.ctx.drawImage(inputImage, 10, 10, 256, 256);
          undoStack.push(getI());
          redoStack = []; 
        }	    
      },
      false 
    )
  };
  
  this.elementPool.toolBox.pencil = (e)=>{
    this.pencil = document.getElementById('pencil');
    this.pencil.addEventListener(
    "click",  
    (e) => {
      this.chosenTool = "pencil";// change state
      // --- mount
      // add Event listener
      let drawState = "0";
      let pressPoint = [0,0]
      this.canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY];
      }

      this.canvas.onmousemove =(e)=>{
        this.ctx.beginPath();
        this.ctx.lineCap = "round";
        this.ctx.moveTo(pressPoint[0], pressPoint[1])
        this.ctx.lineTo(e.offsetX, e.offsetY);
        pressPoint = [e.offsetX, e.offsetY];
        if (drawState == "1" ) {
          this.ctx.fill();
          this.ctx.stroke();
        } 
      };

      this.canvas.onmouseup = (e) => {
        drawState = "0";
        undoStack.push(getI());
        redoStack = [];
      }
    }, 
    false
    );
  };
  
  this.elementPool.toolBox.eraser = (e)=>{
    document.getElementById('eraser').addEventListener("click", (e)=>{
      let pressPoint = [0,0];
      let size = [50,50];
      var drawState = "0"
      
      this.canvas.onmousedown = (e)=>{
        drawState = "1"
        pressPoint = [e.offsetX, e.offsetY];
        this.ctx.clearRect(e.offsetX, e.offsetY, size[0], size[1])
      }

      this.canvas.onmousemove =(e)=>{
        if (drawState=="1"){
          this.ctx.clearRect(e.offsetX, e.offsetY, size[0], size[1])
        };
      };

      this.canvas.onmouseup = (e) => {
      drawState = "0";
      undoStack.push(getI());
      redoStack = [];
      }; 
    }) 
  };

  this.elementPool.toolBox.rectangle = (e)=>{
    document.getElementById('rectangle').addEventListener("click", (e)=>{

      // add Event lister
      let drawState = "0";
      let pressPoint = [0,0]
      
      this.canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY,1,1];
      } 
  
      this.canvas.onmousemove =(e)=>{
        // TODO: create move animation
      };
  
      this.canvas.onmouseup = (e) => {
        if (drawState == "1" ) {
          this.ctx.beginPath();
          this.ctx.rect(pressPoint[0], pressPoint[1], e.offsetX-pressPoint[0], e.offsetY-pressPoint[1]);
          this.ctx.stroke();
        }
        drawState = "0";
        undoStack.push(getI()); 
        redoStack = [];
      };
    }) 
  };

  this.elementPool.toolBox.text = (e)=>{
    let textTool = document.getElementById('text');
    textTool.addEventListener("click", (e)=>{
      
      let drawState = "0";
      let pressPoint = [0,0];
      
      this.ctx.font = "30px Arial";
      
      let charStack = "";
      let imageStack = [getI(),];
      let imageOrigin = getI()

      let saveText =(e)=>{
        console.log("enter")
        // enter realisation
        this.ctx.putImageData(getI(), 0,0,0,0,this.canvas.width, this.canvas.height);
        charStack = "";
        imageStack = [getI(),];
        imageOrigin = getI()
      }
      
      this.canvas.onmousedown = (e)=>{
        charStack = "";
        imageStack = [getI(),]; // for undo chars on animation
  
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY];
        this.ctx.fillText("", pressPoint[0], pressPoint[1]);

        // global undo redo -- buggi
        saveText()
        undoStack.push(getI());
        redoStack = [];
      } 

      this.canvas.addEventListener( "keypress", (e)=>{
        if ((e.target == this.canvas)&&(drawState==="1")&&(drawState==="1")&&(!undoKeys(e)&&(!redoKeys(e)))) {
          // to understand and remember char in 'charStack'
          e = e || window.event;
          let charCode = e.which || e.keyCode || e.charCode;
          let pressedChar = String.fromCharCode(charCode);     
          if ((e.keyCode !== 13)&&(e.keyCode!==8)){
            charStack += pressedChar;    

            // animate func
          this.ctx.putImageData(imageOrigin, 0,0,0,0,this.canvas.width, this.canvas.height);
          this.ctx.fillText(charStack, pressPoint[0], pressPoint[1]);
          imageStack.push(getI());
          }  
             
        }
      });

      this.canvas.addEventListener( "keydown", (e)=>{
        // backspace realisation
        // TODO: need internal undo stack  

        let x = e.keyCode.toString()
        console.log(x)
        switch (x){ 
          case "8":
            console.log("backspace")    
            charStack = charStack.slice(0, charStack.length-1)
            if (imageStack.length>1){
              imageStack.pop();
              this.ctx.putImageData(imageOrigin, 0,0,0,0,this.canvas.width, this.canvas.height);
              this.ctx.fillText(charStack, pressPoint[0], pressPoint[1]);   
            }
            break;
          case "13":
            saveText()
            break;
    
        }
      });
   
      
    })


  }

  this.elementPool.toolBox.ellipse = (e)=>{
    document.getElementById('ellipse').addEventListener("click", (e)=>{

      let drawState = "0";
      let pressPoint = [0,0];
      
      this.canvas.onmousedown = (e)=>{
        drawState = "1";
        pressPoint = [e.offsetX, e.offsetY,1,1];
      } 
  
      this.canvas.onmousemove =(e)=>{
        // TODO: create move animation
      };
  
      this.canvas.onmouseup = (e) => {
        if (drawState === "1" ) {
          this.ctx.beginPath();
          let yhalf = 0
          if (e.offsetY>pressPoint[1]) {
            yhalf = e.offsetY-Math.abs(pressPoint[1]-e.offsetY)/2
          }
          else {
            yhalf = e.offsetY+Math.abs(pressPoint[1]-e.offsetY)/2
          }
          
        this.ctx.moveTo(pressPoint[0],  yhalf);
        this.ctx.bezierCurveTo(pressPoint[0], e.offsetY, e.offsetX, e.offsetY, e.offsetX, yhalf);
        this.ctx.moveTo(pressPoint[0],  yhalf);
        this.ctx.bezierCurveTo(pressPoint[0], pressPoint[1], e.offsetX, pressPoint[1], e.offsetX, yhalf);    
        this.ctx.stroke();
        }
        drawState = "0";
        undoStack.push(getI());
        redoStack = [];
      }
    }) 
  };

	// --- tools render
    for (let key in this.buildSetTools){    
    
    if (this.buildSetTools[key] && this.elementPool.toolBox[key]){
      console.log(key)
      this.elementPool.toolBox[key](this.buildSetTools[key]);
    }
  // ---
  };
};
  
let imageRExemplar = new ImageRedactor();

