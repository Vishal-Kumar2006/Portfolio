import "./Home.css";
import Typed from "typed.js";
import React from "react";
import Reveal from "../Reveal.jsx";
import vishalImage from "./Vishal_image.jpg";
import { GoProjectSymlink } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Home = ({ scrollToSection }) => {
  const el = React.useRef(null);

  const handleNavigation = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Developer",
        "JAVA - Data Structures & Algorithms",
        "Solved 1000 + LeetCode Problems",
        "MERN Stack Developer",
        "Frontend and Backend Developer",
      ],
      typeSpeed: 5,
      backDelay: 2500,
      backSpeed: 5,
      loop: true,
    });
  }, []);

  return (
    <section id="home">
      <div className="Home">
        <div className="intro">
          <Reveal>
            <div className="left-section">
              <h1 className="heading-intro">
                <p> Hi, I'm Vishal Kumar </p>
                <span className="auto-type" ref={el} />
              </h1>
              <Reveal>
                <p className="home-description">
                  Entry-level Software Engineer with expertise in MERN stack
                  development, RESTful APIs, and database-driven applications.
                  Solved 1100+ DSA problems using Java and built multiple
                  full-stack projects featuring secure authentication, scalable
                  architectures, and real-world business logic. Focused on
                  writing clean, maintainable, and reliable software.
                </p>
              </Reveal>
            </div>
          </Reveal>
          <Reveal>
            <div className="right-section">
              <img src={vishalImage} alt="Vishal's Photo" />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="home-page-links">
            <div
              className=""
              onClick={() => {
                handleNavigation("contact-form");
              }}>
              <MdConnectWithoutContact />
              <p>Connect with me</p>
            </div>

            <div
              className=""
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/17lrsVtKUtMVIDs2UJdLsMCkODd1Vtqjf/view?usp=drive_link",
                  "_blank",
                );
              }}>
              <FaCloudDownloadAlt />
              <p>Download CV </p>
            </div>

            <div
              className=""
              onClick={() => {
                handleNavigation("projects");
              }}>
              <GoProjectSymlink />
              <p>See My Work</p>
            </div>
          </div>
        </Reveal>

        <br />
        <br />
      </div>
    </section>
  );
};

export default Home;
