function setup() { 
    let body = document.getElementById("root")

    body.innerHTML = `
    <div class="image">
        <img src="https://goo.gl/kjzfbE" alt="First">
        <button class="remove">X</button>
    </div>
    <div class="image">
        <img src="https://goo.gl/d2JncW" alt="Second">
        <button class="remove">X</button>
    </div>`;
    
    let but = document.getElementsByClassName("remove") 
    let img = document.getElementsByClassName("image")
    let _collection = {}
    for (let i=0; i < but.length; i++){
        _collection[i] = img[i]
        but[i].addEventListener("click", (e)=>{_collection[i].remove()})
    }

    //document.getElementsByClassName("remove")[0].click();
    console.log(document.body.innerHTML);

}

// Example case. 
//let body = document.getElementsByTagName("body")[0]

window.onload = setup
