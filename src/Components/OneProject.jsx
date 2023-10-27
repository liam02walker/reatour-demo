import projectData from "./../Data/projects.json";

export default function OneProject({ key, name, desc, imgURL }) {
  return (
    <div key={key} className="pContainer">
      <h3>{name}</h3>
      <img className="onePImg" src={imgURL} alt="This is one of my projects" />
      <p>{desc}</p>
    </div>
  );
}
