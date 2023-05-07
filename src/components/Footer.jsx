import React from "react";
import "../styles/footer.css";
import { sidebarInfo } from "../data/data";
import { Link } from "react-router-dom";
import { cv } from "../assets";
import { FaDownload } from "react-icons/fa";
 import ReactWhatsapp from "react-whatsapp";
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        {sidebarInfo.map(({ link, icon }, index) => (
          <Link to={link} className="footer__item" key={index}>
            <h5 className="footer__itemTitle"></h5>
            <h5>{icon}</h5>
          </Link>
        ))}
        <div className="footer__item">
          <h5 className="footer__itemTitle">WhatApp</h5>
          {/* <ReactWhatsapp number="+237677972126" message="Hello Blacky!!!" /> */}
        </div>
        <a href={cv} download className="sidebar__item" rel="noreferrer">
          <FaDownload color="#52bbe5" size={35} />
        </a>
      </div>
      <p className="footer__copyright">
        {" "}
        All Rights Reserved &copy;Chebesi E. Awah 2023
      </p>
    </div>
  );
};

export default Footer;
