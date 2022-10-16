import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import pdf from '../../assets/resume.pdf'

export default function Navbar(){
    return(
        <nav>
            <Link to='/' >Ahmed Albarghouti</Link>
            

            <div className="routes">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button className='main-btn'><a href={pdf} target="_blank" >Resume</a></button>
                
            </div>
        </nav>
    )
}