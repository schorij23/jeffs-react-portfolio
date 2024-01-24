import './footer.css';
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon

function Footer() {
    return (
        <footer className='fixed-bottom footer'>
            <div className="content links">
                <div className= 'footer-icon'>
                    <a href='https:/github.com/schorij23' target='_blank' rel="noopener noreferrer" >
                        <FaGithub style={{color: "#09235D", margin: "20 20px" }} size="60px" /> 
                    </a>
                    <a href='mailto:schorij23@gmail.com' target='_blank' rel="noopener noreferrer" >
                    <FaEnvelope style={{color: "#09235D", margin: "20 20px" }}  size="60px" />    
                    </a>
                    <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' target='_blank' rel="noopener noreferrer">
                        <FaLinkedin style={{color: "#09235D", margin: "20 20px" }}  size="60px" /> 
                    </a>
            
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
