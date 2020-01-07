import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
    const [mineChance, setMineChange] = useState(1);
    console.log(Math.random()*mineChance);

    function createTable(_width, _height){
        var _table = []
        for (let i=0; i<_width; i++ ){
            let children = []
            for (let j=0; j<_height; j++){
            children.push(<td><button>{j+1}</button></td>)
            }
        _table.push(<tr>{children}</tr>)
        }
        return _table
    }

    return <div>
       <button>Start</button> 
       <button>Size</button>
       <div>Mine Chance:<input type="number" value={mineChance} onInput={e => setMineChange(e.target.value)}></input></div>
       <br/>

       {createTable(10,10)}
    </div>
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
