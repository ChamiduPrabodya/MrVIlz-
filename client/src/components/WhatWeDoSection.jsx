const paragraphs = [
  "We are an organisation dedicated to the conservation and protection of the Sri Lankan coastal belt and marine life in all its forms. Striving to make a difference, by initiating educational programs, actively implementing projects, and taking part in meaningful environmental work, Mr Vilz uses its resources for the betterment of Sri Lanka's natural habitats.",
  "We consist of dedicated professionals and a growing team of active volunteers who continue to support awareness, restoration, and long-term public involvement.",
  "Would you like to be part of making a difference?"
];

export default function WhatWeDoSection() {
  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="what-we-do-backdrop" aria-hidden="true">
        <div className="what-we-do-rays" />
        <div className="what-we-do-depth" />
      </div>

      <div className="container what-we-do-content">
        <div className="what-we-do-copy">
          <h2>What Mr Vilz Does</h2>

          <div className="what-we-do-text">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="what-we-do-actions">
            <a className="button button-outline-water" href="#about">
              Learn More
            </a>
            <a className="button button-outline-water" href="#projects">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
