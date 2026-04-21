import styles from './Services.module.css';
import useReveal from '../../hooks/useReveal';

const services = [
  {
    icon: 'fa-solid fa-palette',
    title: 'Frontend Development',
    desc: 'Crafting responsive, modern web interfaces with smooth animations and intuitive UX that users love.',
    points: ['Responsive UI', 'Modern web interfaces', 'Animations & UX'],
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full Stack Web Development',
    desc: 'Building complete web applications with Django backends, REST APIs, and database-driven logic end to end.',
    points: ['Complete web apps', 'API integration', 'Database + backend logic'],
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    title: 'IT Training & Mentoring',
    desc: 'Teaching students and guiding developers through real projects — breaking down complex concepts into clear, practical lessons.',
    points: ['Teach students', 'Guide projects', 'Explain concepts clearly'],
    highlight: true,
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Website Optimization',
    desc: 'Improving performance, cleaning up code, and fixing responsiveness issues to make your site fast and reliable.',
    points: ['Performance improvement', 'Clean code refactoring', 'Responsive fixes'],
  },
  {
    icon: 'fa-solid fa-pen-ruler',
    title: 'Open to Freelance Opportunities',
    desc: 'Open to freelance opportunities, delivering frontend and full stack solutions with quality, scalability, and efficiency.',
    points: ['Figma → React', 'Pixel-perfect output', 'Component-based structure'],
  },
  {
    icon: 'fa-solid fa-plug',
    title: 'API Integration',
    desc: 'Connecting your frontend to backends and third-party services — handling real-world data flows seamlessly.',
    points: ['Frontend ↔ backend connect', 'Third-party APIs', 'Real-world data handling'],
  },
];

function ServiceCard({ service, index }) {
  const ref = useReveal({ delay: index * 90, threshold: 0.1 });
  return (
    <div ref={ref} className={`${styles.card} ${service.highlight ? styles.featured : ''} reveal-scale`}>
      {service.highlight && <span className={styles.featuredBadge}>Unique Advantage</span>}
      <div className={styles.iconWrap}>
        <i className={`${service.icon} ${styles.icon}`} />
      </div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDesc}>{service.desc}</p>
      <ul className={styles.points}>
        {service.points.map(p => (
          <li key={p}><span className={styles.bullet}>▹</span>{p}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const titleRef   = useReveal({ rootMargin: '100px' });
  const actionsRef = useReveal({ delay: 100 });

  return (
    <section className={styles.services}>
      <div ref={titleRef} className={`${styles.pageTitle} reveal`}>
        <h1>Services</h1>
        <p>What I bring to the table — from code to classroom</p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>

      <div ref={actionsRef} className={`${styles.actions} reveal`}>
        <a href="#contact" className={styles.btnPrimary}>Hire Me</a>
        <a href="#projects" className={styles.btnOutline}>View Projects</a>
      </div>
    </section>
  );
}
