import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import resume from '../../assets/Ponmaniresume1.1.pdf';

const navLinks = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact',  id: 'contact' },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [theme, setTheme]         = useState('dark');
  const [activeId, setActiveId]   = useState('home');

  // theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // active section on scroll
  useEffect(() => {
    const handler = () => {
      const offsets = navLinks.map(l => {
        const el = document.getElementById(l.id);
        return { id: l.id, top: el ? el.getBoundingClientRect().top : Infinity };
      });
      const current = offsets.filter(o => o.top <= 120).at(-1);
      if (current) setActiveId(current.id);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Brand */}
        <button className={styles.brand} onClick={() => handleNav('home')}>
          <img src={logo} alt="logo" className={styles.brandLogo} />
          Ponmani
        </button>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`${styles.navLink} ${activeId === link.id ? styles.active : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ✕
        </button>

        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <ul className={styles.sidebarLinks}>
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`${styles.navLink} ${activeId === link.id ? styles.active : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button className={styles.contactBtn} onClick={() => handleNav('contact')}>
              Download CV
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}
