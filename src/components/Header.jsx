import React from 'react';

const Header=()=>{
    return(
        <div class="flex justify-between h-30 bg-pink-100">
        <div id="header">
            <img class="my-2 h-20 color " src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            <h3 className='name-logo'>Zwiggy Go</h3>
        </div>
        <div className='lists'>
            <ul class='flex m-10 '>
                <li class='m-3 cursor-pointer'>About us</li>
                <li class='m-3 cursor-pointer'>Contact</li>
                <li class='m-3 cursor-pointer'>Grocery</li>
                <li class='m-3 cursor-pointer'>Cart</li>
                <li class='m-3 cursor-pointer'>Status</li>
               
            </ul>

        </div>
        </div>
    )
}

export default Header;