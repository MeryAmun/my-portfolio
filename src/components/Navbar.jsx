import React, { useState } from "react";
//import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";


import "../styles/navbar.css";
//import { NavSmall } from "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  var navbar = document.querySelector(".navbar");
  //   var navbarLink = document.querySelector(".navbar__link");

  window.onscroll = function () {
    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
      navbar.classList.add("scrolled");
      //       navbarLink.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      //       navbarLink.classList.remove("scrolled");
    }
  };
  return (
    <div className="navbar nav-colored">
      {/* <Link to="/">
        <img src={logo} alt="" className="navbar__logo" />
      </Link> */}
      <div className="navbar__links">
        <div className="navbar__link">
          <Link to="/">Home</Link>
        </div>
    
        <div className="navbar__link">
          <Link to="/projects">Projects</Link>
        </div>
        {/* <div className="navbar__link">
          <Link to="/about-us">About Us</Link>
        </div> */}
        <div className="navbar__link">
          <Link to="/contact">Contact</Link>
        </div>
        {/* <div className="navbar__link">
          <Link to="/blog">Blog</Link>
        </div> */}
        <HiOutlineMenuAlt2
          className="navbar__linksMenuIcon"
          onClick={() => setOpen(true)}
        />
      </div>

      {/* ===================FOR SMALL SCREENS   ================================ */}

      {/* <NavSmall show={open} onMouseLeave={() => setOpen(false)}>
       
        <div className="navbar__linksSmall">
          <div className="navbar__linkSmall">
            <Link to="/work">Work</Link>
          </div>
          <div className="navbar__linkSmall navbar__linkBoxSmall">
            <Link to="/services">Services</Link>
            <KeyboardArrowDownOutlinedIcon
              fontSize="large"
              className="navbar__linkIconSmall"
            />
          </div>
          <div className="navbar__linkSmall">
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="navbar__linkSmall">
            <Link to="/about-us">About Us</Link>
          </div>
          <div className="navbar__linkSmall">
            <Link to="/careers">Careers</Link>
          </div>
          <div className="navbar__linkSmall navbar__linkBoxSmall">
            <Link to="/tech">Tech</Link>
            <KeyboardArrowDownOutlinedIcon
              fontSize="large"
              className="navbar__linkIconSmall"
            />
          </div>
          <div className="navbar__linkSmall">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="navbar__linkBookingSmall">
            <button>
              <Link to="/start-a-project">BOOK A CALL</Link>
            </button>
          </div>
        </div>
        <div className="navbar__navbarSmallSocial">
          <FaTwitter className="navbar__socialIcon" />
          <FaFacebookF className="navbar__socialIcon" />
          <TiSocialLinkedin className="navbar__socialIcon" />
        </div>
      </NavSmall> */}
    </div>
  );
};

export default Navbar;
