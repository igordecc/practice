/*
* simple calculator
* without sign priority
* */
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplying(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}


// main
_string = "";
while (_string !== "stop") {
    var _string = prompt("do: ");
    console.log(_string);
}