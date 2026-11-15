function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tech-stack">{tech.join(" · ")}</p>
      <div className="links">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noreferrer">Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;