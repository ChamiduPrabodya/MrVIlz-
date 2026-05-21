const ongoingProjects = [
  {
    title: "Cleaner Seabeds For Sri Lanka - Diving Expedition",
    progress: 46,
    theme: "seabed"
  },
  {
    title: "Nurdle Free Lanka",
    progress: 84,
    theme: "nurdle"
  }
];

export default function OngoingProjectsSection() {
  return (
    <section className="ongoing-projects-section">
      <div className="container">
        <div className="ongoing-projects-head">
          <h2>Ongoing Projects</h2>
        </div>

        <div className="ongoing-projects-grid">
          {ongoingProjects.map((project) => (
            <article
              className={`ongoing-project-card ongoing-project-card-${project.theme}`}
              key={project.title}
            >
              <div className="ongoing-project-art" aria-hidden="true">
                {project.theme === "seabed" ? (
                  <div className="project-art-seabed">
                    <div className="seabed-cup" />
                    <span>Cleaner Seabeds for Sri Lanka</span>
                  </div>
                ) : (
                  <div className="project-art-nurdle">
                    <span className="nurdle-title">nurdle free lanka</span>
                    <span className="nurdle-subtitle">
                      volunteer campaign against plastic pellets
                    </span>
                  </div>
                )}

                <div className="ongoing-project-titlebar">
                  <h3>{project.title}</h3>
                </div>
              </div>

              <div className="project-progress-block">
                <div className="project-progress-head">
                  <strong>Project Progress</strong>
                </div>
                <div
                  className="project-progress-track"
                  aria-label={`${project.title} project progress`}
                >
                  <span
                    className="project-progress-fill"
                    style={{ width: `${project.progress}%` }}
                  >
                    Complete
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
