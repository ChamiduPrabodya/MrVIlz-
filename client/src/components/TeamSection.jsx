const teamMembers = [
  {
    name: "Maleesha Gunawardana",
    role: "Advocacy Lead",
    accent: "sunrise",
    initials: "MG"
  },
  {
    name: "Shalanka Ranjula",
    role: "Project Lead",
    accent: "coast",
    initials: "SR"
  },
  {
    name: "Bineth Rajapakse",
    role: "Volunteer Mobiliser",
    accent: "mist",
    initials: "BR"
  },
  {
    name: "Muditha Katuwawala",
    role: "Coordinator",
    accent: "reef",
    initials: "MK"
  },
  {
    name: "Amila Sumanapala",
    role: "Advisor",
    accent: "forest",
    initials: "AS"
  }
];

export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="container team-shell">
        <div className="team-heading">
          <h2>The Team</h2>
        </div>

        <div className="team-carousel">
          <button className="team-arrow" type="button" aria-label="Previous team members">
            &#8249;
          </button>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <div className={`team-photo team-photo-${member.accent}`}>
                  <div className="team-photo-glow" aria-hidden="true" />
                  <div className="team-photo-frame" aria-hidden="true">
                    <span>{member.initials}</span>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>

          <button className="team-arrow" type="button" aria-label="Next team members">
            &#8250;
          </button>
        </div>

        <div className="team-controls">
          <div className="team-dots" aria-hidden="true">
            <span />
            <span />
            <span className="is-active" />
            <span />
            <span />
          </div>

          <a className="team-button" href="#contact">
            View the entire team
          </a>
        </div>
      </div>
    </section>
  );
}
