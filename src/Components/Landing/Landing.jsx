import React, { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import css from "./Landing.module.css";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";
import ScrollReveal from "scrollreveal";
import bars from "../../assets/SVG/hamburg.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [istoggle, setstoggle] = useState(false);
  useEffect(() => {
    // Create a new Typed instance for typing animation
    const typed = new Typed(".typing_text", {
      strings: [
        "frontend development",
        "backend development",
        "web designing",
        "Generative AI",
        "web development",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Cache elements to avoid accessing them multiple times
    const menu = document.getElementById("menu");
    const navbar = document.querySelector(".navba");
    const scrollTopBtn = document.getElementById("scroll-top");

    // Ensure elements are available before adding event listeners
    if (!menu || !navbar) return;

    // Function to handle menu click
    const handleMenuClick = () => {
      if (menu && navbar) {
        // Check for elements again for safety
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("nav-toggle");
      }
    };

    // Function to handle scroll and load events
    const handleScrollOrLoad = () => {
      if (menu && navbar) {
        // Check for elements again
        menu.classList.remove("fa-times");
        navbar.classList.remove("nav-toggle");
      }

      // Only handle the scroll button if it exists
      if (scrollTopBtn) {
        if (window.scrollY > 60) {
          scrollTopBtn.classList.add("active");
        } else {
          scrollTopBtn.classList.remove("active");
        }
      }

      // Handle active class toggle on navbar links
      document.querySelectorAll("section").forEach((section) => {
        const height = section.offsetHeight;
        const offset = section.offsetTop - 200;
        const top = window.scrollY;
        const id = section.getAttribute("id");

        if (id && top > offset && top < offset + height) {
          document
            .querySelectorAll(".navbar ul li a")
            .forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
          activeLink?.classList.add("active");
        }
      });
    };

    // Add event listeners only if elements exist
    menu.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleScrollOrLoad);
    window.addEventListener("load", handleScrollOrLoad);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // ScrollReveal animations
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

    srtop.reveal(".home .content h3", { delay: 200 });
    srtop.reveal(".home .content p", { delay: 200 });
    srtop.reveal(".home .content .btn", { delay: 300 });
    // Additional ScrollReveal animations can go here

    // Initialize VanillaTilt for elements with the "tilt" class
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

    // Cleanup function to remove event listeners and instances
    return () => {
      menu.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleScrollOrLoad);
      window.removeEventListener("load", handleScrollOrLoad);
    };
  }, []);

  useGSAP(() => {
    const tlheader = gsap.timeline();

    tlheader.from(
      [
        "#logoText",
        "#hhome",
        "#habout",
        "#hedu",
        "#hexp",
        "#hskills",
        "#hwork",
        "#hcontact",
      ],
      {
        y: -50,
        opacity: 0,
        stagger: 0.1,
      }
    );

    gsap.from("#nameheading", {
      x: -1000,
      scale: 0,
    });
    gsap.from("#nametext", {
      x: -1000,
      delay : 0.6,
      scale: 0,
    });

    const tl = gsap.timeline({ repeat: -1 });

    tl.from(".hi", {
      color: "black",
      duration: 1,
      stagger: 0.3,
    });
    tl.to(".hi", {
      color: "orange",
      duration: 1,
      stagger: 0.3,
    });

    tl.to(".anuragname", {
      color: "red",
      duration: 3,
      stagger: 0.3,
    });

    tl.to(".hi", {
      color: "black",
      duration: 1,
      stagger: 0.3,
    });
    tl.to(".singh", {
      color: "red",
      opacity: 0.9,
      duration: 1,
      stagger: 0.3,
    });
    tl.to(".anuragname", {
      color: "orange",
      duration: 3,
      stagger: 0.3,
    });
    tl.to(".singh", {
      opacity: 0.8,
      duration: 1,
      stagger: 0.3,
    });

    const iconTimeline = gsap.timeline({ repeat: -1, duration: 2 });

    iconTimeline.to(
      ["#linkedicon", "#giticon", "#mailicon", "#instaicon", "#whatsappicon"],
      {
        color: "white",
        stagger: 0.3,
      }
    );

    iconTimeline.to(
      ["#whatsappicon", "#instaicon", "#mailicon", "#giticon", "#linkedicon"],
      {
        color: "#00fb82",
        stagger: 0.3,
      }
    );

    return () => {
      tl.kill();
      tlheader.kill();
      iconTimeline.kill();
    };
  });

  return (
    <div id="landing">
      <header className={css.header}>
        <a href="/" className={css.logo} id="logoText">
          <span>Anurag</span>
        </a>

        <div
          className={css.navMobile}
          onClick={() => {
            setstoggle((prv) => !prv);
          }}
        >
          <img src={bars} alt="bars"></img>
        </div>
        {istoggle && (
          <nav className={`${css.navbarr} navba`}>
            <ul
              onClick={() => {
                setstoggle(false);
              }}
            >
              <li>
                <a className={css.active} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#work">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}

        {!istoggle && (
          <nav className={`${css.navbar} navba`}>
            <ul>
              <li id="hhome">
                <a className={css.active} href="#home">
                  Home
                </a>
              </li>
              <li id="habout">
                <a href="#about">About</a>
              </li>
              <li id="hedu">
                <a href="#education">Education</a>
              </li>
              <li id="hexp">
                <a href="#experience">Experience</a>
              </li>
              <li id="hskills">
                <a href="#skills">Skills</a>
              </li>
              <li id="hwork">
                <a href="#work">Projects</a>
              </li>
              <li id="hcontact">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <section className={css.home} id="home">
        <ParticlesBg type="cobweb" bg={true} />
        <div className={css.content}>
          <h2 id="nameheading">
            <span className="hi">Hi,</span>
            <br /> <span className="anuragname"> I'm Anurag </span>{" "}
            <span style={{ color: "red", opacity: "0.7" }} className="singh">
              Singh
            </span>
          </h2>
          <p id="nametext">
            I’m passionate about{" "}
            <span className={`${css.typing_text} typing_text`}></span>{" "}
          </p>
          <div className={css.socials}>
            <ul className={css.social_icons}>
              <a
                href="https://www.linkedin.com/in/anuragsingh922"
                className={css.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                id="linkedicon"
              >
                <i className="fab fa-linkedin" target="_blank"></i>
              </a>
              <a
                href="https://github.com/anuragsingh922"
                className={css.github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                id="giticon"
              >
                <i className="fab fa-github" target="_blank"></i>
              </a>
              <a
                href="mailto:anuragjadu922@gmail.com"
                className={css.mail}
                aria-label="Mail"
                target="_blank"
                rel="noreferrer"
                id="mailicon"
              >
                <i className="fas fa-envelope" target="_blank"></i>
              </a>
              <a
                className={css.instagram}
                aria-label="Instagram"
                href="https://www.instagram.com/anuragsingh922"
                target="_blank"
                rel="noreferrer"
                id="instaicon"
              >
                <i className="fab fa-instagram" target="_blank"></i>
              </a>
              <a
                href="https://wa.me/9896424841"
                className={css.whatsapp}
                aria-label="Telegram"
                target="_blank"
                rel="noreferrer"
                id="whatsappicon"
              >
                <i className="fab fa-whatsapp" target="_blank"></i>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
