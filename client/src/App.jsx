const services = [
  {
    id: "01",
    title: "Social Media Strategy",
    text: "Build a consistent presence across TikTok, Instagram, Facebook, and YouTube with clear campaigns and stronger brand direction."
  },
  {
    id: "02",
    title: "Content Production",
    text: "Turn beach cleaning, planting events, and community stories into professional content that people remember and share."
  },
  {
    id: "03",
    title: "Campaign Promotion",
    text: "Launch focused awareness campaigns that connect followers to real environmental impact."
  }
];

const projects = [
  {
    name: "Beach Cleaning Program",
    description: "Community clean-up coverage, awareness posts, and visual storytelling that keeps the mission visible."
  },
  {
    name: "One Follower = One Plant",
    description: "A signature campaign that connects social growth to a direct and meaningful environmental promise."
  },
  {
    name: "Volunteer Event Coverage",
    description: "Photo, video, and highlight content from on-ground events that builds trust and local engagement."
  }
];

const channels = ["TikTok", "Instagram", "Facebook", "YouTube"];

const values = [
  "Mission-led branding with a clear environmental purpose",
  "Professional communication for partners, followers, and volunteers",
  "A one-page foundation that can grow into a full website platform"
];

export default function App() {
  return (
    <div className="site-shell" id="home">
      <header className="header">
        <div className="container nav-bar">
          <a className="brand" href="#home">
            <img src="/mrvilz-logo.jpeg" alt="Mr Vilz logo" />
            <div>
              <strong>Mr Vilz</strong>
              <span>Social Impact Media Group</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Environmental storytelling with purpose</p>
              <h1>A professional digital home for a mission that cleans beaches and plants for the future.</h1>
              <p className="hero-text">
                Mr Vilz combines social media, community action, and environmental
                campaigns into one clear brand. This one-page website introduces
                the mission with stronger structure, cleaner design, and a more
                professional presence.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#services">
                  Explore services
                </a>
                <a className="button button-secondary" href="#projects">
                  View projects
                </a>
              </div>

              <div className="channel-row">
                {channels.map((channel) => (
                  <span key={channel}>{channel}</span>
                ))}
              </div>
            </div>

            <div className="hero-side">
              <div className="mission-panel">
                <p className="panel-label">Signature campaign</p>
                <h2>One follower = one plant</h2>
                <p>
                  A simple promise that turns audience growth into measurable
                  environmental action.
                </p>
              </div>

              <div className="logo-panel">
                <img src="/mrvilz-logo.jpeg" alt="Mr Vilz brand mark" />
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <article>
              <strong>4</strong>
              <span>primary social platforms</span>
            </article>
            <article>
              <strong>1</strong>
              <span>clear environmental mission</span>
            </article>
            <article>
              <strong>100%</strong>
              <span>community-focused storytelling</span>
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Services</p>
                <h2>Built for a serious public-facing brand, not just a social page.</h2>
              </div>
              <p className="section-copy">
                These services position Mr Vilz as a professional media and impact
                brand while keeping the environmental mission at the center.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="card service-card" key={service.title}>
                  <span className="card-index">{service.id}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="projects">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Projects</p>
                <h2>Environmental work that deserves strong presentation.</h2>
              </div>
              <p className="section-copy">
                The website should show real activity, real campaigns, and real
                outcomes in a polished and trustworthy way.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="card project-card" key={project.name}>
                  <div className="project-accent" />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2>A one-page website that introduces the brand with clarity and credibility.</h2>
              <p className="section-copy">
                This homepage is designed to feel more professional and structured.
                It tells people who Mr Vilz is, what the group does, and why the
                mission matters before we move into bigger features.
              </p>
            </div>

            <div className="about-panel">
              {values.map((value) => (
                <div className="about-item" key={value}>
                  <span className="about-dot" />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-banner">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Ready to build the full website after this front page.</h2>
                <p className="section-copy">
                  Next we can add uploads, event pages, impact counters, image
                  galleries, and a full management dashboard.
                </p>
              </div>

              <a className="button button-primary" href="#home">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
