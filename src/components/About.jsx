import "./About.css";


const About = () => {
  return (
    <div className="About">
      <div className="profile-hero">
        {/* Short Bio */}
        <h2 className="name">Vishal Kumar</h2>

        {/* Profile Picture */}

        <img src='https://i.postimg.cc/Cxsrht5h/vishal-Img.png' border='0'
          className="profile-img"
          alt="Vishal's Photo"
          />
      </div>

      <p className="profile-description">
        I'm a passionate developer with a background in BCA. I started coding
        with C & C++, then explored Data Structures, Algorithms, and Web
        Development. Solving complex problems and building interactive web
        applications excites me!
      </p>

      {/* Skills & Strengths */}
      <div className="skills-strength ">
        <h3 className="skills">Skills & Strengths</h3>
        <hr />
        <ul className="lists">
          <li className="skill">🚀 Languages: Java DSA, C, C++</li>
          <li className="skill">
            🚀 Problem-Solving: LeetCode <b className="bold">600+</b> questions
            solved
          </li>
          <li className="skill">🔥 Frontend: HTML, CSS, JavaScript, React.js </li>
          <li className="skill">🔥 Back-end: Node.js, Express.js </li>
          <li className="skill">🔥 Database: MySQL, MongoDB </li>
          <li className="skill">📚 Data Structures & Algorithms</li>
          <li className="skill">💡 Strong Logical & Analytical Thinking</li>
        </ul>
      </div>
      
      <br /><br /><br />
      {/* Fun Fact */}
      <div className="fun-fact">
        <h3 className="fun-heading">Fun Fact</h3>
        <hr />
        <p className="fun-para">
          🛠️ I'm a passionate developer with a background in BCA.
        </p>

        <p className="fun-para">
          I started coding with C & C++, then explored Data Structures,
          Algorithms, and Web Development.
        </p>

        <p className="fun-para">
        🎯 Solving complex problems and building interactive web applications
          excites me! But beyond coding, I'm also deeply into filmmaking,
          cinematography, and storytelling.
        </p>

        <p className="fun-para">
          🎵 I love writing songs, poems, and screenplays, and I dream of making a
          high-action movie packed with stunning VFX someday.
        </p>

        <p className="fun-para">
          ✨ Whether it's crafting code or crafting stories, I believe in
          bringing imagination to life!
        </p>
      </div>
    </div>
  );
};

export default About;
