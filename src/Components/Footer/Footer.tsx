import './Footer.css';
import pdf from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';
export default function Footer() {
    return(
        <div className="Footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h2>Ahmed Albarghouti</h2>
                    <p>A full-stack developer based in Canada focusing on building beautiful and efficient web apps.</p>

                </div>
                <div className="footer-right">
                
                <div className="routes">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <button className='main-btn'><a href={pdf} target="_blank" >Resume</a></button>
                   
            </div>
                    
                    
                    </div>
                
            </div>

            <div className="footer-bottom">
            <p>© Copyright 2022. Made by <span className='footer-name'>Ahmed Albarghouti</span></p>
            </div>
        </div>
    )
}