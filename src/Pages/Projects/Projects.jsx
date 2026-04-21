import styles from './Projects.module.css';
import useReveal from '../../hooks/useReveal';
// Frontend
import p1  from '../../assets/images/nails.png';
import p2  from '../../assets/images/fastfood.png';
import p3  from '../../assets/images/Singtel.png';
import p4  from '../../assets/images/gelato.png';
import p5  from '../../assets/images/medinova.png';
import p6  from '../../assets/images/extensions.png';
import p7  from '../../assets/images/ticket.png';
// fullstack
import p8  from '../../assets/images/institute.png';
import p9  from '../../assets/images/mushroom.png';
import p10 from '../../assets/images/boutique.png';
import p11 from '../../assets/images/carwash.png';


const frontend = [
  {
    img: p1,
    title: 'Amora Nails Salon',
    desc: 'Developed a responsive nail salon website using HTML, CSS, JavaScript, and React, featuring service showcases, product cart with quantity control, and integrated appointment booking system.',
    stack: ['HTML5', 'CSS3', 'JavaScript','React js'],
    live: 'https://ponmani1021.github.io/Amora_Salon/',
    github: 'https://github.com/Ponmani1021/Amora_Salon',
  },
  {
    img: p2,
    title: 'Feane Fast Food',
    desc: 'Created a static fast food restaurant website using HTML, CSS, JavaScript, and React, showcasing menu items, offers, and brand visuals with a clean, responsive design.',
    stack: ['HTML5', 'CSS3', 'JavaScript','React js'],
    live: 'https://ponmani1021.github.io/Feane_foods/',
    github: 'https://github.com/Ponmani1021/Feane_foods',
  },
  {
    img: p3,
    title: 'Singtel Infotech Portfolio',
    desc: 'Developed a blockchain-based investment platform using HTML, CSS, and JavaScript, featuring USDT (BEP20) transactions, daily ROI tracking, referral system, loan options, transparent records, and active contact integration.',
    stack: ['HTML5','CSS3','JavaScript'],
    live: 'https://singtelportfolio.netlify.app/',
    github: 'https://github.com/Ponmani1021/Singtel_portfolio',
  },
  {
    img: p4,
    title: 'Galeto IceCreams',
    desc: 'Built an animated ice cream showcase website using HTML, CSS, and JavaScript, highlighting available flavors, offers, and visuals with engaging transitions and interactive user experience.',
    stack: ['HTML5','CSS3','JavaScript'],
    live: 'https://ponmani1021.github.io/Gelato_IceCreams/',
    github: 'https://github.com/Ponmani1021/Gelato_IceCreams',
  },
  // {
  //   img: p5,
  //   title: 'Restaurant Landing Page',
  //   desc: 'Modern restaurant website with hero section, menu showcase, gallery and contact form with smooth scroll effects.',
  //   stack: ['HTML5', 'CSS3', 'JavaScript'],
  //   live: '#',
  //   github: '#',
  // },
 
   {
    img: p6,
    title: 'Extension List',
    desc: 'Developed an extension listing interface using HTML, CSS, and JavaScript, enabling users to filter active and inactive extensions with a clean, interactive, and user-friendly design.',
    stack: ['HTML5','CSS3','JavaScript'],
    live: 'https://ponmani1021.github.io/Extension_list/',
    github: 'https://github.com/Ponmani1021/Extension_list',
  },
   {
    img: p7,
    title: 'Ticket Generator',
    desc: 'Built a simple ticket generator using HTML, CSS, and JavaScript that creates dynamic tickets based on user input with a clean and functional interface.',
    stack: ['HTML5','CSS3','JavaScript'],
    live: 'https://ponmani1021.github.io/Ticket_generator/',
    github: 'https://github.com/Ponmani1021/Ticket_generator',
  },
  
];

const fullstack = [
  {
    img: p8,
    title: 'Computer Institute Portal',
    desc: 'Developed a Django-based full stack system for a computer institute featuring admin, staff, and student dashboards, enabling attendance tracking, assignments, user management, profile storage, and fee installment management.',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Django',  'MySQL'],
    github: 'https://github.com/Ponmani1021/Computer_Institute',
    badge: 'Django + MySQL',
  },
  {
    img: p9,
    title: 'Mushroom Mart',
    desc: 'Developed a Django-based full stack mushroom eCommerce platform with admin, staff, and user dashboards, enabling category-wise product listings, cart functionality, order placement, and comprehensive order management system.',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Django','MySQL' ],
    github: 'https://github.com/Ponmani1021/Mushroom_mart',
    badge: 'Django + MySQL',
  },
  {
    img: p10,
    title: 'Boutique Portal',
    desc: 'Developed a Django-based boutique platform with admin, staff, and user dashboards, featuring authentication, product browsing, cart functionality, order management, and customer feedback system.',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Django', 'MySQL' ],
    github: 'https://github.com/Ponmani1021/Boutique_Web',
    badge: 'Django + MySQL',
  },
  {
    img: p11,
    title: 'Car Wash Booking Portal',
    desc: 'Developed a Django-based car wash booking platform with admin, staff, and user dashboards, featuring authentication, vehicle selection, booking management, delivery time updates, and user profile management system.',
    stack: ['HTML5', 'CSS3', 'Bootstrap', 'Django', 'MySQL'],
    github: 'https://github.com/Ponmani1021/Car_Wash_Booking_Portal',
    badge: 'Django + MySQL',
  },
//   {
//     img: p11,
//     title: 'Task Management App',
//     desc: 'Kanban-style task manager with drag-and-drop, team collaboration, deadlines and REST API backend.',
//     stack: ['React', 'Flask', 'MongoDB'],
//     live: '#',
//     github: '#',
//     badge: 'React + Flask',
//   },
//   {
//     img: p12,
//     title: 'Student Portal',
//     desc: 'Academic portal with course enrollment, attendance tracking, grade management and role-based access control.',
//     stack: ['React', 'Django', 'MySQL', 'REST API'],
//     live: '#',
//     github: '#',
//     badge: 'React + Django',
//   },
];

function ProjectCard({ project, index }) {
  const ref = useReveal({ delay: index * 100, threshold: 0.1 });
  return (
    <div ref={ref} className={`${styles.card} reveal`}>
      {/* Screenshot */}
      <div className={styles.imgWrap}>
        <img src={project.img} alt={project.title} className={styles.img} />
        <div className={styles.imgOverlay} />
        {project.badge && <span className={styles.badge}>{project.badge}</span>}
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.desc}</p>

        <div className={styles.stack}>
          {project.stack.map(t => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>

        <div className={styles.btns}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              🔗 Live Demo
            </a>
          )}
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.btnOutline}>
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ label, desc, projects }) {
  const headRef = useReveal({ threshold: 0.1 });
  return (
    <div className={styles.category}>
      <div ref={headRef} className={`${styles.catHead} reveal`}>
        <h2 className={styles.catLabel}>{label}</h2>
        <p className={styles.catDesc}>{desc}</p>
      </div>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const titleRef = useReveal({ rootMargin: '100px' });

  return (
    <section className={styles.projects}>
      <div ref={titleRef} className={`${styles.pageTitle} reveal`}>
        <h1>Projects</h1>
        <p>A selection of things I've designed, built, and shipped</p>
      </div>

      <CategorySection
        label="🎨 Frontend Projects"
        desc="UI-focused builds — animations, landing pages, and polished interfaces."
        projects={frontend}
      />

      <CategorySection
        label="⚙️ Full Stack Projects"
        desc="End-to-end applications with HTML, CSS, BS and JS as frontends and Django / Flask backends."
        projects={fullstack}
      />
    </section>
  );
}
