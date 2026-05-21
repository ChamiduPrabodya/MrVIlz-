const aboutStats = [
  { value: "04", label: "major content zones" },
  { value: "01", label: "shared visual language" },
  { value: "100%", label: "full-page redesign focus" }
];

const priorities = [
  "A layout that feels more immersive and memorable from the first second",
  "A cleaner structure for project updates, trust signals, and community activity",
  "A better bridge between attention, participation, and long-term growth"
];

export default function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="eyebrow">Story</p>
          <h2>The redesign gives Mr Vilz a clearer public identity.</h2>
          <p className="section-copy">
            The page now has a stronger narrative line: open with emotion, show
            a real mission, organize the work into recognizable programs, and
            close with a confident invitation to connect.
          </p>

          <div className="about-points">
            {priorities.map((item) => (
              <div className="about-point" key={item}>
                <span className="highlight-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-panel">
          <p className="card-label">Redesign snapshot</p>
          {aboutStats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="about-quote">
            <p>
              Built to feel more cinematic, more grounded, and more ready for a
              real audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
