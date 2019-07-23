import React from 'react';
import ReactDOM from 'react-dom';

import calculateString from "./stringToTokens";


// it('Add', calculateString("5+9"){
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

var assert = chai.assert();

var testFunction = calculateString;
assert.equal(testFunction("5+9"), "14")


