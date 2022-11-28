import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        VEDANT
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"> Home </a>
        </li>
        <li>
          <a href="#about"> About </a>
        </li>
        <li>
          <a href="#experience"> Experience </a>
        </li>
        <li>
          <a href="#portfolio"> Portfolio </a>
        </li>
        <li>
          <a href="#testimonial"> Testimonials </a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <li>
          <a href="https://www.instagram.com/i_ved10/" target="_blank">
            <BsInstagram></BsInstagram>
          </a>
        </li>{" "}
        <li>
          <a
            href="https://www.linkedin.com/in/vedant-gupta-964448150"
            target="_blank"
          >
            <BsLinkedin></BsLinkedin>
          </a>
        </li>{" "}
      </div>
      <div className="footer__copyright">
        <small>&copy; Vedant portfolio. All rights are reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
