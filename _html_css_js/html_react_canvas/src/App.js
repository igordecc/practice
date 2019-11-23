import React from 'react';

function App() {
  
  fetch(`http://127.0.0.1:5000/`, {cors: "no-cors"})
  .then(e => e.json())
  .then(e => console.log(e))
  .catch(err => console.log("Post rendering error: ", err))

  
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
