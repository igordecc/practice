var _number_stack = [];
var _function_stack = [];

function change_state_from_character(_char, _state) {
    // if (_string.length) {
    //     var _char = _string[0];
    //     _string = _string.slice(1);
    // } else return ;

    if (_char.match('/[0-9]/')) {
        _state = 'number';
    } else if (_char.match('/[a-z]/')) {
        _state = 'function';
    } else if (_char.match('/+|-')) {
        if (_state === 'start') {
            _state = 'unary';
        }
        else {
            _state ='binary';
        };
    } else if (_char.match('/*|//')) {
        _state = 'binary';
    } else if (_char.match('/(/')) {
        _state = 'start';
    } else if (_char.match('/)/')) {
        _state = 'semi-start';
    } else {
        throw "ERROR";
    };
    return _state
};

var _string = '1+2';
var _state = 'start'; //start
var _parsed_string = []; // consist from tokens [token, token_id]
var _number_stack = [];
var _function_stack = [];


for (let i=0; i<_string.length; i++) {
    _state = change_state_from_character(_string[i], _state);

    }
};

function do_from_state(_char, _state) {
    switch (_state) {
        case 'start':
            _start(_string[i]);
            break;
        case 'number':
            _number_stack.push(_char);
            _number(_string[i]);
            break;
        default:
            throw 'ERROR STATE';
};