import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      {/* NETLIFY FORM */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
      >
        {/* required for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          required
        ></textarea>

        <button type="submit" className="btn">
          Send
        </button>
      </form>

      {/* SOCIAL LINKS */}
      <div className="contact-socials">
        <a
          href="https://github.com/harshhax"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/harshaax/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:harsha.srithar@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
