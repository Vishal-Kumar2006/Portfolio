import "./About.css";

const About = () => {
  return (
    <div className="About">
      {/* Professional Summary */}
      <div className="summary">
        <p className="profile-description">
          I'm a passionate developer with a background in BCA. I started coding
          with C & C++, then explored Data Structures, Algorithms, and Web
          Development. Solving complex problems and building interactive web
          applications excites me!
        </p>
        <p>
          I’m a Backend-focused MERN Stack Developer with strong problem-solving
          skills (1000+ DSA problems solved on LeetCode). I specialize in
          building secure, scalable web applications using Node.js, Express, and
          MongoDB.
        </p>

        <p>
          I have developed multiple full-stack projects with real-world features
          like authentication, role-based authorization, REST APIs, and database
          design.
        </p>

        <p>
          My focus is on writing clean backend logic, designing efficient APIs,
          and solving complex problems with optimized solutions.
        </p>
      </div>

      <br />
      <br />

      {/* Skills */}
      <div className="about-sections skills-strength">
        <h3>Technical Skills</h3>
        <hr />
        <ul className="lists">
          <li>
            🚀 <b>Languages:</b> Java, JavaScript
          </li>
          <li>
            🔥 <b>Frontend:</b> HTML, CSS, Bootstrap, React.js
          </li>
          <li>
            ⚙️ <b>Backend:</b> Node.js, Express.js, REST APIs, JWT
          </li>
          <li>
            🗄️ <b>Databases:</b> MongoDB, MySQL
          </li>
          <li>
            📚 <b>Core:</b> DSA, OOP, DBMS, OS
          </li>
          <li>
            🛠️ <b>Tools:</b> Git, GitHub, Postman, VS Code
          </li>
        </ul>
      </div>

      <br />
      <br />

      {/* Highlights */}
      <div className="highlights about-sections">
        <h3>Key Highlights</h3>
        <hr />
        <ul className="lists">
          <li>
            💡 <b>Solved 1000+ DSA</b> problems on LeetCode
          </li>
          <li>
            🚀 Built 15+ project and <b>6+ full-stack MERN applications</b>{" "}
          </li>
          <li>
            🔐 Built secure apps using JWT Authentication & Role-Based Access
          </li>
          <li>📦 Developed REST APIs with full CRUD functionality</li>
          <li>⚡ Designed scalable MongoDB schemas for real-world apps</li>
        </ul>
      </div>

      <br />
      <br />

      {/* Personality (Controlled, not distracting) */}
      <div className="about-sections extra">
        <h3>Beyond Code</h3>
        <hr />
        <ul className="lists">
          <li>
            I enjoy storytelling, filmmaking, and writing. These interests help
            me think creatively and build user-focused applications with better
            design and experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
