import { motion } from "motion/react";

const ongoingProjects = [
  {
    title: "Clean Panadura Beach Sri Lanka",
    progress: 46,
    image: "/images/beach.PNG",
    visualLayout: "landscape",
    summary:
      "A coastal cleanup effort focused on reducing waste, protecting the shoreline, and building stronger community action around a cleaner beach environment.",
    highlights: ["Beach cleanup", "Volunteer action", "Coastal protection"]
  },
  {
    title: "10,000 Plants Donation Campaign",
    progress: 2,
    image: "/images/plant.PNG",
    visualLayout: "portrait",
    summary:
      "A greening campaign that encourages communities to plant, nurture, and protect young trees for a healthier and cleaner future.",
    highlights: ["Plant today", "Nurture growth", "Protect nature"]
  }
];

function OngoingProjectStep({ project, index }) {
  const isReversed = index % 2 === 1;
  const stepLabel = `${index + 1}`.padStart(2, "0");
  const sequenceDelay = index * 0.8;

  return (
    <article className={`ongoing-project-step ${isReversed ? "is-reversed" : ""}`}>
      <motion.div
        className="ongoing-project-panel ongoing-project-panel-copy"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.2 + sequenceDelay,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <span className="ongoing-project-step-badge">{stepLabel}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="project-detail-tags">
          {project.highlights.map((item, tagIndex) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.45 + sequenceDelay + tagIndex * 0.08
              }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="project-progress-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.72 + sequenceDelay
          }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="project-progress-head">
            <strong>Project Progress</strong>
            <span>{project.progress}%</span>
          </div>

          <div
            className="project-progress-track"
            aria-label={`${project.title} project progress`}
          >
            <motion.span
              className="project-progress-fill"
              initial={{ width: "0%" }}
              whileInView={{ width: `${project.progress}%` }}
              transition={{
                duration: 1.1,
                delay: 0.9 + sequenceDelay,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.25 }}
            >
              Complete
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      <div className="ongoing-project-step-axis" aria-hidden="true">
        <motion.span
          className="ongoing-project-step-node"
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.45,
            delay: 0.32 + sequenceDelay,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.25 }}
        />
      </div>

      <motion.div
        className="ongoing-project-panel ongoing-project-panel-visual"
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.78,
          delay: 0.38 + sequenceDelay,
          ease: [0.22, 1, 0.36, 1]
        }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className={`project-visual-card project-visual-card-${project.visualLayout}`}>
          <img
            className={`project-visual-image project-visual-image-${project.visualLayout}`}
            src={project.image}
            alt={project.title}
          />

        </div>
      </motion.div>
    </article>
  );
}

export default function OngoingProjectsSection() {
  return (
    <section className="ongoing-projects-section" id="projects">
      <div className="container">
        <motion.div
          className="ongoing-projects-head"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2>Ongoing Projects</h2>
        </motion.div>

        <div className="ongoing-projects-timeline">
          <div className="ongoing-projects-timeline-line" aria-hidden="true" />

          {ongoingProjects.map((project, index) => (
            <OngoingProjectStep
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
