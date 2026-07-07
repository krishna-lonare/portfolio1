import "./Education.css";

function Education() {

          function school() {
  window.open(
    "https://www.facebook.com/p/Shri-Deshikendra-VidyalayaLatur-61553298274974/",
    "_blank",
    "noopener,noreferrer"
  );
}

function college(){
  window.open(
    "https://dsclatur.org/",
    "_blank",
     "noopener,noreferrer"
  );
}

function engg(){
  window.open(
    "https://www.msbecl.ac.in/",
    "_blank",
     "noopener,noreferrer"
  );
}

  return (
    <section className="education" id="education">

      <div className="education-heading">
        <h4>MY JOURNEY</h4>
        <h2>Education & Certifications</h2>
      </div>

      <div className="timeline">

        {/* SSC */}

        <div className="timeline-item" onClick={school}>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <span className="timeline-year">2020</span>

            <h3>Secondary School Certificate (SSC)</h3>

            <h4>Shri Deshikendra High School, Latur</h4>

            <p>Maharashtra State Board</p>

            <div className="timeline-details">
              <span>📍 Latur, Maharashtra</span>
              <span>🎯 88%</span>
            </div>

          </div>

        </div>

        {/* HSC */}

        <div className="timeline-item" onClick={college}>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <span className="timeline-year">2022</span>

            <h3>Higher Secondary Certificate (HSC)</h3>

            <h4>Dayanand Science College, Latur</h4>

            <p>Science (PCM) • Maharashtra State Board</p>

            <div className="timeline-details">
              <span>📍 Latur, Maharashtra</span>
              <span>🎯 73%</span>
            </div>

          </div>

        </div>

        {/* Graduation */}

        <div className="timeline-item" onClick={engg}>

          <div className="timeline-dot"></div>

          <div className="timeline-card">

            <span className="timeline-year">2022 - Present</span>

            <h3>B.Tech - Computer Science & Engineering</h3>

            <h4>M.S. Bidve Engineering College, Latur</h4>

            <p>Dr. Babasaheb Ambedkar Technological University</p>

            <div className="timeline-details">
              <span>📍 Latur, Maharashtra</span>
              <span>🎓 CGPA : 7.5</span>
            </div>

          </div>

        </div>

      </div>

      {/* Certifications */}

      <div className="certificate-section">

        <h2>Certifications</h2>

        <div className="certificate-grid">

          <div className="certificate-card">
            <h3>Java Full Stack Development</h3>
            <p>ITVedant Institute</p>
            <span>2026</span>
          </div>

          <div className="certificate-card">
            <h3>Hackathon Participation</h3>
            <p>College Hackathon</p>
            <span>April 2026</span>
          </div>

        </div>

      </div>

      {/* Achievements */}

      <div className="achievement-section">

        <h2>Achievements</h2>

        <div className="achievement-grid">

          <div className="achievement-card">
            🚀 Built Multiple Academic & Personal Projects
          </div>

          <div className="achievement-card">
            💻 Participated in College Hackathon
          </div>

          <div className="achievement-card">
            📚 Completed Java Full Stack Training
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;