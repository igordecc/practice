import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import calculateString from './scripts/stringToTokens.js';
import ResultComponent from './components/ResultComponent.js'
import KeyPadComponent from './components/KeyPadComponent.js'

import chai from 'chai';
var assert = chai.assert;
assert.typeOf("foo", 'string');
assert.equal(1, 1);
assert.lengthOf([1,2,3], 3);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Result component is OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('KeyPad component is OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyPadComponent/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//calculate 2.0
var calculate = (_string) => {return calculateString(_string)};

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

it('calculate: multi addition ', () => {
  assert.equal(calculate("+87 ++++ (-895e+40 + 89895^2 * 859859.0999e-10) "), "-8.95e+42");
});
