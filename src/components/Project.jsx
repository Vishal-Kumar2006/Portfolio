import Reveal from "../Reveal";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="Project">
      <Reveal>
        <div className="detail">
          <Reveal></Reveal>
          <div className="left-Part">
            <div className="video">
              <img
                src={project.image}
                className="project-video"
                alt={`${project.name} Image`}
              />
            </div>
          </div>

          <div className="right-Part">
            <div>
              <h2>{project.name}</h2>
              <Reveal>
                <p className="description">{project.description}</p>
              </Reveal>
            </div>

            <div className="tech-stacks">
              <Reveal>
                <b>Tech Stacks: </b> {project.techStack}
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="project-links">
          <div className="demo-link">
            <a className="project-link-anchor-tag" href={project.demo}>
              Demo
            </a>
          </div>
          <div className="github-link">
            <a className="project-link-anchor-tag" href={project.github}>
              Github Link
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Project;
