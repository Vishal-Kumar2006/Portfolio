import "./Home.css";
import Typed from "typed.js";
import React from "react";
import { Link } from "react-router-dom";
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
import { FaJava } from "react-icons/fa"; // Using FontAwesome for Java

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Developer",
        "JAVA - DSA",
        "600 + LeetCode Problems",
      ],
      typeSpeed: 20,
      backDelay: 2000,
      backSpeed: 25,
      loop: true,
    });
  });

  return (
    <div className="Home">
      <div className="intro">
        <h1 className="heading-intro">
          Hi, I'm Vishal | <span className="auto-type" ref={el} />{" "}
        </h1>
        <p className="description">
          I specialize in React, JavaScript, and modern web development,
          building fast and dynamic UIs. With expertise in MERN stack, Node.js,
          Express.js, and MongoDB, I craft seamless full-stack solutions.
          Passionate about DSA, having solved 600+ LeetCode questions.
        </p>
      </div>
      <br />
      <br />

      <div className="links">
        <button className="linksBtn">
          <Link to={"/contact"}> Connect Me</Link>
        </button>

        <button className="linksBtn">
          <Link to={"/projects"}>See my Work</Link>
        </button>

      </div>
      <div className="tech-stacks">
        <h1>Tech Stack & Skills I Work With </h1>
        <h2>
          {" "}
          From frontend to backend, the technologies that power my development.
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
  );
};

export default Home;
