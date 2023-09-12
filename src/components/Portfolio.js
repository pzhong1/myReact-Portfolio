import React from "react"; // always import react

//create project array to store my porject infomation
const projects = [
  // project 1
  {
    title: "Portfolio use HTML",
    image: process.env.PUBLIC_URL + "/images/portfolio-use-HTML.png",
    deployedUrl: "https://pzhong1.github.io/challenge02/",
    githubUrl: "https://github.com/pzhong1/challenge02.git",
  },
  // project 2
  {
    title: "Coding Quiz Challenge",
    image: process.env.PUBLIC_URL + "/images/coding-quiz-challenge.png",
    deployedUrl: "https://pzhong1.github.io/challenge04/",
    githubUrl: "https://github.com/pzhong1/challenge04.git",
  },
  // project 3
  {
    title: "Work Day Scheduler",
    image: process.env.PUBLIC_URL + "/images/work-day-scheduler.png",
    deployedUrl: "https://pzhong1.github.io/challenge05/",
    githubUrl: "https://github.com/pzhong1/challenge05.git",
  },
  // project 4
  {
    title: "Password Generator",
    image: process.env.PUBLIC_URL + "/images/password-generator.png",
    deployedUrl: "https://pzhong1.github.io/challenge03/",
    githubUrl: "https://github.com/pzhong1/challenge03.git",
  },
  // project 5
  {
    title: "Weather Dashboard",
    image: process.env.PUBLIC_URL + "/images/Weather-Dashboard.png",
    deployedUrl: "https://pzhong1.github.io/challenge06/",
    githubUrl: "https://github.com/pzhong1/challenge06.git",
  },
  // project 6
  {
    title: "BA Travel",
    image: process.env.PUBLIC_URL + "/images/BA-Travel.png",
    deployedUrl: "https://pzhong1.github.io/BA-travel-/",
    githubUrl: "https://github.com/pzhong1/team-project1.git",
  },
];

function Project({ project }) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <img src={project.image} alt={project.title} />
      <div>
        <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
          Deployed Application
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio-section">
      <h1>Portfolio</h1>
      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
