// export default function Resume() {
//     return (
//         <h1>Resume</h1>
//     );
// }

import React from "react";
import myResume from "../../src/documents/practiceresume.pdf";
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">Download My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                < BsCloudDownload size='75px'/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
