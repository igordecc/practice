import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { render } from 'react-dom'

/* Import Components */
import About from './About'
import App from './App'

render((
  <BrowserRouter>
    <Route exact path='/' component={App}/>
    <Route path='/About' component={About}/>
  </BrowserRouter>
), document.getElementById('root'));
