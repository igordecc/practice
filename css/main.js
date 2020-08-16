function logb() {
    console.log("b")
}

function main(){
    console.log("a") 
    setTimeout(logb, 0)
    console.log("c")
}

main();
