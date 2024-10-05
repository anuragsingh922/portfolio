import { react, useEffect, useState, useCallback } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import VanillaTilt from "vanilla-tilt";
import emailjs from "emailjs-com";
import ParticlesBg from "particles-bg";
// import { motion } from "framer-motion";
// import { EarthCanvas } from "./assets/canvas/Earth.jsx";
// import { slideIn } from "./utils/motion";

import ClgImg from "./assets/images/educat/iiitlogo.jpg";
import Profile from "./assets/images/Anurag-2.jpg";
import Banner from "./assets/images/banner.png";
import Connect from "./assets/images/connect.jpg";
import PortfolioIMG from "./assets/images/projects/portfolio.jpg";
import Darwin from "./assets/images/projects/darwin.jpg";
import LinkedinScraper from "./assets/images/projects/linkedin.jpg";
import PhotoMate from "./assets/images/projects/photoCloud.jpg";

function App() {
  const skills = [
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "ExpressJS",
      icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
    {
      name: "Redux",
      icon: "https://img.icons8.com/color/48/000000/redux.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "MaterialUI",
      icon: "https://img.icons8.com/color/48/000000/material-ui.png",
    },
    {
      name: "TailwindCSS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
    },
    {
      name: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      name: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Netlify",
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
    },
    {
      name: "Git VCS",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
    },
  ];

  useEffect(() => {
    // Handle menu toggle
    const menu = document.getElementById("menu");
    const navbar = document.querySelector(".navbar");

    const handleMenuClick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("nav-toggle");
    };

    menu.addEventListener("click", handleMenuClick);

    const handleScrollOrLoad = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("nav-toggle");

      // const scrollTopBtn = document.getElementById("scroll-top");
      // if (window.scrollY > 60) {
      //   scrollTopBtn.classList.add("active");
      // } else {
      //   scrollTopBtn.classList.remove("active");
      // }

      document.querySelectorAll("section").forEach((section) => {
        const height = section.offsetHeight;
        const offset = section.offsetTop - 200;
        const top = window.scrollY;
        const id = section.getAttribute("id");

        if (id) {
          // Check if id exists
          if (top > offset && top < offset + height) {
            document
              .querySelectorAll(".navbar ul li a")
              .forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(
              `.navbar a[href="#${id}"]`
            );
            if (activeLink) {
              // Check if the activeLink exists
              activeLink.classList.add("active");
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollOrLoad);
    window.addEventListener("load", handleScrollOrLoad);

    // Smooth scrolling
    document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // ScrollReveal
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

    srtop.reveal(".home .content h3", { delay: 200 });
    srtop.reveal(".home .content p", { delay: 200 });
    // other ScrollReveal animations...

    // VanillaTilt
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 15,
    });

    return () => {
      // Cleanup listeners on component unmount
      menu.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleScrollOrLoad);
      window.removeEventListener("load", handleScrollOrLoad);
    };
  }, []);

  useEffect(() => {
    // Create a new Typed instance
    const typed = new Typed(".typing_text", {
      strings: [
        "frontend development",
        "backend development",
        "web designing",
        "Genrative AI",
        "web development",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    const phone = form.elements.phone.value;

    if (!name || !email || !message) {
      console.log("Please add Name, Email, and Message");
      return;
    }

    const templateParams = {
      to_name: "Anurag",
      from_name: name,
      message: message,
      contact: phone,
      email: email,
      reply_to: email,
    };

    console.log("Template Params: ", templateParams, "L-6F2K6MBD7OWq0LJMzj0");

    if (
      !process.env.REACT_APP_SERVICE_KEY ||
      !process.env.REACT_APP_TEMPLETID ||
      !process.env.REACT_APP_PUBLIC_KEY
    ) {
      console.log("Please After Some Time.");
      return;
    }

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLETID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!");
          console.log(response.status);
          console.log(response.text);
          form.reset(); // Clear form after submission
        },
        (err) => {
          console.log("FAILED...");
          console.log(err);
        }
      );
  };
  return (
    <>
      <header>
        <a href="/" class="logo">
          <span style={{ color: "green" }}>Anurag</span>
        </a>

        <div id="menu" class="fas fa-bars"></div>
        <nav class="navbar">
          <ul>
            <li>
              <a class="active" href="#home">
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
      </header>
      <section class="home" id="home">
        {/* 
      "color"
"ball"
"cobweb"
"polygon"
"square"
*/}
        <ParticlesBg type="cobweb" bg={true} />
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src={Profile}
            alt=""
            style={{ height: "500px", maxHeight: "500px" }}
          />
        </div>
        <div class="content">
          <h2>
            Hi,
            <br /> I'm Anurag{" "}
            <span style={{ color: "red", opacity: "0.7" }}>Singh</span>
          </h2>
          <p>
          I’m passionate about <span className="typing_text"></span>
          </p>
          <div class="socials">
            <ul class="social-icons">
              <a
                href="https://www.linkedin.com/in/anuragsingh922"
                class="fab fa-linkedin"
                aria-label="LinkedIn"
                target="_blank"
              ></a>
              <a
                href="https://github.com/anuragsingh922"
                class="fab fa-github"
                aria-label="GitHub"
                target="_blank"
              ></a>
              <a
                href="mailto:anuragjadu922@gmail.com"
                class="fas fa-envelope"
                aria-label="Mail"
                target="_blank"
              ></a>
              <a
                class="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/anuragsingh922"
                target="_blank"
              >
                <i class="fab fa-instagram" target="_blank"></i>
              </a>
              <a
                href="https://wa.me/9896424841"
                class="fab fa-telegram-plane"
                aria-label="Telegram"
                target="_blank"
              ></a>
            </ul>
          </div>
        </div>
      </section>
      <section class="about" id="about" style={{ overflow: "hidden" }}>
        <h2 class="heading">
          <i class="fas fa-user-alt"></i> About <span style={{color:"yellow"}}>Me</span>
        </h2>

        <div class="row">
          <div class="image">
            <img draggable="false" class="tilt" src={Profile} alt="" />
          </div>
          <div class="content">
            <h3>I'm Anurag</h3>
            <span class="tag">Full Stack Developer</span>

            <p>
              I am a passionate Full Stack Developer with a strong foundation in
              the MERN stack, currently in my final year of B.Tech at IIIT
              Sonepat. My journey in software development has been fueled by
              hands-on experience through internships, where I've worked on
              cutting-edge projects in AI, web development, and cloud computing.
              I'm eager to leverage my skills in dynamic environments,
              contributing to innovative solutions and continuing to grow as a
              developer. Open to opportunities in software development, AI
              integration, and cloud infrastructure.{" "}
            </p>

            <div class="box-container">
              {/* <div class="box">
              <p><span> age: </span> 20</p>
              <p><span> phone : </span> +91 XXX-XXX-XXXX</p>
            </div>  */}
              <div class="box">
                <p>
                  <span> </span> anuragjadu922@gmail.com
                </p>
                <p>
                  <span> </span> Gurgoan, India - 122105
                </p>
              </div>
            </div>

            <div class="resumebtn">
              <a
                href="https://drive.google.com/file/d/1JPpsOLqJm0XM3fG2_ikYYv7tVB5AhH-3/view?usp=drive_link"
                target="_blank"
                class="btn"
                style={{ backgroundColor: "green" }}
              >
                <span>Resume</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="education_exp">
      <section class="education" id="education">
        <h1 class="heading">
          <i class="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <p class="qoute">
          The function of education is to teach one to think intensively and to
          think critically. Intelligence plus character—that is the goal of true
          education
          <span
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
            }}
          >
            — Martin Luther King Jr.
          </span>
        </p>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img draggable="false" src={ClgImg} alt="" />
            </div>
            <div class="content">
              <h3>
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p>Indian Institute Of Information Technology Sonepat | IIIT'S</p>
              <h4>2021-2025 | Pursuing</h4>
            </div>
          </div>
        </div>
      </section>
      <section class="experience" id="experience">
        <h2 class="heading">
          <i class="fas fa-briefcase"></i> E
          <span style={{ color: "blue" }}>xp</span>
          <span style={{ color: "black" }}>erience</span>{" "}
        </h2>

        <div class="timeline">
          <div class="container right">
            <div class="content">
              <div class="tag">
                <h2>IVY</h2>
              </div>
              <div class="desc">
                <h3>Full Stack Web Developer | Internship</h3>
                <p>July 2024 - August 2024</p>
              </div>
            </div>
          </div>

          <div class="container left">
            <div class="content">
              <div class="tag">
                <h2>AI Calls</h2>
              </div>
              <div class="desc">
                <h3>Full Stack Web Developer | Part Time</h3>
                <p>Dec 2023 - Jan 2024</p>
              </div>
            </div>
          </div>

          <div class="container right">
            <div class="content">
              <div class="tag">
                <h2>Accintia</h2>
              </div>
              <div class="desc">
                <h3>Full Stack Web Developer | Internship</h3>
                <p>June 2023 - August 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="morebtn">
          <a href="/experience" class="btn">
            <span>View All</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div> */}
      </section>
      <section class="skills" id="skills">
        <h2 class="heading">
          <i class="fas fa-laptop-code" style={{color:"black"}}></i>{" "}
          <span style={{ color: "aqua" }}>Skills &</span> <span>Abilities</span>
        </h2>

        <div className="container">
          <div className="row" id="skillsContainer">
            {skills.map((item, index) => (
              <div
                className="bar"
                key={index}
                style={{ backgroundColor: "lightgrey", color: "black" }}
              >
                <div className="info">
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      <section class="work" id="work">
        <h2 class="heading">
          <i class="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>

        <div class="box-container">
          <div class="box tilt">
            <img draggable="false" src={PortfolioIMG} alt="" />
            <div class="content">
              <div class="tag">
                <h3>Portfolio Website</h3>
              </div>
              <div class="desc">
                <p>
                  Personal portfolio website. Don't need much info about it,
                  just scroll down. You're here only!
                </p>
                <div class="btns">
                  <a href="#home" class="btn" target="_blank">
                    <i class="fas fa-eye"></i> View
                  </a>
                  <a
                    href="https://github.com/anuragsingh922/portfolio"
                    class="btn"
                    target="_blank"
                  >
                    Code <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box tilt">
            <img draggable="false" src={PhotoMate} alt="" />
            <div class="content">
              <div class="tag">
                <h3>
                  PhotoCloud - A MERN-Based Photo Storage and Management
                  Application
                </h3>
              </div>
              <div class="desc">
                <p>
                  Developed a web application similar to Google Photos,
                  utilizing the MERN stack (MongoDB, Express.js, React.js, and
                  Node.js). MongoDB is used as the backend database to
                  efficiently handle large volumes of image data and metadata,
                  ensuring seamless performance and scalability.
                </p>
                <div class="btns">
                  <a
                    href="https://github.com/anuragsingh922/photos-frontend"
                    class="btn"
                    target="_blank"
                  >
                    Code <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box tilt">
            <img draggable="false" src={LinkedinScraper} alt="" />
            <div class="content">
              <div class="tag">
                <h3>LinkedIn Scraper - Automated Targeted Networking Tool</h3>
              </div>
              <div class="desc">
                <p>
                  Developed a LinkedIn scraper using the MERN stack (MongoDB,
                  Express.js, React.js, and Node.js) designed to streamline the
                  process of finding and connecting with potential targets. The
                  application allows users to select a job title and location to
                  identify companies with available job openings. It then
                  locates employees at those companies and automates the process
                  of sending connection requests with personalized notes.
                  Additionally, users can choose to send emails directly to the
                  employees if desired, enhancing networking efficiency and
                  outreach.
                </p>
                <div class="btns">
                  <a
                    href="https://github.com/anuragsingh922/linkedin-scraper-frontend"
                    class="btn"
                    target="_blank"
                  >
                    Code <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="box tilt">
            <img draggable="false" src={Darwin} alt="" />
            <div class="content">
              <div class="tag">
                <h3>Darwin - AI Software Engineering Intern</h3>
              </div>
              <div class="desc">
                <p>
                  Associated with Accintia As part of my ongoing role at
                  Accintia, I have been developing Darwin, an AI-powered
                  Software Engineering Intern designed to assist developers with
                  complex tasks. Leveraging large language models (LLMs), Darwin
                  is capable of understanding intricate human commands, breaking
                  them down into actionable steps, conducting thorough research,
                  and generating high-quality code across multiple programming
                  languages. Key Features: Code Comprehension: Understands and
                  navigates complex codebases and software architectures.
                  Efficient Problem-Solving: Skilled in managing changes,
                  updates, and bug fixes within software projects. Research &
                  Innovation: Conducts in-depth research and participates in
                  brainstorming sessions to generate innovative ideas.
                  Multi-Language Coding: Proficient in writing code in various
                  programming languages. Real-Time Debugging: Executes and
                  debugs code, utilizing online resources similarly to a human
                  software engineer. Development Roadmap: GitHub Issue
                  Resolution: Enhancing capabilities to track, manage, and
                  resolve GitHub issues efficiently. Model Pipeline
                  Construction: Developing features to create and optimize
                  machine learning model pipelines. Model Training: Implementing
                  functionalities for training models with diverse datasets to
                  improve accuracy and performance. Inspired by AI engineers
                  like Devin and Devika, Darwin aims to evolve into a fully
                  competent SDE/ML/AI Engineer. This project is an ongoing
                  effort within Accintia, reflecting my continued contributions
                  to the company's innovation and development.
                </p>
                <div class="btns">
                  <a
                    href="https://github.com/Cognation/darwin"
                    class="btn"
                    target="_blank"
                  >
                    Code <i class="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div class="viewall">
          <a href="/projects" class="btn">
            <span>View All</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div> */}
      </section>

      <section class="contact" id="contact">
        <h2 class="heading">
          <i class="fas fa-headset"></i>{" "}
          <span style={{ color: "white" }}>Get in</span>{" "}
          <span style={{ color: "yellow" }}>Touch</span>
        </h2>

        <div class="container">
          <div class="content">
            {/* <div class="image-box">
              <img
              draggable="false"
              src={Connect}
              alt=""
              style={{ borderRadius: "10px", width: "85%" }}
              />
            </div> */}
            <div class="image-box">
              {/* <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                style={{width:"400px" , height : "400px"}}
              >
                <EarthCanvas />
              </motion.div> */}
              <img
                draggable="false"
                src={Connect}
                alt=""
                style={{ borderRadius: "10px", width: "85%" }}
              />
            </div>

            <form id="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <div class="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i class="fas fa-user"></i>
                </div>
                <div class="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <i class="fas fa-comment-dots"></i>
                </div>
              </div>
              <div class="button-area">
                <button type="submit">
                  Submit <i class="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>Anurag's Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website.</p>
          </div>

          <div class="box">
            <h3>quick links</h3>
            <a href="#home">
              <i class="fas fa-chevron-circle-right"></i> home
            </a>
            <a href="#about">
              <i class="fas fa-chevron-circle-right"></i> about
            </a>
            <a href="#skills">
              <i class="fas fa-chevron-circle-right"></i> skills
            </a>
            <a href="#education">
              <i class="fas fa-chevron-circle-right"></i> education
            </a>
            <a href="#work">
              <i class="fas fa-chevron-circle-right"></i> work
            </a>
            <a href="#experience">
              <i class="fas fa-chevron-circle-right"></i> experience
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <p>
              {" "}
              <i class="fas fa-envelope"></i>anuragjadu922@gmail.com
            </p>
            <p>
              {" "}
              <i class="fas fa-map-marked-alt"></i>Gurgoan, India-122105
            </p>
            <div class="share">
              <a
                href="https://www.linkedin.com/in/anuragsingh922"
                class="fab fa-linkedin"
                aria-label="LinkedIn"
                target="_blank"
              ></a>
              <a
                href="https://github.com/anuragsingh922"
                class="fab fa-github"
                aria-label="GitHub"
                target="_blank"
              ></a>
              <a
                href="mailto:anuragjadu922@gmail.com"
                class="fas fa-envelope"
                aria-label="Mail"
                target="_blank"
              ></a>
              <a
                href="https://wa.me/9896424841"
                class="fab fa-telegram-plane"
                aria-label="Telegram"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </section>
      {/* <a
        href="#home"
        aria-label="ScrollTop"
        className="fas fa-angle-up"
        id="scroll-top"
      ></a> */}
    </>
  );
}

export default App;
