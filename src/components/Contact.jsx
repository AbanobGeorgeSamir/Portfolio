export default function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <h2 className="section-title" id="contact-title">
        Contact
      </h2>

      <div className="contact-buttons">
        <a
          href="mailto:samirabanob848@gmail.com?subject=Portfolio%20Contact"
          className="contact-btn email-btn"
          aria-label="Send email to Abanob George"
        >
          Email Me
        </a>

        <a
          href="https://wa.me/201068992594"
          className="contact-btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Abanob George on WhatsApp"
        >
          WhatsApp
          <span>01068992594</span>
        </a>

        <a
          href="https://github.com/AbanobGeorgeSamir"
          className="contact-btn github-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Abanob George GitHub profile"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
