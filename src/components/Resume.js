import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

function Resume() {
  return (
    <div className="resume-section text-center">
      <h1>Resume</h1>
      <div className="resume-content">
        <a
          href="/assets/puze-Zhong-resume.pdf"
          download="puze-Zhong-resume.pdf"
          className="resume-download-link btn btn-primary"
        >
          Download My Resume{" "}
          <FontAwesomeIcon icon={faDownload} size="2x" color="white" />
        </a>

        {/* frontEnd for display  */}
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-area row">
            <div className="frontend-skills col-md-5 mx-auto bg-light p-4 rounded shadow">
              <h3 className="text-info">Frontend</h3>
              <ul className="list-unstyled">
                <li>React (React.js)</li>
                <li>HTML (HTML5)</li>
                <li>CSS (CSS3)</li>
                <li>JavaScript (JS)</li>
              </ul>
            </div>

            {/* BAckend info */}
            <div className="backend-skills col-md-5 mx-auto bg-light p-4 rounded shadow">
              <h3 className="text-success">Backend</h3>
              <ul className="list-unstyled">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>NoSQL</li>
              </ul>
            </div>
          </div>

          {/* fontAwesome icon for skills */}
          <div className="skills-icons my-4">
            <div>
              <FontAwesomeIcon icon={faReact} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faHtml5} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faCss3} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faJs} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faNodeJs} size="2x" className="mx-2" />
              <FontAwesomeIcon icon={faDatabase} size="2x" className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
