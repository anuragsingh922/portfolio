import React from "react";
import Darwin from "../../assets/images/projects/darwin.jpg";
import LinkedinScraper from "../../assets/images/projects/linkedin.jpg";
import PhotoMate from "../../assets/images/projects/photoCloud.jpg";
import css from "./Work.module.css";
import { useNavigate } from "react-router-dom";

function Work() {
  const navigate = useNavigate();
  return (
    <section className={css.work} id="work">
      <h2 className={css.heading}>
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className={css.boxContainer}>
        {/* Project Card: PhotoMate */}
        <article className={`${css.box} ${css.tilt}`}>
          <img draggable="false" src={PhotoMate} alt="PhotoMate Project" />
          <div className={css.content}>
            <div className={css.tag}>
              <h3>
                PhotoCloud - A MERN-Based Photo Storage and Management
                Application
              </h3>
            </div>
            <div className={css.desc}>
              <p>
                Developed a web application similar to Google Photos, utilizing
                the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                MongoDB is used as the backend database to efficiently handle
                large volumes of image data and metadata, ensuring seamless
                performance and scalability.
              </p>
              <div className={css.btns}>
                <a
                  href="https://github.com/anuragsingh922/photos-frontend"
                  className={css.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <i className="fas fa-code"></i>
                </a>
                <a
                  href="https://photocloud922.vercel.app/"
                  className={css.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a Look
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Project Card: Darwin */}
        <article className={`${css.box} ${css.tilt}`}>
          <img draggable="false" src={Darwin} alt="Darwin Project" />
          <div className={css.content}>
            <div className={css.tag}>
              <h3>Darwin - AI Software Engineering Intern</h3>
            </div>
            <div className={css.desc}>
              <p>
                Associated with Accintia. As part of my ongoing role at
                Accintia, I have been developing Darwin, an AI-powered Software
                Engineering Intern designed to assist developers with complex
                tasks. Leveraging large language models (LLMs), Darwin is
                capable of understanding intricate human commands, breaking them
                down into actionable steps, conducting thorough research, and
                generating high-quality code across multiple programming
                languages.
              </p>
              <div className={css.btns}>
                <a
                  href="https://github.com/Cognation/darwin"
                  className={css.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </article>

        <article
          className={`${css.box} ${css.tilt} ${css.viewall}`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          <h3>
            <strong>All Projects</strong>
            <i className="fas fa-arrow-right"></i>
          </h3>
        </article>
      </div>

      {/* <div
        className={`${css.allprojects}`}
        onClick={() => {
          navigate("/projects");
        }}
      >
        View All
      </div> */}
    </section>
  );
}

export default Work;
