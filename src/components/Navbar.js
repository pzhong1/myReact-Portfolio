import React from "react"; //always import react when work with react

function Navbar({ setActiveSection }) {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <span>Puze Zhong</span>
      </div>
      <nav className="navbar-right">
        <ul>
          {/* about, portfolio, contact, resume are #hash */}
          <li>
            <a href="#about" onClick={() => setActiveSection("about")}>
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setActiveSection("portfolio")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveSection("contact")}>
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setActiveSection("resume")}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
