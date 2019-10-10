import React from 'react';
import { Link } from 'react-router-dom';

function App () {
  return(
    <div>
    <h1>Main Page</h1>

    <p>Here is main page. <br/>
    The page where user start observing the site</p>

    <Link to="/about">Go to About</Link>
    <br/>
    <Link to="/labyrinth">Go to Labyrinth</Link>
  </div>
  )
};

export default App;
