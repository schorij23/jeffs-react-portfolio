import './about.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from '../../images/63457.png';

import 'bootstrap/dist/js/bootstrap.min.js';
export default function AboutPage() {
    return (
    <div className='container about'>
            <div className="row justify-content-md-center about_me">
            {/* <div className="justify-content-center align-items-center about_me"> */}
                <div className='about-me'>
                    <img src={avatar} className='img-fluid' alt='JeffS-avatar' />
                </div>
            </div>

            <div className="col justify-content-md-center container-sm about-content">
                <p className='about-body'>
                    Hi, this is my portfolio My name is Jeff Schori I have a degrees in Architectural Enginering and Construction Management
                    I am learning web development. Some more text comming soon
                </p>
            </div>
        </div>
    );
  }
  