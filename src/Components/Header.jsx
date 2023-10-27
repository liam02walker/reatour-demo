import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerContainer">
      <h1 className="headerTitle">ABOUT LIAM</h1>
      <nav className="navContainer">
        <Link to="/" className="navLinks">
          HOME
        </Link>
        <Link to="/Projects" className="navLinks">
          PROJECTS
        </Link>
        <Link to="/About" className="navLinks">
          ABOUT
        </Link>
      </nav>
    </div>
  );
}
