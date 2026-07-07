import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <h4>GET IN TOUCH</h4>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out for internships, full-time opportunities,
          freelance work, or collaboration.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>krishnalonare07@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>📱 Phone</h3>
            <p>+91 9503032641</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="info-card">
            <h3>💻 GitHub</h3>

            <a
              href="https://github.com/krishna-lonare"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>

          <div className="info-card">
            <h3>💼 LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/k-lonare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;