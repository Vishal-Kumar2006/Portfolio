import "./Projects.css";
import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    image: "https://i.postimg.cc/mDfRHkC3/Portfoli.png",
    description: "A personal portfolio website built with React.js.",
    techStack: "React.js, CSS",
    github: "https://github.com/Vishal-Kumar2006/Portfolio",
    demo: "",
  },

  {
    name: "WanderLust",
    image: "https://i.postimg.cc/nczPkZH6/wanderlust.png",
    description:
      "A full-stack Hotel's Boking application with user authentication.",
    techStack: "JS, Node.js, MongoDB, Express",
    github: "https://github.com/Vishal-Kumar2006/Wanderlust",
    demo: "",
  },

  {
    name: "Weather App",
    image: "https://i.postimg.cc/Nfn2y8JW/weather.png",
    description:
      "A Weather application using of React.js and React MUI Library, and Open Weather Map API for current Weather Data.",
    techStack: "React.js, MUI React Library, OpenWeatherMap API",
    github: "https://github.com/Vishal-Kumar2006/WeatherApp",
    demo: "https://weather-app-ten-sigma-57.vercel.app/",
  },

  {
    name: "ParkEase Website",
    image: "https://i.postimg.cc/DyGngqyV/parkEase.png",
    description:
      "**Working** A Parking Website for Maintain Parking's for An Area.",
    techStack:
      "Using React, Node.js, Express.js, Google Map API, npm-passpotr for Authentication, CSS",
    github: "https://github.com/Vishal-Kumar2006",
    demo: "",
  },
  {
    name: "Tic Tak Toe Game",
    image: "https://i.postimg.cc/t7QDp0xz/Tiktaktoe.jpg",
    description: "A Tic Tac Toe Game using Java Script  ",
    techStack: "Java Script, HTML 5, CSS",
    github: "https://github.com/Vishal-Kumar2006/Tik-Tak-Toe-Game",
    demo: "https://vishal-kumar2006.github.io/Tik-Tak-Toe-Game/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <div className="headings">
        <h2 className="heading">My Projects</h2>
        <p className="sub-heading">Here are some of my best works.</p>
        <p>Please Scrool Up</p>
      </div>

      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.image}
              alt={project.name}
              className="project-img"
            />
            <div className="details">
              <div>
                <h3 className="project-name">{project.name}</h3>
              </div>

              <div>
                <p className="project-desc">{project.description}</p>
                <p className="project-tech-stack">
                  Tech Stack: {project.techStack}
                </p>
                <div className="project-links">
                  <button className="project-link">
                    <a href={project.github} target="_blank">
                      GitHub
                    </a>
                  </button>

                  <button className="project-link">
                    <a href={project.demo || "#"} target="_blank">
                      {project.demo ? "Live Demo" : "Not Deployed"}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
