
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { sidebarInfo } from "../data/data.jsx";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa";
import Spin from "react-reveal/Spin";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        {sidebarInfo.map(({ link, icon }, index) => (
          <Spin key={index}>
            <Link to={link} className="sidebar__item">
              {/* <h5 className="sidebar__itemTitle"></h5> */}
              <h5>{icon}</h5>
            </Link>
          </Spin>
        ))}
        <Spin></Spin>
        <a href={cv} download className="sidebar__item" rel="noreferrer">
          <FaDownload color="#52bbe5" size={35} />
          <h5 className="sidebar__itemTitle">Resume</h5>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
