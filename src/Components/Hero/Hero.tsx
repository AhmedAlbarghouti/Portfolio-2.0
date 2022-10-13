import React from "react";
import './Hero.css'
import locationIcon from '../../assets/icons/map-pin.svg';
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import myImage from '../../assets/images/myImage.png'
export default function Hero(){

    const handleSpinnerClick = () =>{
        
    };
    
    return(
        <div className="hero">
            <div className="hero-top">
            <div className="hero-left">
                <h1>Hello I'm Ahmed <br /> Albarghouti</h1>
                <h3>A full-stack developer focused on building beautiful and efficient web apps.</h3>
                <div className="location-social-bar">
                    <div className="location">
                        <img className="location-icon" src={locationIcon} alt="Map Pin" />
                        <p>Ottawa, Canada</p>
                    </div>

                    
                    <a href="https://github.com/AhmedAlbarghouti"><img src={githubIcon} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/ahmedalba/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    <a href="https://twitter.com/ahmed_barghou"><img src={twitterIcon} alt="Twitter" /></a>
                </div>
            </div>

            <div className="hero-right">
                <img className="hero-img" src={myImage} alt="Ahmed" />
            </div>
            </div>
            

            
        </div>
    )
}