import "./Nav.css";
import icon from "../Images/Madlibsicon 3.png";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src={icon}
            style={{ width: 170, height: 70 }}
            alt="MadLibs Icon"
          />
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
