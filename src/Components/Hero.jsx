import profileimg from "../assets/profilephoto.png";
import "./Hero.css";
import Education from "./Education";
import Resume from "./Resume"

import Skills from './Skills'
import Contact from "./Contact";
import Footer from "./Footer";
function Hero() {
  return (
    <>
    <section className="home" id="home">

      <div className="home-left">

        <p className="intro">Hello, I'm</p>

        <h1 >
          Krishna <span>Lonare</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="description">
          Passionate Java Full Stack Developer who loves building
          modern, responsive, and user-friendly web applications
          using Java, Spring Boot, React, MySQL, HTML, CSS, and
          JavaScript.
        </p>

        <div className="buttons">
          <button className="primary-btn">
             <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
          </button>

          <button className="secondary-btn">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact me</a>
          </button>
        </div>

      </div>

      <div className="home-right">
        <div className="image-container">
          <img src={profileimg} alt="Krishna Lonare" />
        </div>
      </div>
     

    </section>
    <Skills/>
    <Education/>
    <Resume/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Hero;