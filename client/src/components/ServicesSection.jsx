const services = [
  {
    number: "01",
    title: "Beach And Coastal Cleanups",
    text: "Position cleanup work as a visible headline program with room for event details, recaps, and public participation.",
    points: ["Volunteer registration", "Event storytelling", "Impact recaps"]
  },
  {
    number: "02",
    title: "Marine Awareness Campaigns",
    text: "Give awareness work a stronger editorial feel so schools, families, and communities can follow the message clearly.",
    points: ["School outreach", "Digital campaign themes", "Community education"]
  },
  {
    number: "03",
    title: "Community Partnerships",
    text: "Create a polished place for sponsors, local partners, and collaborators to understand how they can support the mission.",
    points: ["Sponsor visibility", "Partner showcases", "Support pathways"]
  }
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Programs</p>
            <h2>Each program block now feels more like a real initiative.</h2>
          </div>
          <p className="section-copy">
            These cards are designed to read like active streams of work instead
            of placeholders, giving the homepage more credibility and more room
            to grow later.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-points">
                {service.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
