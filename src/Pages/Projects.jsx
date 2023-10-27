import projectData from "./../Data/projects.json";
import "./../CSS/Project.css";

export default function Projects() {
  return (
    <main>
      <h2>Projects Page</h2>
      <p>These are my projects</p>
      <div className="bigContainer">
        {projectData.map((item) => {
          return (
            <div className="projectContainer">
              <h3 className="projectTitle">{item.name}</h3>
              <img className="projectImage" src={item.imgURL} alt="My project images" />
              <p className="projectDesc">{item.desc}</p>
              <a href={item.gitURL}>CLICK HERE</a>
            </div>
          );
        })}
      </div>
    </main>
  );
}
