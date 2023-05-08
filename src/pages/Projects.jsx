import React from "react";
import { projectsData } from "../data/data";
import "../styles/projects.css";
import Spin from "react-reveal/Spin";

const Portfolio = () => {
  return (
    <div className="projects">
      <div className="projects__Box">
        <div className="projects__Header">
          <Spin>
          <h3 className="projects__HeaderTitle">
            My Recent <br /> Projects
          </h3>
          </Spin>
        </div>
        <div className="container projects__container">
          {projectsData.map((resource, index) => (
            <Spin right key={index}>
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
            </Spin>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
