import React from 'react'
import css from "./Experience.module.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Experience() {

  useGSAP(()=>{
    gsap.from("#experience" , {
      opacity : 0,
      y : 50,
      scrollTrigger : {
        start : "top 80%",
        trigger : "#experience",
      }
    })
  })
  return (
    <section className={css.experience} id="experience">
        <h2 className={css.heading}>
          <i className="fas fa-briefcase"></i> E
          <span className={css.primaryColor}>xp</span>
          <span className={css.secondaryColor}>erience</span>
        </h2>

        <div className={css.timeline}>
          {[
            { company: 'IVY', role: 'Full Stack Web Developer | Internship', period: 'July 2024 - August 2024' },
            { company: 'AI Calls', role: 'Full Stack Web Developer | Part Time', period: 'Dec 2023 - Jan 2024' },
            { company: 'Accintia', role: 'Full Stack Web Developer | Internship', period: 'June 2023 - August 2024' },
          ].map((exp, index) => (
            <div
              key={index}
              className={`${css.container} ${index % 2 === 0 ? css.right : css.left}`}
            >
              <div className={css.content}>
                <div className={css.tag}>
                  <h2>{exp.company}</h2>
                </div>
                <div className={css.desc}>
                  <h3>{exp.role}</h3>
                  <p>{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Experience