
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { sidebarInfo } from "../data/data.jsx";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa";
import Spin from "react-reveal/Spin";
// import { RiWhatsappLine } from 'react-icons/ri'
// import ReactWhatsapp from "react-whatsapp";

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
{/* <Spin>
  <div className="sidebar__item">
  <RiWhatsappLine color='#52bbe5' size={35}/>
<ReactWhatsapp number="+237677972126" message="Hello Chebesi!!!" />
<h5 className="sidebar__itemTitle">WhatsApp</h5>
  </div>
</Spin> */}
        <Spin>
        <a href={cv} download className="sidebar__item" rel="noreferrer">
          <FaDownload color="#52bbe5" size={35} />
          <h5 className="sidebar__itemTitle">Resume</h5>
        </a>
        </Spin>
      </div>
    </div>
  );
};

export default Sidebar;
