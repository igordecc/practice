'use strict';


function counter() {
  let seconds = 0;
  let SRC="\download.jpg";

  setInterval(() => {
    seconds += 1;``
    document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
  }, 1000);
  let image = new Image(SRC)
  document.getElementById('img').innerHTML = `<img src=${image.background} width=100;>`;
  document.getElementById('img').innerHTML = `<canvas src=${image.background} width=100;> </canvas>`;
}

counter();


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
