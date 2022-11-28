import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/vedant-gupta-964448150"
        target="_target"
      >
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://github.com/vedantg10" target="_target">
        <BsGithub></BsGithub>
      </a>
      <a href="https://www.instagram.com/i_ved10/" target="_target">
        <BsInstagram></BsInstagram>
      </a>
    </div>
  );
};

export default HeaderSocials;
