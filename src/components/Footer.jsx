
import "../styles/footer.css";
import { sidebarInfo } from "../data/data";
import { Link } from "react-router-dom";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa";
import Slide from "react-reveal/Slide";
import Spin from "react-reveal/Spin";
// import { RiWhatsappLine } from 'react-icons/ri'
// import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        {sidebarInfo.map(({ link, icon }, index) => (
          <Spin key={index}>
            <Link to={link} className="footer__item">
              <h5>{icon}</h5>
            </Link>
          </Spin>
        ))}
        <Slide top>
          <a href={cv} download className="sidebar__item" rel="noreferrer">
            <FaDownload color="#52bbe5" size={35} />
          </a>
        </Slide>
        {/* <Slide top>
         <div className="sidebar__item">
         <RiWhatsappLine color='#52bbe5' size={35}/>
<ReactWhatsapp number="+237677972126" message="Hello Chebesi!!!" />
<h5 className="sidebar__itemTitle">WhatsApp</h5>
         </div>
        </Slide> */}
      </div>
      <Slide top>
        <p className="footer__copyright">
          {" "}
          All Rights Reserved &copy;Chebesi E. Awah 2023
        </p>
      </Slide>
    </div>
  );
};

export default Footer;
