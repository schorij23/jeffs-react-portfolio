import './footer.css';
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon

function Footer() {
    return (
        <footer className='fixed-bottom footer'>
            <div className='content links'>
                <p>
                    <a href='https:/github.com/schorij23' target='icon-link'>
                        <FaGithub /> Github
                    </a>
                    <a href='mailto:schorij23@gmail.com' target="icon-link">
                    <FaEnvelope /> Gmail    
                    </a>
                    <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit'>
                        <FaLinkedin /> Linkedin
                        </a>
            
                </p>
            </div>
        </footer>
    )
}

export default Footer;
