import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Import the GitHub icon

function Footer() {
    return (
        <footer className='footer'>
            <div className="content links" style={{ color: '#FCF7F8'}}>
                <div className= 'footer-icon'>
                    {/* GitHub icon link */}
                    <a href='https://github.com/schorij23' target='_blank' rel="noopener noreferrer" >
                        <FaGithub style={{margin: "35 25px" }} size="50px" /> 
                    </a>
                    {/* Email icon link */}
                    <a href='mailto:schorij23@gmail.com' target='_blank' rel="noopener noreferrer" >
                    <FaEnvelope style={{margin: "25 25px" }}  size="50px" />    
                    </a>
                    {/* LinkedIn icon link */}
                    <a href='https://www.linkedin.com/in/jeff-schori-69459a8b/' target='_blank' rel="noopener noreferrer">
                        <FaLinkedin style={{margin: "25 25px" }}  size="50px" /> 
                    </a>
            
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;
