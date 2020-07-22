/*
canvas html picture.
*/ 
'use strict';
// Note: no background and layers mean NO IMAGE OBJECT for now - delete image object. Use var image.

import {elementFactories} from './objects.js';

function ImageRedactor(customBuildSet){

    this.buildSet = {
        // important objects
        "rootElement":"envelope",
        "toolBox":true,
        // canvas itself
        "canvas":true,
    };


    // --- render
    for (let key in this.buildSet){    
        if (this.buildSet[key] && elementFactories[key]){
            elementFactories[key](this.buildSet[key]);
            console.log("ok");
        }
    };
};
  
let imageRExemplar = new ImageRedactor();

