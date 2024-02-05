import './About.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../images/63457.png';

// import 'bootstrap/dist/js/bootstrap.min.js';
export default function AboutPage() {
    return (
    <div className='container about'>
            <div className="row justify-content-md-center about_me">
                <div className='about-me'>
                    <img src={avatar} className='img-fluid' alt='JeffS-avatar' />
                </div>
            </div>

            <div className="col justify-content-md-center container-sm about-content">
                <p className='about-body'>
                    Hi, this is my portfolio. I am a web deveolper I have a degrees in Architectural Enginering and Construction
                </p>
            </div>
        </div>
    );
  }
  