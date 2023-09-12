import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getUTCFullYear(); //get current year
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/pzhong1" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            className="beatFade-icon"
            style={{ color: "#050505" }}
          />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/puze-zhong-0566a6138/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            className="beatFade-icon"
            style={{ color: "#050505" }}
          />
          LinkedIn
        </a>
      </div>
      <p>© {currentYear} puze zhong</p>
    </footer>
  );
}

export default Footer;
