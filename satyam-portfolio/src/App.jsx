
import "./App.css";

const technologies = [
  { name: "HTML5", icon: "5", className: "html" },
  { name: "CSS3", icon: "✳", className: "css" },
  { name: "JavaScript", icon: "JS", className: "javascript" },
  { name: "React", icon: "⚛", className: "react" },
  { name: "Git", icon: "◆", className: "git" },
  { name: "GitHub", icon: "⌘", className: "github" },
];

function App() {
  return (
    <main className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
         Mr Satyam
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="talk-button">
          Let's talk <span>→</span>
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Satyam
            <br />
            Kumar<span className="period">.</span>
          </h1>

          <p className="hero-description">
            A passionate Computer Science student building
            modern, responsive web experiences with clean
            code and creative ideas.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              More about me
            </a>
          </div>

          <div className="availability">
            <span className="status-dot"></span>
            Open to learning & opportunities
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-placeholder actual-photo">
            <img src="/profile.png" alt="Satyam Kumar" />
            </div>

            <div className="portrait-caption">
              <span>BASED IN INDIA</span>
              <span>WEB DEVELOPER IN PROGRESS</span>
            </div>
          </div>

          <div className="tech-stack" id="skills">
            {technologies.map((tech) => (
              <div className="tech-row" key={tech.name}>
                <span className="connector"></span>

                <div className="tech-badge">
                  <span className={`tech-icon ${tech.className}`}>
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="floating-note">
            <span className="note-symbol">{"</>"}</span>
            <div>
              <strong>Always learning</strong>
              <p>One project at a time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">ABOUT ME</p>
        <h2>Learning today. Building for tomorrow.</h2>
        <p>
          I'm Satyam Kumar, a third-year CSE diploma student
          at Subharti University, Meerut. I'm developing my
          frontend skills with HTML, CSS and JavaScript while
          exploring React and building practical projects.
          Coming to my strengths, I am a hardworking, dedicated, and quick-learning person. I always try to learn from my mistakes and improve myself. I believe that consistency, patience, and a positive attitude are important for achieving success.Apart from academics, I am always interested in learning new things and exploring new technologies.
        </p>
      </section>

      <section className="projects-section" id="projects">
        <p className="section-label">SELECTED WORK</p>
        <h2>Projects I'm building</h2>

        <div className="project-grid">
          <article className="project-card">
            <span className="project-number">01</span>
            <h3>TaskFlow</h3>
            <p>
              A task management interface designed to organise
              daily work and improve productivity.
            </p>
            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>
            <h3>Interactive Quiz App</h3>
            <p>
              An interactive quiz experience with questions,
              answer selection and score tracking.
            </p>
            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>
            <h3>Login Page</h3>
            <p>
              Just finished building this clean, responsive login screen from scratch! Focused on slick UI/UX and smooth user interaction.
            </p>
            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>
            <br></br>
            <a
             href="https://github.com/satyamkumar-crypto?tab=repositories"
             target="_blank"
             rel="noreferrer"
          >
              View on GitHub <span>↗</span>
          </a>
          </article>

          <article className="project-card">
            <span className="project-number">04</span>
            <h3>Mini Cricket Game</h3>
            <p>
              Just built an interactive cricket simulator from scratch! Tap "Bowl" to deliver the ball, and time your click on "Swing Bat" to hit 4s and 6s. It features real-time scoreboard tracking, commentary updates, and local storage to save your highest score!
            </p>
            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>
          </article>

          <article className="project-card">
            <span className="project-number">05</span>
            <h3>Calculator</h3>
            <p>
              Math meets clean layout.Check out this responsive calculator project crafted with HTML, CSS, and vanilla JavaScript.
            </p>
            <span className="project-tech">
              HTML · CSS · JavaScript
            </span>
            <br></br>
            <a
             href="https://github.com/satyamkumar-crypto?tab=repositories"
             target="_blank"
             rel="noreferrer"
          >
              View on GitHub <span>↗</span>
          </a>
          </article>
        </div>
      </section>

      <section className="education-section" id="education">
        <p className="section-label">EDUCATION</p>
        
<h2>My learning journey</h2>

<div className="education-timeline">
  <div className="education-card">
    <span className="education-icon">10th</span>

    <div>
      <h3>Secondary School Examination (Class 10th)</h3>
      <p>Bihar School Examination Board (BSEB), Bihar</p>
      <span>Secondary Education</span>
    </div>
  </div>

  <div className="education-card">
    <span className="education-icon">CSE</span>

    <div>
      <h3>Diploma in Computer Science & Engineering</h3>
      <p>Subharti University, Meerut</p>
      <span>Third Year · Currently Studying</span>
    </div>
  </div>
</div>

      </section>

      <footer className="contact-section" id="contact">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Have an opportunity in mind?</h2>
        <p>
          I'm interested in connecting, learning and working
          on meaningful web development projects.
        </p>
        <a
          href="mailto:satyamkumar074883@gmail.com"
          className="primary-button"
        >
          Email me <span>↗</span>
        </a>

        <div className="footer-bottom">
          <a href="#home" className="logo">
            Satyam Kumar.
          </a>
          <span>Designed & built with React</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
