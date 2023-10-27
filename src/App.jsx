import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router Dom</h1>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/About">ABOUT</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <footer>
        <p>&copy; Get in the BIN</p>
      </footer>
    </BrowserRouter>
  );
}
