import "./Resume.css";
import resumeImg from "../assets/resume.png";

function Resume() {
  return (
    <section className="resume" id="resume">

      {/* Left Side - Resume Preview */}
      <div className="resume-left">
        <img
          src={resumeImg}
          alt="Resume Preview"
          className="resume-image"
        />
      </div>

      {/* Right Side - Resume Details */}
      <div className="resume-right">

        <h4>MY RESUME</h4>

        <h2>
          Download My <span>Resume</span>
        </h2>

        <p>
          Download my latest resume to explore my education, technical
          skills, certifications, projects, and achievements.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=1_U6FgFrrQ_kTCBOzbtEy_zG9g_GwbZBG"
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Download Resume
        </a>

      </div>

    </section>
  );
}

export default Resume;