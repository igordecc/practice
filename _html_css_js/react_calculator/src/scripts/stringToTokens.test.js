import React from 'react';
import chai from 'chai';

import calculateString from "./stringToTokens";


const assert = chai.assert;
const calculate = (_string)=>{return calculateString(_string)};

// const assert = chai.assert;
// assert.typeOf("foo", 'string');
// assert.equal(1, 1);
// assert.lengthOf([1,2,3], 3);


it('calculate: addition +', () => {
    assert.equal(calculate("3+2"), "5");
});

it('calculate: subtraction -', () => {
    assert.equal(calculate("3-2"), "1");
});

it('calculate: multiplication *', () => {
    assert.equal(calculate("3*2"), "6");
});

it('calculate: division /', () => {
    assert.equal(calculate("3/2"), "1.5");
});

it('calculate: addition with parens ()', () => {
    assert.equal(calculate("(3+2)"), "5");
});

it('calculate: multi addition only', () => {
    assert.equal(calculate("87 ++++ 3 "), "90");
});


it('calculate: multi addition ', () => {
    assert.equal(calculate("+87 ++++ (-895e+40 + 89895^2 * 859859.0999e-10) "), "-8.95e+42");
});


it('calculate: multi brackets ', () => {
    assert.equal(calculate("+87 ++++ (((-895e+40-10)*5) + (89895^2 * 859859.0999e-10)) "), "-8.95e+42");
});
var x = 2;
var y = -3;
it('calculate: x+y: 2 + -3 ', () => {
    assert.equal(x+y, "-1");
});