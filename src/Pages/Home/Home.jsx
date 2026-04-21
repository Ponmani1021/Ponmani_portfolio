import styles from './Home.module.css';
import myself from '../../assets/images/me-1.jpeg';
import useReveal from '../../hooks/useReveal';

export default function Home() {
  const greetRef   = useReveal({ delay: 0,   rootMargin: '100px' });
  const nameRef    = useReveal({ delay: 100,  rootMargin: '100px' });
  const roleRef    = useReveal({ delay: 180,  rootMargin: '100px' });
  const bioRef     = useReveal({ delay: 260,  rootMargin: '100px' });
  const actionsRef = useReveal({ delay: 340,  rootMargin: '100px' });
  const socialsRef = useReveal({ delay: 420,  rootMargin: '100px' });
  const imageRef   = useReveal({ threshold: 0.2, rootMargin: '100px' });

  return (
    <section className={styles.hero}>
      {/* Left — Content */}
      <div className={styles.content}>
        <p ref={greetRef} className={`${styles.greeting} reveal`}>Hi, I'm</p>
        <h1 ref={nameRef} className={`${styles.name} reveal`}>Ponmani</h1>
        <h2 ref={roleRef} className={`${styles.role} reveal`}>
          <span className={styles.roleHighlight}>Web Developer</span>
        </h2>
        <p ref={bioRef} className={`${styles.bio} reveal`}>
         I turn ideas into functional, user-friendly products with a focus on clarity, performance, and real-world impact.
          Always aiming to build things that people actually find useful.
        </p>

        <div ref={actionsRef} className={`${styles.actions} reveal`}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnOutline}>Let's Talk</a>
        </div>

        <div ref={socialsRef} className={`${styles.socials} reveal`}>
          <a href="https://github.com/Ponmani1021" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ponmani-p-161242292/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.987V9h3.102v1.561h.044c.432-.818 1.487-1.681 3.061-1.681 3.274 0 3.878 2.155 3.878 4.958v6.614zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://wa.me/919944842412" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={styles.whatsapp}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right — Image */}
      <div ref={imageRef} className={`${styles.imageWrapper} reveal-right`}>
        <div className={styles.frameOuter}>
          <div className={styles.frame}>
            <span className={styles.cornerTL} />
            <span className={styles.cornerBR} />
            <img src={myself} alt="Ponmani" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
