
import "./Contact.css";

const contactLinks = [
  {
    label: "Email",
    value: "Say hello directly",
    href: "mailto:your-email@example.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "Projects and experiments",
    href: "https://github.com/yourusername",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Professional life",
    href: "https://www.linkedin.com/in/yourusername/",
    external: true,
  },
];

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="contact-eyebrow">THE DOOR IS OPEN</span>

        <h1>
          Let's talk
          <br />
          <span>about something.</span>
        </h1>

        <p className="contact-intro">
          Have something on your mind, found something interesting,
          or just want to say hello? My inbox is open.
        </p>

        <a
          className="contact-email-cta"
          href="mailto:your-email@example.com"
        >
          Write me an email <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact-links" aria-label="Contact and social links">
        {contactLinks.map((link, index) => (
          <a
            className="contact-link"
            href={link.href}
            key={link.label}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
          >
            <span className="contact-link__number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="contact-link__content">
              <span className="contact-link__label">{link.label}</span>
              <span className="contact-link__value">{link.value}</span>
            </span>

            <span className="contact-link__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>

      <footer className="contact-footer">
        <p>No forms. No fuss. Just a conversation.</p>
      </footer>
    </main>
  );
}

export default Contact;
