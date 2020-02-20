import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let DataURL = 'http://localhost:5000/'
  
  function fetch_data() {
    // connection to server
    var props = fetch(DataURL).           
    then(result => result.json()).
    then(e => {
      return e
      console.log(e);
    }).
    catch(error => console.log('ERROR: ', error))
    console.log("props data: ",props)
    return props
  }
  var props = fetch_data()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>fetch results:</h3>
        <p>
          {JSON.stringify(props)}<br/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
