import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import getprojects from "../../api/getProjects";
import bars from "../../assets/SVG/hamburgDown.svg";

const Projects = () => {
  const projects = getprojects();

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [showsidebar, setshowsidebar] = useState(true);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setshowsidebar(false);
    if (selectedProject && document.getElementById("title")) {
      document
        .getElementById("title")
        .scrollTo({
          top:0,
          behavior:"smooth",
        })
    }
  };
  return (
    <div className={styles.container} id="heading">
      <div className={`${!showsidebar && styles.hide} ${styles.sidebar}`}>
        <h2 className={styles.sidebarTitle}>Projects</h2>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.projectItem} ${
                selectedProject && selectedProject.id === project.id
                  ? styles.active
                  : ""
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

      {selectedProject && (
        <div className={`${styles.detailsSection} ${showsidebar && styles.hidee} `} id="title">
          <h2 className={styles.detailsTitle} id="projectName">
            {selectedProject.name}
          </h2>
          {!showsidebar && (
            <img
              src={bars}
              className={styles.hamburg}
              alt=""
              onClick={() => {
                setshowsidebar(true);
                const head = document.getElementById("heading");
                head.scrollIntoView({ behavior: "smooth" });
              }}
            />
          )}
          {selectedProject.videoURL && (
            <iframe
              className={styles.videoURL}
              src={selectedProject.videoURL}
              title="Web AI Calling"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: 0 }}
            ></iframe>
          )}

          {selectedProject.videoRef && (
            <div className={`${styles.website}`}>
              <label htmlFor="website">Demo : </label>
              <a
                href={selectedProject.videoRef}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.videoRef}
              </a>
            </div>
          )}
          {selectedProject.website && (
            <div className={`${styles.website}`}>
              <label htmlFor="website">Website : </label>
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.website}
              </a>
            </div>
          )}
          {selectedProject.gitrepo && (
            <div className={`${styles.website}`}>
              <label htmlFor="repo">Repository : </label>
              <a
                href={selectedProject.gitrepo}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.gitrepo}
              </a>
            </div>
          )}
          {selectedProject.gitrepoF && (
            <div className={`${styles.website}`}>
              <label htmlFor="repo">Repository Frontend : </label>
              <a
                href={selectedProject.gitrepoF}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.gitrepoF}
              </a>
            </div>
          )}
          {selectedProject.gitrepoB && (
            <div className={`${styles.website}`}>
              <label htmlFor="repo">Repository Backend : </label>
              <a
                href={selectedProject.gitrepoB}
                target="_blank"
                rel="noreferrer"
              >
                {selectedProject.gitrepoB}
              </a>
            </div>
          )}
          <p className={styles.detailsDescription}>
            <Markdown remarkPlugins={[remarkGfm]}>
              {selectedProject.description}
            </Markdown>
          </p>

          {selectedProject.api && (
            <div className={styles.api}>
              <lable>api : {selectedProject.api}</lable>
              <p> Parameters : 1. query (String)</p>
            </div>
          )}
          <div className={styles.detailsContent}>
            <h3 className={styles.highlight}>Features : </h3>
            <p>
              <Markdown remarkPlugins={[remarkGfm]}>
                {selectedProject.features}
              </Markdown>
            </p>
            {selectedProject.technical && (
              <>
                <h3 className={styles.highlight}>
                  Technical Specifications :{" "}
                </h3>
                <p>
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {selectedProject.technical}
                  </Markdown>
                </p>
              </>
            )}
            <p className={styles.status}>
              <strong>Status:</strong> {selectedProject.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
