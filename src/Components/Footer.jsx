import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>
            Krishna <span>Lonare</span>
          </h2>

          <p>
            Java Full Stack Developer passionate about building
            modern, responsive, and scalable web applications.
          </p>
        </div>

        <div className="footer-center">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>

        <div className="footer-right">

          <h3>Connect</h3>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="https://mail.google.com/mail/?view=cm&to=krishnalonare07@gmail.com">
            Email
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Krishna Lonare. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;