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
                console.log(typeof _string[i]);
        }
    }
    return stack
}

var _str = "87+ 895 +89895+859859.0999";
console.log(stringToTokens(_str));

// export default toReversePolishNotation;