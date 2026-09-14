import "./Home.css";

import "./About.css";
import Reveal from "../Reveal";

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

const About = () => {
  return (
    <section className="About" id="about">
      <div className="summary">
        <Reveal>
          <p className="profile-description">
            I'm a passionate developer with a background in BCA. I started
            coding with C & C++, then explored Data Structures, Algorithms, and
            Web Development. Solving complex problems and building interactive
            web applications excites me!
          </p>
        </Reveal>

        <Reveal>
          <p>
            I'm a Backend-focused MERN Stack Developer with strong
            problem-solving skills (1100+ DSA problems solved on LeetCode). I
            specialize in building secure, scalable web applications using
            Node.js, Express, and MongoDB.
          </p>
        </Reveal>

        <Reveal>
          <p>
            I have developed multiple full-stack projects with real-world
            features like authentication, role-based authorization, REST APIs,
            and database design.
          </p>
        </Reveal>

        <Reveal>
          <p>
            My focus is on writing clean backend logic, designing efficient
            APIs, and solving complex problems with optimized solutions.
          </p>
        </Reveal>
      </div>

      <br />
      <br />

      <Reveal>
        <div className="about-sections skills-strength">
          <h3>Technical Skills</h3>
          <hr />
          <ul className="lists">
            <Reveal>
              <li>
                🚀 <b>Languages:</b> Java, JavaScript
              </li>
            </Reveal>
            <Reveal>
              <li>
                🔥 <b>Frontend:</b> HTML, CSS, Bootstrap, React.js
              </li>
            </Reveal>
            <Reveal>
              <li>
                ⚙️ <b>Backend:</b> Node.js, Express.js, REST APIs, JWT
              </li>
            </Reveal>
            <Reveal>
              <li>
                🗄️ <b>Databases:</b> MongoDB, MySQL
              </li>
            </Reveal>
            <Reveal>
              <li>
                📚 <b>Core:</b> DSA, OOP, DBMS, OS
              </li>
            </Reveal>
            <Reveal>
              <li>
                🛠️ <b>Tools:</b> Git, GitHub, Postman, VS Code
              </li>
            </Reveal>
          </ul>
        </div>
      </Reveal>

      <br />
      <br />

      <Reveal>
        <div className="highlights about-sections">
          <h3>Key Highlights</h3>
          <hr />
          <Reveal>
            <ul className="lists">
              <li>
                💡 <b>Solved 1000+ DSA</b> problems on LeetCode
              </li>
              <li>
                🚀 Built 15+ project and{" "}
                <b>6+ full-stack MERN applications</b>{" "}
              </li>
              <li>
                🔐 Built secure apps using JWT Authentication & Role-Based
                Access
              </li>
              <li>📦 Developed REST APIs with full CRUD functionality</li>
              <li>⚡ Designed scalable MongoDB schemas for real-world apps</li>
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <br />
      <br />

      <Reveal>
        <div className="about-sections extra">
          <h3>Beyond Code</h3>
          <hr />
          <Reveal>
            <ul className="lists">
              <li>
                I enjoy storytelling, filmmaking, and writing. These interests
                help me think creatively and build user-focused applications
                with better design and experience.
              </li>
            </ul>
          </Reveal>
        </div>
      </Reveal>

      <br />
      <br />

      <div className="projects-tech-stacks">
        <Reveal>
          <h1>Tech Stack & Skills I Work With </h1>
          <p>
            From frontend to backend, the technologies that power my
            development.
          </p>
        </Reveal>
        <Reveal>
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
        </Reveal>

        <Reveal>
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
        </Reveal>
        <Reveal>
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
        </Reveal>
        <Reveal>
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
        </Reveal>
        <br />
        <br />
      </div>
    </section>
  );
};

export default About;
