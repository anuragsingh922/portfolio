import React, { useEffect } from "react";
import Profile from "../../assets/images/optimized/Anurag-2.webp";
import css from "./About.module.css"; // Importing the CSS module
import VanillaTilt from "vanilla-tilt";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from("#about", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        start: "top 80%",
        trigger: "#about",
        stagger: 0.8,
      },
    });
    gsap.from("#name", {
      opacity: 0,
      y: -50,
      delay: 0.6,
      ease: "bounce.inOut",
      scrollTrigger: {
        start: "top 70%",
        trigger: "#name",
        stagger: 0.8,
      },
    });

    gsap.from("#resume" , {
      x : 1000,
      opacity : 0,
      scale : 0,
      duration : 1,
      scrollTrigger : {
        trigger : "#resume",
        start : "top 100%",
        end : "top 60%",
      }
    })
  });

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });
  });
  return (
    <section className={css.about} id="about" style={{ overflow: "hidden" }}>
      <h2 className={css.heading}>
        <i className="fas fa-user-alt"></i> About{" "}
        <span style={{ color: "yellow" }}>Me</span>
      </h2>

      <div className={css.row}>
        <div className={css.image}>
          <img
            draggable="false"
            className={`${css.tilt} tilt`}
            src={Profile}
            alt=""
          />
        </div>
        <div className={css.content}>
          <h3 id="name">I'm Anurag</h3>
          <span className={css.tag}>
            <p id="name">Full Stack Developer</p>
          </span>

          <p id="name">
            I am a passionate Full Stack Developer with a strong foundation in
            the MERN stack, currently in my final year of B.Tech at IIIT
            Sonepat. My journey in software development has been fueled by
            hands-on experience through internships, where I've worked on
            cutting-edge projects in AI, web development, and cloud computing.
            I'm eager to leverage my skills in dynamic environments,
            contributing to innovative solutions and continuing to grow as a
            developer. Open to opportunities in software development, AI
            integration, and cloud infrastructure.
          </p>

          <div className={css.boxContainer} id="name">
            <div className={css.box}>
              <p>
                <span>Email: </span> anuragjadu922@gmail.com
              </p>
              <p>
                <span>Location: </span> Gurgoan, India - 122105
              </p>
            </div>
          </div>

          <div className={css.resumebtn} id="resume">
            <a
              href="https://drive.google.com/file/d/1JPpsOLqJm0XM3fG2_ikYYv7tVB5AhH-3/view?usp=drive_link"
              target="_blank"
              className={css.btn}
              rel="noreferrer"
              style={{ backgroundColor: "green" }}
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
