const projects = [
  {
    title: "Volunteer Cleanup Days",
    tag: "Join the next wave",
    text: "Guide visitors into the next cleanup event with stronger invitation language and a more obvious sign-up moment.",
    metric: "Open for signups",
    action: "Reserve volunteer spaces"
  },
  {
    title: "Youth Awareness Sessions",
    tag: "Teach and inspire",
    text: "Present school sessions and youth outreach as a clear public program that belongs on the homepage, not only on social media.",
    metric: "Community outreach",
    action: "Book a school session"
  },
  {
    title: "Partner And Sponsor Support",
    tag: "Build with us",
    text: "Give organizations and donors a more polished entry point to back campaigns, contribute funding, and amplify the mission.",
    metric: "Funding pathway",
    action: "Start a partnership"
  }
];

export default function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Participation</p>
            <h2>Visitors can now see where they fit much faster.</h2>
          </div>
          <p className="section-copy">
            This section now does more than describe ideas. It frames distinct
            paths for volunteering, outreach, and sponsorship so the next step
            feels concrete.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-tag">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-footer">
                <span className="project-metric">{project.metric}</span>
                <span className="project-action">{project.action}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
