import myResume from "../../src/documents/JSCodeResume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import './Resume.css';
function Resume() {
  return (
    <div>
       {/* Resume download section */}
      <section className="text-center" >
        <h2 className="download-resume" style={{ color: '#F5F5F5'}}>Download My Resume</h2>
        {/* Resume download link */}
            <a href={myResume} className="download-logo" download>
              < BsCloudDownload size='75px' color="white"/>
            </a>
      </section>
       {/* Skills section */}
      <div className="col justify-content-md-center container-sm about-content" style={{ marginTop: '4%' , color: '#F5F5F5'}}>
            <p className='resume-front'>
              Front End Coding Skills and Knowledge include: HTML-5, CSS-3, JavaScript ES6+, Document Object Model
              (DOM), Server-Side APIs and Third-Party APIs including Day.js and OpenWeather API 
              <br></br><br /> Front End Frameworks include: React.js, jQuery, Express.js RestfulAPIS, Bootstrap, Tailwind, Pure CSS
            </p>
            <p className='resume-back'> 
              Back End Coding Skills and Knowledge include: SQL, Object Oriented Programing (OOP), 
              and Object-Relational Mapping (ORM) 
              <br></br><br /> Back End Frameworks include: Node.js Packages including Sequalize, MySQL2, Handlebars and Model View Controller (MVC) Architecture
            </p>
            <p className='resume-full'> 
              Full Stack Coding and Knowledge Skills include: MERN stack (MongoDB (NoSQL), Express.js, React.js, Node.js), PWAs (Progressive Web Apps), Webpack, State and Redux            </p>
      </div>
  </div>
);
}

export default Resume;