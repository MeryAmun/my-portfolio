import React from "react";
import { projectsData } from "../data/data";
import LightSpeed from "react-reveal/LightSpeed";
import "../styles/projects.css";

const Portfolio = () => {
  return (
    <div className="projects">
      <div className="projects__Box">
        <div className="projects__Header">
          <h3 className="projects__HeaderTitle">
            My Recent <br /> Projects
          </h3>
        </div>
        <div className="container projects__container">
          {projectsData.map((resource, index) => (
            <LightSpeed right key={index}>
              <article className="project__item">
                <div className="project__item-image">
                  <img src={resource.image} alt="" />
                </div>
                <h3>{resource.title}</h3>
                <div className="project__item-cta">
                  <a
                    href={resource.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={resource.live}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
                <p className="text-light">{resource.description}</p>
              </article>
            </LightSpeed>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
