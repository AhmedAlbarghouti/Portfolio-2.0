import './Contact.css'
import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import emailjs from '@emailjs/browser';
import { FormEvent, useRef } from 'react';



export default function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const succussMsg = useRef<HTMLParagraphElement>(null) ;
    
    const serviceID:string  = process.env.REACT_APP_SERVICE_ID ?? '';
    const templateID:string  = process.env.REACT_APP_TEMPLATE_ID ?? '';
    const userID:string  = process.env.REACT_APP_USER_ID ?? '';

    

    const handleEmailCopy = (event: React.MouseEvent<HTMLDivElement,MouseEvent>) =>{
        event.currentTarget.classList.add('clipboard-active');
        navigator.clipboard.writeText('ahmedalbarghou@gmail.com')
    }

    const handleNumberCopy = (event: React.MouseEvent<HTMLDivElement,MouseEvent>) =>{
        event.currentTarget.classList.add('clipboard-active');
        navigator.clipboard.writeText('343-996-8924')
    }



    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const currentForm = form.current;
        const currentSuccessMsg = succussMsg.current;
        if (currentForm == null) return;
        emailjs.sendForm(serviceID,templateID,currentForm,userID)
        .then((result) => {
            
            currentSuccessMsg!.style.opacity = "1";
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
   }
   
   
    return(
        <div className='Contact'>
            <div className="contact-left">
                <h2 className="section-header">Stay In Touch</h2>
                <form className='contact-form' onSubmit={handleOnSubmit} ref={form}>
                    <label htmlFor="nameInput">Name</label>
                    <input required placeholder='Your name' type="text" name='name' title='Please enter your name'/>

                    <label htmlFor="emailInput">Email</label>
                    <input required  placeholder='you@example.com' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" type="email" name="email" title='Please enter a valid email'  />

                    <label htmlFor="messageInput">Message</label>
                    <textarea required placeholder='Your message'  rows={5} name="message" title='Please enter your message' />
                    <button className='main-btn contact-btn' type="submit">Submit</button>
                    <p ref={succussMsg} className='form-succuss-msg'>Success! message sent to Ahmed!</p>
                </form>

            </div>

            <div className="contact-right">
                <h2 className="section-header">Contact Info</h2>
                <div className="contact-info-container">
                    <h3 className="contact-info-label">Email</h3>
                    <div className="contact-info">
                        <p className="contact-info-value">ahmedalbarghou@gmail.com</p>
                        <div className='clipboard' onClick={handleEmailCopy} />
                    </div>

                    <h3 className="contact-info-label">Phone Number</h3>
                    <div className="contact-info">
                        <p className="contact-info-value">343-996-8924</p>
                        <div className='clipboard'  onClick={handleNumberCopy} />
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
