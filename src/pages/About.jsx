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
                As a Full-Stack web developer from Pennsylvania, I specialize in front-end development, focusing on HTML, JavaScript, and design aesthetics. I take pride in a weather application that showcases national park weather, demonstrating my proficiency and dedication using multiple apis. Across various states, I’ve delivered innovative solutions, pushing the boundaries of web development. My passion lies in creating immersive digital experiences.
                </p>
            </div>
        </div>
    );
  }
  