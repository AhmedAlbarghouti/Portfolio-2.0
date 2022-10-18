
import './About.css'
import '../../App.css'

import programmingImg from '../../assets/icons/programming.svg';
import { Link } from 'react-router-dom';
export default function About (){
    
    return(
        <div className="About">
            <h1 className='page-header'>About Me</h1>

            <div className="about-left-right">
                <div className="about-left">
                    <h3>Hello! I'm Ahmed, a full-stack developer with 3 years of experience building websites. </h3>
                    <p><i> I always had an affinity for everything tech related. building my first computer, jailbreaking my iPhone and hosting my own video game servers were some of the things that helped me develop my problem solving skills while growing up.</i></p>
                    <p>Currently, I'm interested in cloud/web-development, building efficient applications and implementing clean designs.</p>
                    <p>The technologies I use <b>but not limited to</b> are <span className='about-tech'>React</span> , <span className="about-tech">Typescript</span> , <span className="about-tech">JavaScript(ES6+)</span> , <span className="about-tech">Next.JS</span> and <span className="about-tech">Tailwind css</span> which help me deliver quality applications.</p>
                    <Link  to="/Contact" className='main-btn'>Let's get in touch</Link>
                    

                </div>
                
                <img className='about-right' src={programmingImg} alt="Programming" />
                
            </div>
        </div>
    )
}