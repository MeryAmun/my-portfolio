import { useState, useEffect } from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { sidebarInfo } from "../data/data.js";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { RiWhatsappLine } from "react-icons/ri";
import ReactWhatsapp from "react-whatsapp";

const Sidebar = () => {
  const [number, setNumber] = useState("237677972126");

  useEffect(() => {
    if (number !== "237677972126") {
      setNumber(null);
    }
  }, [number]);
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        {sidebarInfo.map(({ link, icon }, index) => (
          <Slide key={index}>
            <Link to={link} className="sidebar__item">
              {/* <h5 className="sidebar__itemTitle"></h5> */}
              <h5>{icon}</h5>
            </Link>
          </Slide>
        ))}
        <Slide>
          <div className="sidebar__item">
            <ReactWhatsapp
              number={number}
              message={`Hello Chebesi, Message from your portfolio site`}
              style={{
                borderColor: "none",
                backgroundColor: "none",
                outlineColor: "none",
              }}
            >
              <RiWhatsappLine
                color="#52bbe5"
                size={35}
                // className="whatsapp__button"
              />
            </ReactWhatsapp>{" "}
          </div>
        </Slide>
        <Slide>
          <a href={cv} download className="sidebar__item" rel="noreferrer">
            <FaDownload color="#52bbe5" size={35} />
            <h5 className="sidebar__itemTitle">Resume</h5>
          </a>
        </Slide>
      </div>
    </div>
  );
};

export default Sidebar;
