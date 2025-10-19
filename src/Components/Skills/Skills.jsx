import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import css from "./Skills.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Skills() {
  // Updated: October 2025
  const skills = [
    // Languages
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", category: "Languages" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", category: "Languages" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python", category: "Languages" },
    { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus", category: "Languages" },
    { name: "SQL", icon: "https://img.icons8.com/ios-filled/50/database.png", category: "Languages" },

    // Frontend
    { name: "React", icon: "https://cdn.simpleicons.org/react", category: "Frontend" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs", category: "Frontend" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux", category: "Frontend" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5", category: "Frontend" },
    { name: "CSS3", icon: "data:image/jpeg;base64,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", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", category: "Frontend" },
    { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/radixui", category: "Frontend" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma", category: "Frontend" },

    // Backend & APIs
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs", category: "Backend & APIs" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express", category: "Backend & APIs" },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql", category: "Backend & APIs" },
    { name: "REST APIs", icon: "https://img.icons8.com/ios-glyphs/50/api.png", category: "Backend & APIs" },
    { name: "gRPC", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyG-oXcpjm8kfUFdTiWieppU8n44dnlR9MybMZSsKBgdQELLKY5VXtPRf4-_VJehmZy3p0YG_o-pAdL1wmZc_GS9Zr4F29GYd8gfDdWA", category: "Backend & APIs" },
    { name: "WebSockets", icon: "https://img.icons8.com/ios-glyphs/50/synchronize.png", category: "Backend & APIs" },
    { name: "Socket.io", icon: "https://cdn.simpleicons.org/socketdotio", category: "Backend & APIs" },
    { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx", category: "Backend & APIs" },

    // Datastores
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb", category: "Databases" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql", category: "Databases" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", category: "Databases" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", category: "Databases" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis", category: "Databases" },
    { name: "Qdrant", icon: "data:image/jpeg;base64,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", category: "Databases" },
    { name: "PgVector", icon: "https://cdn.simpleicons.org/postgresql", category: "Databases" },

    // Cloud & DevOps
    { name: "AWS", icon: "data:image/png;base64,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", category: "Cloud & DevOps" },
    { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud", category: "Cloud & DevOps" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker", category: "Cloud & DevOps" },
    { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions", category: "Cloud & DevOps" },
    { name: "Ubuntu", icon: "https://cdn.simpleicons.org/ubuntu", category: "Cloud & DevOps" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux", category: "Cloud & DevOps" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git", category: "Cloud & DevOps" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github", category: "Cloud & DevOps" },

    // AI / ML
    { name: "AI/ML", icon: "https://img.icons8.com/ios-filled/50/artificial-intelligence.png", category: "AI/ML" },
    { name: "Generative AI", icon: "https://img.icons8.com/ios-filled/50/brain.png", category: "AI/ML" },
    { name: "RAG", icon: "https://img.icons8.com/ios-filled/50/module.png", category: "AI/ML" },
    { name: "Voice AI", icon: "https://img.icons8.com/ios-filled/50/microphone.png", category: "AI/ML" },
    { name: "OpenAI API", icon: "https://cdn.simpleicons.org/openai", category: "AI/ML" },
    { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow", category: "AI/ML" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch", category: "AI/ML" },
    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain", category: "AI/ML" },
    { name: "Agno", icon: "https://img.icons8.com/ios-filled/50/flow-chart.png", category: "AI/ML" },

    // Tools & Others
    { name: "Swagger / OpenAPI", icon: "https://cdn.simpleicons.org/swagger", category: "Tools & Others" },
    { name: "API Documentation", icon: "https://img.icons8.com/ios-glyphs/50/document--v1.png", category: "Tools & Others" },
    { name: "Vonage", icon: "https://cdn.simpleicons.org/vonage", category: "Tools & Others" },
    { name: "Twilio", icon: "https://cdn.simpleicons.org/twilio", category: "Tools & Others" },
    { name: "Jira", icon: "https://cdn.simpleicons.org/jira", category: "Tools & Others" },
    { name: "Composio", icon: "https://img.icons8.com/ios-filled/50/settings-3.png", category: "Tools & Others" },
    { name: "OOPs", icon: "https://img.icons8.com/ios-filled/50/class.png", category: "Tools & Others" }
  ];


  useGSAP(() => {
    gsap.from("#skills", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        start: "top 80%",
        trigger: "#skills",
        markers: process.env.markers,
        stagger: 0.8,
      },
    });
  });

  return (
    <section className={css.skills} id="skills">
      <h2 className={css.heading}>
        <i className="fas fa-laptop-code" style={{ color: "black" }}></i>
        <span className={css.skillsHighlight}>Skills &</span>{" "}
        <span>Abilities</span>
      </h2>

      <div className={css.container}>
        <div className={css.row} id="skillsContainer">
          {skills.map((item) => (
            <div className={css.bar} key={item.id}>
              <div className={css.info}>
                <img
                  src={item.icon}
                  alt={item.name}
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = "https://img.icons8.com/ios-glyphs/50/block.png";
                  }}
                />
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PropTypes for type checking
Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Skills;
