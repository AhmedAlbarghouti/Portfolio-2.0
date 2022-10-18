import { useState } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import pdf from '../../assets/resume.pdf';
import menuImg from '../../assets/icons/menu.svg';
import xImg from '../../assets/icons/x.svg';

export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () =>{
        if(showMenu){
            setShowMenu(false);
        }
    }
    
    
    return(
        <nav >

            <Link to='/' >Ahmed Albarghouti</Link> 
            <img className='menu-icon' src={showMenu ? xImg : menuImg } alt="menu" onClick={() => setShowMenu(!showMenu)} ></img>
            <div className={showMenu ? 'navigation-menu expanded' : "navigation-menu"}>

                <ul>
                    <li><Link onClick={handleLinkClick} to="/">Home</Link></li>
                    <li><Link onClick={handleLinkClick} to="/about">About</Link></li>
                    <li> <Link onClick={handleLinkClick} to="/contact">Contact</Link></li>
                    <li><button className='main-btn'><a href={pdf} rel="noreferrer" target="_blank" >Resume</a></button></li>
                </ul>
                
                
               
                
                
            </div>

            
            
            
            
        
        </nav>
    )
}