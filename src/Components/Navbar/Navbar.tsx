import React from 'react';
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <img src="" alt="logo" className='logo' />

            <div className="routes">
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
                <button className='main-Btn'>Resume</button>
            </div>
        </nav>
    )
}