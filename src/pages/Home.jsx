import React from "react";
import { me } from "../assets";
import "../styles/home.css";
import { backendSkills, frontEndSkills } from "../data/data";

const Home = () => {
  return (
    <div className="home">
      <div className="home__body">
        <div className="home__image">
          <img src={me} alt="" />
        </div>
        <div className="home__about">
          <p className="home__aboutParagraph">
            I am a solution-oriented and problem solver with over three years of
            experience building and maintaining software and software
            architecture. Highly skilled in communication, collaboration, and
            technical documentation, and am very enthusiastic about creating
            high-performing web and mobile applications using the best
            technologies. The tech sector is vast and ever changing which
            requires constant learning and relearning. This is what is most
            exciting about Software Development I am interested in Music,
            Politics,Agriculture, Sports, and I look forward to connecting with
            you
          </p>
        </div>
      </div>
      <div className="home__skillsContainer">
        <div className="home__skillsHeader">
          <h3 className="home__skillsHeaderTitle">My Skills</h3>
        </div>
        <div className="home__skillsBox">
          <div className="home__skills">
            {frontEndSkills.map(({ title, badge }, index) => (
              <div className="home__skill" key={index}>
                <div>{badge}</div>
                <h5 className="home__skillTitle">{title}</h5>
              </div>
            ))}
            {/* {backendSkills.map(({ title, badge }, index) => (
              <div className="home__skill" key={index}>
                <span>{badge}</span>
                <h5 className="home__skillTitle">{title}</h5>
              </div>
            ))} */}
          </div>
          <div className="home__skills">
            {backendSkills.map(({ title, badge }, index) => (
              <div className="home__skill" key={index}>
                <span>{badge}</span>
                <h5 className="home__skillTitle">{title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
