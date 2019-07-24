import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ResultComponent from './components/ResultComponent.js'
import KeyPadComponent from './components/KeyPadComponent.js'

import chai from 'chai';
const assert = chai.assert;

assert.equal(1, 1);
// assert.typeOf("foo", 'string');
// assert.lengthOf([1,2,3], 3);

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
