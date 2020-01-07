class Start {
    constructor(_char) {
        this._char = _char;
        this.result = '';
        if (_char.match('/[0-9]/')) {
            this._number(_char);
        }
        else if (_char.match('/[a-z]/')) {
            this._function();
        }
        else if (_char.match('/+|-')) {
            this._unary_operator();
        }
        else if (_char.match('/(/')) {
            this._start();
        }
        else if (_char.match('/)/')) {
            this._semi_start();
        }
        else {
            throw "ERROR";
        }

    };
    _number = (__char) => {
        this.result = [__char, 'n']};
    _function = (__char) => {
        this.result = [__char, 'f']
    };
    _unary_operator = () => {

    };
    _start = () => {};
    _semi_start = () => {};


};

//TODO its getting compicated - how you use one class inside another - use __proto__? - need to research