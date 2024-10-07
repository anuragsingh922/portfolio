import React from "react";
import css from "./Footer.module.css"; // Importing CSS module

function Footer() {
  return (
    <section className={css.footer}>
      <div className={css.boxContainer}>
        <div className={css.box}>
          <h3>Anurag's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website.</p>
        </div>

        <div className={css.box}>
          <h3>Quick Links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> Home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> About
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </a>
          <a href="#education">
            <i className="fas fa-chevron-circle-right"></i> Education
          </a>
          <a href="#work">
            <i className="fas fa-chevron-circle-right"></i> Work
          </a>
          <a href="#experience">
            <i className="fas fa-chevron-circle-right"></i> Experience
          </a>
        </div>

        <div className={css.box}>
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-envelope"></i> anuragjadu922@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> Gurgoan, India-122105
          </p>
          <div className={css.share}>
            <a
              href="https://www.linkedin.com/in/anuragsingh922"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://github.com/anuragsingh922"
              className="fab fa-github"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="mailto:anuragjadu922@gmail.com"
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://wa.me/9896424841"
              className="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <div className={css.credit}>
        <p>© 2023 Anurag Singh. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
