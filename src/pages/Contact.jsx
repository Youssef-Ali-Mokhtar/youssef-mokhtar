import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Contact = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const serviceID = 'service_chvuimc';
    const templateID = 'template_7oljfif';

    const submitEmail = (e)=>{
        e.preventDefault();
        if(!nameRef.current.value||!emailRef.current.value||!messageRef.current.value){
            return;
        }
        const params = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            message:messageRef.current.value
        }
        emailjs.send(serviceID, templateID, params, 'ASLJFPKYfdDuzxyVb')
            .then(
                (res)=>{
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    messageRef.current.value = '';
                    alert('Your message has been sent successfully!');
                }
            )
            .catch((err)=> alert("Message hasn't been sent, try again!"))
    }
    
    return ( <motion.div 
            id="Contact" className="contact-page"
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration:1}}}
        >
        <h1 className="skills-title">Contact</h1>
        <div className="contact-container">
            <div className="contact-links-container">
                <h1 className='contact-links-title'>Don't be shy! Hit me up! </h1>
                <div className="contact-info-item">
                    <AiOutlineMail style={{fontSize:'32px', margin:'10px 10px 10px 0px', color:'rgb(20, 126, 251)'}}/>
                    <span>youssef96mokhtar@gmail.com</span>
                </div>
                <div className="contact-info-item">
                    <BsDiscord style={{fontSize:'32px', margin:'10px 10px 10px 0px', color:'rgb(20, 126, 251)'}}/>
                    <span>goodnews2529</span>
                </div>
                <div className="contact-info-item">
                    <MdLocationPin style={{fontSize:'32px', margin:'10px 10px 10px 0px', color:'rgb(20, 126, 251)'}}/>
                    <span>Alexandria, Egypt</span>
                </div>
                <div className="contact-icons-holder">
                    <Link                     
                        to={'https://www.linkedin.com/in/youssef-ali-mokhtar/'}
                        target='_blank'>
                        <BsLinkedin style={{fontSize:'24px', margin:'20px', color:'white'}}/>
                    </Link>
                    <Link
                        to={'https://github.com/Youssef-Ali-Mokhtar'}
                        target='_blank'>
                        <BsGithub style={{fontSize:'24px', margin:'20px'}}/>
                    </Link>
                </div>
            </div>
            <div className="send-email-container">
                {/* <h1 style={{width:'100%', textAlign:'start'}}>Get in touch</h1> */}
                <form style={{with:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <div className="upper-inputs">
                        <input type='name' className="send-name" placeholder="Name" ref={nameRef}/>
                        <input type='email' className="send-email" placeholder="Email" ref={emailRef}/>
                    </div>
                    <textarea className="send-message" placeholder="Your message here" ref={messageRef}/>
                    <button onClick={submitEmail} className="email-button">Send Message</button>
                </form>
            </div>            
        </div>
    </motion.div> );
}

export default Contact;