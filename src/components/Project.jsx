import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="Project">
      <div className="detail">
        <div className="left-Part">
          <div className="video">
            <iframe
              className="project-video"
              src={project.video}
              title={project.name}
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        </div>

        <div className="right-Part">
          <div>
            <h2>{project.name}</h2>
            <p className="description">{project.description}</p>
          </div>

          <p className="tech-stacks">
            <b>Tech Stacks: </b> {project.techStack}
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default Project;
