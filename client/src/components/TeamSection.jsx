import { useRef, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import "./TeamSection.css";

const teamMembers = [
  {
    id: "nadeesha",
    name: "Nadeesha",
    role: "Founder & Creative Director",
    image: "/images/nadeesha.jpeg",
    bio: "Nadeesha leads the creative direction of MrVilz, shaping the brand voice, visual identity, and the overall storytelling direction behind the team.",
    highlights: ["Creative direction", "Brand vision", "Campaign storytelling"]
  },
  {
    id: "chamidu",
    name: "Chamidu",
    role: "Co-Founder & Head of Media Production",
    image: "/images/chamidu.jpeg",
    bio: "Chamidu drives the media production side of the team, coordinating shoots, visual execution, and content built to connect nature stories with people.",
    highlights: ["Media production", "Field content", "Visual execution"]
  },
  {
    id: "pabodha",
    name: "Pabodha",
    role: "Head of Operations Manager & Brand Partnerships",
    image: "/images/pabodha.svg",
    bio: "Pabodha manages operations and partnerships, helping the team stay organized while building strong relationships that support projects and collaborations.",
    highlights: ["Operations", "Partnerships", "Team coordination"]
  },
  {
    id: "nethmin",
    name: "Nethmin",
    role: "Co-Host & Head of Creative Producer",
    image: "/images/nethmin.svg",
    bio: "Nethmin supports the creative production process, helping turn ideas into polished outputs while keeping the energy of the team visible in every project.",
    highlights: ["Creative production", "Hosting", "Content planning"]
  }
];

export default function TeamSection() {
  const trackRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  function scrollCards(direction) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const amount = Math.min(track.clientWidth * 0.82, 420);
    track.scrollBy({
      left: direction * amount,
      behavior: "smooth"
    });
  }

  return (
    <section className="team-scroll-section" id="team">
      <div className="container team-scroll-shell">
        <div
          ref={ref}
          className={`team-scroll-heading scroll-reveal ${isVisible ? "is-visible" : ""}`}
        >
          <h2>The Team</h2>
        </div>

        <div className={`team-scroll-frame scroll-reveal ${isVisible ? "is-visible" : ""}`}>
          <button
            className="team-scroll-arrow"
            type="button"
            aria-label="Scroll team left"
            onClick={() => scrollCards(-1)}
          >
            &#8249;
          </button>

          <div className="team-scroll-track" ref={trackRef}>
            {teamMembers.map((member) => (
              <article
                className="team-scroll-card"
                key={member.id}
                onClick={() => setSelectedMember(member)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedMember(member);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="team-scroll-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>

          <button
            className="team-scroll-arrow"
            type="button"
            aria-label="Scroll team right"
            onClick={() => scrollCards(1)}
          >
            &#8250;
          </button>
        </div>
      </div>

      {selectedMember ? (
        <div
          className="team-detail-overlay"
          onClick={() => setSelectedMember(null)}
          role="presentation"
        >
          <article
            className="team-detail-card"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="team-detail-media">
              <img src={selectedMember.image} alt={selectedMember.name} />
            </div>

            <div className="team-detail-copy">
              <p className="team-detail-label">Team member</p>
              <h3>{selectedMember.name}</h3>
              <p className="team-detail-role">{selectedMember.role}</p>
              <p className="team-detail-bio">{selectedMember.bio}</p>

              <div className="team-detail-highlights">
                {selectedMember.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <button
                className="team-detail-close"
                type="button"
                onClick={() => setSelectedMember(null)}
              >
                Close
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
