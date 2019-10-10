import React from 'react';
import { Link } from 'react-router-dom';

function Labyrinth () {
    let link_list = [];
    const n = 25;
    for (let i=0; i<n; i++) {
        link_list.push(<div><Link to="1234">Link</Link><br/></div>);
    }
    return(
        <div>
            <h1>The Labyrinth</h1>

            {link_list}
            
            <br/>
            <div><Link to="/labyrinth/ScoreButton">Link</Link><br/></div>
            
        </div>
    )
};

export default Labyrinth;