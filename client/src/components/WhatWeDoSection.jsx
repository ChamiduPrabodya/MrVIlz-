import useScrollReveal from "../hooks/useScrollReveal";

const paragraphs = [
  "We are an organisation dedicated to the conservation and protection of the Sri Lankan coastal belt and marine life in all its forms. Striving to make a difference, by initiating educational programs, actively implementing projects, and taking part in meaningful environmental work, Mr Vilz uses its resources for the betterment of Sri Lanka's natural habitats.",
  "We consist of dedicated professionals and a growing team of active volunteers who continue to support awareness, restoration, and long-term public involvement.",
  "Would you like to be part of making a difference?"
];

export default function WhatWeDoSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="what-we-do-section" id="what-we-do">
      <div className="what-we-do-backdrop" aria-hidden="true">
        <div className="what-we-do-rays" />
        <div className="what-we-do-depth" />
      </div>

      <div className="container what-we-do-content">
        <div
          ref={ref}
          className={`what-we-do-copy scroll-reveal stagger-group ${isVisible ? "is-visible" : ""}`}
        >
          <h2 className="stagger-item" style={{ "--delay": "40ms" }}>
            What Mr Vilz Does
          </h2>

          <div className="what-we-do-text">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="stagger-item"
                style={{ "--delay": "140ms" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="what-we-do-actions stagger-item" style={{ "--delay": "240ms" }}>
            <a className="button button-outline-water" href="#team">
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
