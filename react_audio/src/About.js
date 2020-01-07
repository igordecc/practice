import React from 'react';
import { Link } from 'react-router-dom';

function About () {
    return (
        <div>
            <h1>About</h1>

            <p>This was wrote by hand. <br/>
            If your see the paragraph, all stuff is working correctly.</p>

            <Link to='/'>Go Home</Link>
        </div>
    )
}


export default About;