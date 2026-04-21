import { useState, useEffect } from 'react';
import styles from './About.module.css';
import myself from '../../assets/images/me-1.jpeg';
import useReveal from '../../hooks/useReveal';
import resume from '../../assets/Ponmaniresume1.1.pdf';

const roles = [
  'Freelancer',
  'IT Trainer',
  'Remote Worker',
  'Frontend Developer',
  'Full Stack Developer',
];

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
        <path d="M9.5 3.5C6 5 3.5 8.2 3.5 12" />
      </svg>
    ),
    title: 'Frontend-Focused FullStack Developer',
    desc: 'Passionate about building modern, responsive user interfaces with strong focus on usability, performance, and clean design.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    title: 'Open to Freelance Opportunities',
    desc: 'Actively seeking freelance projects to build real-world applications and collaborate on frontend and full stack development work.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h.01M11 8h6" />
        <path d="M7 12h.01M11 12h6" />
      </svg>
    ),
    title: 'Open to Remote & Onsite Roles',
    desc: 'Flexible to work in both remote and onsite environments, ready to collaborate and contribute effectively in team settings.',
  },
];

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // reveal refs
  const imgRef      = useReveal({ threshold: 0.2, rootMargin: '100px' });
  const textRef     = useReveal({ delay: 150,     rootMargin: '100px' });
  const card0Ref    = useReveal({ delay: 0 });
  const card1Ref    = useReveal({ delay: 120 });
  const card2Ref    = useReveal({ delay: 240 });
  const expRef      = useReveal({ threshold: 0.1 });
  const eduRef      = useReveal({ threshold: 0.1, delay: 150 });
  const actionsRef  = useReveal({ delay: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.about}>

      {/* ── Top 2-partition: image | headline + bio ── */}
      <div className={styles.intro}>
        <div ref={imgRef} className={`${styles.imageCol} reveal-left`}>
          <div className={styles.imgFrame}>
            <div className={styles.imgGlowRing} />
            <div className={styles.imgGlowRing2} />
            <img src={myself} alt="Ponmani" className={styles.imgPhoto} />
            <div className={styles.imgBadge}>Frontend Dev</div>
          </div>
        </div>

        <div ref={textRef} className={`${styles.textCol} reveal-right`}>
          <div className={styles.headlineWrap}>
            <p className={styles.subLabel}>About Me</p>
            <h1 className={styles.headline}>
              I am a{' '}
              <span className={`${styles.roleSlide} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                {roles[roleIndex]}
              </span>
            </h1>
          </div>
          <div className={styles.bio}>
            <p>
              I'm Ponmani, a frontend-focused full stack developer with a passion for building
              clean, performant, and accessible web experiences. I specialise in React-based UIs
              paired with solid backend integrations — turning complex requirements into products
              that feel effortless to use.
            </p>
            <p>
              Beyond development, I work as an IT trainer — breaking down technical concepts into
              digestible lessons for learners at all levels. Whether it's mentoring aspiring
              developers or shipping production-ready code for clients, I bring the same energy:
              precise, practical, and people-first.
            </p>
          </div>
        </div>
      </div>

      {/* ── Identity cards ── */}
      <div className={styles.cards}>
        {cards.map((c, i) => {
          const refs = [card0Ref, card1Ref, card2Ref];
          return (
            <div key={c.title} ref={refs[i]} className={`${styles.card} reveal-scale`}>
              <div className={styles.cardIcon}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </div>
          );
        })}
      </div>

      {/* ── Experience + Education ── */}
      <div className={styles.timeline}>
        <div ref={expRef} className={`${styles.timelineCol} reveal-left`}>
          <h2 className={styles.colHeading}><span className={styles.colIcon}><i class="fa-solid fa-briefcase"></i></span> Experience</h2>
          <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>Full Stack developer</h4>
              <small>@KICE Infosystems</small>
              <div className={styles.duration}>
                <span>1 Year</span>
                <span>Present</span>
              </div>
              <p>Full Stack Developer and IT Trainer specializing in frontend development with React and backend development using Django. Experienced in building scalable web applications and training students through hands-on project-based learning.</p>
            </div>
          </div>
          {/* <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>Full Stack Developer</h4>
              <span className={styles.duration}>1 Year</span>
              <p>Developed end-to-end web applications covering both client-side React and server-side Node.js / Express solutions.</p>
            </div>
          </div> */}
          {/* <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>IT Trainer</h4>
              <span className={styles.duration}>Ongoing</span>
              <p>Conducting onsite and remote training sessions on web development fundamentals, React, and modern JavaScript.</p>
            </div>
          </div> */}
        </div>

        <div ref={eduRef} className={`${styles.timelineCol} reveal-right`}>
          <h2 className={styles.colHeading}><span className={styles.colIcon}><i class="fa-solid fa-graduation-cap"></i></span> Education</h2>
          <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>Master of Computer Applications (MCA)</h4>
              <div className={styles.duration}>
                <span>80%</span>
                <span>2025 - 2027</span>
              </div>
              <p>Pursuing MCA degree, gaining advanced knowledge in software development, system design, and full stack technologies with focus on practical implementation.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>BSc Computer Science</h4>
              <div className={styles.duration}>
                <span>89%</span>
                <span>2022 - 2025</span>
              </div>
              <p>Gained solid understanding of computer science fundamentals including programming, data structures, and problem solving through academic and practical learning.</p>
            </div>
          </div>
          {/* <div className={styles.timelineItem}>
            <div className={styles.dot} />
            <div className={styles.timelineContent}>
              <h4>Self-Directed Learning</h4>
              <span className={styles.duration}>Ongoing</span>
              <p>Continuously upskilling through hands-on projects, open-source contributions, and industry courses.</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* ── CTA buttons ── */}
      <div ref={actionsRef} className={`${styles.actions} reveal`}>
        <a href={resume} download="Ponmani_Resume.pdf" className={styles.btnPrimary}>Download CV</a>
        <a href="#contact" className={styles.btnOutline}>Hire Me</a>
      </div>

    </section>
  );
}
