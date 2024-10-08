import React, { useState } from "react";
import styles from "./Projects.module.css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      name: "Web AI Calling System",
      short: "WC",
      videoURL: "https://youtu.be/FE1i8V7Sqgc",
      description:
        "A smart and hauman like calling syatem which can talk to you like a real huaman being and can be specific to your prompt so that you can talk to him on a specific topic. The calling system used Dynamic EoS for checking wheather user want tp speak anything or user have will stop after that specific word which will improve user experience and make the AI faster because of not waiting for detecting the silience.",
      details:
        "This project integrates IoT devices for real-time monitoring of soil moisture and temperature. It uses Node.js for backend processing and React for the user dashboard.",
      status: "In Progress",
    },
    {
      id: 2,
      name: "PhotoCloud",
      short: "PC",
      website: "https://photocloud922.vercel.app",
      videoURL: "https://youtu.be/FE1i8V7Sqgc",
      description:
        "A web app for storing you photos and videos on the mongoDB bucket using gfridFS.",
      details:
        "Features include real-time chat, task assignments, and a project timeline view. Built with React, Redux, and Firebase.",
      status: "Completed",
    },
    {
      id: 3,
      name: "Vision GPT",
      short: "VG",
      videoURL: "https://youtu.be/FE1i8V7Sqgc",
      description:
        "A crypto portfolio management tool with real-time tracking.",
      details:
        "Users can track their cryptocurrency investments, view detailed statistics, and analyze portfolio performance. This project uses React for frontend and GraphQL for data fetching.",
      status: "In Review",
    },
    {
      id: 4,
      name: "LinkedIn Scraper",
      short: "LS",
      videoURL: "https://youtu.be/FE1i8V7Sqgc",
      description:
        "A travel planning application to organize trips and itineraries.",
      details:
        "Supports multi-destination planning, budget tracking, and shared trip management. Implemented using React Native for cross-platform compatibility.",
      status: "In Progress",
    },
    {
      id: 5,
      name: "speakr.cloud",
      short: "SC",
      videoURL: "https://youtu.be/FE1i8V7Sqgc",
      description: "A responsive landing page template for startups.",
      details:
        "The landing page includes sections for product features, testimonials, and a contact form. Developed with HTML, CSS, and vanilla JavaScript.",
      status: "Completed",
    },
    {
      id: 6,
      name: "WebInsight",
      short: "WI",
      videoURL:
        "https://drive.google.com/file/d/10uOGC7JImnJaKubCGK-LIKYbJnhXs9N7/view?usp=sharing",
      description:
        "An advanced web scraping and search tool leveraging BM25 for optimized information retrieval.",
      details:
        "WebInsight allows users to perform efficient searches across the web, extracting relevant passages from multiple sources. With its powerful BM25 ranking algorithm, it ensures users receive the most pertinent results quickly. The application features user-friendly API endpoints, enabling seamless integration into various applications. Built using Flask for the backend and supported by libraries like BeautifulSoup for scraping and Rank-BM25 for relevance ranking, WebInsight is designed for high performance and scalability.",
      api: "https://webscraper-a392.onrender.com",
      parameters: "query(String)",
      status: "Completed",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Projects</h2>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${
                selectedProject.id === project.id ? styles.active : ""
              }`}
              onClick={() => handleProjectClick(project)}
            >
              <div className={styles.projectIcon}>
                <span>{project.short}</span>
              </div>
              <div className={styles.projectName}>{project.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>{selectedProject.name}</h2>
        {selectedProject.videoURL && (
          <video
            src={selectedProject.videoURL}
            controls
            autoPlay
            muted
            className={styles.videoURL}
          ></video>
        )}
        <p className={styles.detailsDescription}>
          {selectedProject.description}
        </p>

        {selectedProject.website && (
          <div className={`${styles.website}`}>
            <label htmlFor="website">Website : </label>
            <a href="https://photocloud922.vercel.app">https://photocloud922.vercel.app</a>
          </div>
        )}

        {selectedProject.api && (
          <>
            <lable>Api : {selectedProject.api}</lable>
            <p> Parameters : 1. query (String)</p>
          </>
        )}
        <div className={styles.detailsContent}>
          <p>{selectedProject.details}</p>
          <p>
            <strong>Status:</strong> {selectedProject.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
