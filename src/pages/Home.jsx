
import { me } from "../assets";
import "../styles/home.css";
import { backendSkills, frontEndSkills } from "../data/data";
import Slide from "react-reveal/Slide";
import Tada from "react-reveal/Tada";
import Spin from "react-reveal/Spin";

const Home = () => {
  return (
    <div className="home">
      <div className="home__Header">
        <Tada>
          <h3 className="home__HeaderTitle">
            Hi! <br /> Am Chebesi EdyLionel Awah
          </h3>
        </Tada>
      </div>
      <div className="home__body">
        <Spin>
          <div className="home__image">
            <img src={me} alt="" />
          </div>
        </Spin>
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
        <Spin>
          <div className="home__skillsHeader">
            <h3 className="home__skillsHeaderTitle">My Skills</h3>
          </div>
        </Spin>
        <div className="home__skillsBox">
          <div className="home__skillsType">
            <div className="home__skillsHeader">
              <h3 className="home__skillsTypeHeader">Frontend</h3>
            </div>
            <div className="home__skills">
              {frontEndSkills.map(({ title, badge }, index) => (
                <Spin key={index}>
                  <div className="home__skill">
                    <div>{badge}</div>
                    <h5 className="home__skillTitle">{title}</h5>
                  </div>
                </Spin>
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
                <Spin key={index}>
                  <div className="home__skill">
                    <div>{badge}</div>
                    <h5 className="home__skillTitle">{title}</h5>
                  </div>
                </Spin>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
