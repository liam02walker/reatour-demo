// Import external Libraries
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import CSS Styles
import "./CSS/App.css";
import "./CSS/Header.css";

// Import Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

// Import Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";

export default function App() {
  const [bigImg, setBigImg] = useState(false);

  function handleImg() {
    setBigImg(!bigImg);
    console.log(bigImg);
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home bigImg={bigImg} handleImg={handleImg} />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
