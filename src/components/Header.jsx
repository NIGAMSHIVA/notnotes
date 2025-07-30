import React from 'react';
import About from './About'
import {Link} from 'react-router-dom'

const Header=()=>{
    const fn=()=>{

      <About />
       
    }
    return(
        <div class="flex justify-between h-30 bg-pink-100">
        <div id="header">
            <img class="my-2 h-20 color " src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            <h3 className='name-logo'>Zwiggy Go</h3>
        </div>
        <div className='lists'>
            <ul class='flex m-10 '>
            <Link to="/" className='mx-3.5' >Home</Link>
                <Link to="/Cart" className='mx-3.5'>Cart</Link>
                <Link to="/Contacts" className='mx-3.5'>Contact</Link>
                <Link to="/About" className='mx-3.5'>About us</Link>
             
            </ul>

        </div>
        </div>
    )
}

export default Header;