import emailjs from "emailjs-com";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e6pdd6k",        // 🔁 your Service ID
      "template_7iw851s",       // 🔁 your Template ID
      e.target,
      "4ci5YQU_bjk2hoDWa"         // 🔁 Public Key from EmailJS
    ).then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows="4" placeholder="Message" required />

        <button type="submit" className="btn">Send</button>
      </form>

      <div className="contact-socials">
        <a href="https://github.com/harshhax" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/harshaax/" target="_blank"><FaLinkedinIn /></a>
        <a href="mailto:harsha.srithar@gmail.com"><FaEnvelope /></a>
      </div>
    </section>
  );
}
