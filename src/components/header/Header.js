import React from "react";
import CTA from "./CTA.js";
import Myimage from "../../assets/my_image_edit.png";
import "./header.css";
import HeaderSocials from "./HeaderSocials.js";

const Header = () => {
  return (
    <header>
      <div id="home" className="container container_header">
        <h5>Hello I'm</h5>
        <h1>VEDANT GUPTA</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="me__image" src={Myimage} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
