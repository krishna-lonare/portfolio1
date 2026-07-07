import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo" >
        Krishna<span>.</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>

        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>

        <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;