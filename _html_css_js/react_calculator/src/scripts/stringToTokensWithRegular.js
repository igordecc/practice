// function pipeline:
// parse to token queue - token is a character in this case
// token queue to named token queue - tokens became named
//  /*sign, number, function or parenthesis*/



// function defineCharacters(queue) {
//     var newqueue = [];
//
//     for (let i=0; i<queue.length; i++) {
//         let qchar = queue[i];
//         if (qchar.test('^\d+$')) {
//             newqueue.push([qchar, 'n'])
//         }
//         else if (qchar.test('[]')) {
//
//         }
//
//     }
// }



function parseToTokenQueue(_string) {
    let token_queue = [];
    token_queue = _string.split('');
    return token_queue
}


function tokenQueueToNamedTokenQueue(token_queue) {
    let named_token_queue = [];
    for (let i=0; i<token_queue.length; i++) {
        let token = token_queue[i];
        if (token.match('/[0-9]/')) {
            named_token_queue = [token, 'n'];
        }
        else if (token.match('/[a-z]/')) {
            named_token_queue = [token, 'f'];
        }
        else if (token.match('/[]/')) {}
    }
    return named_token_queue

}

function pipeline(_string){
    let token_queue = parseToTokenQueue(_string);
    let named_token_queue = tokenQueueToNamedTokenQueue(token_queue)
}

pipeline("1+1");