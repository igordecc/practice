// import React, { Component } from 'react';
// TODO rewrite myParser with a new more objected conception
function myParser(_string){
    /*
    * return list of tokens, which are (!) string type (!)
    * ALWAYS USE TRY-CATCH on myParser
    *
    * tokenStack[0] - token by itself
    * tokenStack[1] index legend:
        * num - number,
        * op - operator,
        * func - function,
        * ( - left parent
        * ) - right parent
        *tokenStack[2] - operator precedence: ^ - 4, /* - 3, +- - 2.
        *tokenStack[3] - operator associations: l - left, r - right
    *
    * */
    var stack = [];

    var token_num_buffer = [];

    var e_trigger = 0;
    var dot_trigger = 0;
    // var operation_type_trigger = "u"; // u - unary, b - binary, e - exponent

    function pushNumTokenAndResetTriggers() {
        if (token_num_buffer[0]) { // because we need to avoid empty stack tokens, which are if (token_num_buffer[0] === null)
            let complete_token = token_num_buffer.join("");
            stack.push([complete_token, "num"]);
        }
        e_trigger = 0;
        dot_trigger = 0;
        token_num_buffer = [];
    }

    for (let i=0; i < _string.length; i++) {
        let character = _string[i];
        let regularExprResult = character.match(/[0-9]/);
        if ( regularExprResult ) { // this is regular number check
            token_num_buffer.push(_string[i]);
        }
        else if ("e" === _string[i] || "E" === _string[i]) { //this is "e" check for scientific notation
            if (e_trigger === 0) {
                e_trigger = 1;
                token_num_buffer.push(_string[i]);
            } else throw "expresion error: double e";
        }
        else if ( ("." === _string[i])||("," === _string[i]) ) { // this is number's float dot check
            if (dot_trigger === 0) {
                dot_trigger = 1;
                token_num_buffer.push(_string[i])
            } else throw "expresion error: double dot (.)";
        }
        else if (("+" === _string[i])||("-" === _string[i])) { // this is check for the unary sign after e or unary sign before the number
            if ((!token_num_buffer.length)&&(stack[stack.length-1][1] !=='op') || (token_num_buffer[token_num_buffer.length-1] === "e")) {
                token_num_buffer.push(_string[i])
            } else {
                // push to stack and reset token buffer;
                pushNumTokenAndResetTriggers();
                stack.push([_string[i], "op", 2]) // stack[2] is the operator precedence
            }
        }
        else if (_string[i] === "(" || _string[i] === ")")   {
            pushNumTokenAndResetTriggers();
            if (_string[i] === "(") {
                stack.push([_string[i], "("]);
            } else {
                stack.push([_string[i], ")"]);
            }
        }
        else if ((_string[i] === "*") || (_string[i] === "/") )
        { //simple operation identifier
            pushNumTokenAndResetTriggers();
            stack.push([_string[i], "op", 3]); // stack[2] is the operator precedence
        }
        else if (_string[i] === "^") {
            pushNumTokenAndResetTriggers();
            stack.push([_string[i], "op", 4]); // stack[2] is the operator precedence
        }
    }
    pushNumTokenAndResetTriggers();
    // TODO catch  unclosed parenthesis and left-operators INSIDE reverse poland notation
    // Note lets not add multi-argument functions
    // TODO add ** power operator
    console.log("inverse notation: ", stack);
    return stack;
}

function tokensToPolishNotation(tokenStack) {

    var queue = [];
    var operatorStack = [];
    for (let i = 0; i<tokenStack.length; i++) {
        /*
        * tokenStack[0] - token by itself
        * tokenStack[1] - index legend:
            * num - number,
            * op - operator,
            * func - function,
            * ( - left parent
            * ) - right parent
           *tokenStack[2] - operator precedence: ^ - 4, /* - 3, +- - 2.
           *tokenStack[3] - operator associations: l - left, r - right
        */
        let token = tokenStack[i];
        let id = tokenStack[i][1];
        if ( id === "num") {
            queue.push(token)
        }
        else if ( id === "func" ) {
            operatorStack.push(token)
        }
        else if ( id === "op") { // the complecatest part
            if (operatorStack[operatorStack.length-1]) { // because if operatorStack is empty js refuse to compare it (see lower).
                while (
                    ((operatorStack[operatorStack.length-1][1] === "func")
                        || (operatorStack[operatorStack.length-1][1] === "op" && operatorStack[operatorStack.length-1][2] > token[2] ) //or (there is an operator at the top of the operator stack with greater precedence)
                        || (operatorStack[operatorStack.length-1][1] === "op" && operatorStack[operatorStack.length-1][2] === token[2] && operatorStack[operatorStack.length-1][3] === "l")
                    )
                    && (operatorStack[operatorStack.length-1][1] !== "(")
                    ) {
                    queue.push( operatorStack.pop() );
                }
            }
            operatorStack.push(token);
        }
        else if ( id === "(" ) {
            operatorStack.push(token)
        }
        else if ( id === ")" ) {
            if (operatorStack[operatorStack.length-1]) {
                while (
                    operatorStack[operatorStack.length-1][1] !== "("
                    ) {
                    if (!operatorStack) {throw "mismatched parentheses";}
                    queue.push( operatorStack.pop() );
                }
            }
            if (operatorStack[operatorStack.length-1]) {
                if (operatorStack[operatorStack.length-1][1] === "(") {
                    operatorStack.pop();
                }
            }
            if (operatorStack[0]) { // "if operatorStack is not null"
                while (operatorStack.length) { queue.push(operatorStack.pop()) }
            } else if (!tokenStack.length){
                while (operatorStack.length) {
                    if (operatorStack[operatorStack.length-1][1] === "(" || operatorStack[operatorStack.length-1][1]===")") {
                        throw "left open parentheses";
                    }
                    queue.push(operatorStack.pop())
                }
            }
        }
    }
    while (operatorStack.length) {
        queue.push(operatorStack.pop())
    }
    console.log("RPN: ", queue);
    return queue;
}


function evaluateRPN(tokenRPNstring){
    var operatorStack = [];
    var operandStack = [];
    var pendingOperandTrigger = 0;

    function evaluate(operator, operand1, operand2) {
        var operand1 = parseFloat(operand1);
        var operand2 = parseFloat(operand2);
        switch (operator) {
            case "+":
                return operand1+operand2;
            case "-":
                return operand1-operand2;
            case "*":
                return operand1*operand2;
            case "/":
                return operand1/operand2;
            case "^":
                return Math.pow(operand1, operand2);
            default: throw "Unidentified operator "+operator;
        }
    }

    for (let i=tokenRPNstring.length-1; i >= 0; i--) { //from right to left evaluate RPN version
        var token = tokenRPNstring[i][0];
        // console.log(token);
        let id = tokenRPNstring[i][1];
        if (id === "op") {
            var operator = token;
            // console.log(operator);
            operatorStack.push(operator);
            pendingOperandTrigger = 0;
        }
        else if (id === "num") {
            var operand = token;
            if (pendingOperandTrigger) {
                while ((operandStack.length)
                    && operatorStack.length){
                    let operand1 = operandStack.pop();
                    let operator = operatorStack.pop();
                    console.log(operand);
                    console.log(operand1);
                    console.log(operator);
                    var operand = evaluate(operator, operand, operand1);
                }
            }
        operandStack.push(operand);
        pendingOperandTrigger = 1;
        }
    }
    console.log("evaluate: ", operandStack);
    return operandStack
}



// var _str = "+87 ++++ (-895e+40 + 89895^2 * 859859.0999e-10) ";
// // var _str = "87+7 ";
// try {
//         var infix = myParser(_str);
//         console.log(infix);
//         var postfix = tokensToPolishNotation(infix);
//         console.log(postfix);
//         console.log(evaluateRPN(postfix)[0]);
//     }
// catch(e) {
//         console.log(e);
// }


function calculateString(_string) {
    try {
        var infix = myParser(_string);
        var postfix = tokensToPolishNotation(infix);
        var result = evaluateRPN(postfix)[0];
        return result
    }
    catch(e) {
        console.log(e);
    }
}

export default calculateString;

// TODO debug myparser  - simple test "87+7" failed
// TODO Debug RPN  - simple test "87*7" failed too
// TODO - lets write tests!
 // export default calculateString;
