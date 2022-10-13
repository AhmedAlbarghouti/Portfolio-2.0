import './Footer.css'

export default function Footer() {
    return(
        <div className="Footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h2>Ahmed Albarghouti</h2>
                    <p>A full-stack developer based in Canada focusing on building beautiful and efficient web apps.</p>

                </div>
                <div className="footer-right">
                <button className='main-btn'>Resume</button>
                <div className="routes">
                    <a href="">About</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                   
            </div>
                    
                    
                    </div>
                
            </div>

            <div className="footer-bottom">
            <p>© Copyright 2022. Made by <span className='footer-name'>Ahmed Albarghouti</span></p>
            </div>
        </div>
    )
}