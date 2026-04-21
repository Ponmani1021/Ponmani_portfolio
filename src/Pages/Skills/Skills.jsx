import styles from './Skills.module.css';
import useReveal from '../../hooks/useReveal';

const categories = [
  {
    id: 'frontend',
    label: '🎨 Frontend Development',
    desc: 'Building responsive, interactive, and visually rich web interfaces.',
    skills: [
      { name: 'HTML5',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',          desc: 'Semantic markup & structure' },
      { name: 'CSS3',           logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',           desc: 'Styling, animations & layouts' },
      { name: 'JavaScript',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'ES6+ modern scripting language' },
      { name: 'Bootstrap',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',  desc: 'Rapid responsive UI framework' },
      { name: 'Tailwind CSS',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', desc: 'Utility-first CSS framework' },
      { name: 'React.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',          desc: 'Component-based UI library' },
    ],
  },
  {
    id: 'backend',
    label: '⚙️ Backend Development',
    desc: 'Crafting robust server-side logic and scalable API solutions.',
    skills: [
      { name: 'Python',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',  desc: 'Versatile high-level programming language' },
      { name: 'Django',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',     desc: 'Full-featured Python web framework' },
      { name: 'Flask',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',   desc: 'Lightweight Python microframework' },
    ],
  },
  {
    id: 'databases',
    label: '🗄️ Databases',
    desc: 'Designing and managing structured and unstructured data storage.',
    skills: [
      { name: 'MySQL',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',   desc: 'Relational SQL database system' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'NoSQL document-oriented database' },
    ],
  },
  {
    id: 'tools',
    label: '🛠️ Tools & Platforms',
    desc: 'Productivity tools and platforms that power my daily workflow.',
    skills: [
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', desc: 'Primary code editor of choice' },
      { name: 'GitHub',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', desc: 'Version control and collaboration' },
      { name: 'Kiro',    logo: null,                                                                              desc: 'AI-powered developer IDE' },
    ],
  },
];

function CategorySection({ cat, index }) {
  const headingRef = useReveal({ delay: 0 });
  return (
    <div className={styles.category}>
      <div ref={headingRef} className={`${styles.catHeader} reveal`}>
        <h2 className={styles.catLabel}>{cat.label}</h2>
        <p className={styles.catDesc}>{cat.desc}</p>
      </div>
      <div className={styles.grid}>
        {cat.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({ skill, delay }) {
  const ref = useReveal({ delay, threshold: 0.1 });
  return (
    <div ref={ref} className={`${styles.card} reveal-scale`}>
      <div className={styles.logoWrap}>
        {skill.logo ? (
          <img src={skill.logo} alt={skill.name} className={styles.logo} />
        ) : (
          <span className={styles.logoFallback}>✦</span>
        )}
      </div>
      <span className={styles.skillName}>{skill.name}</span>
      <p className={styles.skillDesc}>{skill.desc}</p>
    </div>
  );
}

export default function Skills() {
  const titleRef  = useReveal({ rootMargin: '100px' });
  const actionsRef = useReveal({ delay: 100 });

  return (
    <section className={styles.skills}>
      <div ref={titleRef} className={`${styles.pageTitle} reveal`}>
        <h1>Skills</h1>
        <p>Technologies and tools I work with</p>
      </div>

      {categories.map((cat, i) => (
        <CategorySection key={cat.id} cat={cat} index={i} />
      ))}

      <div ref={actionsRef} className={`${styles.actions} reveal`}>
        <a href="#contact" className={styles.btnPrimary}>Contact me</a>
        <a href="#projects" className={styles.btnOutline}>View Projects</a>
      </div>
    </section>
  );
}
