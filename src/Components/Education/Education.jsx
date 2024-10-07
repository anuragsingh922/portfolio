import React from 'react';
import ClgImg from "../../assets/images/educat/iiitlogo.jpg";
import css from "./Education.module.css";

function Education() {
  return (
      <section className={css.education} id="education">
        <h1 className={css.heading}>
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <p className={css.quote}>
          The function of education is to teach one to think intensively and to think critically.
          Intelligence plus character—that is the goal of true education
          <span className={css.citation}> — Martin Luther King Jr.</span>
        </p>

        <div className={css.boxContainer}>
          <div className={css.box}>
            <div className={css.image}>
              <img draggable="false" src={ClgImg} alt="IIIT Logo" />
            </div>
            <div className={css.content}>
              <h3>Bachelor of Technology in Computer Science and Engineering</h3>
              <p>Indian Institute Of Information Technology Sonepat | IIIT'S</p>
              <h4>2021-2025 | Pursuing</h4>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Education;
