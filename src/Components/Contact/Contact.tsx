import './Contact.css'
import clipboard from '../../assets/icons/clipboard.svg'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
export default function Contact() {

    function handleClipboardClick (e:  React.FormEvent<EventTarget>){
        
    }
    return(
        <div className='Contact'>
            <div className="contact-left">
                <h2 className="section-header">Stay In Touch</h2>
                <form action="" method="post">
                    <label htmlFor="nameInput">Name</label>
                    <input required placeholder='Your name' type="text" name='Name' id="nameInput" />

                    <label htmlFor="emailInput">Email</label>
                    <input required  placeholder='you@example.com' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" name="Email" id="emailInput" />

                    <label htmlFor="messageInput">Message</label>
                    <textarea required placeholder='Your message' id="messageInput" rows={5} />

                    <button className='main-btn' type="submit">Submit</button>
                </form>

            </div>

            <div className="contact-right">
                <h2 className="section-header">Contact Info</h2>
                <div className="contact-info-container">
                    <h3 className="contact-info-label">Email</h3>
                    <div className="contact-info">
                        <p className="contact-info-value">ahmedalbarghou@gmail.com</p>
                        <img onClick={handleClipboardClick} className='clipboard' src={clipboard} alt="clipboard" />
                    </div>

                    <h3 className="contact-info-label">Phone Number</h3>
                    <div className="contact-info">
                        <p className="contact-info-value">343-996-8924</p>
                        <img className='clipboard' src={clipboard} alt="clipboard" />
                    </div>

                    
                    <div className="social">
                    <a href="https://github.com/AhmedAlbarghouti"><img className='social-icon' src={githubIcon} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/ahmedalba/"><img className='social-icon' src={linkedinIcon} alt="LinkedIn" /></a>
                
                    </div>
                    
                </div>
                </div>
            </div>
        
    )
}
