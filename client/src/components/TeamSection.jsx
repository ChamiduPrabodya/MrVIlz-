import { motion } from "motion/react";
import "./TeamSection.css";

const teamMembers = [
  {
    name: "Nadeesha",
    position: "Founder & Creative Director",
    image: "/images/nadeesha1.JPG"
  },
  {
    name: "Chamidu",
    position: "Co-Founder & Head of Media Production",
    image: "/images/chamidu.jpeg"
  },
  {
    name: "Pabodha",
    position: "Head of Operations Manager & Brand Partnerships",
     image: "/images/paboda.jpeg"
    
  },
  {
    name: "Nethmina",
    position: "Co-Host & Head of Creative Producer",
     image: "/images/nethmina.JPG"
    
  }
];

export default function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The Team
        </motion.h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.article
              className="team-card"
              key={member.name}
              initial={{
                opacity: 0,
                y: 90,
                scale: 0.85,
                filter: "blur(10px)"
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)"
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="team-image-wrap"
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="team-placeholder">
                    <span>{member.initial}</span>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="team-info"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.25
                }}
                viewport={{ once: true }}
              >
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
