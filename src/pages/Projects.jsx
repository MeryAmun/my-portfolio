import  { useState, useEffect} from 'react'
import "../styles/projects.css";
import { Flip } from "react-awesome-reveal";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [data, setData] = useState([])


useEffect(() => {
  const fetchData = async () => {  
    await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => (response?.json()
    )).then((data) => {
    setData(data?.projects)
    })
    }
    fetchData()
}, [])

  useEffect(() => {
   const newData = data?.filter((item) => (
    item?.type?.match(activeTab)
   ))
   setFilteredProjects(newData)
  }, [activeTab,data])
  console.log(filteredProjects)
  
  return (
    <div className="projects">
      <div className="projects__Box">
        <div className="projects__Header">
          <Flip>
          <h3 className="projects__HeaderTitle">
            My Recent  Projects
          </h3>
          </Flip>
        </div>
        <div className="projects__box">
        <div className="project__tabs" data-test="tab-container">
          <button className={
            activeTab === 'frontend' ? "liveTab" : "btn"
          } onClick={() => setActiveTab("frontend")}>
            Front-End
          </button>
          <button className={
            activeTab === 'firebase' ? 'liveTab' : "btn"
          } onClick={() => setActiveTab("firebase")}>
            Full Stack (Firebase)
          </button>
          <button className={
            activeTab === 'mern' ? 'liveTab' : "btn"
          } onClick={() => setActiveTab("mern")}>
            Full Stack (MERN)
          </button>
          <button className={
            activeTab === 'mobile' ? 'liveTab ': "btn"
          } onClick={() => setActiveTab("mobile")}>
           Mobile
          </button>
          <button className={
            activeTab === 'web3' ? 'liveTab ': "btn"
          } onClick={() => setActiveTab("web3")}>
           Web3.0
          </button>
  
        </div>
        <div className="container projects__container">
          {filteredProjects?.map((resource, index) => (
            <Flip right key={index}>
              <article className="project__item">
                <div className="project__item-image">
                  <img src={resource.image} alt="" />
                </div>
                <h3>{resource.title}</h3>
                <div className="project__item-cta">
                  {
                    resource.github !== "" && (
                      <a
                    href={resource.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                    )
                  }
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
            </Flip>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
