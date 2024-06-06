import "../styles/home.css";
import { backendSkills, frontEndSkills } from "../data/data";
import { Fade,Slide,Flip } from "react-awesome-reveal";

const Home = () => {
  return (
    <div className="home">
      <div className="home__Header">
      <Fade delay={1e3} cascade damping={1e-1}>
          <h3 className="home__HeaderTitle">
            Hi! Am Chebesi EdyLionel Awah
          </h3>
        </Fade>
      </div>
      <div className="home__body">
        <Slide bottom>
          <div className="home__about">
            <p className="home__aboutParagraph">
              I am a solution-oriented and problem solver with over three years
              of experience building and maintaining software and software
              architecture. Highly skilled in communication, collaboration, and
              technical documentation, and am very enthusiastic about creating
              high-performing web and mobile applications using the best
              technologies. The tech sector is vast and ever changing which
              requires constant learning and relearning. This is what is most
              exciting about Software Development I am interested in music,
              Politics,agriculture, soccer, and I look forward to connecting
              with you!
            </p>
          </div>
        </Slide>
      </div>
      <div className="home__skillsContainer">
        <Flip>
          <div className="home__skillsHeader">
            <h3 className="home__skillsHeaderTitle">My Skills</h3>
          </div>
        </Flip>
        <div className="home__skillsBox">
          <div className="home__skillsType">
            <div className="home__skillsHeader">
              <h3 className="home__skillsTypeHeader">Frontend</h3>
            </div>
            <div className="home__skills">
              {frontEndSkills.map(({ title, badge }, index) => (
                <Flip key={index}>
                  <div className="home__skill">
                    <div>{badge}</div>
                    <h5 className="home__skillTitle">{title}</h5>
                  </div>
                </Flip>
              ))}
            </div>
            {/* {backendSkills.map(({ title, badge }, index) => (
              <div className="home__skill" key={index}>
                <span>{badge}</span>
                <h5 className="home__skillTitle">{title}</h5>
              </div>
            ))} */}
          </div>
          <div className="home__skillsType">
            <div className="home__skillsHeader">
              <h3 className="home__skillsTypeHeader">Backend</h3>
            </div>
            <div className="home__skills">
              {backendSkills.map(({ title, badge }, index) => (
                <Flip key={index}>
                  <div className="home__skill">
                    <div>{badge}</div>
                    <h5 className="home__skillTitle">{title}</h5>
                  </div>
                </Flip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
