import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {

  var navbar = document.querySelector(".navbar");

  window.onscroll = function () {
    if (window.pageYOffset > 100) {
      navbar?.classList?.add("scrolled");
    } else {
      navbar?.classList?.remove("scrolled");
    }
  };
  return (
    <div className="navbar nav-colored">
      <div className="navbar__links">
        <div className="navbar__link">
          <Link to="/">Home</Link>
        </div>

        <div className="navbar__link">
          <Link to="/projects">Projects</Link>
        </div>

      </div>

      {/* ===================FOR SMALL SCREENS   ================================ */}
    </div>
  );
};

export default Navbar;
