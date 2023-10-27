import { Link } from "react-router-dom";
import "./../CSS/Home.css";
import HomeImg from "./../Components/HomeImg";
import OneProject from "./../Components/OneProject";
import projectData from "./../Data/projects.json";

export default function Home({ handleImg, bigImg }) {
  return (
    <main>
      <div className="sectionContainer">
        <img src="/selfPic.jpg" alt="Selfie of myself" className="welcomeImg" onClick={handleImg} />
        <h2>WELCOME</h2>
        <p>
          Welcome to my Portfolio site! I am Liam Walker, learn more about me{" "}
          <Link to="/About" className="welcomeLink">
            HERE
          </Link>
        </p>
        <p>I have recently decided to take a hit at web developing, and I gotta say I do love it!</p>
      </div>
      <div className="sectionContainer">
        <h2>PROJECTS</h2>
        <div className="projectGrid">
          {projectData.map((item) => {
            return <OneProject key={item._ID} imgURL={item.imgURL} desc={item.desc} name={item.name} />;
          })}
        </div>
        <p>
          View More{" "}
          <Link className="welcomeLink" to="/Projects">
            HERE
          </Link>
        </p>
      </div>
      {bigImg && <HomeImg handleImg={handleImg} />}
    </main>
  );
}
