import myResume from "../../src/documents/Codingresume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import './Resume.css';
function Resume() {
  return (
    <div>
      <section className="text-center" >
        <h2 className="download-resume" style={{ color: '#F5F5F5'}}>Download My Resume</h2>
            <a href={myResume} className="download-logo" download>
              < BsCloudDownload size='75px' color="white"/>
            </a>
      </section>
      <div className="col justify-content-md-center container-sm about-content" style={{ marginTop: '4%' , color: '#F5F5F5'}}>
            <p className='resume-front'>
              Front End Skills include: HTML, Javasript, React, CSS, Bootstrap, React Bootstrap, APIs
            </p>
            <p className='resume-back'> 
              Back End Skills include: SQL, Sequilize ORM, Model View Controler MVC and OOP
            </p>
            <p className='resume-full'> 
              Full Stack Skills include: node.js, Express, NoSql, React, Progressive Web Applications
            </p>
      </div>
  </div>
);
}

export default Resume;