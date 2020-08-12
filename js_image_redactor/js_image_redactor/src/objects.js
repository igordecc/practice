export let elementFactories = {};
elementFactories['rootElement'] = (id)=>{
    // TODO: change it to     document.getElementById(id).innerHTML += `<div class="imageRedactor" id="imageRedactor"></div>`
    document.getElementById(id).innerHTML =  `<div class="imageRedactor" id="imageRedactor"></div>`+document.getElementById(id).innerHTML;
};

elementFactories['toolBox']  = (e)=>{
    document.getElementById('imageRedactor').innerHTML += `<div class='toolBox' id='toolBox'></div>`
};

elementFactories['canvas'] =  (e)=>{
    // tabindex='1' to get element focusable
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
    `;  
};

