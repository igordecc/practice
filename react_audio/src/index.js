import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

/* Import Components */
import About from './About';
import App from './App';
import Labyrinth from './Labyrinth';
import ScoreButton from './ScoreButton';

render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/about' component={About}/>
      <Route exact path='/labyrinth'>
        <Labyrinth />
      </Route>
      <Route exact path='/labyrinth/ScoreButton' component={ScoreButton}/>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));
