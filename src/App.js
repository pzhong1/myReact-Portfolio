// App.js is the main file that hold all the components file
import React, { useState, useEffect } from "react"; //hooks
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  // set the about section as deafult so when load the page the about section will display first before onclick any other navgations
  const [activeSection, setActiveSection] = useState("about"); //use useState create activeSection and use setActiveSection todo update

  useEffect(() => {
    const hash = window.location.hash; //get the current URL hash part if there is one
    if (hash) {
      // check to see if hash exists(URL anything that start with #) if yes then call setActiveSection
      setActiveSection(hash.substring(1));
    }
  }, []);

  return (
    //use activeSection to decide which part do i want display(about, resume, contact, porlfio)
    <main>
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === "about" && <About />}
      {activeSection === "contact" && <Contact />}
      {activeSection === "portfolio" && <Portfolio />}
      {activeSection === "resume" && <Resume />}
      <Footer />
    </main>
  );
}

export default App;
