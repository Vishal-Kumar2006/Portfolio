import "./Home.css";
import Typed from "typed.js";
import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import vishalImage from "./Vishal_image.jpg";
import { useNavigate } from "react-router-dom";
import {
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaJava, FaCloudDownloadAlt } from "react-icons/fa"; // Using FontAwesome for Java

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Developer",
        "JAVA - Data Structures & Algorithms",
        "Solved 1000 + LeetCode Problems",
        "MERN Stack Developer",
        "Frontend and Backend Developer",
      ],
      typeSpeed: 20,
      backDelay: 2000,
      backSpeed: 25,
      loop: true,
    });
  });

  return (
    <div>
      <div className="Home">
        <div className="intro">
          <div className="left-section">
            <h1 className="heading-intro">
              <p> Hi, I'm Vishal Kumar </p>
              <span className="auto-type" ref={el} />
            </h1>
            <p className="home-description">
              I design and build scalable web applications with secure
              authentication, efficient APIs, and real-world functionality.
              Solved 1000+ DSA problems and built multiple full-stack systems
              handling complex business logic. I don’t just write code — I
              engineer reliable backend systems.
            </p>
          </div>
          <div className="right-section">
            <img src={vishalImage} alt="Vishal's Photo" />
          </div>
        </div>

        <div className="home-page-links">
          <a>
            {(onclick = () => navigate("/contact-form"))}
            <MdConnectWithoutContact />
            <p>Connect with me</p>
          </a>
          <a href="https://drive.google.com/file/d/1hWocVyt04ofxRHk_mdehveXWdZw7d-7-/view?usp=sharing">
            <FaCloudDownloadAlt />
            <p>Download CV </p>
          </a>
          <a>
            {(onclick = () => navigate("/projects"))}
            <GoProjectSymlink />
            <p>See My Work</p>
          </a>
        </div>

        <br />
        <br />
        <About />

        <div className="projects-tech-stacks">
          <h1>Tech Stack & Skills I Work With </h1>
          <h2>
            From frontend to backend, the technologies that power my
            development.
          </h2>
          <div className="languages">
            <div className="logo-icon java">
              <FaJava />
              <p className="logo-name">JAVA</p>
            </div>

            <div className="logo-icon c">
              <SiC />
              <p className="logo-name">C</p>
            </div>

            <div className="logo-icon cpp">
              <SiCplusplus />
              <p className="logo-name">C++</p>
            </div>
          </div>

          <div className="languages front-end">
            <div className="logo-icon html">
              <SiHtml5 />
              <p className="logo-name">HTML 5</p>
            </div>
            <div className="logo-icon css">
              <SiCss3 />
              <p className="logo-name">CSS</p>
            </div>
            <div className="logo-icon js">
              <SiJavascript />
              <p className="logo-name">JavaScript</p>
            </div>
            <div className="logo-icon react">
              <SiReact />
              <p className="logo-name">React.js</p>
            </div>
          </div>

          <div className="languages back-end">
            <div className="logo-icon node">
              <SiNodedotjs />
              <p className="logo-name">Node.js</p>
            </div>
            <div className="logo-icon express">
              <SiExpress />
              <p className="logo-name">Express.js</p>
            </div>
          </div>

          <div className="languages">
            <div className="logo-icon mongodb">
              <SiMongodb />
              <p className="logo-name">MongoDB</p>
            </div>

            <div className="logo-icon mysql">
              <SiMysql />
              <p className="logo-name">MySQL</p>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>

      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
