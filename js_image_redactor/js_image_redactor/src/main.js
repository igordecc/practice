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
  document.getElementById('canvas').innerHTML = `<canvas  id="canvasId" src=${image.background} width=100;> </canvas>`;
}

initUI();


var inputElement = document.getElementById("inputId");

inputElement.oninput = (e)=>{
  // get element value works perfectly, now  TODO:fetch real adress
  let imageRequest = new Request('screen.png'); 
  image.background = inputElement.files[0].name;
  document.getElementById('img').innerHTML = `<img src=${image.background} width=100;>`;  
}

function initTools(){
  document.getElementById('toolBox').innerHTML = `<button id="pencil">pencil</button>`
}
initTools();
