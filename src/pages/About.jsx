import './About.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../images/63457.png';

export default function AboutPage() {
    return (
    <div className='container about'>
            <div className="row justify-content-md-center about_me">
                <div className='about-me'>
                    <img src={avatar} className='img-fluid' width={{ width: '400px', height: '400px'}} alt='JeffS-avatar' />
                </div>
            </div>

            <div className="col justify-content-md-center container-sm about-content">
                <p className='about-body'>
                I am a Full-Stack web developer specializing in both front-end and back-end development. I excel in HTML, JavaScript, and design aesthetics. One of my key projects is a weather app for national parks, showcasing my skill with multiple APIs. I have delivered innovative web solutions across various states, always pushing the boundaries of web development.
                </p>
            </div>
        </div>
    );
  }
  
