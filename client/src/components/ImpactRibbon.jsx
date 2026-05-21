const storyCards = [
  {
    number: "01",
    title: "Clear opening signal",
    text: "The first screen now introduces a real mission, stronger emotion, and a clearer reason to stay on the page."
  },
  {
    number: "02",
    title: "Stronger visual depth",
    text: "Dark gradients, glow layers, glass cards, and section contrast give the site a more premium atmosphere."
  },
  {
    number: "03",
    title: "Better content rhythm",
    text: "Each section now plays a different role, so the page feels guided instead of repeating the same card pattern."
  },
  {
    number: "04",
    title: "Action-first structure",
    text: "The redesign keeps the mission visible while making volunteering, support, and next steps easier to notice."
  }
];

export default function ImpactRibbon() {
  return (
    <section className="impact-ribbon">
      <div className="container">
        <div className="ribbon-intro">
          <div className="ribbon-copy">
            <p className="eyebrow">What changed</p>
            <h2>The whole page now works like one connected visual story.</h2>
          </div>
          <p className="section-copy ribbon-text">
            Instead of only changing words and colors, this rebuild reshapes the
            background, pacing, card system, section hierarchy, and call-to-
            action flow so the site feels fully redesigned.
          </p>
        </div>

        <div className="story-grid">
          {storyCards.map((card) => (
            <article className="story-card" key={card.title}>
              <span className="story-number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <article className="spotlight-panel">
          <div>
            <p className="card-label">Visual experience</p>
            <h3>More atmosphere, more contrast, more identity.</h3>
          </div>
          <p>
            The page now combines a deep ocean backdrop, layered lighting, soft
            grid texture, and sharper content framing so every section feels
            part of the same world.
          </p>
        </article>
      </div>
    </section>
  );
}
