import { useState } from 'react';
import styles from './Contact.module.css';
import useReveal from '../../hooks/useReveal';

const contactItems = [
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'ponmani1021@gmail.com',
    href: 'mailto:ponmani@email.com',
  },
  {
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    value: '+91 99448 42412',
    href: 'tel:+919944842412',
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Location',
    value: 'Tirupur, Tamil Nadu, India',
    href: null,
  },
//   {
//     icon: 'fa-brands fa-linkedin',
//     label: 'LinkedIn',
//     value: 'linkedin.com/in/ponmani',
//     href: 'https://linkedin.com',
//   },
//   {
//     icon: 'fa-brands fa-github',
//     label: 'GitHub',
//     value: 'github.com/ponmani',
//     href: 'https://github.com',
//   },
];

export default function Contact() {
  const titleRef  = useReveal({ rootMargin: '100px' });
  const leftRef   = useReveal({ delay: 100, rootMargin: '100px' });
  const rightRef  = useReveal({ delay: 200, rootMargin: '100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
};

const handleSubmit = (e) => {
  e.preventDefault();

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact",
      ...form,
    }),
  })
    .then(() => {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", message: "" });
    })
    .catch((error) => alert(error));
};

  return (
    <section className={styles.contact}>

      {/* ── Success banner ── */}
      {sent && (
        <div className={styles.successBanner}>
          <i className="fa-solid fa-circle-check" />
          Message sent successfully!! Will connect you within 24hours
        </div>
      )}

      {/* ── Page title ── */}
      <div ref={titleRef} className={`${styles.pageTitle} reveal`}>
        <h1>Get In Touch</h1>
        <p className={styles.availability}>
          <i className="fa-solid fa-circle-check" /> Looking to bring your ideas to life?
Let’s connect and create something impactful together.
        </p>
      </div>

      <div className={styles.grid}>

        {/* ── Left — Contact Info ── */}
        <div ref={leftRef} className={`${styles.infoCard} reveal-left`}>
          <h2 className={styles.colHeading}>Contact Info</h2>
          <p className={styles.colSub}>
            Have a project in mind or just want to say hi? Reach out through any of these channels.
          </p>

          <ul className={styles.infoList}>
            {contactItems.map(item => (
              <li key={item.label} className={styles.infoItem}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className={styles.infoIconWrap}
                    aria-label={item.label}
                  >
                    <i className={item.icon} />
                  </a>
                ) : (
                  <div className={styles.infoIconWrap}>
                    <i className={item.icon} />
                  </div>
                )}
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer" className={styles.infoValue}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.cta}>
            <p>Let's build something great together.</p>
            <a href="https://wa.me/919944842412" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
              <i className="fa-brands fa-whatsapp" /> Message on WhatsApp
            </a>
          </div>
        </div>

        {/* ── Right — Contact Form ── */}
        <div ref={rightRef} className={`${styles.formCard} reveal-right`}>
          <h2 className={styles.colHeading}>Send a Message</h2>
          <p className={styles.colSub}>Fill in the form and I'll get back to you within 24 hours.</p>

        <form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >            
        <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this: <input name="bot-field" />
              </label>
            </p>
            <div className={styles.field}>
              <label htmlFor="name">
                <i className="fa-solid fa-user" /> Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                <i className="fa-solid fa-envelope" /> Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                <i className="fa-solid fa-message" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {sent
                ? <><i className="fa-solid fa-circle-check" /> Message Sent!</>
                : <><i className="fa-solid fa-paper-plane" /> Connect with Me</>
              }
            </button>

            
          </form>
          <form name="contact" method="POST" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
        </div>

      </div>

      {/* ── Social + Availability section ── */}
      <div className={styles.socialSection}>
        <div className={styles.socialRow}>
          <a href="https://www.linkedin.com/in/ponmani-p-161242292/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Ponmani1021" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
          </a>
        </div>

        <p className={styles.availLine}>
          <i className="fa-solid fa-circle-check" /> Open to remote roles and freelance opportunities
        </p>
      </div>
    </section>
  );
}
