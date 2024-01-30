// import React from "react";
import myResume from "../../src/documents/practiceresume.pdf";
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <section className="text-center" >
        <h2 className="download-resume" style={{ color: 'white'}}>Download My Resume</h2>
            <a href={myResume} className="download-logo" download>
              < BsCloudDownload size='75px' color="white"/>
            </a>
      </section>
      <div className="col justify-content-md-center container-sm about-content" style={{ marginTop: '4%' , color: 'white'}}>
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
