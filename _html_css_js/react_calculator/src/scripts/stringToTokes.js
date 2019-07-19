// import React, { Component } from 'react';


function stringToTokens(_string) {
    var stack = [];
    var num_stack = "";
    var dot_stack = [];

    for (var i = 0; i < _string.length; i++) {

        switch (_string[i]){
            case /[0-9]/:
                num_stack.concat(_string[i]); // push to stack
                break;
            case /\./:
                if (!dot_stack[0]) {
                    dot_stack.push(".")
                } else {
                    return "syntax error: False dot"
                }
                break;
            case /\s/: break;
            case /[+\-*/\s]/ || i !== _string.length:
                let token = parseFloat(num_stack);
                dot_stack = [];
                stack.push(token);
                break;
            default:
                // console.log(typeof _string[i]);
        }
    }
    return stack
}

function compileRPN(_string){
    const operators = {
        "+": (x,y) => x+y,
        "-": (x,y) => x-y,
        "*": (x,y) => x*y,
        "/": (x,y) => x/y,
    };
    let evaluate = (_string) => {
        let stack = [];

        _string.split(" ").forEach((token) => {
            if (token in operators) {
                let [x, y] = [stack.pop(), stack.pop()];;
                let result = operators[token](x, y)
                stack.push(result);
            } else {
                stack.push(parseFloat(token));
            }
        });
        return stack;
    };
    return evaluate(_string);
}

function myParser(_string){
    /*
    * return list of tokens, which are (!) string type (!)
    * */
    var stack = [];

    var token_num_buffer = [];

    var e_trigger = 0;
    var dot_trigger = 0;
    var operation_type_trigger = "u"; // u - unary, b - binary

    for (let i=0; i < _string.length; i++) {
        let character = _string[i];
        let regularExprResult = character.match(/[0-9]/);
        if ( regularExprResult ) { // this is regular number check
            token_num_buffer.push(_string[i]);
        } else if ("e" === _string[i] || "E" === _string[i]) { //this is "e" check for scientific notation
            if (e_trigger === 0) {
                e_trigger = 1;
                operation_type_trigger = "e";
                token_num_buffer.push(_string[i]);
            } // else raise exception "expresion error: double e"
        } else if ( ("." === _string[i])||("," === _string[i]) ) { // this is number's float dot check
            if (dot_trigger === 0) {
                dot_trigger = 1;
                token_num_buffer.push(_string[i])
            } // else raise exception: "expresion error: double dot (.)"
        } else if (("+" === _string[i])||("-" === _string[i])) { // this is check for the unary sign after e or unary sign before the number
            if ( (operation_type_trigger === "u")||(operation_type_trigger === "e") ){
                operation_type_trigger = "b";
                token_num_buffer.push(_string[i])
            } else if (operation_type_trigger === "b") {
                // push to stack and reset token buffer;
                let complete_token = token_num_buffer.join("");
                stack.push(complete_token);
                e_trigger = 0;
                dot_trigger = 0;
                token_num_buffer = [];
                stack.push(_string[i])
            }
            } else if ((_string[i] === "*")||
                    (_string[i] === "/")||
                    (_string[i] === "^"))
            { //simple operation identifier
                let complete_token = token_num_buffer.join("");
                stack.push(complete_token);
                e_trigger = 0;
                dot_trigger = 0;
                token_num_buffer = [];
                stack.push(_string[i])
            }
    }
    let complete_token = token_num_buffer.join("");
    stack.push(complete_token);
    e_trigger = 0;
    dot_trigger = 0;
    token_num_buffer = [];
    return stack;
}


var _str = "+87 + 895e+40 + 89895 * 859859.0999e-10 ";

console.log(myParser(_str));

// export default toReversePolishNotation;