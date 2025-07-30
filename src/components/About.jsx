import React from 'react';
import {Link} from 'react-router-dom'

const About=()=>{
    return(
        <div>
            <h1>My Name is Shiva Nigam</h1>
            <h1>My Contact number is 6307665983</h1>
            <h1>My Father Name is 9125843559</h1>
            <h1>My Mother Name  is Sudha Nigam</h1>
            <h1>My Pet Name  is Maggy</h1>

            <Link to="/About/Me">Fav Dialogue</Link>

        </div>
        
    )
}

export default About