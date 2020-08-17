function create(){
    
    // create test structure
    let body = document.getElementsByTagName("BODY")[0]    
    body.innerHTML = `
    <div class="container">
        <div class="image">
            <img src="https://images.freeimages.com/images/large-previews/1f8/delicate-arch-1-1391746.jpg" style="height:150px">
            <button class="remove">X</button>
            <button class="duplicate">Duplicate</button>
        </div>        
        <div class="image">
            <img src="https://images.freeimages.com/images/large-previews/e12/corn-field-1-1368931.jpg" style="height:150px">
            <button class="remove">X</button>
            <button class="duplicate">Duplicate</button>
        </div>        
    </div>
    `

    // practice stuff
    let duplicates = document.getElementsByClassName("duplicate")
    let imgs = document.getElementsByClassName("image")
    let containter = document.getElementsByClassName("container")[0];
    let img_collection = {1:2, 3:4, 5:5}
    let s = [1,2,3,4,5]
    s = s.toString()
    console.log(typeof(img_collection[1]))
    console.log(s)
    
    for (let i=0; i < imgs.length; i++) {
        img_collection[i] = imgs[i]
        duplicates[i].addEventListener(
            "click", 
            (e)=>{
                const img_copy = img_collection[i].cloneNode()
                containter.appendChild(img_copy)
              
                // img_collection[i].innerHTML += ``
            }
        )
    }
}

// execute function create() after page is loaded
window.onload = create;