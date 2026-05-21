function HeroMedia({ hero }) {
  if (hero.mediaType === "video" && hero.mediaUrl) {
    return (
      <video
        className="hero-media"
        src={hero.mediaUrl}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      className="hero-media"
      src={hero.mediaUrl}
      alt={hero.mediaAlt}
    />
  );
}

export default function HeroSection({ hero, isLoading }) {
  return (
    <section className="hero-section" aria-busy={isLoading}>
      <div className="hero-media-shell">
        <HeroMedia hero={hero} />
        <div className="hero-overlay hero-overlay-strong" aria-hidden="true" />
        <div className="hero-overlay hero-overlay-soft" aria-hidden="true" />
      </div>

      <div className="container hero-content">
        <div className="hero-copy-block">
          <p className="hero-kicker">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-summary">{hero.subtitle}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>
            <a className="button button-secondary" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
            </a>
          </div>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#what-we-do" aria-label="Scroll to next section">
        <span />
      </a>
    </section>
  );
}
