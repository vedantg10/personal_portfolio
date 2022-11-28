import React, { useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";

const Nav = () => {
  const [activeTab, updateActiveTab] = useState("#home");
  return (
    <nav>
      <a
        href="#home"
        className={activeTab === "#home" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#home");
        }}
      >
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a
        href="#about"
        className={activeTab === "#about" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#about");
        }}
      >
        <AiOutlineUser></AiOutlineUser>
      </a>
      <a
        href="#experience"
        className={activeTab === "#experience" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#experience");
        }}
      >
        <BiBook></BiBook>
      </a>
      <a
        href="#portfolio"
        className={activeTab === "#portfolio" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#portfolio");
        }}
      >
        <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen>
      </a>
      <a
        href="#testimonial"
        className={activeTab === "#testimonial" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#testimonial");
        }}
      >
        <BiMessageSquareDetail></BiMessageSquareDetail>
      </a>
      <a
        href="#contact"
        className={activeTab === "#contact" ? "active" : ""}
        onClick={() => {
          updateActiveTab("#contact");
        }}
      >
        <TbMessages></TbMessages>
      </a>
    </nav>
  );
};

export default Nav;
