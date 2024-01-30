import './footer.css';
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon

function Footer() {
    return (
        <footer className='fixed-bottom footer'>
            <div className="content links">
                <div className= 'footer-icon'>
                    <a href='https:/github.com/schorij23' target='_blank' rel="noopener noreferrer" >
                        <FaGithub style={{color: "white", margin: "25 25px" }} size="50px" /> 
                    </a>
                    <a href='mailto:schorij23@gmail.com' target='_blank' rel="noopener noreferrer" >
                    <FaEnvelope style={{color: "white", margin: "25 25px" }}  size="50px" />    
                    </a>
                    <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' target='_blank' rel="noopener noreferrer">
                        <FaLinkedin style={{color: "white", margin: "25 25px" }}  size="50px" /> 
                    </a>
            
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
